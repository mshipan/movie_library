import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import ContinueWatchingCard from "./ContinueWatchingCard";
import img1 from "@/assets/continueWatching/img-1.png";
import img2 from "@/assets/continueWatching/img-2.png";
import img3 from "@/assets/continueWatching/img-3.png";
import img4 from "@/assets/continueWatching/img-4.png";
import img5 from "@/assets/continueWatching/img-5.png";
import img6 from "@/assets/continueWatching/img-6.png";

const ContinueWatching = () => {
  const shows = [
    {
      title: "Hell’s Paradise",
      genre: "action",
      image: img1,
    },
    {
      title: "Fate Stay Night",
      genre: "action",
      image: img2,
    },
    {
      title: "Steins Gate",
      genre: "romance",
      image: img3,
    },
    {
      title: "Black Bullet",
      genre: "drama",
      image: img4,
    },
    {
      title: "Chainsawman",
      genre: "horror",
      image: img5,
    },
    {
      title: "My Hero Academia",
      genre: "action",
      image: img6,
    },
  ];
  return (
    <div className="flex flex-col gap-4 my-8">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-xl md:text-3xl font-bold whitespace-nowrap">
          Continue Watching
        </h1>
        <Link to="/">
          <button className="flex items-center gap-1 text-lg md:text-2xl px-4 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_5px_#58dda3] cursor-pointer hover:text-[#58dda3] whitespace-nowrap">
            View All <ChevronRight className="text-[#58dda3]" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {shows?.map((show, i) => (
          <ContinueWatchingCard key={i} show={show} />
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
