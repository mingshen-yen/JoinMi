import { Castle, ListChevronsUpDown, CalendarDays, Clock1 } from "lucide-react";
import { useState } from "react";

export const CreateTourPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    topic: "",
    type: "",
    date: "",
    language: "",
    duration: "",
    location: "",
    participants: "10",
    tourType: "tire-palace",
    message: "",
  });
  return (
    <>
      <div className="container z-20 min-h-screen py-8 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white pb-4">Create New Tour</h2>
          <form className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            {/* Title Field */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="flex items-center p-2 gap-2 text-base font-medium text-gray-700"
              >
                <Castle className="w-4 h-4" />
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                //onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
                placeholder="Museum"
              />
            </div>
            {/* Subtitle Field */}
            <div className="mb-6">
              <label
                htmlFor="subtitle"
                className="flex items-center p-2 gap-2 text-base font-medium text-gray-700"
              >
                <Castle className="w-4 h-4" />
                Exhibition
              </label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                //onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
                placeholder="exhibition"
              />
            </div>
            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="flex items-center p-2 gap-2 text-base font-medium text-gray-700"
              >
                <ListChevronsUpDown className="w-4 h-4" />
                Description
              </label>
              <textarea
                id="description"
                //value={description}
                //onChange={(e) => setValue("description", e.target.value)}
                placeholder="Describe your event..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                <Clock1 className="w-4 h-4" />
                Website URL
              </label>
            </div>
            {/* Image */}
            <div>
              <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                Image URL
              </label>
            </div>
            <div>
              <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                <Clock1 className="w-4 h-4" />
                Ticket
              </label>
            </div>
            <fieldset className="mt-6 p-3 border border-gray-300 rounded-sm">
              <legend className="uppercase">Tour Information </legend>
              {/* Date Picker */}
              <div>
                <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                  <CalendarDays className="w-4 h-4" />
                  Date & Time
                </label>
              </div>
              <div>
                <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                  <Clock1 className="w-4 h-4" />
                  Duration
                </label>
              </div>
              <div>
                <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                  <Clock1 className="w-4 h-4" />
                  Language
                </label>
              </div>
              <div>
                <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                  <Clock1 className="w-4 h-4" />
                  Type
                </label>
              </div>
              <div>
                <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                  <Clock1 className="w-4 h-4" />
                  Topics
                </label>
              </div>
              <div>
                <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                  <Clock1 className="w-4 h-4" />
                  Booking Form URL
                </label>
              </div>
              <div>
                <label className="flex items-center p-2 gap-2 text-base font-medium text-gray-700">
                  <Clock1 className="w-4 h-4" />
                  tourGuide
                </label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};
