import api from './axios';

export const membershipsAPI = {
    getAll: async () => {
        const response = await api.get('/memberships');
        return response.data;
    },

    getById: async (id) => {
        const response = await api.get(`/memberships/${id}`);
        return response.data;
    },

    getUserMembership: async (userId) => {
        const response = await api.get(`/memberships/user/${userId}`);
        return response.data;
    },

    purchase: async (membershipId, paymentIntentId) => {
        const response = await api.post('/memberships/purchase', {
            membershipId,
            paymentIntentId,
        });
        return response.data;
    },

    cancel: async (id) => {
        const response = await api.put(`/memberships/cancel/${id}`);
        return response.data;
    },
};
