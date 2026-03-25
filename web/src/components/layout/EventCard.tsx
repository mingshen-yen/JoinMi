import { MapPin, Music4 } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router";

export const EventCard = () => {
  // const monthStr = format(new Date(event.startDate), "MMM");
  // const dayStr = format(new Date(event.startDate), "dd");

  return (
    <div className="flex flex-wrap sm:flex-nowrap py-8 items-start text-white relative px-3 sm:px-0 border-slate-700 border-b">
      <div className="flex items-start w-full sm:w-auto">
        {/* DATE*/}
        <div className="bg-pink p-2 rounded-md text-black text-center w-13 lg:w-15 -mr-5 z-10 -mt-3 left-0 absolute sm:relative">
          <div className="text-3xl lg:text-4xl font-black leading-none">28</div>
          <div className="text-sm lg:text-md font-bold uppercase tracking-wider">
            Mar
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full aspect-video rounded-md overflow-hidden sm:mr-8 sm:w-auto sm:h-30 sm:aspect-square md:aspect-4/3">
          {/* <Link to={`/event/${event.id}`}> */}
          <img
            src={"/JoinMi-logo.png"}
            alt="img-title"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/placeholder.jpeg";
            }}
            className="h-full w-full object-cover"
          />
          {/* </Link> */}
        </div>
      </div>
      <div className="flex flex-1 flex-wrap lg:flex-nowrap">
        {/* EVENT TITLE AND LOCATION */}
        <div className="sm:mr-10 w-full lg:w-1/2 shrink-0">
          {/* <Link to={`/event/${event.id}`}> */}
          <h3 className="my-3 sm:mt-0 text-2xl md:text-3xl lg:text-4xl font-bold text-yellow transition-colors hover:text-purple">
            淚宮中文導覽
          </h3>
          {/* </Link> */}
          {/* <Link to={`/location/${event.location.id}`}> */}
          <div className="flex items-start leading-[1.4rem] hover:text-purple mt-1 md:text-[18px]">
            <MapPin className="mr-1.5 mb-1 mt-0.5 h-5 w-5 shrink-0 " />
            <div>
              淚宮
              {/* {event.location.city ? `${event.location.city}, ` : ``}
              {event.location.name} */}
            </div>
          </div>
          {/* </Link> */}
        </div>
        <div>
          <button>報名參加</button>
        </div>
      </div>
    </div>
  );
};
