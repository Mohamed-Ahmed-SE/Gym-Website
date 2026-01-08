import api from './axios';

export const adminAPI = {
    getStats: async () => {
        const response = await api.get('/admin/stats');
        return response.data;
    },

    getUsers: async () => {
        const response = await api.get('/admin/users');
        return response.data;
    },

    updateUser: async (id, userData) => {
        const response = await api.put(`/admin/users/${id}`, userData);
        return response.data;
    },

    getAllBookings: async () => {
        const response = await api.get('/admin/bookings');
        return response.data;
    },

    getRevenue: async (period = 'month') => {
        const response = await api.get('/admin/revenue', {
            params: { period },
        });
        return response.data;
    },
};
