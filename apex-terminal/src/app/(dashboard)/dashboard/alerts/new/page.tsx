"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewAlertPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/alerts">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Create Alert</h2>
                    <p className="text-muted-foreground">Get notified when market conditions are met.</p>
                </div>
            </div>

            <Card className="max-w-xl bg-card border-border">
                <CardHeader>
                    <CardTitle>Alert Condition</CardTitle>
                    <CardDescription>
                        Configure the trigger rules for your alert.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="symbol">Asset Symbol</Label>
                        <Input id="symbol" placeholder="BTCUSDT" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="condition">Condition</Label>
                            <Select defaultValue="price_above">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select condition" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="price_above">Price Above</SelectItem>
                                    <SelectItem value="price_below">Price Below</SelectItem>
                                    <SelectItem value="pct_change">Percent Change</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="value">Value</Label>
                            <Input id="value" type="number" placeholder="50000" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Notification Channels</Label>
                        <div className="flex gap-4 p-4 border border-border rounded-md bg-muted/20">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="push" className="rounded border-gray-300" defaultChecked />
                                <label htmlFor="push" className="text-sm">Push</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="email" className="rounded border-gray-300" />
                                <label htmlFor="email" className="text-sm">Email</label>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Link href="/dashboard/alerts">
                        <Button variant="ghost">Cancel</Button>
                    </Link>
                    <Button>Create Alert</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
