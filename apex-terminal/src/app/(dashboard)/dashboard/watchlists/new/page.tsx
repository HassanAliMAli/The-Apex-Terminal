"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewWatchlistPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/watchlists">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Create Watchlist</h2>
                    <p className="text-muted-foreground">Create a new collection of assets to track.</p>
                </div>
            </div>

            <Card className="max-w-xl bg-card border-border">
                <CardHeader>
                    <CardTitle>Watchlist Details</CardTitle>
                    <CardDescription>
                        Give your watchlist a name and add some initial symbols.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="e.g., Crypto Blue Chips" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="symbols">Initial Symbols (comma separated)</Label>
                        <Input id="symbols" placeholder="BTCUSDT, ETHUSDT, SOLUSDT" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Link href="/dashboard/watchlists">
                        <Button variant="ghost">Cancel</Button>
                    </Link>
                    <Button>Create Watchlist</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
