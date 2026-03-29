import { api } from "./axios";

export const TourApi = {
  getAllTours: async () => {
    const res = await api.get("/tours");
    return res.data;
  },
  getTourById: async (id: string) => {
    const res = await api.get(`/tours/${id}`);
    return res.data;
  },
  createTour: async (tourData: any) => {
    const res = await api.post("/tours", tourData);
    return res.data;
  },
  updateTour: async (id: string, tourData: any) => {
    const res = await api.put(`/tours/${id}`, tourData);
    return res.data;
  },
  deleteTour: async (id: string) => {
    const res = await api.delete(`/tours/${id}`);
    return res.data;
  },
};
