import * as React from "react";
import Image from "next/image";
import styles from "./listCoin.module.scss";
import ListCoins from "./ListCoins";

interface CardListCoinsProps {
  icon: string;
  heading: string;
}

export default function CardListCoins(props: CardListCoinsProps) {
  return (
    <div className={styles.list_coins}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={props.icon} alt='Fire Icon' />
          <h1>{props.heading}</h1>
        </div>

        <span className='text-[#77ED91] font-medium text-sm'>See all</span>
      </div>

      <ListCoins />
    </div>
  );
}
