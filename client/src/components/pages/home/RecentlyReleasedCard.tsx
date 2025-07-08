import StreamNowButton from "@/components/shared/StreamNowButton";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const RecentlyReleasedCard = ({ show }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="relative cursor-pointer group overflow-hidden w-fit">
        <img
          src={show?.image}
          alt="trending show card image"
          className="rounded-xl w-96"
        />

        <Link
          to="/"
          className="absolute bottom-6 left-6 transform transition-all duration-500 ease-in-out translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <StreamNowButton />
        </Link>
      </div>

      <div className="flex flex-col items-start gap-2">
        <p className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap">
          {show?.title}
        </p>
        <div className="flex items-center gap-3">
          <p className="text-gray-400 text-lg font-semibold capitalize pr-3 border-r border-r-gray-400">
            {show?.genre}
          </p>
          <p className="text-gray-400 text-lg font-semibold pr-3 border-r border-r-gray-400">
            {show?.releaseYear}
          </p>
          <div className="flex items-center gap-2 text-lg">
            <FaStar className="text-yellow-400" />
            <p className="text-gray-400 font-semibold">8.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyReleasedCard;
