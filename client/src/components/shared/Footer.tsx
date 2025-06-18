import type { FC } from "react";
import logo from "@/assets/logo.png";
import { FiInstagram } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import bgImg from "@/assets/footerBg.png";
import { Link } from "react-router";

const Footer: FC = () => {
  const footerData = [
    {
      title: "Top Links",
      links: [
        { label: "Home", to: "/" },
        { label: "Animes", to: "/animes" },
        { label: "Blog", to: "/blog" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "Sign up", to: "/signup" },
        { label: "Login", to: "/login" },
        { label: "About Us", to: "/about" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Movies", to: "/movies" },
        { label: "Newsletter", to: "/newsletter" },
        { label: "Blog", to: "/blog" },
      ],
    },
    {
      title: "Security",
      links: [
        { label: "Terms and Condition", to: "/terms" },
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Contact us", to: "/contact" },
      ],
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center bg-no-repeat pt-16 pb-6 px-6 md:px-14"
    >
      {/* Main content */}
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-start gap-10 border-b border-gray-700 pb-10">
        {/* Left Section */}
        <div className="flex flex-col gap-6 col-span-2">
          <img src={logo} alt="logo" className="w-44" />
          <p className="text-white text-base leading-relaxed max-w-md">
            Stay connected with us and lets know more stories about new movies
            and More Explorer Us for get it.
          </p>
          <div className="flex items-center gap-4">
            {[FiInstagram, SlSocialFacebook, RiTwitterXLine]?.map(
              (Icon, idx) => (
                <div key={idx} className="bg-[#252121] p-2 rounded-md">
                  <Icon className="text-gray-400 text-2xl cursor-pointer hover:text-[#58dda3] transition-all duration-300" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Section */}

        {footerData.map((section, i) => (
          <div key={i} className="flex flex-col gap-4 items-start">
            <h1 className="text-white text-xl font-bold">{section.title}</h1>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={link.to}
                    className="text-white hover:text-[#58dda3] text-lg font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom copyright text */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        All rights reserved by M Library @{new Date().getFullYear()}.
      </div>
    </div>
  );
};

export default Footer;
