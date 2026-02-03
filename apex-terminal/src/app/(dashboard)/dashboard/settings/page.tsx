'use client';

import { MOCK_USER } from '@/lib/mock/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Key, User, Bell, LogOut, Copy, Eye, EyeOff, Trash2, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export default function SettingsPage() {
    const [showKey, setShowKey] = useState(false);
    const [apiKey, setApiKey] = useState('sk_test_mock_key...');

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // In a real app we'd use a toast here
        console.log('Copied to clipboard');
    };

    return (
        <div className="space-y-4 font-mono">
            <div className="flex items-center justify-between p-1">
                <h2 className="text-lg font-bold tracking-tight text-muted-foreground uppercase">/ SYSTEM / SETTINGS</h2>
            </div>

            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0 h-auto">
                    <TabsTrigger value="profile" className="rounded-none border-b-2 border-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:text-primary">
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="security" className="rounded-none border-b-2 border-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:text-primary">
                        Security & Keys
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="rounded-none border-b-2 border-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:text-primary">
                        Notifications
                    </TabsTrigger>
                </TabsList>

                <div className="mt-6">
                    {/* PROFILE TAB */}
                    <TabsContent value="profile" className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="rounded-none border-border bg-[#0A0A0A]">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary" />
                                        <CardTitle className="text-sm font-bold uppercase">Identity</CardTitle>
                                    </div>
                                    <CardDescription className="text-xs font-mono">Personal details and identification.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase">Display Name</Label>
                                        <Input id="name" defaultValue={MOCK_USER.name} className="bg-[#111] border-border rounded-none" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase">Email Address</Label>
                                        <Input id="email" defaultValue={MOCK_USER.email} className="bg-[#111] border-border rounded-none" disabled />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label className="text-xs font-mono text-muted-foreground uppercase">Account Tier</Label>
                                        <div className="flex items-center gap-2 border border-primary/20 bg-primary/5 p-2">
                                            <Badge variant="outline" className="rounded-none border-primary text-primary font-bold">{MOCK_USER.tier}</Badge>
                                            <span className="text-xs text-muted-foreground">Expires: LIFETIME</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-none border-border bg-[#0A0A0A]">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-primary" />
                                        <CardTitle className="text-sm font-bold uppercase">Session Info</CardTitle>
                                    </div>
                                    <CardDescription className="text-xs font-mono">Current device and IP address.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center text-xs border-b border-border pb-2">
                                        <span className="text-muted-foreground">IP ADDRESS</span>
                                        <span>192.168.1.1</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs border-b border-border pb-2">
                                        <span className="text-muted-foreground">DEVICE</span>
                                        <span>Chrome / Windows 11</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs border-b border-border pb-2">
                                        <span className="text-muted-foreground">LAST LOGIN</span>
                                        <span>Just now</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* SECURITY TAB */}
                    <TabsContent value="security" className="space-y-6">
                        <div className="grid gap-6">
                            <Card className="rounded-none border-border bg-[#0A0A0A]">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Key className="w-4 h-4 text-primary" />
                                        <CardTitle className="text-sm font-bold uppercase">API Keys</CardTitle>
                                    </div>
                                    <CardDescription className="text-xs font-mono">Manage programmatic access to your Apex Terminal.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-2 p-3 border border-border bg-[#111]">
                                        <code className="flex-1 text-xs text-muted-foreground overflow-hidden font-mono">
                                            {showKey ? 'sk_test_mock_key_123456789' : 'sk_test_••••••••••••••••••••••'}
                                        </code>
                                        <Button variant="ghost" size="icon" onClick={() => setShowKey(!showKey)} className="h-6 w-6">
                                            {showKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => copyToClipboard('sk_test_mock_key_123456789')} className="h-6 w-6">
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
                    </TabsContent>

                    {/* NOTIFICATIONS TAB */}
                    <TabsContent value="notifications" className="space-y-6">
                        <Card className="rounded-none border-border bg-[#0A0A0A]">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Bell className="w-4 h-4 text-primary" />
                                    <CardTitle className="text-sm font-bold uppercase">Preference Map</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-xs text-muted-foreground text-center py-8 font-mono">
                                    NOTIFICATION PREFERENCES SYNCED WITH DEVICE SETTINGS.
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
