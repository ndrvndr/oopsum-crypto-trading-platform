import axios from "axios";
import { create } from "zustand";

type Coin = {
  item: {
    coin_id: number;
    thumb: string;
    name: string;
    symbol: string;
    price_btc: number;
  };
};

interface TrendingCoins {
  coins: {
    id: number;
    image: string;
    name: string;
    symbol: string;
    price: number;
  }[];
  fetchCoins: () => Promise<void>;
}

const trendingCoins = create<TrendingCoins>((set) => ({
  coins: [],

  fetchCoins: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    const coins = res.data.coins.map((coin: Coin) => {
      return {
        id: coin.item.coin_id,
        image: coin.item.thumb,
        name: coin.item.name,
        symbol: coin.item.symbol,
        price: coin.item.price_btc,
      };
    });

    set({ coins });
  },
}));

export default trendingCoins;
