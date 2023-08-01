import LargeLogo from "@/assets/academy/largeLogo.svg";
import Looper from "@/assets/academy/looper.svg";
import Image from "next/image";

export default function SubscriptionCard() {
  return (
    <div className='bg-[#77ED91] w-[358px] h-[480px] rounded-[24px] flex flex-col justify-between items-center relative mb-10'>
      <Image src={Looper} alt='Looper Effects' />
      <Image
        src={LargeLogo}
        alt='Large Logo'
        className='absolute top-[48px] left-[119px]'
      />
      <p className='text-center leading-6 absolute bottom-[160px] max-w-[318px]'>
        Individuals can make informed decisions, mitigate risks, and unlock
        opportunities in the rapidly evolving landscape of cryptocurrencies and
        decentralized finance.
      </p>
      <button className='w-fit bg-white font-medium py-4 px-16 rounded-[28px] absolute bottom-[30px]'>
        Get premium
      </button>
    </div>
  );
}
