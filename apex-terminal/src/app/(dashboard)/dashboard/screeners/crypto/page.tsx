import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';

const mockCrypto = [
    { rank: 1, symbol: 'BTC', name: 'Bitcoin', price: 45000, change: 2.1, volume: '25B', marketCap: '850B', signal: 'Strong Buy' },
    { rank: 2, symbol: 'ETH', name: 'Ethereum', price: 2400, change: 1.5, volume: '12B', marketCap: '280B', signal: 'Buy' },
    { rank: 3, symbol: 'SOL', name: 'Solana', price: 95, change: -4.2, volume: '2B', marketCap: '40B', signal: 'Neutral' },
    { rank: 4, symbol: 'BNB', name: 'Binance Coin', price: 300, change: 0.5, volume: '800M', marketCap: '48B', signal: 'Buy' },
    { rank: 5, symbol: 'XRP', name: 'Ripple', price: 0.55, change: -0.1, volume: '600M', marketCap: '30B', signal: 'Sell' },
];

export default function CryptoScreenerPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Crypto Screener</h2>
            <Card className="bg-card border-border">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">24h %</TableHead>
                                <TableHead className="text-right">Volume</TableHead>
                                <TableHead className="text-right">Mkt Cap</TableHead>
                                <TableHead className="text-right">Signal</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockCrypto.map((c) => (
                                <TableRow key={c.rank}>
                                    <TableCell className="font-mono text-muted-foreground">{c.rank}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-bold">{c.name}</span>
                                            <span className="text-xs text-muted-foreground">{c.symbol}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right font-mono">${c.price.toLocaleString()}</TableCell>
                                    <TableCell className={`text-right font-mono ${c.change >= 0 ? 'text-up' : 'text-down'}`}>
                                        {c.change > 0 ? '+' : ''}{c.change}%
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{c.volume}</TableCell>
                                    <TableCell className="text-right font-mono">{c.marketCap}</TableCell>
                                    <TableCell className="text-right">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-sm ${c.signal === 'Strong Buy' ? 'bg-up text-black' :
                                                c.signal === 'Buy' ? 'bg-up/20 text-up' :
                                                    c.signal === 'Sell' ? 'bg-down/20 text-down' :
                                                        'bg-muted text-muted-foreground'
                                            }`}>
                                            {c.signal}
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
