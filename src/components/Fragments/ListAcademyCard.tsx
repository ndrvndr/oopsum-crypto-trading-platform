import AcademyCard from "../Elements/AcademyCard";
import pic1 from "@/assets/academy/pic1.svg";
import pic2 from "@/assets/academy/pic2.svg";
import pic3 from "@/assets/academy/pic3.svg";
import pic4 from "@/assets/academy/pic4.svg";

export default function ListAcademyCard() {
  return (
    <div className='mt-[23px] flex justify-between'>
      <AcademyCard
        image={pic1}
        level='Beginner'
        description='How you can transfer your fund balance?'
        date='Sep 2, 2022'
        duration='10m'
      />
      <AcademyCard
        image={pic2}
        level='Beginner'
        description='What are other functions of crypto currencies?'
        date='Sep 2, 2022'
        duration='15m'
      />
      <AcademyCard
        image={pic3}
        level='Advance'
        description='What are NFT games and how do they work?'
        date='Sep 2, 2022'
        duration='5m'
      />
      <AcademyCard
        image={pic4}
        level='Advance'
        description='What is QuickSwap and how does it work?'
        date='Sep 2, 2022'
        duration='5m'
      />
    </div>
  );
}
