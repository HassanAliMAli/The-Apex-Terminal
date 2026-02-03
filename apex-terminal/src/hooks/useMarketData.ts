import { useState, useEffect } from 'react';
import { useMarketStore } from '@/stores/marketStore';
// import { apiClient } from '@/lib/api/client';
import { MarketData } from '@/types';

// Mock apiClient for now
const apiClient = {
    get: async (url: string): Promise<any> => {
        // Generate random price change for simulation
        const isUp = Math.random() > 0.5;
        const change = (Math.random() * 5).toFixed(2);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    symbol: url.split('/').pop()?.split('?')[0] || 'BTCUSDT',
                    price: 43250.00 + (Math.random() * 100),
                    changePercent: isUp ? Number(change) : -Number(change),
                    volume24h: 1250000000,
                    lastUpdated: new Date().toISOString()
                });
            }, 200);
        });
    }
};

export function useMarketData(symbol: string, exchange: string = 'binance') {
    const { data, updatePrice, getPrice } = useMarketStore();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cachedData = getPrice(symbol);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const endpoint = exchange === 'stock'
                    ? `/api/stocks/${symbol}`
                    : `/api/crypto/${symbol}?exchange=${exchange}`;

                const response = await apiClient.get(endpoint);

                updatePrice(symbol, {
                    symbol: response.symbol,
                    exchange: exchange, // Ensure exchange is passed
                    price: response.price,
                    change24h: response.changePercent,
                    volume24h: response.volume24h,
                    lastUpdated: response.lastUpdated, // String from API, store handles conversion if needed but store interface likely expects Date or String
                } as any); // Type cast might be needed depending on strictness of store vs API
            } catch (err: any) {
                setError(err.message || 'Failed to fetch market data');
            } finally {
                setIsLoading(false);
            }
        };

        // Fetch if no cached data or cache is old (> 5 min)
        const cacheAge = cachedData
            ? Date.now() - new Date(cachedData.lastUpdated).getTime()
            : Infinity;

        if (!cachedData || cacheAge > 300000) {
            fetchData();
        }
    }, [symbol, exchange, updatePrice]); // Added updatePrice dependency

    return {
        data: cachedData,
        isLoading,
        error,
    };
}
