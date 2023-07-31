"use client";
import Slider from "@mui/material/Slider";
import * as React from "react";

export default function QuickTradeCard() {
  const [isBuy, setIsBuy] = React.useState(true);

  const handleBuyClick = () => {
    setIsBuy(true);
  };

  const handleSellClick = () => {
    setIsBuy(false);
  };

  const [type, setType] = React.useState("limit");
  const handleClickLimit = () => {
    setType("limit");
  };
  const handleClickMarket = () => {
    setType("market");
  };
  const handleClickStopLimit = () => {
    setType("stopLimit");
  };

  return (
    <div className='w-[551px] h-[508px] bg-[#151718] rounded-[34px] pt-[19px] pr-4 pb-[30px] pl-4'>
      <div className='flex justify-between items-center'>
        <span className='text-white text-[26px]'>Quick trade</span>
        <button className='p-1 rounded-[33px] flex bg-[#212325]'>
          <span
            onClick={handleBuyClick}
            className={`font-medium text-sm py-[9px] px-10 rounded-3xl ${
              isBuy ? "text-[#1A1D1E] bg-white" : "text-white bg-transparent"
            }`}
          >
            Buy
          </span>
          <span
            onClick={handleSellClick}
            className={`font-medium text-sm py-[9px] px-10 rounded-3xl ${
              isBuy ? "text-white bg-transparent" : "text-[#1A1D1E] bg-white"
            }`}
          >
            Sell
          </span>
        </button>
      </div>

      <ul className='flex gap-x-2 mt-[18px]'>
        <li>
          <button
            onClick={handleClickLimit}
            className={`py-2 px-4 border border-solid border-[#E1E1E1] rounded-[20px] font-medium text-sm w-fit ${
              type === "limit" ? "bg-white" : "bg-transparent text-white"
            }`}
          >
            Limit
          </button>
        </li>
        <li>
          <button
            onClick={handleClickMarket}
            className={`py-2 px-4 border border-solid border-[#E1E1E1] rounded-[20px] font-medium text-sm w-fit ${
              type === "market" ? "bg-white" : "bg-transparent text-white"
            }`}
          >
            Market
          </button>
        </li>
        <li>
          <button
            onClick={handleClickStopLimit}
            className={`py-2 px-4 border border-solid border-[#E1E1E1] rounded-[20px] font-medium text-sm w-fit ${
              type === "stopLimit" ? "bg-white" : "bg-transparent text-white"
            }`}
          >
            Stop limit
          </button>
        </li>
      </ul>

      <div className='mt-[25px] flex flex-col items-center'>
        <div className='w-full bg-[#212325] rounded-[30px] pr-[14px] pl-[14px] pt-5 pb-5 flex justify-between items-center'>
          <span className='text-white'>Limit price</span>
          <span className='text-[#A1A1A1]'>$23,126.71</span>
        </div>

        <div className='w-full bg-[#212325] rounded-[30px] pr-[14px] pl-[14px] pt-5 pb-5 flex justify-between items-center mt-[10px]'>
          <span className='text-white'>Amount</span>
          <span className='text-white'>234 BTC</span>
        </div>

        <Slider
          defaultValue={30}
          valueLabelDisplay='auto'
          step={10}
          marks
          max={110}
          className='my-4 h-[10px]'
        />

        <div className='border border-solid border-[#272B2D] w-full'></div>
        <div className='w-full bg-[#212325] rounded-[30px] pr-[14px] pl-[14px] pt-5 pb-5 flex justify-between items-center mt-[20px]'>
          <span className='text-white'>Total</span>
          <span className='text-white'>$12,345.71</span>
        </div>

        <button className='px-[97px] py-[15.5px] bg-[#77ED91] rounded-[25px] mt-[30px] my-0 mx-auto'>
          Buy now
        </button>
      </div>
    </div>
  );
}
