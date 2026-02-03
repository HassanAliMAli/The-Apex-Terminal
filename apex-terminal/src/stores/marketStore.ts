import { create } from 'zustand';

interface MarketData {
    symbol: string;
    price: number;
    change24h: number;
    volume24h: number;
    lastUpdated: Date;
}

interface MarketState {
    data: Record<string, MarketData>; // { 'BTCUSDT': {...}, 'AAPL': {...} }

    // Actions
    updatePrice: (symbol: string, data: MarketData) => void;
    batchUpdate: (updates: MarketData[]) => void;
    getPrice: (symbol: string) => MarketData | undefined;
}

export const useMarketStore = create<MarketState>((set, get) => ({
    data: {},

    updatePrice: (symbol, data) => set((state) => ({
        data: { ...state.data, [symbol]: data }
    })),

    batchUpdate: (updates) => set((state) => {
        const newData = { ...state.data };
        updates.forEach((update) => {
            newData[update.symbol] = update;
        });
        return { data: newData };
    }),

    getPrice: (symbol) => get().data[symbol],
}));
