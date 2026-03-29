import {
  createTour,
  deleteTour,
  getAllTours,
  getTourById,
  updateTour,
} from "#controllers";
import { Router } from "express";

export const tourRoutes = Router();

tourRoutes.post("/", createTour).get("/", getAllTours);
tourRoutes
  .get("/:id", getTourById)
  .put("/:id", updateTour)
  .delete("/:id", deleteTour);
