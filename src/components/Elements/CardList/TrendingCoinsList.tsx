import * as React from "react";
import Image from "next/image";
import styles from "./cardList.module.scss";
import Fire_Icon from "../../../assets/fire.svg";
import axios from "axios";

interface mappedCoin {
  item: {
    coin_id: number;
    thumb: string;
    name: string;
    symbol: string;
    price_btc: number;
  };
}

interface Coin {
  id: number;
  image: string;
  name: string;
  symbol: string;
  price: number;
}

export async function getTrendingCoins() {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );

  const mappedData = response.data.coins.map((coin: mappedCoin) => ({
    id: coin.item.coin_id,
    image: coin.item.thumb,
    name: coin.item.name,
    symbol: coin.item.symbol,
    price: coin.item.price_btc,
  }));

  return {
    data: mappedData,
    revalidate: 300,
  };
}

export default async function TrendingCoinsList() {
  const trendingCoins = await getTrendingCoins();

  return (
    <div className={styles.card_list}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={Fire_Icon} alt='Fire Icon' />
          <h1>Trending</h1>
        </div>

        <span className='text-[#77ED91] font-medium text-sm'>See all</span>
      </div>

      <ul className='space-y-2'>
        {trendingCoins.data.slice(0, 5).map((coin: Coin, index: number) => {
          const listNumber = index + 1;
          return (
            <li
              key={coin.id}
              className='flex items-center justify-between pl-[14px] pr-[14px]'
            >
              <div className='flex items-center'>
                <span className='text-white'>{listNumber}</span>
                <Image
                  width={25}
                  height={25}
                  src={coin.image}
                  alt={coin.name + "Icon"}
                  className='ml-[10px] mr-[10px] w-auto h-auto'
                />
                <div>
                  <span className='ml-[] mr-1 text-white'>{coin.name}</span>
                  <span className='text-[#A1A1A1] text-xs'>{coin.symbol}</span>
                </div>
              </div>
              <span className='text-[#2DC24E]'>{coin.price + " BTC"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
