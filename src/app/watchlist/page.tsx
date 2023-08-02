import Dropdown_Icon from "@/assets/aside-assets/dropDown.svg";
import Edit_Icon from "@/assets/watchlist/edit-2.svg";
import Add_Icon from "@/assets/watchlist/add.svg";
import AddWhite_Icon from "@/assets/watchlist/addWhite.svg";
import Share_Icon from "@/assets/watchlist/export.svg";
import More_Icon from "@/assets/watchlist/more.svg";
import moreVertical from "@/assets/watchlist/moreVertical.svg";
import Info_Icon from "@/assets/watchlist/info-circle.svg";
import Star_Icon from "@/assets/watchlist/star.svg";
import Drag_Icon from "@/assets/watchlist/drag.svg";
import upPercent_Icon from "@/assets/watchlist/upPercent.svg";
import downPercent_Icon from "@/assets/watchlist/downPercent.svg";
import Image from "next/image";

interface mappedCoin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

interface Coin {
  id: string;
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

export async function getTopCoins() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
  );
  const data = await response.json();

  const mappedData = data.map((coin: mappedCoin) => ({
    id: coin.id,
    image: coin.image,
    name: coin.name,
    symbol: coin.symbol,
    current_price: coin.current_price,
    price_change_percentage_24h: coin.price_change_percentage_24h,
    market_cap: coin.market_cap,
    total_volume: coin.total_volume,
  }));

  return {
    data: mappedData,
    revalidate: 10,
  };
}

export default async function Watchlist() {
  const topCoins = await getTopCoins();

  return (
    <section className='w-full mt-[30px] flex flex-col max-w-[1120px]'>
      <div className='flex justify-between'>
        <div>
          <span className='py-1 px-2 bg-[#77ED91] rounded-[12px]'>Primary</span>
          <span className='text-white text-[26px] flex mt-4'>
            <span className='mr-2'>My coins list</span>
            <Image src={Dropdown_Icon} alt='Dropdown Icon' />
          </span>
        </div>

        <div className='flex'>
          <button className='flex bg-[#1A1D1E] px-6 rounded-[28px] items-center mr-[10px]'>
            <Image src={Edit_Icon} alt='Edit Icon' />
            <span className='font-medium text-white ml-1'>Edit</span>
          </button>
          <button className='flex bg-[#77ED91] px-6 rounded-[28px] items-center'>
            <Image src={Add_Icon} alt='Edit Icon' />
            <span className='font-medium ml-1'>New watchlist</span>
          </button>
        </div>
      </div>

      <div className='mt-[43px] w-full flex flex-col'>
        <div className='flex self-end mb-5'>
          <button className='flex bg-[#1A1D1E] py-[7px] pl-[10px] pr-[14px] rounded-[28px] items-center'>
            <Image src={AddWhite_Icon} alt='Add Icon' />
            <span className='font-medium text-sm text-white ml-1'>
              Add coins
            </span>
          </button>
          33
          <button className='flex bg-[#1A1D1E] py-[7px] pl-[10px] pr-[14px] rounded-[28px] items-center mx-[10px]'>
            <Image src={Share_Icon} alt='Share Icon' />
            <span className='font-medium text-sm text-white ml-1'>Share</span>
          </button>
          <button className='flex bg-[#1A1D1E] py-[7px] pl-[10px] pr-[14px] rounded-[28px] items-center'>
            <Image src={More_Icon} alt='Share Icon' />
            <span className='font-medium text-sm text-white ml-1'>More</span>
          </button>
        </div>

        <div className='mb-[135px]'>
          <div
            className='w-full h-[42px] bg-[#1A1D1E] border-y-2 border-solid
         border-[#212325] flex items-center'
          >
            <span className='text-white font-medium text-xs w-[42px] text-end'>
              #
            </span>
            <span className='text-white font-medium text-xs w-[222px] pl-4'>
              Name
            </span>
            <span className='text-white font-medium text-xs w-[129px] text-end'>
              Price
            </span>
            <span className='text-white font-medium text-xs w-[101px] text-end'>
              24H
            </span>
            <span className='text-white font-medium text-xs w-[80px] text-end'>
              7D
            </span>
            <span className='text-white font-medium text-xs w-[149px] flex items-center justify-center'>
              <span>Market cap</span>
              <Image src={Info_Icon} alt='Info Icon' className='ml-1' />
            </span>
            <span className='text-white font-medium text-xs w-[147px] flex items-center justify-center'>
              Volume <Image src={Info_Icon} alt='Info Icon' className='ml-1' />
            </span>
            <span className='text-white font-medium text-xs w-[126px] text-end'>
              Last 7 days
            </span>
            <span className='text-white font-medium text-xs w-[115px] text-end'>
              Actions
            </span>
          </div>

          {topCoins.data.map((coin: Coin, index: number) => {
            const number = index + 1;
            const formattedSymbol = String(coin.symbol).toLocaleUpperCase();
            const formattedPrice = Number(coin.current_price).toLocaleString();
            const formattedMarketCap = Number(coin.market_cap).toLocaleString();
            const formattedTotalVolume = Number(
              coin.total_volume
            ).toLocaleString();
            const formattedPercent = Number(
              coin.price_change_percentage_24h
            ).toLocaleString();

            return (
              <div
                key={coin.id}
                className='w-full h-[62px] border-b-2 border-solid
           border-[#212325] flex items-center'
              >
                <span className='text-white font-medium text-xs w-[42px] flex justify-end items-center'>
                  <Image src={Star_Icon} alt='Star Icon' />
                  <span className='ml-[10px]'>{number}</span>
                </span>
                <span className='text-white font-medium text-xs w-[222px] pl-4 flex items-center'>
                  <Image
                    width={24}
                    height={24}
                    src={coin.image}
                    alt={coin.name + "Logo"}
                  />
                  <span className='ml-[10px]'>{coin.name}</span>
                  <span className='text-xs text-[#A1A1A1] ml-1'>
                    {formattedSymbol}
                  </span>
                </span>
                <span className='text-white font-medium text-xs w-[129px] text-end'>
                  {"$" + formattedPrice}
                </span>
                <span
                  className={`text-${
                    coin.price_change_percentage_24h >= 0
                      ? "[#2DC24E]"
                      : "[#F92C2C]"
                  } font-medium text-xs w-[101px] flex justify-end`}
                >
                  <div className='flex items-center'>
                    <Image
                      src={
                        coin.price_change_percentage_24h >= 0
                          ? upPercent_Icon
                          : downPercent_Icon
                      }
                      alt='Up Percent Icon'
                      className='mr-1'
                    />
                    {formattedPercent + "%"}
                  </div>
                </span>
                <span className='text-[#2DC24E] font-medium text-xs w-[80px] text-end'>
                  -
                </span>
                <span className='text-white font-medium text-xs w-[149px] flex items-center justify-center'>
                  {"$" + formattedMarketCap}
                </span>
                <span className='text-white font-medium text-xs w-[147px] flex items-center justify-center'>
                  {formattedTotalVolume}
                </span>
                <span className='text-white font-medium text-xs w-[126px] text-end'>
                  CHART
                </span>
                <span className='text-white font-medium text-xs w-[115px] flex justify-end'>
                  <button className='h-fit border border-solid border-[#212325] rounded-full p-1 mr-[10px]'>
                    <Image src={Drag_Icon} alt='Drag Icon' />
                  </button>
                  <button className='h-fit border border-solid border-[#212325] rounded-full flex p-1'>
                    <Image src={moreVertical} alt='More Icon' />
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
