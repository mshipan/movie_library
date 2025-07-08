import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RecentlyReleasedCard from "./RecentlyReleasedCard";
import img1 from "@/assets/continueWatching/img-1.png";
import img2 from "@/assets/continueWatching/img-2.png";
import img3 from "@/assets/continueWatching/img-3.png";
import img4 from "@/assets/continueWatching/img-4.png";
import img5 from "@/assets/continueWatching/img-5.png";
import img6 from "@/assets/continueWatching/img-6.png";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import type { NavigationOptions } from "swiper/types";

const RecentlyReleased = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const shows = [
    {
      title: "Hell’s Paradise",
      genre: "action",
      image: img1,
      releaseYear: 2011,
    },
    {
      title: "Fate Stay Night",
      genre: "action",
      image: img2,
      releaseYear: 2012,
    },
    {
      title: "Steins Gate",
      genre: "romance",
      image: img3,
      releaseYear: 2013,
    },
    {
      title: "Black Bullet",
      genre: "drama",
      image: img4,
      releaseYear: 2014,
    },
    {
      title: "Chainsawman",
      genre: "horror",
      image: img5,
      releaseYear: 2015,
    },
    {
      title: "My Hero Academia",
      genre: "action",
      image: img6,
      releaseYear: 2016,
    },
  ];

  return (
    <div className="flex flex-col gap-4 my-8">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl md:text-3xl font-bold whitespace-nowrap">
          Recently Released
        </h1>
        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="p-2 rounded-xl bg-gray-800 hover:text-[#58dda3] transition-all cursor-pointer"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            ref={nextRef}
            className="p-2 rounded-xl bg-gray-800 hover:text-[#58dda3] transition-all cursor-pointer"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>

      <div className="max-w-screen">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as NavigationOptions;
            if (navigation) {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4.5 },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="flex items-center justify-between"
          loop={true}
        >
          {shows?.map((show, i) => (
            <SwiperSlide key={i}>
              <RecentlyReleasedCard show={show} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentlyReleased;
