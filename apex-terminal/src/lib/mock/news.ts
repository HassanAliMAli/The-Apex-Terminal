export interface NewsItem {
    id: string;
    title: string;
    source: string;
    publishedAt: string;
    sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
    url: string;
}

export const MOCK_NEWS: NewsItem[] = [
    {
        id: 'news_1',
        title: 'Bitcoin breaks $43k barrier as ETF inflows surge',
        source: 'CryptoPanic',
        publishedAt: new Date().toISOString(),
        sentiment: 'POSITIVE',
        url: '#',
    },
    {
        id: 'news_2',
        title: 'Fed signals potential rate cuts later this year',
        source: 'Bloomberg',
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        sentiment: 'NEUTRAL',
        url: '#',
    },
    {
        id: 'news_3',
        title: 'Solana network experiences minor congestion',
        source: 'CoinDesk',
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        sentiment: 'NEGATIVE',
        url: '#',
    },
];
