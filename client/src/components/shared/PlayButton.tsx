import { IoPlayOutline } from "react-icons/io5";

const PlayButton = () => {
  return (
    <button className="px-5 py-2 text-lg lg:text-2xl text-black font-medium rounded-md bg-[#58dda3] cursor-pointer transition-all duration-300 shadow-md hover:shadow-[0_0_20px_5px_#58dda3] flex items-center gap-2">
      <IoPlayOutline className="text-xl lg:text-3xl" /> Play
    </button>
  );
};

export default PlayButton;
