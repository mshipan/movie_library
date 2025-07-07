import type { FC } from "react";
import Banner from "@/components/pages/home/Banner";
import MovieGenreGrid from "@/components/pages/home/MovieGenreGrid";
import TrendingShows from "@/components/pages/home/TrendingShows";

const Home: FC = () => {
  return (
    <div className="px-6 md:px-14">
      <Banner />
      <MovieGenreGrid />
      <TrendingShows />
    </div>
  );
};

export default Home;
