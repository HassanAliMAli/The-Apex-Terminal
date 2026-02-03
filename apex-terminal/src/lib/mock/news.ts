export interface NewsItem {
    id: string;
    title: string;
    source: string;
    publishedAt: string;
    sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
    category: 'CRYPTO' | 'STOCKS' | 'MACRO' | 'FOREX';
    url: string;
    summary: string;
}

export const MOCK_NEWS: NewsItem[] = [
    {
        id: 'news_1',
        title: 'Bitcoin breaks $43k barrier as ETF inflows surge',
        source: 'CryptoPanic',
        publishedAt: new Date().toISOString(),
        sentiment: 'POSITIVE',
        category: 'CRYPTO',
        url: '#',
        summary: 'Bitcoin (BTC) has surged past the $43,000 mark today, driven by a record-breaking volume of inflows into spot Bitcoin ETFs. Analysts suggest that institutional demand is outpacing supply, creating a supply shock scenario. Major funds including BlackRock and Fidelity have reported their highest daily volumes since launch.',
    },
    {
        id: 'news_2',
        title: 'Fed signals potential rate cuts later this year',
        source: 'Bloomberg',
        publishedAt: new Date(Date.now() - 3600000).toISOString(),
        sentiment: 'NEUTRAL',
        category: 'MACRO',
        url: '#',
        summary: 'Federal Reserve officials have indicated that while inflation remains above the 2% target, the current economic data suggests that rate cuts could be on the table by Q3 2024. The central bank emphasizes a data-dependent approach, closely monitoring labor market cooling and CPI figures.',
    },
    {
        id: 'news_3',
        title: 'Solana network experiences minor congestion',
        source: 'CoinDesk',
        publishedAt: new Date(Date.now() - 7200000).toISOString(),
        sentiment: 'NEGATIVE',
        category: 'CRYPTO',
        url: '#',
        summary: 'The Solana blockchain is currently facing performance degradation due to a spike in arbitrage bot transactions. Users may experience failed transactions and higher priority fees. Developers are currently deploying a patch to version 1.18 to mitigate the spam attacks.',
    },
    {
        id: 'news_4',
        title: 'Tech stocks rally on strong AI earnings reports',
        source: 'Reuters',
        publishedAt: new Date(Date.now() - 10800000).toISOString(),
        sentiment: 'POSITIVE',
        category: 'STOCKS',
        url: '#',
        summary: 'The Nasdaq 100 hit a new all-time high as major tech giants reported better-than-expected earnings, fueled by the ongoing AI boom. NVIDIA and Microsoft led the charge, with significant year-over-year growth in their cloud and data center divisions.',
    },
    {
        id: 'news_5',
        title: 'ECB keeps interest rates unchanged',
        source: 'Financial Times',
        publishedAt: new Date(Date.now() - 14400000).toISOString(),
        sentiment: 'NEUTRAL',
        category: 'FOREX',
        url: '#',
        summary: 'The European Central Bank maintained its key interest rates at record highs today, signaling that it is too early to discuss easing monetary policy. President Lagarde emphasized that wage growth remains a concern for the inflation outlook.',
    },
];
