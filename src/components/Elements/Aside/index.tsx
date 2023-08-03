"use client";
import Image from "next/image";
import Logo from "./Logo";
import NavList from "./NavLists";
import Logout_Icon from "@/assets/aside-assets/logout.svg";
import { BsSun, BsMoon } from "react-icons/bs";
import * as React from "react";

export default function Aside() {
  const [isDark, setIsDark] = React.useState(true);
  const handleClickButton = () => {
    setIsDark(!isDark);
  };
  return (
    <aside>
      <div>
        <Logo />
        <NavList />
      </div>

      <div>
        <button className='logout-button'>
          <Image src={Logout_Icon} alt='Logout Icon' />
          <span>Logout</span>
        </button>

        <div className='darkMode-button'>
          <button
            onClick={handleClickButton}
            className={`sun-container ${
              isDark ? "bg-transparent text-white" : "bg-[#fae529]"
            }`}
          >
            <BsSun size={14} />
          </button>
          <button
            onClick={handleClickButton}
            className={`moon-container ${
              isDark ? "bg-[#fae529]" : "bg-transparent text-white"
            }`}
          >
            <BsMoon size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
