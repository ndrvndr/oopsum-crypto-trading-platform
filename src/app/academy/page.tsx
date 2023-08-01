import ListAcademyCard from "@/components/Fragments/ListAcademyCard";
import Image from "next/image";
import PicLive from "@/assets/academy/picLive.svg";
import SubscriptionCard from "@/components/Elements/Subscription";

export default function Academy() {
  return (
    <>
      <section className='w-full mt-[30px] flex flex-col max-w-[1120px]'>
        <div className='flex justify-between'>
          <span className='text-white text-[26px]'>Latest release</span>
          <span className='font-medium text-[#77ED91]'>See all</span>
        </div>
        <ListAcademyCard />
      </section>
      <section className='w-full mt-10 max-w-[1120px] flex justify-between'>
        <div>
          <span className='text-[26px] text-white'>Live Now</span>
          <Image src={PicLive} alt='Pic Live' className='mt-5' />
        </div>
        <SubscriptionCard />
      </section>
    </>
  );
}
