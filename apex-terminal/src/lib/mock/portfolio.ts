import { Ticker } from './market';

export interface Holding {
    symbol: string;
    quantity: number;
    avgPrice: number;
    currentPrice: number; // In real app, this comes from market data
    value: number;
    pnl: number;
    pnlPercent: number;
}

export interface Portfolio {
    id: string;
    userId: string;
    balance: number;
    equity: number;
    pnlDay: number;
    pnlDayPercent: number;
    pnlTotal: number;
    pnlTotalPercent: number;
    holdings: Holding[];
    history: { date: string; value: number }[];
}

export const MOCK_PORTFOLIO: Portfolio = {
    id: 'pf_main',
    userId: 'user_123',
    balance: 45000.00, // Cash
    equity: 125450.50, // Total Value
    pnlDay: 1250.50,
    pnlDayPercent: 1.01,
    pnlTotal: 25450.50,
    pnlTotalPercent: 25.45,
    holdings: [
        {
            symbol: 'BTCUSDT',
            quantity: 1.5,
            avgPrice: 35000.00,
            currentPrice: 43250.50,
            value: 64875.75,
            pnl: 12375.75,
            pnlPercent: 23.57,
        },
        {
            symbol: 'ETHUSDT',
            quantity: 10,
            avgPrice: 1800.00,
            currentPrice: 2250.75,
            value: 22507.50,
            pnl: 4507.50,
            pnlPercent: 25.04,
        },
        {
            symbol: 'TSLA',
            quantity: 50,
            avgPrice: 200.00,
            currentPrice: 180.50,
            value: 9025.00,
            pnl: -975.00,
            pnlPercent: -9.75,
        },
    ],
    history: Array.from({ length: 30 }).map((_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: 100000 + Math.random() * 30000,
    })),
};
