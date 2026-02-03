'use client';

import { MOCK_WATCHLISTS } from '@/lib/mock/watchlists';
import { WatchlistTable } from '@/components/tables/WatchlistTable';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function WatchlistsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Watchlists</h2>
                    <p className="text-muted-foreground mt-1">Track your favorite assets and market movements.</p>
                </div>
                <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    New List
                </Button>
            </div>

            <Tabs defaultValue={MOCK_WATCHLISTS[0].id} className="space-y-4">
                <TabsList className="bg-card border border-border">
                    {MOCK_WATCHLISTS.map((wl) => (
                        <TabsTrigger key={wl.id} value={wl.id}>
                            {wl.name}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {MOCK_WATCHLISTS.map((wl) => (
                    <TabsContent key={wl.id} value={wl.id}>
                        <Card className="bg-card border-border">
                            <CardHeader>
                                <CardTitle>{wl.name}</CardTitle>
                                <CardDescription>
                                    Tracking {wl.symbols.length} assets
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <WatchlistTable symbols={wl.symbols} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
