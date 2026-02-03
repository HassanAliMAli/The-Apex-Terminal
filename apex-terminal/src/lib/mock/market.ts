export interface Ticker {
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    change24hPercent: number;
    volume24h: number;
    high24h: number;
    low24h: number;
    marketCap: number;
    type: 'CRYPTO' | 'STOCK' | 'FOREX';
    baseAsset: string;
}

export interface Candle {
    time: number; // Unix timestamp
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export const MOCK_TICKERS: Ticker[] = [
    {
        symbol: 'BTCUSDT',
        name: 'Bitcoin',
        price: 43250.50,
        change24h: 1250.20,
        change24hPercent: 2.98,
        volume24h: 28500000000,
        high24h: 44000.00,
        low24h: 42000.00,
        marketCap: 850000000000,
        type: 'CRYPTO',
        baseAsset: 'BTC',
    },
    {
        symbol: 'ETHUSDT',
        name: 'Ethereum',
        price: 2250.75,
        change24h: -15.50,
        change24hPercent: -0.68,
        volume24h: 12000000000,
        high24h: 2300.00,
        low24h: 2200.00,
        marketCap: 270000000000,
        type: 'CRYPTO',
        baseAsset: 'ETH',
    },
    {
        symbol: 'SOLUSDT',
        name: 'Solana',
        price: 98.40,
        change24h: 5.20,
        change24hPercent: 5.58,
        volume24h: 3000000000,
        high24h: 102.00,
        low24h: 92.00,
        marketCap: 42000000000,
        type: 'CRYPTO',
        baseAsset: 'SOL',
    },
    {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 185.30,
        change24h: 1.20,
        change24hPercent: 0.65,
        volume24h: 5000000000,
        high24h: 186.00,
        low24h: 184.00,
        marketCap: 2900000000000,
        type: 'STOCK',
        baseAsset: 'AAPL',
    },
    {
        symbol: 'TSLA',
        name: 'Tesla Inc.',
        price: 180.50,
        change24h: -5.50,
        change24hPercent: -2.95,
        volume24h: 8000000000,
        high24h: 188.00,
        low24h: 178.00,
        marketCap: 580000000000,
        type: 'STOCK',
        baseAsset: 'TSLA',
    },
];

export const generateMockCandles = (
    symbol: string,
    days: number = 30,
    intervalMinutes: number = 60
): Candle[] => {
    const candles: Candle[] = [];
    const now = Math.floor(Date.now() / 1000);
    const ticker = MOCK_TICKERS.find((t) => t.symbol === symbol) || MOCK_TICKERS[0];
    let currentPrice = ticker.price;

    // Go backwards
    for (let i = 0; i < (days * 24 * 60) / intervalMinutes; i++) {
        const time = now - i * intervalMinutes * 60;
        const volatility = currentPrice * 0.02; // 2% volatility
        const change = (Math.random() - 0.5) * volatility;

        const close = currentPrice;
        const open = close - change;
        const high = Math.max(open, close) + Math.random() * volatility * 0.5;
        const low = Math.min(open, close) - Math.random() * volatility * 0.5;
        const volume = Math.random() * 1000 + 500;

        candles.unshift({
            time,
            open,
            high,
            low,
            close,
            volume,
        });

        currentPrice = open; // Next candle's close is this candle's open (going backwards)
    }

    return candles;
};
