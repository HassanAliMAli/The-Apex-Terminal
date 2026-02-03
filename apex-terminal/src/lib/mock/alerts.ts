export interface Alert {
    id: string;
    symbol: string;
    type: 'PRICE_ABOVE' | 'PRICE_BELOW' | 'PERCENT_CHANGE';
    targetValue: number;
    isActive: boolean;
    createdAt: string;
}

export const MOCK_ALERTS: Alert[] = [
    {
        id: 'alt_1',
        symbol: 'BTCUSDT',
        type: 'PRICE_ABOVE',
        targetValue: 45000,
        isActive: true,
        createdAt: new Date().toISOString(),
    },
    {
        id: 'alt_2',
        symbol: 'ETHUSDT',
        type: 'PRICE_BELOW',
        targetValue: 2000,
        isActive: true,
        createdAt: new Date().toISOString(),
    },
];
