import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import TrendingShowsCard from "./TrendingShowsCard";
import img1 from "@/assets/trendCard/img-1.png";
import img2 from "@/assets/trendCard/img-2.png";
import img3 from "@/assets/trendCard/img-3.png";
import img4 from "@/assets/trendCard/img-4.png";

const TrendingShows = () => {
  const shows = [
    {
      title: "Hell’s Paradise",
      genre: "action",
      image: img1,
    },
    {
      title: "One Piece",
      genre: "comedy",
      image: img2,
    },
    {
      title: "86 Eighty Six",
      genre: "romance",
      image: img3,
    },
    {
      title: "Darling In The Franxx",
      genre: "fantacy",
      image: img4,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl md:text-3xl font-bold whitespace-nowrap">
          Trending Shows
        </h1>
        <Link to="/">
          <button className="flex items-center gap-1 text-lg md:text-2xl px-4 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_5px_#58dda3] cursor-pointer hover:text-[#58dda3] whitespace-nowrap">
            View All <ChevronRight className="text-[#58dda3]" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex lg:items-center lg:justify-between lg:gap-4">
        {shows?.map((show, i) => (
          <TrendingShowsCard key={i} show={show} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default TrendingShows;
