import { RouterProvider } from "react-router";
import "./App.css";
import router from "./routes/Router";
import type { FC } from "react";

const App: FC = () => {
  return (
    <div className="bg-[#1b1b1b] text-white min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
