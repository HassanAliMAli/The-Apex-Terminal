import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Plus, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const strategies = [
    { id: '1', name: 'SMA Crossover', type: 'Trend Following', status: 'Completed', return: 15.4, winRate: 62 },
    { id: '2', name: 'RSI Mean Reversion', type: 'Mean Reversion', status: 'Running', return: -2.1, winRate: 45 },
];

export default function BacktestingPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Backtesting Engine</h2>
                    <p className="text-muted-foreground mt-1">Test your strategies against historical data.</p>
                </div>
                <Link href="/dashboard/backtesting/new">
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        New Strategy
                    </Button>
                </Link>
            </div>

            <div className="grid gap-4">
                {strategies.map((strategy) => (
                    <Link key={strategy.id} href={`/dashboard/backtesting/${strategy.id}`}>
                        <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-xl font-bold">
                                    {strategy.name}
                                </CardTitle>
                                <Badge variant={strategy.status === 'Completed' ? 'default' : 'secondary'}>
                                    {strategy.status}
                                </Badge>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-6 mt-2">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground">Type</span>
                                        <span className="font-medium">{strategy.type}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground">Return</span>
                                        <span className={`font-mono font-bold ${strategy.return >= 0 ? 'text-up' : 'text-down'}`}>
                                            {strategy.return > 0 ? '+' : ''}{strategy.return}%
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground">Win Rate</span>
                                        <span className="font-mono font-bold">{strategy.winRate}%</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
