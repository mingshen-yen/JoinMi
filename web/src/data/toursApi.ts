import { api } from "./axios";
import type { TourResponse } from "../types/Tour";

type TourApiPayload = TourResponse & { _id?: string };

const normalizeTour = (tour: TourApiPayload): TourResponse => ({
  ...tour,
  id: tour.id ?? tour._id ?? "",
});

export const TourApi = {
  getAllTours: async () => {
    const res = await api.get("/tours");
    return (res.data as TourApiPayload[]).map(normalizeTour);
  },
  getTourById: async (id: string) => {
    const res = await api.get(`/tours/${id}`);
    return normalizeTour(res.data as TourApiPayload);
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
