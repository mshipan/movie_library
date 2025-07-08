import { Play } from "lucide-react";

const StreamNowButton = () => {
  return (
    <button className="flex items-center gap-1 text-2xl px-4 py-2 rounded-xl transition-all duration-300 text-white hover:text-[#58dda3] bg-white/30 cursor-pointer backdrop-blur">
      Stream Now <Play />
    </button>
  );
};

export default StreamNowButton;
