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
  ProfileIcon,
  SettingsIcon,
  TrendUpIcon,
  UserIcon,
} from "@/assets/icons";
import Tooltip from "@/ui/tool-tip";
import logo from "@/assets/images/logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

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

  const OtherLinks = [
    { name: "right", icon: ArrowRightIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Logout", icon: LogoutIcon },
  ];

  const workspaces = [
    { name: "Access Bank PLC", type: "Corprate", profiles: "7", initial: "AB" },
    {
      name: "Smart Business Ltd",
      type: "Corprate",
      profiles: "17",
      initial: "SB",
    },
    {
      name: "Fix the PIP Men Limited",
      type: "Corprate",
      profiles: "92",
      initial: "FP",
    },
    { name: "Bigbenz Group", type: "Corprate", profiles: "44", initial: "BG" },
    {
      name: "Codelog Technologies Limited",
      type: "Corprate",
      profiles: "20",
      initial: "CT",
    },
  ];

  return (
    <main className="w-full h-full">
      <nav
        className={`sticky top-0 bg-white border-b border-slate-200`}
        style={{
          boxShadow:
            "1.8042941093444824px 1.8042941093444824px 13.532205581665039px 0px #0000000D",
        }}
      >
        <div className={`h-20 pl-24`}>
          <div className="flex items-center justify-between h-full px-9">
            <h1 className="text-zinc-800 text-lg sm:text-xl font-semibold font-plus_jakarta leading-7">
              Dashboard
            </h1>

            {/* <SearchBar className="w-[200px] md:w-[226px]" /> */}
            <div className="flex items-center gap-7">
              <CalendarIcon className=" text-2xl" />
              <BellIcon className=" text-2xl" />
              <UserIcon className=" text-2xl" />
            </div>
          </div>
        </div>
      </nav>
      <aside
        className={`fixed top-0 left-0 bottom-0 h-full ${
          collapsed ? "w-64" : "w-20"
        } bg-white`}
        style={{
          boxShadow:
            "1.6553467512130737px 1.6553467512130737px 12.41510009765625px 0px #0000000D",
        }}
      >
        <div className="h-full flex flex-col ">
          <div className="flex items-center gap-2 p-5 border-b border-[#C7C7CA] relative">
            {showPopup && (
              <div
                className="absolute bg-white rounded-[10px] left-16 top-14 w-[300px]"
                style={{ boxShadow: "2px 2px 100px 0px #00000033" }}
              >
                <div className="flex items-center justify-between border-b border-[#227549]/20 p-4">
                  <p className="text-sm font-medium">Switch workspaces</p>
                  <p className="text-xs font-light text-[#1CBD67]/50">
                    see all
                  </p>
                </div>
                <div className="px-3.5 py-2.5">
                  {workspaces.map((workspace, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-b border-[#227549]/10 last:border-b-0 cursor-pointer p-2"
                    >
                      <div>
                        <div className=" rounded-md bg-[#1CBD67] w-10 h-10 flex items-center justify-center text-sm ">
                          {workspace.initial}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-1">
                          {workspace.name}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <p className="font-light text-xs">
                            {workspace.profiles} Profile(s)
                          </p>
                          <div className="rounded-md bg-[#E4EDFF] text-[8px] text-[#1D5FE0] px-3">
                            {workspace.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
          <div className="flex flex-col flex-1 h-full overflow-y-auto ">
            <div className="flex-1 py-5">
              {links.map((link, i) => (
                <motion.div
                  // initial={{ scale: 0 }}
                  // animate={{ scale: 1 }}
                  key={i}
                  onClick={() => (link.slug ? router.push(link.slug) : "")}
                  className={`w-full h-[50px] flex items-center ${
                    !collapsed && "justify-center"
                  } hover:bg-green-100 md:cursor-pointer gap-2.5 px-5 border-r-[4px] ${
                    active.includes(link.slug)
                      ? "border-[#1CBD67]"
                      : " border-transparent"
                  }`}
                >
                  <link.icon
                    className={`text-2xl ${
                      active.includes(link.slug)
                        ? "text-[#1CBD67]"
                        : "text-black"
                    }`}
                  />
                  {collapsed && <p className="text-sm">{link.name}</p>}
                  {!collapsed && <Tooltip message={link.name} />}
                </motion.div>
              ))}
            </div>
            <div
              className="bg-[#F2F5F3] rounded-t-2xl"
              style={{
                boxShadow:
                  "3.5935423374176025px 3.5935423374176025px 7.187084674835205px 0px #0000001A",
              }}
            >
              <div className="p-5 pb-0">
                {OtherLinks.map((link, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 py-1.5 px-2.5 rounded-lg w-full cursor-pointer hover:bg-[#E1E7E3] mb-1.5"
                  >
                    <link.icon
                      className={`text-[18px] ${
                        active.includes(link.name)
                          ? "text-[#1CBD67]"
                          : "text-black"
                      }`}
                    />
                    {collapsed && <p className="text-sm">{link.name}</p>}
                    {!collapsed && <Tooltip message={link.name} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
