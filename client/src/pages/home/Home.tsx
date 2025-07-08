import type { FC } from "react";
import Banner from "@/components/pages/home/Banner";
import MovieGenreGrid from "@/components/pages/home/MovieGenreGrid";
import TrendingShows from "@/components/pages/home/TrendingShows";
import ContinueWatching from "@/components/pages/home/ContinueWatching";
import RecentlyReleased from "@/components/pages/home/RecentlyReleased";

const Home: FC = () => {
  return (
    <div className="px-6 md:px-14">
      <Banner />
      <MovieGenreGrid />
      <TrendingShows />
      <ContinueWatching />
      <RecentlyReleased />
    </div>
  );
};

export default Home;
