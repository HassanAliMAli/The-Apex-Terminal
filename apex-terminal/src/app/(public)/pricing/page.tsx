import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: 'Free',
        price: '$0',
        description: 'Essential tools for casual traders.',
        features: [
            'Real-time market data (Delayed 15m)',
            'Basic Charting (3 Indicators)',
            '5 Active Alerts',
            '1 Watchlist',
            'Community Support'
        ],
        cta: 'Get Started',
        href: '/signup',
    },
    {
        name: 'Pro',
        price: '$19',
        period: '/mo',
        description: 'Advanced power for day traders.',
        features: [
            'Real-time Data (Nasdaq, NYSE, Crypto)',
            'Advanced Charting (Unlimited)',
            '100 Active Alerts',
            'Unlimited Watchlists',
            'Backtesting Engine',
            'Priority Support'
        ],
        cta: 'Start Free Trial',
        href: '/signup?plan=pro',
        popular: true,
    },
    {
        name: 'Elite',
        price: '$49',
        period: '/mo',
        description: 'Institutional grade for professionals.',
        features: [
            'Level 2 Market Data',
            'AI Sentiment Analysis',
            '500 Active Alerts',
            'API Access',
            'Dedicated Account Manager',
            'Early Access Features'
        ],
        cta: 'Contact Sales',
        href: '/contact',
    },
];

export default function PricingPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Professional tools. Retail prices.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Start for free. Upgrade as you scale. Cancel anytime.
                    </p>
                </div>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`rounded-3xl p-8 ring-1 ring-white/10 xl:p-10 ${tier.popular ? 'bg-white/5 ring-primary' : 'bg-card'
                                }`}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                                {tier.popular && (
                                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                                        Most Popular
                                    </span>
                                )}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                                {tier.period && (
                                    <span className="text-sm font-semibold leading-6 text-muted-foreground">{tier.period}</span>
                                )}
                            </p>
                            <Link href={tier.href}>
                                <Button
                                    className={`mt-6 w-full ${tier.popular ? '' : 'bg-white/10 hover:bg-white/20'}`}
                                    variant={tier.popular ? 'default' : 'secondary'}
                                >
                                    {tier.cta}
                                </Button>
                            </Link>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
