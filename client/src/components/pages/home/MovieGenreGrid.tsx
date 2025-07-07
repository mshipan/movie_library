import type { FC } from "react";
import sampleImg from "@/assets/Img-8.png";

const MovieGenreGrid: FC = () => {
  const genries = [
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
    {
      title: "Shonen",
      animeCount: "850+ Animes",
      image: sampleImg,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
      {genries?.map((genre, i) => (
        <div
          key={i}
          className="flex items-center gap-5 border border-gray-700 p-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_5px_#58dda3] cursor-pointer"
        >
          <div>
            <img src={sampleImg} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{genre?.title}</h1>
            <p className="text-lg text-gray-400 font-semibold">
              {genre?.animeCount}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGenreGrid;
