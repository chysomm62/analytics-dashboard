"use client";

import {
  ArrowRightIcon,
  BellIcon,
  BoxIcon,
  CalendarIcon,
  DashboardIcon,
  DiscountIcon,
  InfoCircleIcon,
  LogoutIcon,
  MoonIcon,
  ProfileIcon,
  SettingsIcon,
  SunIcon,
  TrendUpIcon,
  UserIcon,
} from "@/assets/icons";
import Tooltip from "@/ui/tool-tip";
import logo from "@/assets/images/logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "@/ui/search-bar";
import { FaAngleDown, FaAngleUp, FaPlus } from "react-icons/fa6";
import VerticalBar from "@/ui/charts/VerticalBar";

export default function Home() {
  const [active, setActive] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const router = useRouter();

  useEffect(() => {
    let _theme: any = window.localStorage.getItem("theme-name-analytics");

    setTheme(_theme ? _theme : "light");
  }, []);

  function handleTheme(
    _theme: any | ((prevState: "light" | "dark") => "light" | "dark")
  ) {
    setTheme(_theme);
    window.localStorage.setItem("theme-name-analytics", _theme);
  }

  const links = [
    {
      name: "Home",
      icon: DashboardIcon,
      slug: `/`,
    },
    {
      name: "Trend",
      icon: TrendUpIcon,
      slug: `/trend`,
    },
    {
      name: "Profiles",
      icon: ProfileIcon,
      slug: `/profiles`,
    },
    {
      name: "Box",
      icon: BoxIcon,
      slug: `/box`,
    },
    {
      name: "Discounts",
      icon: DiscountIcon,
      slug: `/discounts`,
    },
    {
      name: "Info",
      icon: InfoCircleIcon,
      slug: `/info`,
    },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const OtherLinks = [
    { name: "right", icon: ArrowRightIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Logout", icon: LogoutIcon },
  ];

  return (
    <main
      className={`w-full h-dvh ${
        theme === "dark" ? " bg-neutral-800" : "bg-neutral-50"
      }`}
    >
      <nav
        className={`sticky top-0 border-b ${
          theme === "dark"
            ? " border-slate-500 bg-neutral-900"
            : "border-slate-200 bg-neutral-50"
        }`}
      >
        <div className={`h-20 pl-20`}>
          <div className="flex items-center justify-between h-full px-5">
            <h1
              className={`${
                theme === "dark" ? "text-zinc-300" : "text-zinc-800"
              } text-lg sm:text-xl font-semibold font-plus_jakarta leading-7`}
            >
              Dashboard
            </h1>

            <div className="flex items-center gap-5">
              <div className="w-[200px] md:w-[350px]">
                <SearchBar theme={theme} />
              </div>
              <div
                className={`flex items-center gap-2 ${
                  theme === "dark" ? " text-zinc-400" : "text-zinc-800"
                }`}
              >
                <CalendarIcon className=" text-xl" />
                <p
                  className={`${
                    theme === "dark" ? " text-zinc-400" : "text-zinc-800"
                  } text-sm font-medium font-['Inter'] leading-snug`}
                >
                  {months[new Date().getMonth()]}&nbsp;{" "}
                  {new Date().getFullYear()}
                  ,&nbsp;
                  {new Date().getDay().toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </p>
              </div>

              <div
                className={`w-10 h-10 p-[11px] rounded-[27px] border border-zinc-300 justify-center items-center gap-1.5 inline-flex ${
                  theme === "dark" ? " text-zinc-400" : "text-zinc-800"
                }`}
              >
                <BellIcon className=" text-lg" />
              </div>

              <div
                className="flex items-center gap-3 px-2 py-1.5 border border-zinc-300 rounded-[28px] relative cursor-pointer"
                onClick={() => setShowPopup(!showPopup)}
              >
                {showPopup && (
                  <div
                    className={`absolute ${
                      theme === "dark" ? " bg-gray-700" : "bg-white"
                    } rounded-[10px] left-0 md:-left-14 top-16 w-[270px]`}
                    style={{ boxShadow: "2px 2px 100px 0px #00000033" }}
                  >
                    <div
                      className={`${
                        theme === "dark" ? " text-zinc-400" : "text-zinc-800"
                      } flex items-center justify-between border-b border-[#227549]/20 p-4`}
                    >
                      <p className="text-sm font-medium">Switch account</p>
                      <p className="text-xs font-light text-[#1CBD67]/50">
                        see all
                      </p>
                    </div>
                    <div className="px-3.5 py-2.5">
                      {Array.from(Array(3).keys()).map((workspace, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 border-b border-[#227549]/10 last:border-b-0 cursor-pointer p-2"
                        >
                          <div>
                            <UserIcon className=" text-4xl" />
                          </div>

                          <div>
                            <p
                              className={`${
                                theme === "dark"
                                  ? " text-zinc-400"
                                  : "text-zinc-800"
                              } text-base leading-tight font-normal font-['Inter']`}
                            >
                              Justin Bergson
                            </p>
                            <p className=" text-zinc-500 text-sm leading-tight font-normal font-['Inter']">
                              Justin@gmail.com
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`flex items-center justify-center gap-3 border-t border-[#227549]/20 p-4 text-sm cursor-pointer ${
                        theme === "dark" ? " text-zinc-400" : "text-zinc-800"
                      }`}
                    >
                      <FaPlus size={20} />
                      Create new account
                    </div>
                  </div>
                )}
                <div>
                  <UserIcon className=" text-4xl" />
                </div>

                <div>
                  <p
                    className={`text-zinc-800 text-base leading-tight font-normal font-['Inter'] ${
                      theme === "dark" ? " text-zinc-400" : "text-zinc-800"
                    }`}
                  >
                    Justin Bergson
                  </p>
                  <p className=" text-zinc-500 text-sm leading-tight font-normal font-['Inter']">
                    Justin@gmail.com
                  </p>
                </div>

                <div
                  className={`justify-self-end cursor-pointer ${
                    theme === "dark" ? " text-zinc-400" : "text-zinc-800"
                  }`}
                  onClick={() => setShowPopup(!showPopup)}
                >
                  {showPopup ? (
                    <FaAngleUp size={20} />
                  ) : (
                    <FaAngleDown size={20} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={`fixed top-0 left-0 bottom-0 h-full ${
          collapsed ? "w-64" : "w-20"
        } ${theme === "dark" ? " bg-neutral-800" : "bg-white"}`}
        style={{
          boxShadow:
            "1.6553467512130737px 1.6553467512130737px 12.41510009765625px 0px #0000000D",
        }}
      >
        <div
          className={`h-full flex flex-col ${
            theme === "dark" ? " bg-gray-800" : "bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-2 p-5 relative">
            <div>
              <div className="w-10 h-10 flex items-center justify-center relative">
                <Image
                  src={logo}
                  alt="company logo"
                  fill
                  sizes="100%"
                  className=" object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 overflow-y-hidden justify-between">
            <div className="overflow-y-auto ">
              <div className="pb-4 space-y-2">
                {links.map((link, i) => (
                  <motion.div
                    // initial={{ scale: 0 }}
                    // animate={{ scale: 1 }}
                    key={i}
                    onClick={() => (link.slug ? router.push(link.slug) : "")}
                    className={`w-full flex items-center justify-center rounded-lg ${
                      !collapsed && "justify-center"
                    } text-stone-400 hover:text-emerald-400 hover:bg-emerald-400/10 md:cursor-pointer border-r-[4px] py-1.5 ${
                      active.includes(link.slug)
                        ? "border-emerald-400"
                        : " border-transparent"
                    }`}
                  >
                    <link.icon
                      className={`text-2xl ${
                        active.includes(link.slug)
                          ? "text-emerald-400"
                          : "text-inherit"
                      }`}
                    />
                    {collapsed && <p className="text-sm">{link.name}</p>}
                    {!collapsed && <Tooltip message={link.name} />}
                  </motion.div>
                ))}
                <div
                  className="relative w-[46px] h-[92px] mx-auto"
                  style={{ marginTop: "20px" }}
                >
                  <div
                    style={{
                      boxShadow:
                        theme === "light"
                          ? "0px 0px 1px rgba(51, 51, 51, 0.8)"
                          : "0px 0px 1px rgba(255, 255, 255, 0.8)",
                    }}
                    className={`transition-all absolute overflow-hidden p-2 rounded-[100px] flex-col justify-start items-center gap-2 flex h-full w-full ${
                      theme === "light" ? "bg-white" : "bg-gray-900"
                    } flex items-center`}
                    onClick={() => {
                      if (theme === "dark") {
                        handleTheme("light");
                      } else {
                        handleTheme("dark");
                      }
                    }}
                  >
                    <div
                      className="left-0 top-0 absolute w-full h-2/4 md:cursor-pointer flex items-center justify-center"
                      // onClick={() => handleTheme("light")}
                    >
                      <SunIcon
                        className={`transition-all text-3xl  rounded-[94px]
                    `}
                      />
                    </div>
                    <div
                      className="top-[50%] absolute w-full h-2/4 md:cursor-pointer flex items-center justify-center"
                      // onClick={() => handleTheme("dark")}
                    >
                      <MoonIcon
                        className={`transition-all text-3xl rounded-[94px]`}
                      />
                    </div>
                    {/* <div
                      className={`transition-all bg-white relative ${
                        theme === "light"
                          ? "top-0"
                          : "top-[calc(100%-30px)] bg-[#333333]"
                      } h-[30px] w-[30px] rounded-full flex items-center justify-center`}
                    >
                      <SunIcon
                        className={`transition-all text-3xl  rounded-[94px]
                    `}
                      />

                      <MoonIcon
                        className={`transition-all text-3xl rounded-[94px]`}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-5 pb-4 space-y-2">
                {OtherLinks.map((link, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center rounded-lg w-full cursor-pointer hover:bg-emerald-400/10 hover:text-emerald-400 py-1.5 ${
                      active.includes(link.name)
                        ? "text-emerald-400"
                        : "text-stone-400"
                    }`}
                  >
                    <link.icon className={`text-2xl `} />
                    {collapsed && <p className="text-sm">{link.name}</p>}
                    {!collapsed && <Tooltip message={link.name} />}
                  </div>
                ))}
              </div>
            </div>
            <div className="py-3 bg-white/10"></div>
          </div>
        </div>
      </aside>

      <section className="ml-20 p-5">
        <div className="flex max-h-96">
          <VerticalBar />
        </div>
      </section>
    </main>
  );
}
