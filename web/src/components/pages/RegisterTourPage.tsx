import { useState } from "react";
import {
  CalendarSearch,
  User,
  Mail,
  Phone,
  Users,
  MessageSquare,
  Coffee,
} from "lucide-react";

export const RegisterTourPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    participants: "1",
    tourType: "mountain",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll redirect to Buy Me a Coffee after form validation
    console.log("Form data:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleBuyMeCoffee = () => {
    // Replace 'yourusername' with actual Buy Me a Coffee username
    window.open("https://buymeacoffee.com/joinmi", "_blank");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white font-bold mb-4">
            Register for Your Tour
          </h2>
          <p className="text-lg text-gray-200">
            Fill out the form and reserve your spot
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 border border-gray-200"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
            >
              <User className="w-4 h-4" />
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
              placeholder="John"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
            >
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
            >
              <Phone className="w-4 h-4" />
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
              placeholder="+49 152 1234 5678"
            />
          </div>

          {/* Tours and Participants Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Tour Type */}
            <div className="md:col-span-2">
              <label
                htmlFor="tourType"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
              >
                <CalendarSearch className="w-4 h-4" />
                Tour
              </label>
              <select
                id="tourType"
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
              >
                <option value="tire-palace">淚宮 - 3/28 (六) 16:00</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="participants"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
              >
                <Users className="w-4 h-4" />
                Number of Participants
              </label>
              <select
                id="participants"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition"
              >
                <option value="1">1 </option>
                <option value="2">2 </option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
            >
              <MessageSquare className="w-4 h-4" />
              Additional Information (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition resize-none"
              placeholder="Any special requests or questions?"
            />
          </div>

          {/* Buy Me a Coffee Button */}
          <button
            type="button"
            onClick={handleBuyMeCoffee}
            className="w-full bg-gradient-to-r from-[rgb(33,226,223)] to-[rgb(22,171,181)] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-[rgb(22,171,181)] hover:to-[rgb(22,171,181)] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <Coffee className="w-6 h-6" />
            Reserve Your Spot
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Your reservation will be confirmed once the coffee donation is
            received
          </p>
        </form>
      </div>
    </>
  );
};
