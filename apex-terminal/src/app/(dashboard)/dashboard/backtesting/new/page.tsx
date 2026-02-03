"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewStrategyPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/backtesting">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">New Strategy</h2>
                    <p className="text-muted-foreground">Define your algorithms and parameters.</p>
                </div>
            </div>

            <Card className="max-w-2xl bg-card border-border">
                <CardHeader>
                    <CardTitle>Strategy Configuration</CardTitle>
                    <CardDescription>
                        Enter your Pinescript or Python logic below.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Strategy Name</Label>
                        <Input id="name" placeholder="e.g., Bollinger Breakout" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="code">Logic Code</Label>
                        <Textarea id="code" placeholder="// Enter code here..." className="font-mono h-[300px]" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Link href="/dashboard/backtesting">
                        <Button variant="ghost">Cancel</Button>
                    </Link>
                    <Button>Save & Run</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
