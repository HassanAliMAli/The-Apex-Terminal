'use client';

import { MOCK_TICKERS, generateMockCandles } from '@/lib/mock/market';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { PriceDisplay } from '@/components/shared/PriceDisplay';
import { ChangeIndicator } from '@/components/shared/ChangeIndicator';
import { AreaChart } from '@/components/charts/AreaChart';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Trash2 } from 'lucide-react';

interface WatchlistTableProps {
    symbols: string[];
}

export const WatchlistTable = ({ symbols }: WatchlistTableProps) => {
    const data = symbols
        .map((sym) => {
            const ticker = MOCK_TICKERS.find((t) => t.symbol === sym);
            if (!ticker) return null;

            const history = generateMockCandles(sym, 1, 60).map(c => ({
                date: new Date(c.time * 1000).toISOString(),
                value: c.close
            }));

            return { ...ticker, history };
        })
        .filter((t): t is NonNullable<typeof t> => t !== null);

    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-border">
                    <TableHead className="w-[100px]">Symbol</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">24h Change</TableHead>
                    <TableHead className="w-[150px]">Trend (24h)</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.symbol} className="border-border hover:bg-accent/40 group">
                        <TableCell className="font-medium font-mono text-primary">{item.symbol}</TableCell>
                        <TableCell className="text-muted-foreground">{item.name}</TableCell>
                        <TableCell className="text-right">
                            <PriceDisplay value={item.price} />
                        </TableCell>
                        <TableCell className="text-right">
                            <ChangeIndicator value={item.change24hPercent} />
                        </TableCell>
                        <TableCell>
                            <div className="h-10 w-24">
                                <AreaChart
                                    data={item.history}
                                    color={item.change24hPercent >= 0 ? '#00D09C' : '#FF433D'}
                                    height={40}
                                    showXAxis={false}
                                    showYAxis={false}
                                    showTooltip={false}
                                />
                            </div>
                        </TableCell>
                        <TableCell className="text-right">
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
