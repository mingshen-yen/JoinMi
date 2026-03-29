import { useParams, Link, useNavigate } from "react-router";
import {
  Calendar,
  Link as LinkIcon,
  MapPin,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { EventMetaItem } from "../ui/EventMetaItem";
import { Kicker } from "../ui/Kicker";

export const SingleTourPage = () => {
  const mapEmbedUrl = `https://www.google.com/maps?q=52.5208,13.3869&output=embed`;

  return (
    <>
      <div className="container mx-auto">
        <div className="pb-5 sm:mt-10 sm:px-0 text-white">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:items-stretch w-full">
            <div className=" mt-4 lg:mt-8 pb-2">
              <div className="flex gap-1 pb-1">
                <div className="px-2 bg-yellow flex justify-center items-center rounded-sm text-black font-black">
                  博物館
                </div>
                <div className="px-2 bg-pink flex justify-center items-center rounded-sm text-black font-black">
                  中文導覽
                </div>
              </div>
              {/* <Kicker text="博物館" /> */}
              <h1>柏林淚宮</h1>
              {/* <div className="flex text-[17px] mt-1 ">
                <div className="w-20 bg-pink h-8 flex justify-center items-center rounded-md text-black font-black">
                  28 MAR
                </div>
                <div className="ml-4 flex items-center font-light">
                  <MapPin className="mr-1 h-5 w-5 " />
                  Berlin
                </div>
              </div> */}
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
                <h2>背景介紹</h2>
                <p>
                  從1962年至1989年的柏林圍牆時期，搭乘柏林城市快鐵、柏林地鐵和火車來往於東德與西德之間的西柏林、西德、外國旅客、及外交人員在此過境。建築前面成為他們與無法前往西柏林的東德人告別的地點，常常出現含淚離別的場景。朋友和家人不知道他們是否還會再次見面。
                  淚宮成為兩德分裂期間邊界兩側人們不同命運的一個獨特標誌。
                  柏林圍牆倒塌後，該建築作為夜總會和舞台之用，直至2006年。
                  <br />
                  1990年10月2日，東德和西德正式統一的前一天，東德政府將一些官方建築列為保護建築，因為不確定兩德統一後它們將會如何。
                  <br />
                  2011年9月15日，聯邦德國歷史博物館基金會開設永久性展覽，550平方米的面積，用原始文件，照片和錄音，錄影，呈現在兩德分裂時期旅客在檢查站的經歷，並概述了統一進程。
                  <br />
                  2011年9月14日，德國總理安格拉·梅克爾為其揭幕。在頭兩個星期，超過30,000人參觀了淚​​宮，免費進入。
                </p>
              </div>
              <div className="space-y-3 pb-10">
                <h2>導覽員</h2>
                <h3>Sara</h3>
                <div className="flex flex-row">
                  <span className="tag">中文</span>
                  <span className="tag">廣東話</span>
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
                <EventMetaItem heading="網站" Icon={LinkIcon}>
                  <a
                    target={"_blank"}
                    rel="noopener noreferrer"
                    href={
                      "https://www.schott.com/zh-cn/about-us/references/palace-of-tears"
                    }
                    className="underline cursor-pointer hover:text-purple"
                  >
                    {
                      "https://www.schott.com/zh-cn/about-us/references/palace-of-tears"
                    }
                  </a>
                </EventMetaItem>
                {/* <EventMetaItem heading="類型" Icon={Sparkles}>
                  <span className="inline-flex w-fit rounded text-black px-2 py-1 bg-pink text-[14px] font-bold uppercase tracking-wider mr-2">
                    中文導覽
                  </span>
                </EventMetaItem> */}
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
