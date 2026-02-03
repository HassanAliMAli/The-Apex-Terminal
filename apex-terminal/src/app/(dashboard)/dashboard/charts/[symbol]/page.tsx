"use client";

import { CandlestickChart } from '@/components/charts/CandlestickChart';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Maximize2, Bell, Star } from 'lucide-react';
import Link from 'next/link';
import { generateMockCandles } from '@/lib/mock/market';

export default async function SymbolChartPage({ params }: { params: Promise<{ symbol: string }> }) {
    const symbol = (await params).symbol; // e.g. BTCUSDT

    // Mock data for header
    const price = 45000.00;
    const change = 2.5;

    // Generate mock data for the chart
    const chartData = generateMockCandles(symbol);

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col space-y-4">
            <div className="flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/charts">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl font-mono font-bold tracking-tight">{symbol}</h2>
                            <Badge variant="outline" className="font-mono text-xs">BINANCE</Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-1 font-mono">
                            <span className="text-xl text-up">${price.toFixed(2)}</span>
                            <span className="text-sm text-up">+{change}%</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                        <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Bell className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <Maximize2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <Card className="flex-1 bg-card border-none rounded-none overflow-hidden">
                <CardContent className="p-0 h-full">
                    {/* Reusing existing chart component, ensuring it fills height */}
                    <div className="h-full w-full">
                        <CandlestickChart data={chartData} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
