import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy } from 'lucide-react';

const mockLeaders = [
    { rank: 1, name: 'WhaleHunter', pnl: 452.5, winRate: 78, trades: 1240 },
    { rank: 2, name: 'CryptoKing', pnl: 312.0, winRate: 65, trades: 890 },
    { rank: 3, name: 'SatoshiNakamoto', pnl: 280.1, winRate: 92, trades: 50 },
    { rank: 4, name: 'WallStreetBet', pnl: 150.4, winRate: 45, trades: 5600 },
    { rank: 5, name: 'ApexUser_88', pnl: 98.2, winRate: 55, trades: 320 },
];

export default function LeaderboardPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Trophy className="text-yellow-500" /> Top Performers (Monthly)
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[60px]">Rank</TableHead>
                                <TableHead>Trader</TableHead>
                                <TableHead className="text-right">PnL %</TableHead>
                                <TableHead className="text-right">Win Rate</TableHead>
                                <TableHead className="text-right">Total Trades</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockLeaders.map((u) => (
                                <TableRow key={u.rank}>
                                    <TableCell className="font-mono font-bold text-lg">
                                        {u.rank === 1 ? '🥇' : u.rank === 2 ? '🥈' : u.rank === 3 ? '🥉' : u.rank}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${u.name}`} />
                                                <AvatarFallback>{u.name.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{u.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right font-mono font-bold text-up">+{u.pnl}%</TableCell>
                                    <TableCell className="text-right font-mono">{u.winRate}%</TableCell>
                                    <TableCell className="text-right font-mono text-muted-foreground">{u.trades}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
