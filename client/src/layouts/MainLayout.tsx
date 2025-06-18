import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { FC } from "react";
import { Outlet } from "react-router";

const MainLayout: FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
