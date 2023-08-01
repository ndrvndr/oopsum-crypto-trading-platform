import CardCoin from "../Elements/CardCoin";
import Dropdown_Icon from "@/assets/aside-assets/dropDown.svg";
import Image from "next/image";

interface mappedCoin {
  id: string;
  image: string;
  name: string;
  current_price: number;
  atl_change_percentage: number;
}

interface Coin {
  id: string;
  image: string;
  name: string;
  current_price: number;
  atl_change_percentage: number;
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
    current_price: coin.current_price,
    atl_change_percentage: coin.atl_change_percentage,
  }));

  return {
    data: mappedData,
    revalidate: 10,
  };
}

export default async function TopCoins() {
  const topCoins = await getTopCoins();

  return (
    <section className='mt-[30px] mb-[30px] w-full max-w-[1120px]'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-white text-[26px]'>Top Coins</h1>
        <div className='w-[107px] h-[46px] rounded-[25px] border border-solid border-[#909093] flex justify-center items-center'>
          <div className='flex items-center justify-center'>
            <span className='text-white text-sm mr-[10px]'>All time</span>
            <div>
              <Image src={Dropdown_Icon} alt='Dropdown Icon' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex space-x-[10px]'>
        {topCoins.data.slice(0, 3).map((coin: Coin) => {
          return (
            <CardCoin
              key={coin.id}
              img={coin.image}
              name={coin.name}
              price={coin.current_price}
              percent={coin.atl_change_percentage}
            />
          );
        })}
      </div>
    </section>
  );
}
