import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { UserPlus } from "lucide-react";
import { format } from "date-fns";
import type { TourResponse } from "../../types/Tour";

export const EventCard = ({ tour }: { tour: TourResponse }) => {
  const monthStr = format(new Date(tour.date), "MMM");
  const dayStr = format(new Date(tour.date), "dd");

  return (
    <div className="flex flex-wrap py-12 px-3 lg:items-center text-white relative border-cyan-100 border-b">
      <div className="flex items-start lg:items-center w-full lg:w-auto lg:gap-4">
        {/* DATE in Mobile */}
        <div className="lg:hidden bg-cyan-300 p-3 rounded-md text-black text-center w-18 -mr-5 z-10 -mt-5 -left-1 absolute">
          <div className="text-4xl font-black leading-none">{dayStr}</div>
          <div className="text-base font-bold uppercase tracking-wider">
            {monthStr}
          </div>
        </div>
        {/* DATE in Desktop */}
        <div className="hidden lg:flex lg:flex-col items-center justify-center p-6 rounded-md text-white lg:w-40">
          <div className="text-3xl lg:text-5xl font-black leading-none">
            {dayStr}
          </div>
          <div className="text-sm lg:text-xl font-bold uppercase tracking-wider">
            {monthStr}
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full aspect-video rounded-md overflow-hidden lg:mr-8 lg:h-30 lg:aspect-4/3">
          <Link to={`/tours/${tour.id}`}>
            <img
              src={tour.imageUrl}
              alt="img-title"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/placeholder.jpeg";
              }}
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-1 flex-wrap">
        {/* EVENT TITLE AND LOCATION */}
        <div className="lg:mr-10 w-full lg:w-1/2 shrink-0">
          <div className="flex flex-row gap-1">
            <span className="inline-flex w-fit rounded text-black px-1.5 py-0.5 bg-pink text-[12px] font-bold uppercase tracking-wider mb-1 mt-3">
              {tour.type}
            </span>
            <span className="inline-flex w-fit rounded text-black px-1.5 py-0.5 bg-yellow text-[12px] font-bold uppercase tracking-wider mb-1 mt-3">
              {tour.language}導覽
            </span>
          </div>
          <div className="sm:w-100">
            <Link to={`/tours/${tour.id}`}>
              <h3 className="text-4xl md:text-5xl font-bold text-white transition-colors hover:text-cyan-300">
                {tour.title}
              </h3>
            </Link>
          </div>
          <div className="flex items-start leading-[1.4rem] mt-1 text-[14px] lg:text-[16px]">
            <MapPin className="mr-1.5 mb-1 mt-0.5 h-4 w-4 shrink-0 " />
            <div>
              <p>{tour.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 lg:pt-4">
        <button
          data-tally-open={tour.bookingUrl}
          data-tally-layout="modal"
          data-tally-width="400"
          data-tally-align-left="1"
          data-tally-hide-title="1"
          data-tally-overlay="1"
          data-tally-auto-close="3000"
          data-tally-form-events-forwarding="1"
          className="flex flex-wrap items-center text-[14px] font-bold border px-3 py-2 rounded-lg hover:bg-cyan-300 hover:text-cyan-700 transition-colors cursor-pointer"
        >
          <UserPlus className="w-4 h-4 mr-1" />
          <span>報名</span>
        </button>
      </div>
    </div>
  );
};
