"use client";
import Edit_Icon from "@/assets/watchlist/edit-2.svg";
import Add_Icon from "@/assets/watchlist/add.svg";
import AddWhite_Icon from "@/assets/Portfolio/add.svg";
import moreVertical from "@/assets/watchlist/moreVertical.svg";
import Btc_Logo from "@/assets/Portfolio/btc-logo.svg";
import Image from "next/image";
import * as React from "react";

export default function Portfolio() {
  const [type, setType] = React.useState("allocation");
  const handleClickChart = () => {
    setType("chart");
  };
  const handleClickAllocation = () => {
    setType("allocation");
  };
  const handleClickStatistics = () => {
    setType("statistics");
  };

  return (
    <section className='w-full mt-[30px] flex flex-col max-w-[1120px]'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <span className='text-xs font-light italic text-[#E1E1E1]'>
            Current balance
          </span>
          <span className='font-medium text-[28px] text-white my-2'>
            $2,77,308.00
          </span>
          <span className='text-[#F92C2C] text-sm'>
            -$1200.78 (-1.89%)
            <span className='text-white px-2 py-[2px] bg-[#1A1D1E] rounded-[14px]'>
              24H
            </span>
          </span>
        </div>

        <div className='flex'>
          <button className='h-fit flex bg-[#1A1D1E] pt-[10px] pr-6 pb-[10px] pl-6 rounded-[28px] items-center mr-[10px]'>
            <Image src={Edit_Icon} alt='Edit Icon' />
            <span className='font-medium text-white ml-1'>Edit</span>
          </button>
          <button className='h-fit flex bg-[#77ED91] pt-[10px] pr-6 pb-[10px] pl-6 rounded-[28px] items-center'>
            <Image src={Add_Icon} alt='Edit Icon' />
            <span className='font-medium ml-1'>Add transaction</span>
          </button>
        </div>
      </div>

      <div className='flex gap-x-[48px] mt-8'>
        <div className='flex flex-col'>
          <span className='text-[#E1E1E1] text-xs font-light italic'>
            All time profit
          </span>
          <span className='text-[#2DC24E] mt-1'>2.52% (+$324.82)</span>
        </div>

        <div className='flex flex-col'>
          <span className='text-[#E1E1E1] text-xs font-light italic'>
            Best performer
          </span>
          <span className='text-[#2DC24E] mt-1'>10.52% (+$627.82)</span>
        </div>

        <div className='flex flex-col'>
          <span className='text-[#E1E1E1] text-xs font-light italic'>
            Worst performer
          </span>
          <span className='text-[#F92C2C] mt-1'>1.23% (-$87.32)</span>
        </div>
      </div>

      <div className='space-x-2 mt-8'>
        <button
          onClick={handleClickChart}
          className={`px-4 py-2 rounded-[20px] border border-solid ${
            type === "chart"
              ? "text-black border-white bg-white"
              : "text-white border-[#E1E1E1] bg-transparent"
          } `}
        >
          Chart
        </button>
        <button
          onClick={handleClickAllocation}
          className={`px-4 py-2 rounded-[20px] border border-solid ${
            type === "allocation"
              ? "text-black border-white bg-white"
              : "text-white border-[#E1E1E1] bg-transparent"
          } `}
        >
          Allocation
        </button>
        <button
          onClick={handleClickStatistics}
          className={`px-4 py-2 rounded-[20px] border border-solid ${
            type === "statistics"
              ? "text-black border-white bg-white"
              : "text-white border-[#E1E1E1] bg-transparent"
          } `}
        >
          Statistics
        </button>
      </div>

      <div className='w-full h-[34px] mt-[30px] mb-[60px]'></div>

      <div>
        <span className='text-white text-[26px]'>Your holdings</span>

        <div
          className='w-full h-[42px] bg-[#1A1D1E] border-y-2 border-solid
         border-[#212325] flex items-center mt-6 px-[10px]'
        >
          <span className='text-white font-medium text-xs w-[299px] text-start'>
            Assets
          </span>
          <span className='text-white font-medium text-xs w-[86px] text-end'>
            Price
          </span>
          <span className='text-white font-medium text-xs w-[116px] text-end'>
            24H
          </span>
          <span className='text-white font-medium text-xs w-[136px] text-end'>
            Balance
          </span>
          <span className='text-white font-medium text-xs w-[148px] text-end'>
            Avg buy
          </span>
          <span className='text-white font-medium text-xs w-[162px] text-end'>
            Profit/Loss
          </span>
          <span className='text-white font-medium text-xs w-[153px] text-end'>
            Actions
          </span>
        </div>

        <div
          className='w-full h-[62px] border-b-2 border-solid
         border-[#212325] flex items-center px-[10px]'
        >
          <span className='text-white font-medium text-xs w-[299px] text-start flex items-center'>
            <Image src={Btc_Logo} alt='BTC Logo' />
            <span className='mr-1 ml-[10px]'>Bitcoin</span>
            <span className='text-xs text-[#A1A1A1]'>BTC</span>
          </span>
          <span className='text-white font-medium text-xs w-[86px] text-end'>
            $26,735.59
          </span>
          <span className='text-white font-medium text-xs w-[116px] text-end'>
            5.12%
          </span>
          <span className='text-white font-medium text-xs w-[136px] text-end'>
            233
          </span>
          <span className='text-white font-medium text-xs w-[148px] text-end'>
            $22,456
          </span>
          <span className='text-white font-medium text-xs w-[162px] text-end'>
            -$234.80
          </span>
          <span className='text-white font-medium text-xs w-[153px] flex justify-end'>
            <button className='h-fit border border-solid border-[#212325] rounded-full p-1 mr-[10px]'>
              <Image src={AddWhite_Icon} alt='Drag Icon' />
            </button>
            <button className='h-fit border border-solid border-[#212325] rounded-full flex p-1'>
              <Image src={moreVertical} alt='More Icon' />
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}
