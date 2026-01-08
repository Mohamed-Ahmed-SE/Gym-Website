import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (to, subject, html, text = '') => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to,
            subject,
            text,
            html,
        };

        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        throw new Error(`Email sending failed: ${error.message}`);
    }
};

export const sendBookingConfirmation = async (user, booking) => {
    const html = `
        <h2>Booking Confirmation</h2>
        <p>Hi ${user.name},</p>
        <p>Your booking has been confirmed!</p>
        <p><strong>Program:</strong> ${booking.program.title}</p>
        <p><strong>Date:</strong> ${new Date(booking.bookingDate).toLocaleDateString()}</p>
        <p><strong>Time:</strong> ${booking.bookingTime}</p>
        <p>We look forward to seeing you!</p>
    `;

    return await sendEmail(
        user.email,
        'Booking Confirmation - IronGym',
        html
    );
};

export const sendPaymentReceipt = async (user, payment) => {
    const html = `
        <h2>Payment Receipt</h2>
        <p>Hi ${user.name},</p>
        <p>Thank you for your payment!</p>
        <p><strong>Amount:</strong> $${payment.amount}</p>
        <p><strong>Date:</strong> ${new Date(payment.createdAt).toLocaleDateString()}</p>
        <p><strong>Transaction ID:</strong> ${payment.stripePaymentIntentId}</p>
    `;

    return await sendEmail(
        user.email,
        'Payment Receipt - IronGym',
        html
    );
};

export const sendMembershipConfirmation = async (user, membership) => {
    const html = `
        <h2>Membership Activated</h2>
        <p>Hi ${user.name},</p>
        <p>Your ${membership.name} membership has been activated!</p>
        <p>You now have access to all the features included in your plan.</p>
        <p>Welcome to IronGym!</p>
    `;

    return await sendEmail(
        user.email,
        'Membership Activated - IronGym',
        html
    );
};
