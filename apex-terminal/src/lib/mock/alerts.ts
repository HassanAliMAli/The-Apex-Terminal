export interface Alert {
    id: string;
    symbol: string;
    type: 'PRICE_ABOVE' | 'PRICE_BELOW' | 'PERCENT_CHANGE';
    targetValue: number;
    status: 'ACTIVE' | 'TRIGGERED' | 'CANCELLED';
    createdAt: string;
    triggeredAt?: string;
}

export const MOCK_ALERTS: Alert[] = [
    {
        id: 'alt_1',
        symbol: 'BTCUSDT',
        type: 'PRICE_ABOVE',
        targetValue: 45000,
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'alt_2',
        symbol: 'ETHUSDT',
        type: 'PRICE_BELOW',
        targetValue: 2000,
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
    },
    {
        id: 'alt_3',
        symbol: 'SOLUSDT',
        type: 'PERCENT_CHANGE',
        targetValue: 5,
        status: 'TRIGGERED',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        triggeredAt: new Date(Date.now() - 3600000).toISOString(),
    },
    {
        id: 'alt_4',
        symbol: 'TSLA',
        type: 'PRICE_BELOW',
        targetValue: 150,
        status: 'CANCELLED',
        createdAt: new Date(Date.now() - 172800000).toISOString(),
    },
];
