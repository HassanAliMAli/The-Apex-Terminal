import { MOCK_PORTFOLIO } from '@/lib/mock/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PriceDisplay } from '@/components/shared/PriceDisplay';
import { ChangeIndicator } from '@/components/shared/ChangeIndicator';
import { Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const QuickStats = () => {
    const { equity, pnlDay, pnlDayPercent, pnlTotal, pnlTotalPercent, balance } = MOCK_PORTFOLIO;

    const stats = [
        {
            title: 'Total Equity',
            value: equity,
            icon: Wallet,
            change: pnlTotalPercent, // Using total change as proxy
            prefix: '$',
        },
        {
            title: 'Day P&L',
            value: pnlDay,
            icon: pnlDay >= 0 ? TrendingUp : TrendingDown,
            change: pnlDayPercent,
            prefix: '$',
            isPnl: true,
        },
        {
            title: 'Total P&L',
            value: pnlTotal,
            icon: pnlTotal >= 0 ? TrendingUp : TrendingDown,
            change: pnlTotalPercent,
            prefix: '$',
            isPnl: true,
        },
        {
            title: 'Available Cash',
            value: balance,
            icon: DollarSign,
            change: 0,
            prefix: '$',
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
                <Card key={i} className="bg-card border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold font-mono">
                            <PriceDisplay value={stat.value} />
                        </div>
                        {stat.change !== 0 && (
                            <div className="mt-1">
                                <ChangeIndicator value={stat.change} />
                                <span className="text-xs text-muted-foreground ml-1">
                                    {stat.title.includes('Day') ? 'today' : 'all time'}
                                </span>
                            </div>
                        )}
                        {stat.change === 0 && <div className="text-xs text-muted-foreground mt-1">Ready to deploy</div>}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
