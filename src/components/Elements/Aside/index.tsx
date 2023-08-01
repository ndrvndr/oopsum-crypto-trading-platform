import Image from "next/image";
import Logo from "./Logo";
import NavList from "./NavLists";
import Logout_Icon from "@/assets/aside-assets/logout.svg";
import Sun_Icon from "@/assets/aside-assets/sun.svg";
import Moon_Icon from "@/assets/aside-assets/moon.svg";

export default function Aside() {
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
          <button className='sun-container'>
            <Image src={Sun_Icon} alt='Sun Icon' />
          </button>
          <button className='moon-container'>
            <Image src={Moon_Icon} alt='Moon Icon' />
          </button>
        </div>
      </div>
    </aside>
  );
}
