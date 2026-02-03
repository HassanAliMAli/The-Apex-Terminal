import { MOCK_TICKERS } from '@/lib/mock/market';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PriceDisplay } from '@/components/shared/PriceDisplay';
import { ChangeIndicator } from '@/components/shared/ChangeIndicator';
import { Badge } from '@/components/ui/badge';

export const MarketOverview = () => {
    const cryptoTickers = MOCK_TICKERS.filter((t) => t.type === 'CRYPTO');
    const stockTickers = MOCK_TICKERS.filter((t) => t.type === 'STOCK');

    const TickerTable = ({ tickers }: { tickers: typeof MOCK_TICKERS }) => (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-border">
                    <TableHead className="w-[100px]">Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">24h Change</TableHead>
                    <TableHead className="text-right hidden md:table-cell">Volume</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tickers.map((ticker) => (
                    <TableRow key={ticker.symbol} className="border-border hover:bg-accent/40 cursor-pointer">
                        <TableCell className="font-medium font-mono text-primary">{ticker.symbol}</TableCell>
                        <TableCell className="text-muted-foreground">{ticker.name}</TableCell>
                        <TableCell className="text-right">
                            <PriceDisplay value={ticker.price} />
                        </TableCell>
                        <TableCell className="text-right">
                            <ChangeIndicator value={ticker.change24hPercent} />
                        </TableCell>
                        <TableCell className="text-right hidden md:table-cell font-mono text-muted-foreground">
                            {/* Simple approximation for volume formatting */}
                            {(ticker.volume24h / 1e9).toFixed(2)}B
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

    return (
        <Card className="col-span-4 lg:col-span-3 bg-card border-border">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Market Overview</CardTitle>
                    <Badge variant="outline" className="text-up border-up/20 bg-up/10">Live Updates</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="crypto" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="crypto">Crypto</TabsTrigger>
                        <TabsTrigger value="stocks">Stocks</TabsTrigger>
                    </TabsList>
                    <TabsContent value="crypto" className="space-y-4">
                        <TickerTable tickers={cryptoTickers} />
                    </TabsContent>
                    <TabsContent value="stocks" className="space-y-4">
                        <TickerTable tickers={stockTickers} />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};
