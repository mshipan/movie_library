import StreamNowButton from "@/components/shared/StreamNowButton";
import { Link } from "react-router";

const TrendingShowsCard = ({ show, index }) => {
  return (
    <div>
      <div className="relative cursor-pointer group overflow-hidden w-fit">
        <img
          src={show?.image}
          alt="trending show card image"
          className="rounded-xl"
        />

        <Link
          to="/"
          className="absolute bottom-6 left-6 transform transition-all duration-500 ease-in-out translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <StreamNowButton />
        </Link>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <p className="text-white text-5xl lg:text-6xl font-semibold">{index}</p>
        <div>
          <p className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
            {show?.title}
          </p>
          <p className="text-gray-400 text-lg font-semibold">{show?.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingShowsCard;
