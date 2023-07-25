"use client";
import * as React from "react";
import Image from "next/image";
import trendingCoins from "@/stores/trendingCoins";

export default function ListCoins() {
  const store = trendingCoins();

  React.useEffect(() => {
    store.fetchCoins();
  });

  return (
    <ul className='space-y-2'>
      {store.coins.slice(0, 3).map((coin, index) => {
        const currentNumber = index + 1;
        return (
          <li
            key={coin.id}
            className='flex items-center justify-between pl-[14px] pr-[14px]'
          >
            <div className='flex items-center'>
              <span className='text-white'>{currentNumber}</span>
              <Image
                width='25'
                height='25'
                src={coin.image}
                alt={coin.name + "Icon"}
                className='ml-[10px] mr-[10px]'
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
  );
}
