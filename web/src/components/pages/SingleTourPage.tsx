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
import type { TourResponse } from "../../types/tour";
import { TourApi } from "../../data/toursApi";

export const SingleTourPage = () => {
  const { id } = useParams<{ id: string | any }>();
  console.log(id);
  const [tour, setTour] = useState<TourResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    TourApi.getTourById(id)
      .then(setTour)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  console.log(tour);

  if (loading) return <p>Loading...</p>;
  if (!tour) return <p>Tour not found.</p>;

  const mapEmbedUrl = `https://www.google.com/maps?q=52.5208,13.3869&output=embed`;

  return (
    <>
      <div className="container mx-auto">
        <div className="pb-5 sm:mt-10 sm:px-0 text-white">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:items-stretch w-full">
            <div className=" mt-4 lg:mt-8 pb-2">
              <div className="flex gap-1 pb-1">
                <div className="px-2 py-0.5 bg-yellow flex justify-center items-center rounded-sm text-black text-[14px] font-black">
                  展覽
                </div>
                <div className="px-2 py-0.5 bg-pink flex justify-center items-center rounded-sm text-black text-[14px] font-black">
                  中文導覽
                </div>
              </div>
              {/* <Kicker text="博物館" /> */}
              <h1>淚宮</h1>
              <p className="text-lg text-gray-100">常設展：德國分裂之地</p>
            </div>
            {/* image */}
            <div className="md:col-span-2 flex flex-wrap sm:flex-nowrap items-center">
              <img
                src={
                  "https://media.schott.com/api/public/content/2b89b10588da4d87ab61f757beb18f9b?t=OnExW1920"
                }
                alt={"img"}
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="pt-4">
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
          {/* BOTTOM SECTION */}
          <div className="lg:mt-20 mt-10 flex flex-wrap md:flex-nowrap w-full">
            {/* LEFT MAIN CONTENT */}
            <div className="order-2 md:order-1 flex-1 pr-10">
              {/* description */}
              <div className="space-y-3 pb-10">
                <h2>概述</h2>
                <p className="leading-relaxed">
                  從1961年到1989年，柏林圍牆將這座城市一分為二，東德和西德。只有少數幾個邊境口岸允許人們在兩部分之間往來。弗里德里希大街車站邊境口岸位於柏林市中心，每天有數百名旅客搭乘火車、輕軌或地鐵從這裡過境。在小小的出發大廳前，常常上演著感人的一幕：東德人向即將返回西德或永遠離開東德的親朋好友告別。他們必須經過這個大廳才能抵達西德。這些離別令人心碎，因為沒有人知道何時才能再次相遇。無數的淚水在「淚宮」中流淌。
                  <br />
                  在歷史遺址上展示了兩個德國是如何建立的，柏林圍牆是如何建造的，以及淚宮的海關和護照檢查是如何進行的，還有弗里德里希大街邊境口岸的監視是如何進行的。
                  在淚宮，參觀者可以體驗過境過程，並走進原汁原味的護照檢查亭。
                  <br />
                  展覽聚焦於親歷德國分裂的人們的個人故事。目擊者在採訪中講述了他們的逃亡經歷，他們如何透過信件和包裹與身處德國另一部分的家人保持聯繫，如何將文件和秘密照片偷運過境，以及他們如何抗議東德的旅行禁令。
                  <br />
                  1989年11月9日，柏林圍牆倒塌。這一切為何如此突然？東德究竟發生了什麼事？人們又是如何度過那段時期的？在德國統一35年後，您可以在淚宮探索這些問題的答案。
                </p>
              </div>
              <div className="space-y-3 pb-10">
                <h2>導覽員</h2>
                <h3>Sara</h3>
                <div className="flex flex-row">
                  <span className="tag">中文</span>
                  <span className="tag">粵語</span>
                  <span className="tag">English</span>
                  <span className="tag">Deutsch</span>
                </div>
              </div>
            </div>
            {/* RIGHT ASIDE */}
            <aside className="pb-10 order-1 md:order-2 basis-full md:basis-70 lg:basis-100 shrink-0">
              <div className="un-box-t-padding md:un-box-l-padding un-border-b md:border-none">
                <EventMetaItem heading="導覽時間" Icon={Calendar}>
                  <div className="flex flex-row">
                    <span className="w-12 flex flex-row">
                      2026.03.26 Sat. 16:00
                    </span>
                  </div>
                </EventMetaItem>
                <EventMetaItem heading="時長" Icon={Clock}>
                  60 分鐘
                </EventMetaItem>
                <EventMetaItem heading="主題" Icon={Sparkles}>
                  歷史遺址、逃亡、移居西方、邊境管制
                </EventMetaItem>
                <EventMetaItem heading="門票" Icon={Ticket}>
                  免費入場
                </EventMetaItem>
                <EventMetaItem heading="網站" Icon={LinkIcon}>
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={"https://www.hdg.de/traenenpalast/"}
                    className="underline cursor-pointer hover:text-cyan-300"
                  >
                    {"www.hdg.de/traenenpalast/"}
                  </a>
                </EventMetaItem>
                <EventMetaItem heading="位置" Icon={MapPin}>
                  <div>Reichstagufer 17, 10117 Berlin</div>
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
