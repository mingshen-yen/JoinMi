import { Tour } from "#models";
import type { RequestHandler } from "express";

export const createTour: RequestHandler = async (req, res) => {
  const tour = await Tour.create(req.body);
  const populatedTour = await tour.populate("tourGuide");
  res.json(populatedTour);
};

export const getAllTours: RequestHandler = async (req, res) => {
  const tours = await Tour.find().populate("tourGuide");
  res.json(tours);
};

export const getTourById: RequestHandler = async (req, res) => {
  const tour = await Tour.findById(req.params.id).populate("tourGuide");
  if (!tour) {
    res.status(404).json({ message: "Tour not found" });
    return;
  }
  res.json(tour);
};

export const updateTour: RequestHandler = async (req, res) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).populate("tourGuide");
  if (!tour) {
    res.status(404).json({ message: "Tour not found" });
    return;
  }
  res.json(tour);
};

export const deleteTour: RequestHandler = async (req, res) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  if (!tour) {
    res.status(404).json({ message: "Tour not found" });
    return;
  }
  res.json({ message: "Tour deleted" });
};
