import { WatchlistTable } from '@/components/tables/WatchlistTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Edit } from 'lucide-react';
import Link from 'next/link';

// Mock data fetcher
async function getWatchlist(id: string) {
    if (id === '1') return { id: '1', name: 'Crypto Leaders', symbols: ['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'BNBUSDT'] };
    // fallback
    return { id, name: 'Custom Watchlist', symbols: ['BTCUSDT'] };
}

export default async function SingleWatchlistPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const watchlist = await getWatchlist(id);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/watchlists">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">{watchlist.name}</h2>
                        <p className="text-muted-foreground">{watchlist.symbols.length} Assets</p>
                    </div>
                </div>
                <Link href={`/dashboard/watchlists/${id}/edit`}>
                    <Button variant="outline" className="gap-2">
                        <Edit className="h-4 w-4" />
                        Edit List
                    </Button>
                </Link>
            </div>

            <Card className="bg-card border-border border-none shadow-none">
                <CardContent className="p-0">
                    <WatchlistTable symbols={watchlist.symbols} />
                </CardContent>
            </Card>
        </div>
    );
}
