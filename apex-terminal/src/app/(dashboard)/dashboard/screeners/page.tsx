import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bitcoin, TrendingUp } from 'lucide-react';

export default function ScreenersPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Market Screeners</h2>
            <p className="text-muted-foreground">Find trading opportunities with advanced filters.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/dashboard/screeners/crypto">
                    <Card className="bg-card border-border hover:border-up/50 transition-all cursor-pointer group h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 group-hover:text-up transition-colors">
                                <Bitcoin className="h-6 w-6" /> Crypto Screener
                            </CardTitle>
                            <CardDescription>Scan 10,000+ cryptocurrencies by market cap, volume, and technicals.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-40 bg-background/50 rounded flex items-center justify-center text-muted-foreground font-mono text-sm">
                                [Crypto Heatmap Preview]
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/dashboard/screeners/stocks">
                    <Card className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer group h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                                <TrendingUp className="h-6 w-6" /> Stock Screener
                            </CardTitle>
                            <CardDescription>Filter US stocks by sector, PE ratio, dividend yield, and more.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-40 bg-background/50 rounded flex items-center justify-center text-muted-foreground font-mono text-sm">
                                [Stock Matrix Preview]
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
