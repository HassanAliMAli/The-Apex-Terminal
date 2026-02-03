"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, Trash } from "lucide-react";

export default function EditWatchlistPage({ params }: { params: { id: string } }) {
    // Mock assumption: fetching data based on params.id would happen here

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href={`/dashboard/watchlists/${params.id}`}>
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Edit Watchlist</h2>
                    <p className="text-muted-foreground">Manage assets and settings for this list.</p>
                </div>
            </div>

            <Card className="max-w-xl bg-card border-border">
                <CardHeader>
                    <CardTitle>Watchlist Settings</CardTitle>
                    <CardDescription>
                        Update your watchlist preferences.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="My Watchlist" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="symbols">Symbols</Label>
                        <Input id="symbols" defaultValue="BTCUSDT, ETHUSDT" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="destructive" className="gap-2">
                        <Trash className="h-4 w-4" />
                        Delete
                    </Button>
                    <div className="flex gap-2">
                        <Link href="/dashboard/watchlists">
                            <Button variant="ghost">Cancel</Button>
                        </Link>
                        <Button>Save Changes</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
