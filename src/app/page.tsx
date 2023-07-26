import QuickTrade from "@/components/Fragments/QuickTrade";
import TodaysData from "@/components/Fragments/TodaysData";
import TopCoins from "@/components/Fragments/TopCoins";

export default function Home() {
  return (
    <>
      <TodaysData />
      <TopCoins />
      <QuickTrade />
    </>
  );
}
