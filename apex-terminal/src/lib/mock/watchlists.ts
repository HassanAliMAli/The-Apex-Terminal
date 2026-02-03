export interface Watchlist {
    id: string;
    name: string;
    symbols: string[];
}

export const MOCK_WATCHLISTS: Watchlist[] = [
    {
        id: 'wl_1',
        name: 'Crypto Gems',
        symbols: ['BTCUSDT', 'ETHUSDT', 'SOLUSDT'],
    },
    {
        id: 'wl_2',
        name: 'Tech Stocks',
        symbols: ['AAPL', 'TSLA', 'NVDA', 'MSFT'],
    },
];
