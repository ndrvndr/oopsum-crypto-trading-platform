import TrendingCoinsList from "../Elements/CardList/TrendingCoinsList";
import NftsList from "../Elements/CardList/nftsList";
import Link from "next/link";

export default function TodaysData() {
  return (
    <section className='mt-[50px] max-w-[1120px]'>
      <p className='text-[#A1A1A1] italic text-[26px]'>
        Today&apos;s Market Data by{" "}
        <Link href='https://www.coingecko.com/en/api' className='text-white'>
          CoinGecko
        </Link>
      </p>
      <div className='flex justify-between w-full space-x-[18px]'>
        <TrendingCoinsList />
        <NftsList />
      </div>
    </section>
  );
}
