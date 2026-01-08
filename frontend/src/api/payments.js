import api from './axios';

export const paymentsAPI = {
    createIntent: async (amount, currency, type, membershipId, bookingId) => {
        const response = await api.post('/payments/create-intent', {
            amount,
            currency,
            type,
            membershipId,
            bookingId,
        });
        return response.data;
    },

    confirm: async (paymentIntentId, type, membershipId, bookingId) => {
        const response = await api.post('/payments/confirm', {
            paymentIntentId,
            type,
            membershipId,
            bookingId,
        });
        return response.data;
    },

    getUserPayments: async (userId) => {
        const response = await api.get(`/payments/user/${userId}`);
        return response.data;
    },
};
