import Image from "next/image";
import Maximize_Icon from "@/assets/maximize.svg";

interface CardCoinProps {
  img: string;
  name: string;
  price: number;
  percent: number;
}

export default function CardCoin(props: CardCoinProps) {
  const { img, name, price, percent } = props;
  const formattedPercent = Math.floor(percent);

  return (
    <div className='w-[367px] h-[298px] bg-[#151718] rounded-[34px] p-4 flex justify-between'>
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col'>
          <div className='w-12 h-12 rounded-full'>
            <Image width={48} height={48} src={img} alt={name + "Logo"} />
          </div>
          <span className='text-[#A1A1A1] py-4'>{name}</span>
          <span className='font-medium text-[28px] text-white'>
            {"$ " + price}
          </span>
        </div>
        <span className='text-[#2DC24E] text-xl'>
          {"+" + formattedPercent + "%"}{" "}
          <span className='text-[#A1A1A1] text-xs'>ATL to Current Price</span>
        </span>
      </div>
      <div>
        <Image src={Maximize_Icon} alt='Maximize Icon' />
      </div>
    </div>
  );
}
