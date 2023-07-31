"use client";
import "./globals.scss";
import type { Metadata } from "next";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Profile from "../assets/profile.svg";
import Logout_Icon from "../assets/aside-assets/logout.svg";
import Sun_Icon from "../assets/aside-assets/sun.svg";
import Moon_Icon from "../assets/aside-assets/moon.svg";
import Search_Icon from "../assets/aside-assets/search.svg";
import Notification_Icon from "../assets/aside-assets/notification.svg";
import DropDown_Icon from "../assets/aside-assets/dropDown.svg";

import Dashboard_Icon from "../assets/aside-assets/dashboard_icon.svg";
import Portfolio_Icon from "../assets/aside-assets/portfolio_icon.svg";
import Trading_Icon from "../assets/aside-assets/trade_icon.svg";
import Watchlist_Icon from "../assets/aside-assets/watchlist_icon.svg";
import Academy_Icon from "../assets/aside-assets/academy_icon.svg";
import Profile_Icon from "../assets/aside-assets/profile_icon.svg";
import Wallet_Icon from "../assets/aside-assets/wallet_icon.svg";
import * as React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "oopsum",
  description: "Crypto Trading Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentDate, setCurrentDate] = React.useState("");

  React.useEffect(() => {
    const date = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(date);
  }, []);

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <html lang='en'>
      <body>
        <div className='flex'>
          <aside>
            <div>
              <div className='mb-[81px]'>
                <Image src={Logo} alt='oopsom logo' />
              </div>
              <ul className='w-[181px] space-y-9'>
                <li>
                  <Link
                    href='/'
                    className={`w-[178px] ${
                      currentPath === "/"
                        ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                        : "flex item-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
                    }`}
                  >
                    <div
                      className={`${
                        currentPath === "/"
                          ? "p-2 rounded-full bg-black"
                          : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                      }`}
                    >
                      <Image src={Dashboard_Icon} alt='Dashboard Icon' />
                    </div>

                    <span className='ml-4'>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href='/portfolio'
                    className={`w-[178px] ${
                      currentPath === "/portfolio"
                        ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                        : "flex items-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
                    }`}
                  >
                    <div
                      className={`${
                        currentPath === "/portfolio"
                          ? "p-2 rounded-full bg-black"
                          : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                      }`}
                    >
                      <Image src={Portfolio_Icon} alt='Dashboard Icon' />
                    </div>

                    <span className='ml-4'>Portfolio</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href='/trading'
                    className={`w-[178px] ${
                      currentPath === "/trading"
                        ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                        : "flex items-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
                    }`}
                  >
                    <div
                      className={`${
                        currentPath === "/trading"
                          ? "p-2 rounded-full bg-black"
                          : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                      }`}
                    >
                      <Image src={Trading_Icon} alt='Dashboard Icon' />
                    </div>

                    <span className='ml-4'>Trading</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href='/watchlist'
                    className={`w-[178px] ${
                      currentPath === "/watchlist"
                        ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                        : "flex items-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
                    }`}
                  >
                    <div
                      className={`${
                        currentPath === "/watchlist"
                          ? "p-2 rounded-full bg-black"
                          : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                      }`}
                    >
                      <Image src={Watchlist_Icon} alt='Dashboard Icon' />
                    </div>

                    <span className='ml-4'>Watchlist</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href='/academy'
                    className={`w-[178px] ${
                      currentPath === "/academy"
                        ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                        : "flex items-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
                    }`}
                  >
                    <div
                      className={`${
                        currentPath === "/academy"
                          ? "p-2 rounded-full bg-black"
                          : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                      }`}
                    >
                      <Image src={Academy_Icon} alt='Dashboard Icon' />
                    </div>

                    <span className='ml-4'>Academy</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href='/profile'
                    className={`w-[178px] ${
                      currentPath === "/profile"
                        ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                        : "flex items-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
                    }`}
                  >
                    <div
                      className={`${
                        currentPath === "/profile"
                          ? "p-2 rounded-full bg-black"
                          : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                      }`}
                    >
                      <Image src={Profile_Icon} alt='Dashboard Icon' />
                    </div>

                    <span className='ml-4'>Profile</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href='/wallet'
                    className={`w-[178px] ${
                      currentPath === "/wallet"
                        ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                        : "flex items-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
                    }`}
                  >
                    <div
                      className={`${
                        currentPath === "/wallet"
                          ? "p-2 rounded-full bg-black"
                          : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                      }`}
                    >
                      <Image src={Wallet_Icon} alt='Dashboard Icon' />
                    </div>

                    <span className='ml-4'>Wallet</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className='logout-button'>
                <Image src={Logout_Icon} alt='Logout Icon' />
                <span>Logout</span>
              </div>

              <div className='darkMode-button'>
                <div className='sun-container'>
                  <Image src={Sun_Icon} alt='Sun Icon' />
                </div>
                <div className='moon-container'>
                  <Image src={Moon_Icon} alt='Moon Icon' />
                </div>
              </div>
            </div>
          </aside>

          <div className='flex flex-col w-full h-fit pl-[30px] pr-[30px]'>
            <nav className='flex justify-between h-[90px] sticky top-0 bg-[#0D0D0D]'>
              <div>
                <h1>Dashboard</h1>
                <p>Updated on {currentDate}</p>
              </div>

              <div className='flex items-center'>
                <div className='search-box'>
                  <button className='search-ic-container'>
                    <Image src={Search_Icon} alt='Search Icon' />
                  </button>

                  <input
                    type='text'
                    placeholder='Search your coins...'
                    className='w-[50%] text-white'
                  />
                </div>

                <button className='w-[50px] h-[50px] bg-[#151718] flex items-center justify-center rounded-full mr-[10px]'>
                  <Image src={Notification_Icon} alt='Notification Icon' />
                </button>

                <div className='flex items-center justify-center'>
                  <div className='bg-[#151718] rounded-full mr-3'>
                    <Image
                      src={Profile}
                      width={50}
                      height={50}
                      alt='Profile Icon'
                    />
                  </div>
                  <span className='mr-2 text-white'>Alexim</span>
                  <Image src={DropDown_Icon} alt='Drop Down Icon' />
                </div>
              </div>
            </nav>

            <main className='flex flex-col items-center justify-center'>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
