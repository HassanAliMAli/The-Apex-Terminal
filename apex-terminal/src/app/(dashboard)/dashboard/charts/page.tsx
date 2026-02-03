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
import { MousePointer2, Crosshair, Minus, MousePointerClick, Type, Move, Search, Eraser } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

                {/* Chart Area with Drawing Toolbar */}
                <div className="flex flex-1 gap-1 min-h-0">
                    {/* Drawing Toolbar */}
                    <div className="w-10 flex flex-col items-center gap-1 py-2 bg-card border border-border">
                        {[
                            { icon: MousePointer2, label: 'Cursor' },
                            { icon: Crosshair, label: 'Crosshair' },
                            { icon: Minus, label: 'Trend Line' },
                            { icon: MousePointerClick, label: 'Fib Retracement' },
                            { icon: Type, label: 'Text' },
                            { icon: Move, label: 'Move' },
                            { icon: Search, label: 'Zoom' },
                            { icon: Eraser, label: 'Clear' },
                        ].map((tool, i) => (
                            <Button
                                key={i}
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-none hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                <tool.icon className="h-4 w-4" />
                            </Button>
                        ))}
                    </div>

                    {/* Chart */}
                    <Card className="flex-1 bg-card border-border overflow-hidden p-0 relative rounded-none">
                        <div className="absolute inset-0">
                            <CandlestickChart data={candles} height={600} />
                        </div>
                        {/* Mock Indicators Legend */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1 pointer-events-none z-10">
                            <div className="text-[10px] font-mono text-primary bg-black/50 px-1 border border-primary/20 backdrop-blur">
                                {selectedSymbol} • {timeframe} • CBOE
                            </div>
                            <div className="flex gap-2 text-[10px] font-mono">
                                <span className="text-[#2962FF]">MA(9): {ticker.price.toFixed(2)}</span>
                                <span className="text-[#B71C1C]">MA(20): {(ticker.price * 0.98).toFixed(2)}</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Side Panel (Order Entry) */}
            <div className="w-full lg:w-80 flex-shrink-0">
                <OrderEntry ticker={ticker} />
            </div>
        </div>
    );
}
