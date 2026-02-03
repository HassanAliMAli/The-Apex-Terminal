import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';

const mockStocks = [
    { symbol: 'NVDA', name: 'NVIDIA Corp', sector: 'Technology', price: 680.20, change: 3.5, pe: 95.2, signal: 'Strong Buy' },
    { symbol: 'TSLA', name: 'Tesla Inc', sector: 'Consumer Cyclical', price: 190.50, change: -2.1, pe: 40.5, signal: 'Sell' },
    { symbol: 'AAPL', name: 'Apple Inc', sector: 'Technology', price: 185.10, change: 0.2, pe: 28.1, signal: 'Hold' },
    { symbol: 'MSFT', name: 'Microsoft Corp', sector: 'Technology', price: 405.30, change: 1.1, pe: 36.4, signal: 'Buy' },
    { symbol: 'AMD', name: 'Advanced Micro Devices', sector: 'Technology', price: 170.80, change: 4.8, pe: 80.2, signal: 'Strong Buy' },
];

export default function StocksScreenerPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Stock Screener</h2>
            <Card className="bg-card border-border">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Symbol</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Sector</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">Change %</TableHead>
                                <TableHead className="text-right">P/E</TableHead>
                                <TableHead className="text-right">Signal</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockStocks.map((s) => (
                                <TableRow key={s.symbol}>
                                    <TableCell className="font-bold font-mono text-primary">{s.symbol}</TableCell>
                                    <TableCell>{s.name}</TableCell>
                                    <TableCell className="text-muted-foreground">{s.sector}</TableCell>
                                    <TableCell className="text-right font-mono">${s.price.toFixed(2)}</TableCell>
                                    <TableCell className={`text-right font-mono ${s.change >= 0 ? 'text-up' : 'text-down'}`}>
                                        {s.change > 0 ? '+' : ''}{s.change}%
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{s.pe}</TableCell>
                                    <TableCell className="text-right">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-sm ${s.signal === 'Strong Buy' ? 'bg-up text-black' :
                                                s.signal === 'Buy' ? 'bg-up/20 text-up' :
                                                    s.signal === 'Sell' ? 'bg-down/20 text-down' :
                                                        'bg-muted text-muted-foreground'
                                            }`}>
                                            {s.signal}
                                        </span>
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
