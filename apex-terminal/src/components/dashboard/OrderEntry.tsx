'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Ticker } from '@/lib/mock/market';
import { ChangeIndicator } from '@/components/shared/ChangeIndicator';
import { PriceDisplay } from '@/components/shared/PriceDisplay';

interface OrderEntryProps {
    ticker?: Ticker;
}

export const OrderEntry = ({ ticker }: OrderEntryProps) => {
    const [side, setSide] = useState<'buy' | 'sell'>('buy');
    const [price, setPrice] = useState(ticker?.price.toString() || '');
    const [amount, setAmount] = useState('');

    const total = (parseFloat(price) || 0) * (parseFloat(amount) || 0);

    return (
        <Card className="bg-card border-border h-full">
            <CardHeader className="pb-4">
                <CardTitle>Trade {ticker?.symbol}</CardTitle>
                <div className="flex justify-between items-center text-sm">
                    <PriceDisplay value={ticker?.price || 0} size="lg" />
                    <ChangeIndicator value={ticker?.change24hPercent || 0} />
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="buy" onValueChange={(v) => setSide(v as 'buy' | 'sell')} className="space-y-4">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="buy" className="data-[state=active]:bg-up/20 data-[state=active]:text-up">Buy</TabsTrigger>
                        <TabsTrigger value="sell" className="data-[state=active]:bg-down/20 data-[state=active]:text-down">Sell</TabsTrigger>
                    </TabsList>

                    <Tabs defaultValue="limit">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="limit">Limit</TabsTrigger>
                            <TabsTrigger value="market">Market</TabsTrigger>
                        </TabsList>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Price (USDT)</Label>
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="font-mono text-right"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Amount ({ticker?.baseAsset || 'BTC'})</Label>
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="font-mono text-right"
                                />
                            </div>

                            <div className="pt-2 border-t border-border">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-muted-foreground">Total</span>
                                    <span className="font-mono">{total > 0 ? total.toFixed(2) : '-'} USDT</span>
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                                    <span>Avail Bal</span>
                                    <span className="font-mono">45,000.00 USDT</span>
                                </div>

                                <Button
                                    className={`w-full font-bold ${side === 'buy' ? 'bg-up hover:bg-up/90' : 'bg-down hover:bg-down/90'}`}
                                >
                                    {side === 'buy' ? 'Buy' : 'Sell'} {ticker?.symbol?.replace('USDT', '')}
                                </Button>
                            </div>
                        </div>
                    </Tabs>
                </Tabs>
            </CardContent>
        </Card>
    );
};
