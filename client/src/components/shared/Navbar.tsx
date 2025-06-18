import { useState, type FC } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LiaSearchSolid } from "react-icons/lia";
import { PiBellRingingThin } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import type { NavItem } from "@/vite-env";

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Listing", path: "/listing" },
    { label: "Blog", path: "/blog" },
  ];

  const authLinks: NavItem[] = [
    { label: "Login", path: "/login" },
    { label: "Sign Up", path: "/signup", extraClass: "whitespace-nowrap" },
  ];

  const renderNavLink = (
    to: string,
    label: string,
    extraClass: string = "",
    isMobile: boolean = false
  ) => (
    <NavLink
      to={to}
      onClick={() => isMobile && setMobileMenuOpen(false)}
      className={({ isActive }: { isActive: boolean }) =>
        `font-bold font-jost text-xl ${extraClass} ${
          isActive
            ? "text-[#58dda3]"
            : isMobile
            ? "text-black hover:text-[#58dda3]"
            : "text-white hover:text-[#58dda3]"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="relative px-6 md:px-14 py-2 flex items-center justify-between shadow-xl">
      {/* Logo */}
      <div>
        <img src={logo} alt="Movie Library Logo" className="w-44" />
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-12">
        <ul className="flex gap-12">
          {navLinks?.map(({ label, path }) => (
            <li key={path}>{renderNavLink(path, label)}</li>
          ))}
        </ul>
      </div>

      {/* Search + Notification + Auth */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="flex w-full max-w-sm items-center">
          <Button
            type="submit"
            variant="link"
            className="bg-[#212020] border-0 rounded-r-none cursor-pointer text-white"
          >
            <LiaSearchSolid />
          </Button>
          <Input
            type="text"
            placeholder="Search..."
            className="bg-[#212020] border-l-0 rounded-l-none border-none outline-none shadow-none"
          />
        </div>
        <div>
          <PiBellRingingThin className="text-white text-3xl" />
        </div>
        <ul className="flex items-center gap-8">
          {authLinks?.map(({ label, path, extraClass }) => (
            <li key={path}>{renderNavLink(path, label, extraClass)}</li>
          ))}
          <li>
            <Button
              variant="outline"
              className="text-white bg-transparent border-white hover:border-[#58dda3] hover:text-white cursor-pointer text-lg"
            >
              Log out
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <HiMenu
        className="text-white text-3xl lg:hidden cursor-pointer"
        onClick={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-2/3 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-6 relative">
          <IoMdClose
            className="text-black text-3xl absolute top-6 right-6 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />

          <ul className="flex flex-col gap-6 mt-16">
            {navLinks?.map(({ label, path }) => (
              <li key={path}>{renderNavLink(path, label, "", true)}</li>
            ))}
            {authLinks?.map(({ label, path, extraClass }) => (
              <li key={path}>{renderNavLink(path, label, extraClass, true)}</li>
            ))}
            <li>
              <Button
                variant="outline"
                className="text-black bg-transparent border-black hover:border-[#58dda3] hover:text-black cursor-pointer text-lg"
              >
                Log out
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
