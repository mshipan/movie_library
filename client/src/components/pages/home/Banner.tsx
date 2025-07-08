import type { FC } from "react";
import bgImg from "@/assets/bg.png";
import img1 from "@/assets/img-1.png";
import img2 from "@/assets/img-2.png";
import { GoInfo } from "react-icons/go";
import PlayButton from "@/components/shared/PlayButton";

const Banner: FC = () => {
  const bannerData = [
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      meta: {
        ageRating: "18+",
        quality: "HD",
        releaseYear: 2029,
        genre: "Anime",
        duration: "1hr 45m",
      },
      cast: ["Natsuki Hanae", "Akari Kito", "Hiro Shimono"],
      image: bgImg,
    },
    {
      title: "My Hero Academia",
      meta: {
        ageRating: "18+",
        releaseYear: 2019,
        seasons: "4 Seasons",
        genre: "Anime",
      },
      description:
        "Sentenced to death, ninja Gabimaru the Hollow finds himself apathetic.",
      image: img1,
    },
    {
      title: "Hell’s Paradise",
      meta: {
        ageRating: "18+",
        releaseYear: 2019,
        seasons: "4 Seasons",
        genre: "Anime",
      },
      description:
        "Sentenced to death, ninja Gabimaru the Hollow finds himself apathetic.",
      image: img2,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
      {bannerData?.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item?.image})` }}
              className="relative bg-cover bg-left lg:bg-center bg-no-repeat rounded-md lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[600px] flex items-end"
            >
              <div className="absolute bottom-7 left-7 lg:bottom-8 lg:left-8 flex flex-col gap-4 lg:gap-6 lg:p-6 rounded-md max-w-full lg:max-w-[80%]">
                <h1 className="text-white font-bold text-2xl lg:text-4xl leading-snug">
                  {item?.title}
                </h1>

                <div className="flex flex-wrap items-center gap-2">
                  {[
                    item?.meta?.ageRating,
                    item?.meta?.quality,
                    item?.meta?.releaseYear,
                    item?.meta?.genre,
                    item?.meta?.duration,
                  ]
                    ?.filter(Boolean)
                    ?.map((metaItem, idx) => (
                      <div
                        key={idx}
                        className="border border-white rounded-md px-2 py-1"
                      >
                        <p className="text-white text-sm lg:text-base">
                          {metaItem}
                        </p>
                      </div>
                    ))}
                </div>

                {item?.cast && (
                  <p className="text-white text-sm lg:text-base">
                    <span className="text-gray-400">Starring:</span>{" "}
                    {item?.cast.join(", ")}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  <PlayButton />

                  <button className="px-5 py-2 text-base lg:text-xl text-white font-medium rounded-md bg-transparent hover:bg-white/30 cursor-pointer transition-all duration-300 flex items-center gap-2">
                    <GoInfo className="text-xl lg:text-2xl" /> More info
                  </button>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div
            key={index}
            className="flex flex-col md:flex-row lg:flex-row gap-4 bg-[#212121] p-4 rounded-md"
          >
            <img
              src={item?.image}
              alt={item?.title}
              className="rounded-md w-full md:w-[40%] lg:w-[40%] h-auto object-cover"
            />
            <div className="flex flex-col md:justify-between gap-4 flex-1">
              <h1 className="text-white font-light md:font-medium lg:font-light text-xl md:text-2xl lg:text-3xl">
                {item?.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  item?.meta?.releaseYear,
                  item?.meta?.ageRating,
                  item?.meta?.seasons,
                  item?.meta?.genre,
                ]
                  ?.filter(Boolean)
                  ?.map((metaItem, idx) => (
                    <div
                      key={idx}
                      className="border border-white rounded-md px-2 py-1"
                    >
                      <p className="text-white text-sm lg:text-base">
                        {metaItem}
                      </p>
                    </div>
                  ))}
              </div>

              {item?.description && (
                <p className="text-gray-400 text-sm lg:text-base">
                  {item?.description}
                </p>
              )}

              <div className="lg:mt-4">
                <PlayButton />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
