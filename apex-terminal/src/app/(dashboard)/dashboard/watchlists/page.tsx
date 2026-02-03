'use client';

import { MOCK_WATCHLISTS } from '@/lib/mock/watchlists';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowRight, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function WatchlistsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Watchlists</h2>
                    <p className="text-muted-foreground mt-1">Track your favorite assets and market movements.</p>
                </div>
                <Link href="/dashboard/watchlists/new">
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        New List
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_WATCHLISTS.map((wl) => (
                    <Link key={wl.id} href={`/dashboard/watchlists/${wl.id}`}>
                        <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer h-full flex flex-col">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <CardTitle>{wl.name}</CardTitle>
                                        <CardDescription>Created just now</CardDescription>
                                    </div>
                                    <Button variant="ghost" size="icon" className="-mr-2 -mt-2">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="text-2xl font-mono font-bold">
                                    {wl.symbols.length} <span className="text-sm font-sans font-normal text-muted-foreground">Assets</span>
                                </div>
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    {wl.symbols.slice(0, 3).map(s => (
                                        <span key={s} className="px-2 py-1 bg-muted rounded-sm text-xs font-mono">
                                            {s}
                                        </span>
                                    ))}
                                    {wl.symbols.length > 3 && (
                                        <span className="px-2 py-1 bg-muted rounded-sm text-xs font-mono">
                                            +{wl.symbols.length - 3}
                                        </span>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="border-t border-border pt-4">
                                <div className="text-xs text-muted-foreground flex items-center gap-1 group">
                                    View Watchlist <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
