import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const mockTransactions = [
    { id: 'tx_1', date: '2026-02-03', type: 'BUY', symbol: 'BTC', quantity: 0.1, price: 44500, total: 4450 },
    { id: 'tx_2', date: '2026-02-02', type: 'SELL', symbol: 'ETH', quantity: 2, price: 2350, total: 4700 },
    { id: 'tx_3', date: '2026-02-01', type: 'DEPOSIT', symbol: 'USD', quantity: 10000, price: 1, total: 10000 },
];

export default function HistoryPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Transaction History</h2>
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Asset</TableHead>
                                <TableHead className="text-right">Quantity</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">Total Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockTransactions.map((tx) => (
                                <TableRow key={tx.id}>
                                    <TableCell className="font-mono text-muted-foreground">{tx.date}</TableCell>
                                    <TableCell>
                                        <Badge variant={tx.type === 'BUY' ? 'default' : tx.type === 'SELL' ? 'destructive' : 'secondary'}>
                                            {tx.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-mono">{tx.symbol}</TableCell>
                                    <TableCell className="text-right font-mono">{tx.quantity}</TableCell>
                                    <TableCell className="text-right font-mono">${tx.price.toLocaleString()}</TableCell>
                                    <TableCell className="text-right font-mono">${tx.total.toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
