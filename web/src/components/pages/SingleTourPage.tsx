import { useParams, Link } from "react-router";
import {
  Calendar,
  Link as LinkIcon,
  MapPin,
  Sparkles,
  UserPlus,
  Clock,
  Ticket,
} from "lucide-react";
import { EventMetaItem } from "../ui/EventMetaItem";
import { useEffect, useState } from "react";
import type { TourResponse } from "../../types/Tour";
import { TourApi } from "../../data/toursApi";
import { format } from "date-fns";

export const SingleTourPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [tour, setTour] = useState<TourResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    TourApi.getTourById(id)
      .then(setTour)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) return <p>Invalid tour id.</p>;
  if (loading) return <p>Loading...</p>;
  if (!tour) return <p>Tour not found.</p>;

  const tourdate = format(new Date(tour.date), "dd MMM yyyy, HH:mm");

  const mapEmbedUrl = `https://www.google.com/maps?q=52.5208,13.3869&output=embed`;

  return (
    <>
      <div className="container mx-auto">
        <div className="pb-5 sm:mt-10 sm:px-0 text-white">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:items-center w-full">
            <div className=" mt-4 lg:mt-8 pb-2">
              <div className="flex gap-1 pb-1">
                <div className="px-2 py-0.5 bg-pink flex justify-center items-center rounded-sm text-black text-[14px] font-bold uppercase">
                  {format(new Date(tour.date), "dd MMM")}
                </div>
                <div className="px-2 py-0.5 bg-yellow flex justify-center items-center rounded-sm text-black text-[14px] font-black">
                  {tour.language}導覽
                </div>
              </div>
              <h1>{tour.title}</h1>
              <p className="text-lg text-gray-100">{tour.subtitle}</p>
            </div>
            {/* image */}
            <div className="md:col-span-2 flex flex-wrap sm:flex-nowrap items-center">
              <img
                src={tour.imageUrl}
                alt={"img"}
                className="w-full rounded-xl object-cover h-70"
              />
            </div>
          </div>
          <div className="pt-4">
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
          {/* BOTTOM SECTION */}
          <div className="lg:mt-20 mt-10 flex flex-wrap md:flex-nowrap w-full">
            {/* LEFT MAIN CONTENT */}
            <div className="order-2 md:order-1 flex-1 pr-10">
              {/* description */}
              <div className="space-y-3 pb-10">
                <h2>概述</h2>
                <p className="leading-relaxed">{tour.description}</p>
              </div>
              <div className="space-y-3 pb-10">
                <h2>導覽員</h2>
                <h3>{tour.tourGuide.name}</h3>
                <div className="flex flex-row">
                  {tour.tourGuide.languages.length > 0 &&
                    tour.tourGuide.languages.map((lang) => {
                      return <span className="tag">{lang}</span>;
                    })}
                </div>
              </div>
            </div>
            {/* RIGHT ASIDE */}
            <aside className="pb-10 order-1 md:order-2 basis-full md:basis-70 lg:basis-100 shrink-0">
              <div className="un-box-t-padding md:un-box-l-padding un-border-b md:border-none">
                <EventMetaItem heading="導覽時間" Icon={Calendar}>
                  <div className="">
                    <span className="w-12 uppercase">{tourdate}</span>
                  </div>
                </EventMetaItem>
                <EventMetaItem heading="時長" Icon={Clock}>
                  {tour.duration} 分鐘
                </EventMetaItem>
                <EventMetaItem heading="主題" Icon={Sparkles}>
                  {tour.topic}
                </EventMetaItem>
                <EventMetaItem heading="門票" Icon={Ticket}>
                  {tour.ticket === 0 ? (
                    <p>免費入場</p>
                  ) : (
                    <p>{tour.ticket} 歐元</p>
                  )}
                </EventMetaItem>
                <EventMetaItem heading="網站" Icon={LinkIcon}>
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={tour.webUrl}
                    className="underline cursor-pointer hover:text-cyan-300"
                  >
                    {tour.webUrl}
                  </a>
                </EventMetaItem>
                <EventMetaItem heading="位置" Icon={MapPin}>
                  <div>{tour.location}</div>
                  <div className="w-fit overflow-hidden rounded-lg mt-2">
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="260"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </EventMetaItem>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
