import Play from "@/assets/academy/play.svg";
import Image from "next/image";

export default function PlayButton() {
  return (
    <div className='rounded-full bg-[#77ED91] w-fit p-4 absolute top-[68px] left-[106.5px]'>
      <Image src={Play} alt='Play Icon' />
    </div>
  );
}
