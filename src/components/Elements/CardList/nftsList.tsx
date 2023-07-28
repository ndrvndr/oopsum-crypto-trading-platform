import * as React from "react";
import Image from "next/image";
import styles from "./cardList.module.scss";
import Nft_Icon from "../../../assets/icons-nft.png";
import axios from "axios";

interface Nft {
  id: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
  contract_address: string;
}

export async function getNftsList() {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/nfts/list?per_page=7&page=1"
  );

  return {
    response: response.data,
    revalidate: 300,
  };
}

export default async function NftsList() {
  const nftsList = await getNftsList();

  function truncateAddress(address: string) {
    return `${address.slice(0, 10)}...${address.slice(-8)}`;
  }

  return (
    <div className={styles.card_list}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={Nft_Icon} alt='Fire Icon' />
          <h1>NFT</h1>
        </div>

        <span className='text-[#77ED91] font-medium text-sm'>See all</span>
      </div>

      <ul className='space-y-2'>
        {nftsList.response.slice(0, 5).map((nft: Nft, index: number) => {
          const listNumber = index + 1;
          return (
            <li
              key={nft.id}
              className='flex items-center justify-between pl-[14px] pr-[14px]'
            >
              <div className='flex items-center'>
                <span className='text-white'>{listNumber}</span>
                <span className='ml-[10px] mr-[10px] text-white'>
                  {nft.symbol}
                </span>
                <div>
                  <span className='ml-[] mr-1 text-white'>{nft.name}</span>
                  <span className='text-[#A1A1A1] text-xs'>
                    {nft.asset_platform_id}
                  </span>
                </div>
              </div>
              <span className='text-[#2DC24E]'>
                {truncateAddress(nft.contract_address)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
