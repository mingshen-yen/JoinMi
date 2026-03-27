import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { UserPlus } from "lucide-react";

export const EventCard = () => {
  // const monthStr = format(new Date(event.startDate), "MMM");
  // const dayStr = format(new Date(event.startDate), "dd");

  return (
    <div className="flex flex-wrap py-8 px-3 items-start text-white relative border-cyan-100 border-b">
      <div className="flex items-start sm:items-center w-full sm:w-auto sm:gap-4">
        {/* DATE in Mobile */}
        <div className="sm:hidden bg-pink p-3 rounded-md text-black text-center w-18 -mr-5 z-10 -mt-5 -left-1 absolute">
          <div className="text-4xl font-black leading-none">28</div>
          <div className="text-base font-bold uppercase tracking-wider">
            Mar
          </div>
        </div>
        {/* DATE in Desktop */}
        <div className="hidden sm:flex sm:flex-wrap justify-center p-6 rounded-md text-white sm:w-30">
          <div className="text-3xl sm:text-5xl font-black leading-none">28</div>
          <div className="text-sm lg:text-xl font-bold uppercase tracking-wider">
            Mar
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
          <Link to={`/tours/id`}>
            <h3 className="my-3 sm:mt-0 text-2xl md:text-3xl lg:text-4xl font-bold text-yellow transition-colors hover:text-cyan-300">
              柏林淚宮
            </h3>
          </Link>
          {/* <Link to={`/location/${event.location.id}`}> */}
          <div className="flex items-start leading-[1.4rem] hover:text-cyan-300 mt-1 md:text-[18px]">
            <MapPin className="mr-1.5 mb-1 mt-0.5 h-5 w-5 shrink-0 " />
            <div>
              <p>Reichstagufer 17, 10117 Berlin</p>
              {/* {event.location.city ? `${event.location.city}, ` : ``}
              {event.location.name} */}
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div className="py-4 sm:py-0">
        <Link
          to={"/tour-register"}
          // className="flex items-center p-4 transition hover:text-cyan-200 cursor-pointer "
        >
          <button className="flex flex-wrap items-center text-[14px] font-bold border px-3 py-2 rounded-lg hover:bg-cyan-300 hover:text-cyan-700 transition-colors cursor-pointer">
            <UserPlus className="w-4 h-4 mr-1" />
            <span>報名</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
