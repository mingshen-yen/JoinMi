import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { UserPlus } from "lucide-react";
import type { TourResponse } from "../../types/tour";
import { format } from "date-fns";

export const EventCard = ({ tour }: { tour: TourResponse }) => {
  const monthStr = format(new Date(tour.date), "MMM");
  const dayStr = format(new Date(tour.date), "dd");

  return (
    <div className="flex flex-wrap py-12 px-3 sm:items-center text-white relative border-cyan-100 border-b">
      <div className="flex items-start sm:items-center w-full sm:w-auto sm:gap-4">
        {/* DATE in Mobile */}
        <div className="sm:hidden bg-cyan-300 p-3 rounded-md text-black text-center w-18 -mr-5 z-10 -mt-5 -left-1 absolute">
          <div className="text-4xl font-black leading-none">{dayStr}</div>
          <div className="text-base font-bold uppercase tracking-wider">
            {monthStr}
          </div>
        </div>
        {/* DATE in Desktop */}
        <div className="hidden sm:flex sm:flex-col items-center justify-center p-6 rounded-md text-white sm:w-50">
          <div className="text-3xl sm:text-5xl font-black leading-none">
            {dayStr}
          </div>
          <div className="text-sm lg:text-xl font-bold uppercase tracking-wider">
            {monthStr}
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full aspect-video rounded-md overflow-hidden sm:mr-8 sm:h-30 sm:aspect-4/3">
          <Link to={`/tours/id`}>
            <img
              src={
                "https://media.schott.com/api/public/content/2b89b10588da4d87ab61f757beb18f9b?t=OnExW1920"
              }
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
        <div className="sm:mr-10 w-full lg:w-1/2 shrink-0">
          <span className="inline-flex w-fit rounded text-black px-1.5 py-0.5 bg-pink text-[12px] font-bold uppercase tracking-wider mb-1 mt-3">
            {tour.type}
          </span>
          <Link to={`/tours/${tour.id}`}>
            <h3 className="text-4xl md:text-5xl font-bold text-yellow transition-colors hover:text-cyan-300">
              {tour.title}
            </h3>
          </Link>
          {/* <Link to={`/location/${event.location.id}`}> */}
          <div className="flex items-start leading-[1.4rem] hover:text-cyan-300 mt-1 md:text-[18px]">
            <MapPin className="mr-1.5 mb-1 mt-0.5 h-5 w-5 shrink-0 " />
            <div>
              <p>{tour.location}</p>
              {/* {event.location.city ? `${event.location.city}, ` : ``}
              {event.location.name} */}
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div className="pt-10 sm:pt-4">
        <Link to={"/tour-register"}>
          <button className="flex flex-wrap items-center text-[14px] font-bold border px-3 py-2 rounded-lg hover:bg-cyan-300 hover:text-cyan-700 transition-colors cursor-pointer">
            <UserPlus className="w-4 h-4 mr-1" />
            <span>報名</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
