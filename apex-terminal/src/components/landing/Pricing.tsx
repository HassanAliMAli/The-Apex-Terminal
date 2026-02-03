import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: 'Free',
        price: '$0',
        description: 'Perfect for beginners',
        features: ['Real-time prices', 'Basic charting', '1 Watchlist', '5 Alerts', 'Public chat'],
        cta: 'Start Free'
    },
    {
        name: 'Pro',
        price: '$29',
        description: 'For serious traders',
        features: ['Everything in Free', 'Advanced indicators', '5 Watchlists', '50 Alerts', 'Priority support'],
        featured: true,
        cta: 'Get Pro'
    },
    {
        name: 'Elite',
        price: '$49',
        description: 'Maximum power',
        features: ['Everything in Pro', 'Unlimited Watchlists', 'Unlimited Alerts', 'API Access', '1-on-1 Session'],
        cta: 'Go Elite'
    },
    {
        name: 'Whale',
        price: 'Custom',
        description: 'For funds & institutions',
        features: ['Everything in Elite', 'Dedicated Server', 'White-labeling', 'SLA Guarantee', 'Account Manager'],
        cta: 'Contact Sales'
    }
];

export function Pricing() {
    return (
        <section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground">
                        Start free. Scale as you grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {tiers.map((tier) => (
                        <Card
                            key={tier.name}
                            className={`relative flex flex-col ${tier.featured ? 'border-primary shadow-lg shadow-primary/10 scale-105 z-10' : 'border-border bg-card/50'}`}
                        >
                            {tier.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <Badge className="bg-primary text-primary-foreground hover:bg-primary">Most Popular</Badge>
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    {tier.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm">
                                            <Check className="w-4 h-4 text-primary mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className={`w-full ${tier.featured ? 'bg-primary hover:bg-primary/90' : 'bg-muted hover:bg-muted/80'}`} asChild>
                                    <Link href="/pricing">{tier.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
