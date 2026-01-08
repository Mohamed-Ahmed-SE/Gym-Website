export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const formatTime = (time) => {
    return time; // Assuming time is already formatted as "HH:MM"
};

export const formatDateTime = (date, time) => {
    const dateStr = formatDate(date);
    return `${dateStr} at ${time}`;
};
