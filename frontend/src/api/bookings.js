import api from './axios';

export const bookingsAPI = {
    getAll: async () => {
        const response = await api.get('/bookings');
        return response.data;
    },

    getById: async (id) => {
        const response = await api.get(`/bookings/${id}`);
        return response.data;
    },

    create: async (bookingData) => {
        const response = await api.post('/bookings', bookingData);
        return response.data;
    },

    update: async (id, bookingData) => {
        const response = await api.put(`/bookings/${id}`, bookingData);
        return response.data;
    },

    cancel: async (id) => {
        const response = await api.delete(`/bookings/${id}`);
        return response.data;
    },

    checkAvailability: async (programId, date, time) => {
        const response = await api.get('/bookings/availability', {
            params: { programId, date, time },
        });
        return response.data;
    },
};
