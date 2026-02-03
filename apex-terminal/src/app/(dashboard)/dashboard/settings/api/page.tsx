"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Key, Eye, EyeOff, Copy, Shield } from 'lucide-react';

export default function ApiKeysSettingsPage() {
    const [showKey, setShowKey] = useState(false);

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">API Keys</h3>
                <p className="text-sm text-muted-foreground">
                    Manage programmatic access to your account.
                </p>
            </div>

            <Card className="rounded-none border-border bg-[#0A0A0A]">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Key className="w-4 h-4 text-primary" />
                        <CardTitle className="text-sm font-bold uppercase">Active Key</CardTitle>
                    </div>
                    <CardDescription className="text-xs font-mono">Do not share this key with anyone.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 p-3 border border-border bg-[#111]">
                        <code className="flex-1 text-xs text-muted-foreground overflow-hidden font-mono">
                            {showKey ? 'sk_live_51Os...' : 'sk_live_••••••••••••••••••••••'}
                        </code>
                        <Button variant="ghost" size="icon" onClick={() => setShowKey(!showKey)} className="h-6 w-6">
                            {showKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Copy className="w-3 h-3" />
                        </Button>
                    </div>
                    <div className="flex justify-end">
                        <Button variant="outline" size="sm" className="rounded-none text-xs border-border hover:bg-[#222]">
                            ROLL KEY
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="rounded-none border-destructive/50 bg-destructive/5">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-destructive" />
                        <CardTitle className="text-sm font-bold uppercase text-destructive">Danger Zone</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-foreground">Delete Account</p>
                            <p className="text-[10px] text-muted-foreground">Permanently remove all data and history. This cannot be undone.</p>
                        </div>
                        <Button variant="destructive" size="sm" className="rounded-none h-7">
                            DELETE ACCOUNT
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
