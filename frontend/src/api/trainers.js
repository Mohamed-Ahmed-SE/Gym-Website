import api from './axios';

export const trainersAPI = {
    getAll: async () => {
        const response = await api.get('/trainers');
        return response.data;
    },

    getById: async (id) => {
        const response = await api.get(`/trainers/${id}`);
        return response.data;
    },

    create: async (trainerData) => {
        const response = await api.post('/trainers', trainerData);
        return response.data;
    },

    update: async (id, trainerData) => {
        const response = await api.put(`/trainers/${id}`, trainerData);
        return response.data;
    },
};
