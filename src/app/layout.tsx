import "./globals.scss";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";
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

export const metadata: Metadata = {
  title: "oopsum",
  description: "Crypto Trading Platform",
};

const icons = [
  { name: "Dashboard", url: Dashboard_Icon },
  { name: "Portfolio", url: Portfolio_Icon },
  { name: "Trading", url: Trading_Icon },
  { name: "Watchlist", url: Watchlist_Icon },
  { name: "Academy", url: Academy_Icon },
  { name: "Profile", url: Profile_Icon },
  { name: "Wallet", url: Wallet_Icon },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='flex'>
          <aside>
            <div>
              <div className='mt-[35px] mb-[81px] ml-[30px]'>
                <Image src={Logo} alt='oopsom logo' />
              </div>
              <ul className='ml-[30px]'>
                {icons.map((icon, index) => (
                  <li key={index}>
                    <Image src={icon.url} alt={icon.name + "Icon"} />
                    <span className='ml-4'>{icon.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mb-[46px] ml-[30px]'>
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

          <nav className='pt-5 p-[30px] flex justify-between'>
            <div>
              <h1>Dashboard</h1>
              <p>Updated on 23 May 2023</p>
            </div>

            <div className='flex items-center'>
              <div className='search-box'>
                <div className='search-ic-container'>
                  <Image src={Search_Icon} alt='Search Icon' />
                </div>

                <input type='text' placeholder='Search your coins...' />
              </div>

              <div className='w-[50px] h-[50px] bg-[#151718] flex items-center justify-center rounded-full mr-[10px]'>
                <Image src={Notification_Icon} alt='Notification Icon' />
              </div>

              <div className='flex items-center justify-center'>
                <div className='w-[50px] h-[50px] bg-[#151718] rounded-full mr-3'></div>
                <span className='mr-2 text-white'>Alexim</span>
                <Image src={DropDown_Icon} alt='Drop Down Icon' />
              </div>
            </div>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
