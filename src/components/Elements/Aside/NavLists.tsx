import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Dashboard_Icon from "@/assets/aside-assets/dashboard_icon.svg";
import Portfolio_Icon from "@/assets/aside-assets/portfolio_icon.svg";
import Trading_Icon from "@/assets/aside-assets/trade_icon.svg";
import Watchlist_Icon from "@/assets/aside-assets/watchlist_icon.svg";
import Academy_Icon from "@/assets/aside-assets/academy_icon.svg";
import Profile_Icon from "@/assets/aside-assets/profile_icon.svg";
import Wallet_Icon from "@/assets/aside-assets/wallet_icon.svg";

export default function NavList() {
  const pathname = usePathname();

  const NavLists = [
    { icon: Dashboard_Icon, name: "Dashboard", path: "/" },
    { icon: Portfolio_Icon, name: "Portfolio", path: "/portfolio" },
    { icon: Trading_Icon, name: "Trading", path: "/trading" },
    { icon: Watchlist_Icon, name: "Watchlist", path: "/watchlist" },
    { icon: Academy_Icon, name: "Academy", path: "/academy" },
    { icon: Profile_Icon, name: "Profile", path: "/profile" },
    { icon: Wallet_Icon, name: "Wallet", path: "/wallet" },
  ];
  return (
    <ul className='w-[181px] space-y-9'>
      {NavLists.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.path}
              className={`w-[178px] ${
                pathname === item.path
                  ? "flex items-center bg-white text-black rounded-[25px] border-4 border-solid border-[#77ED91] py-[2px] pl-[2px]"
                  : "flex items-center bg-transparent text-[#E1E1E1] rounded-[25px] border-4 border-solid border-transparent py-0 pl-[2px]"
              }`}
            >
              <div
                className={`${
                  pathname === item.path
                    ? "p-2 rounded-full bg-black"
                    : "py-0 pl-2 pr-2 rounded-full bg-transparent"
                }`}
              >
                <Image src={item.icon} alt={item.name + "Icon"} />
              </div>

              <span className='ml-4'>{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
