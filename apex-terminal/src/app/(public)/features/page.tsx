import { Terminal, Activity, Zap, Shield, BarChart3, Globe } from 'lucide-react';

const features = [
    {
        name: 'Real-time Terminal',
        description:
            'Zero-latency market data streamed directly from exchange websockets. Experience the speed of institutional trading.',
        icon: Terminal,
    },
    {
        name: 'Advanced Charting',
        description:
            'Pro-grade technical analysis tools. 100+ indicators, multi-timeframe analysis, and drawing tools built-in.',
        icon: BarChart3,
    },
    {
        name: 'Instant Execution',
        description:
            'Execute trades in milliseconds. Smart order routing ensures you get the best price across multiple liquidity sources.',
        icon: Zap,
    },
    {
        name: 'Global Markets',
        description:
            'Access Crypto, Stocks, and Forex all in one place. Unified portfolio management for all your assets.',
        icon: Globe,
    },
    {
        name: 'Bank-Grade Security',
        description:
            'Your data is encrypted end-to-end. We use industry-standard security protocols to keep your account safe.',
        icon: Shield,
    },
    {
        name: 'Live Sentiment',
        description:
            'AI-powered news analysis and social sentiment tracking. Know why the market is moving before it moves.',
        icon: Activity,
    },
];

export default function FeaturesPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Built for the modern trader
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Apex Terminal combines the power of a professional workstation with the accessibility of the web.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
