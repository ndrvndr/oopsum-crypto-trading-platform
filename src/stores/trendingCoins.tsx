import axios from "axios";
import { create } from "zustand";

const trendingCoins = create((set) => ({
  async function getTrendingCoins() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const data = await response.json();
  
    const mappedData = data.coins.map((coin: mappedCoin) => ({
      id: coin.item.coin_id,
      image: coin.item.thumb,
      name: coin.item.name,
      symbol: coin.item.symbol,
      price: coin.item.price_btc,
    }));
  
    return {
      data: mappedData,
      revalidate: 300,
    };
  }
}));

export default trendingCoins;
