import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const mockHoldings = [
    { symbol: 'BTC', quantity: 0.5, avgPrice: 42000, currentPrice: 45000, value: 22500, pnl: 1500, pnlPercent: 7.14 },
    { symbol: 'ETH', quantity: 10, avgPrice: 2200, currentPrice: 2400, value: 24000, pnl: 2000, pnlPercent: 9.09 },
    { symbol: 'SOL', quantity: 100, avgPrice: 80, currentPrice: 100, value: 10000, pnl: 2000, pnlPercent: 25.00 },
];

export default function HoldingsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Holdings</h2>
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle>Current Assets</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Asset</TableHead>
                                <TableHead className="text-right">Quantity</TableHead>
                                <TableHead className="text-right">Avg Price</TableHead>
                                <TableHead className="text-right">Current Price</TableHead>
                                <TableHead className="text-right">Value</TableHead>
                                <TableHead className="text-right">PnL</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockHoldings.map((holding) => (
                                <TableRow key={holding.symbol}>
                                    <TableCell className="font-medium font-mono">
                                        <Badge variant="outline">{holding.symbol}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{holding.quantity}</TableCell>
                                    <TableCell className="text-right font-mono">${holding.avgPrice.toLocaleString()}</TableCell>
                                    <TableCell className="text-right font-mono">${holding.currentPrice.toLocaleString()}</TableCell>
                                    <TableCell className="text-right font-mono">${holding.value.toLocaleString()}</TableCell>
                                    <TableCell className={`text-right font-mono ${holding.pnl >= 0 ? 'text-up' : 'text-down'}`}>
                                        {holding.pnl >= 0 ? '+' : ''}{holding.pnl.toLocaleString()} ({holding.pnlPercent.toFixed(2)}%)
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
