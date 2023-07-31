import Image from "next/image";
import Image_Logo from "../../../assets/logo.svg";

export default function Logo() {
  return (
    <div className='mb-[81px]'>
      <Image src={Image_Logo} alt='oopsom logo' />
    </div>
  );
}
