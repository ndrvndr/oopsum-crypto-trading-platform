import CardListCoins from "@/components/Elements/ListCoins";
import Fire_Icon from "../../assets/fire.svg";
import HourGlass_Icon from "../../assets/hourglass.svg";

export default function TodaysPrice() {
  return (
    <section className='mt-[50px] max-w-[1180px]'>
      <p className='text-[#A1A1A1] italic'>
        Today&apos;s prices by CoinGecko & CoinMarketCap
      </p>
      <div className='flex justify-between w-full space-x-[18px]'>
        <CardListCoins icon={Fire_Icon} heading='Trending' />
        <CardListCoins icon={HourGlass_Icon} heading='Recently added' />
      </div>
    </section>
  );
}
