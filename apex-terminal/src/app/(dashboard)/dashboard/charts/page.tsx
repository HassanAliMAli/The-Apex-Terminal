'use client';

import { useState } from 'react';
import { MOCK_TICKERS, generateMockCandles } from '@/lib/mock/market';
import { CandlestickChart } from '@/components/charts/CandlestickChart';
import { OrderEntry } from '@/components/dashboard/OrderEntry';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

export default function ChartsPage() {
    const [selectedSymbol, setSelectedSymbol] = useState(MOCK_TICKERS[0].symbol);
    const [timeframe, setTimeframe] = useState('1H');

    const ticker = MOCK_TICKERS.find((t) => t.symbol === selectedSymbol) || MOCK_TICKERS[0];
    const candles = generateMockCandles(selectedSymbol, 30, timeframe === '1D' ? 1440 : 60);

    return (
        <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-8rem)]">
            {/* Main Chart Area */}
            <div className="flex-1 flex flex-col gap-4">
                {/* Toolbar */}
                <div className="flex items-center justify-between p-2 bg-card border border-border rounded-lg">
                    <div className="flex items-center gap-2">
                        <Select value={selectedSymbol} onValueChange={setSelectedSymbol}>
                            <SelectTrigger className="w-[180px] font-mono font-bold">
                                <SelectValue placeholder="Select Pair" />
                            </SelectTrigger>
                            <SelectContent>
                                {MOCK_TICKERS.map((t) => (
                                    <SelectItem key={t.symbol} value={t.symbol} className="font-mono">
                                        {t.symbol}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Tabs value={timeframe} onValueChange={setTimeframe}>
                            <TabsList className="h-9">
                                <TabsTrigger value="1H" className="text-xs px-2">1H</TabsTrigger>
                                <TabsTrigger value="4H" className="text-xs px-2">4H</TabsTrigger>
                                <TabsTrigger value="1D" className="text-xs px-2">1D</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                {/* Chart */}
                <Card className="flex-1 bg-card border-border overflow-hidden p-2 relative">
                    <div className="absolute inset-2">
                        <CandlestickChart data={candles} height={600} />
                    </div>
                </Card>
            </div>

            {/* Side Panel (Order Entry) */}
            <div className="w-full lg:w-80 flex-shrink-0">
                <OrderEntry ticker={ticker} />
            </div>
        </div>
    );
}
