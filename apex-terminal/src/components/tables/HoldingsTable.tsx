'use client';

import { MOCK_PORTFOLIO } from '@/lib/mock/portfolio';
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

export const HoldingsTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent border-border">
                    <TableHead className="w-[100px]">Asset</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Avg Price</TableHead>
                    <TableHead className="text-right">Current Price</TableHead>
                    <TableHead className="text-right">Total Value</TableHead>
                    <TableHead className="text-right">Unrealized P&L</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {MOCK_PORTFOLIO.holdings.map((holding) => (
                    <TableRow key={holding.symbol} className="border-border hover:bg-accent/40">
                        <TableCell className="font-medium font-mono text-primary">{holding.symbol}</TableCell>
                        <TableCell className="text-right font-mono">{holding.quantity}</TableCell>
                        <TableCell className="text-right">
                            <PriceDisplay value={holding.avgPrice} />
                        </TableCell>
                        <TableCell className="text-right">
                            <PriceDisplay value={holding.currentPrice} />
                        </TableCell>
                        <TableCell className="text-right font-bold">
                            <PriceDisplay value={holding.value} />
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="flex flex-col items-end">
                                <ChangeIndicator value={holding.pnlPercent} />
                                <span className={`text-xs ${holding.pnl >= 0 ? 'text-up/70' : 'text-down/70'}`}>
                                    {holding.pnl >= 0 ? '+' : ''}{holding.pnl.toLocaleString()}
                                </span>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
