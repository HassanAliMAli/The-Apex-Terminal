import { Activity, TrendingUp, Target, Zap, Wallet, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
    {
        icon: Activity,
        title: "Real-Time Data",
        description: "7 crypto exchanges, stocks, forex. All real-time. WebSocket powered."
    },
    {
        icon: TrendingUp,
        title: "200+ Indicators",
        description: "SMA, EMA, RSI, MACD, Bollinger Bands, Ichimoku Cloud, and 194 more."
    },
    {
        icon: Target,
        title: "Smart Alerts",
        description: "Price, indicator, whale movement alerts. Email, Telegram, Discord, push."
    },
    {
        icon: Zap,
        title: "Visual Backtesting",
        description: "Test strategies with zero code. Win rate, Sharpe ratio, profit factor."
    },
    {
        icon: Wallet,
        title: "Portfolio Tracking",
        description: "Real & paper portfolios. Auto P/L. Leaderboard rankings."
    },
    {
        icon: Search,
        title: "Advanced Screeners",
        description: "Find moonshots before everyone else. Price, volume, momentum filters."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Everything You Need to Win</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        What Bloomberg charges $24,000/year for. Built for free.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-colors group">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
