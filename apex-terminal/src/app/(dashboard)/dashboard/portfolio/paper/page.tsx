"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PaperTradingPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Paper Trading</h2>
            <p className="text-muted-foreground">Practice your strategies with $100,000 virtual capital.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card border-border md:col-span-2">
                    <CardHeader>
                        <CardTitle>Trade Terminal</CardTitle>
                        <CardDescription>Simulate market orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="buy" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="buy" className="data-[state=active]:bg-up data-[state=active]:text-black">Buy</TabsTrigger>
                                <TabsTrigger value="sell" className="data-[state=active]:bg-down data-[state=active]:text-white">Sell</TabsTrigger>
                            </TabsList>
                            <TabsContent value="buy" className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label>Symbol</Label>
                                    <Input placeholder="BTCUSDT" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Amount (USD)</Label>
                                    <Input type="number" placeholder="5000" />
                                </div>
                                <Button className="w-full bg-up hover:bg-up-accent text-black font-bold">Buy Long</Button>
                            </TabsContent>
                            <TabsContent value="sell" className="space-y-4 py-4">
                                <div className="space-y-2">
                                    <Label>Symbol</Label>
                                    <Input placeholder="BTCUSDT" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Amount (BTC)</Label>
                                    <Input type="number" placeholder="0.5" />
                                </div>
                                <Button className="w-full bg-down hover:bg-red-600 text-white font-bold">Sell Short</Button>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>Account Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="text-sm text-muted-foreground">Equity</div>
                            <div className="text-2xl font-mono font-bold">$105,420.50</div>
                            <div className="text-sm text-up">+5.42%</div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground">Buying Power</div>
                            <div className="text-xl font-mono">$45,200.00</div>
                        </div>
                        <div className="pt-4 border-t border-border">
                            <Button variant="outline" className="w-full">Reset Account</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
