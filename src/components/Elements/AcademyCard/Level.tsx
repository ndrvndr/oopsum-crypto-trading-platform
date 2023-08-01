interface LevelProp {
  level: string;
}

export default function Level(props: LevelProp) {
  return (
    <div className='px-3 py-2 w-fit bg-white bg-opacity-10 backdrop-blur-md rounded-[20px] absolute top-[14px] right-[14px]'>
      <span className='text-xs text-[#77ED91]'>{props.level}</span>
    </div>
  );
}
