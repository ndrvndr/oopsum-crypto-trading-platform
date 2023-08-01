import pic1 from "@/assets/academy/pic1.svg";
import Image from "next/image";
import Description from "./Description";
import PlayButton from "@/components/Elements/AcademyCard/PlayButton";
import Level from "./Level";

export default function AcademyCard() {
  return (
    <div className='w-[265px] h-[278px] relative'>
      <Image src={pic1} alt='Pic 1' />
      <Level />
      <PlayButton />
      <Description />
    </div>
  );
}
