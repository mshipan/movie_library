import PlayButton from "@/components/shared/PlayButton";
import { Clock } from "lucide-react";

const ContinueWatchingCard = ({ show }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-fit md:w-72">
        <img src={show?.image} alt="show image" className="rounded-xl" />
      </div>
      <div className="flex flex-col items-start py-2">
        <div className="flex-1">
          <p className="text-white text-2xl font-semibold capitalize">
            {show?.title}
          </p>
          <p className="text-gray-400 text-lg font-semibold capitalize">
            {show?.genre}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <PlayButton />
          <div className="flex items-center gap-1">
            <Clock />
            <p className="text-white text-xl font-semibold">24:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchingCard;
