import type { FC } from "react";
import logo from "@/assets/logo.png";
import { FiInstagram } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import bgImg from "@/assets/footerBg.png";

const Footer: FC = () => {
  const footerData = [
    {
      title: "Top Links",
      links: ["Home", "Animes", "Blog"],
    },
    {
      title: "Information",
      links: ["Sign up", "Login", "About Us"],
    },
    {
      title: "Services",
      links: ["Movies", "Newsletter", "Blog"],
    },
    {
      title: "Security",
      links: ["Terms and Condition", "Privacy Policy", "Contact us"],
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center bg-no-repeat mx-6 md:mx-14"
    >
      <div className="px-4 py-16">
        <div className="flex flex-col items-start gap-8">
          <img src={logo} alt="logo" className="w-44" />
          <p className="text-white text-xl max-w-96">
            Stay connected with us and lets know more stories about new movies
            and More Explorer Us for get it.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-[#252121] p-2 rounded-md">
              <FiInstagram className="text-gray-400 text-3xl cursor-pointer hover:text-[#58dda3] transition-all ease-in duration-300" />
            </div>
            <div className="bg-[#252121] p-2 rounded-md">
              <SlSocialFacebook className="text-gray-400 text-3xl cursor-pointer hover:text-[#58dda3] transition-all ease-in duration-300" />
            </div>
            <div className="bg-[#252121] p-2 rounded-md">
              <RiTwitterXLine className="text-gray-400 text-3xl cursor-pointer hover:text-[#58dda3] transition-all ease-in duration-300" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
