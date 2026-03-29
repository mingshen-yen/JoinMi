import z4 from "zod/v4";

export const TourSchema = z4.object({
  title: z4.string().min(1, "Title is required"),
  description: z4.string().min(1, "Description is required"),
  topic: z4.string(),
  type: z4.string(),
  date: z4.date(),
  language: z4.string(),
  duration: z4.number().positive("Duration must be a positive number"),
  location: z4.string(),
  imageUrl: z4.string().url("Image URL must be a valid URL").optional(),
  webUrl: z4.string().url("Web URL must be a valid URL").optional(),
  ticket: z4.number().positive("Ticket price must be a positive number"),
  tourGuide: z4.object({
    name: z4.string().min(1, "Tour guide name is required"),
    languages: z4
      .array(z4.string())
      .min(1, "At least one language is required"),
  }),
});

export const TourResponseSchema = TourSchema.extend({
  id: z4.string(),
});

export type TourData = z4.infer<typeof TourSchema>;
export type TourResponse = z4.infer<typeof TourResponseSchema>;
