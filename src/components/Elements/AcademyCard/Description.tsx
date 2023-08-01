interface DescriptionProps {
  description: string;
  date: string;
  duration: string;
}

export default function Description(props: DescriptionProps) {
  return (
    <div className='p-4 bg-white bg-opacity-5 backdrop-blur-2xl absolute bottom-0 rounded-b-[18px]'>
      <p className='text-white font-medium text-sm mb-[10px]'>
        {props.description}
      </p>
      <div className='text-[#A1A1A1] text-xs flex justify-between'>
        <span>{props.date}</span>
        <span>{props.duration}</span>
      </div>
    </div>
  );
}
