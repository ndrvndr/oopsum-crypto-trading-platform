import * as React from "react";
import Image from "next/image";
import Profile from "../../../assets/profile.svg";
import Search_Icon from "../../../assets/aside-assets/search.svg";
import Notification_Icon from "../../../assets/aside-assets/notification.svg";
import DropDown_Icon from "../../../assets/aside-assets/dropDown.svg";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [currentDate, setCurrentDate] = React.useState("");

  const pathName = usePathname();
  let modifiedPathName;

  if (pathName === "/") {
    modifiedPathName = "Dashboard";
  } else {
    modifiedPathName = pathName.charAt(1).toUpperCase() + pathName.slice(2);
  }

  React.useEffect(() => {
    const date = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(date);
  }, []);

  return (
    <header className='flex justify-between h-[90px] sticky top-0 bg-[#0D0D0D]'>
      <div>
        <h1>{modifiedPathName}</h1>
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
            <Image src={Profile} width={50} height={50} alt='Profile Icon' />
          </div>
          <span className='mr-2 text-white'>Alexim</span>
          <Image src={DropDown_Icon} alt='Drop Down Icon' />
        </div>
      </div>
    </header>
  );
}
