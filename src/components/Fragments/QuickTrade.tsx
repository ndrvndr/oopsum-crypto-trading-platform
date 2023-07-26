import HistoryCard from "../Elements/HistoryCard";
import QuickTradeCard from "../Elements/QuickTradeCard";

export default function QuickTrade() {
  return (
    <section className='mb-[30px] w-full max-w-[1120px] flex justify-between'>
      <QuickTradeCard />
      <HistoryCard />
    </section>
  );
}
