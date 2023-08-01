import Image from "next/image";
import Description from "./Description";
import PlayButton from "@/components/Elements/AcademyCard/PlayButton";
import Level from "./Level";

interface AcademyCardProps {
  image: string;
  level: string;
  description: string;
  date: string;
  duration: string;
}

export default function AcademyCard(props: AcademyCardProps) {
  const { image, level, description, date, duration } = props;
  return (
    <div className='w-[265px] h-[278px] relative'>
      <Image src={image} alt='Image Preview Lesson' />
      <Level level={level} />
      <PlayButton />
      <Description description={description} date={date} duration={duration} />
    </div>
  );
}
