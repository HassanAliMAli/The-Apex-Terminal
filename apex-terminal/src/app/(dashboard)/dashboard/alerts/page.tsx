'use client';

import { useState } from 'react';
import { MOCK_ALERTS, Alert } from '@/lib/mock/alerts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Bell, Clock, Search, Trash2, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AlertsPage() {
    const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);
    const [search, setSearch] = useState('');
    const [activeTab, setActiveTab] = useState<'ACTIVE' | 'HISTORY'>('ACTIVE');

    const filteredAlerts = alerts.filter(alert => {
        const matchesSearch = alert.symbol.toLowerCase().includes(search.toLowerCase());
        const matchesTab = activeTab === 'ACTIVE'
            ? alert.status === 'ACTIVE'
            : alert.status !== 'ACTIVE';
        return matchesSearch && matchesTab;
    });

    const StatusIcon = ({ status }: { status: Alert['status'] }) => {
        switch (status) {
            case 'ACTIVE': return <Clock className="w-3 h-3 text-primary animate-pulse" />;
            case 'TRIGGERED': return <CheckCircle className="w-3 h-3 text-up" />;
            case 'CANCELLED': return <XCircle className="w-3 h-3 text-muted-foreground" />;
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between p-1">
                <h2 className="text-lg font-bold tracking-tight font-mono text-muted-foreground uppercase">/ SYSTEM / ALERTS</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="font-mono text-xs rounded-none border border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:text-black">
                            <Plus className="w-3 h-3 mr-2" />
                            NEW ALERT
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0A0A0A] border-border rounded-none sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="font-mono text-primary flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                CONFIGURE ALERT TRIGGER
                            </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="symbol" className="text-right font-mono text-xs">ASSET</Label>
                                <Input id="symbol" placeholder="BTCUSDT" className="col-span-3 rounded-none bg-[#111] border-border font-mono h-8" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="condition" className="text-right font-mono text-xs">CONDITION</Label>
                                <Select>
                                    <SelectTrigger className="col-span-3 rounded-none bg-[#111] border-border font-mono h-8">
                                        <SelectValue placeholder="Select condition" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#111] border-border rounded-none">
                                        <SelectItem value="PRICE_ABOVE">PRICE ABOVE</SelectItem>
                                        <SelectItem value="PRICE_BELOW">PRICE BELOW</SelectItem>
                                        <SelectItem value="PERCENT_CHANGE">% CHANGE</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="value" className="text-right font-mono text-xs">VALUE</Label>
                                <Input id="value" type="number" placeholder="0.00" className="col-span-3 rounded-none bg-[#111] border-border font-mono h-8" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" className="rounded-none bg-primary text-black hover:bg-primary/90 font-mono text-xs font-bold">
                                ARM SYSTEM
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Quick Stats / Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div
                    onClick={() => setActiveTab('ACTIVE')}
                    className={`cursor-pointer border p-3 flex items-center justify-between transition-colors ${activeTab === 'ACTIVE' ? 'bg-primary/5 border-primary' : 'bg-card border-border hover:border-primary/50'}`}
                >
                    <span className="text-xs font-mono text-muted-foreground">ACTIVE TRIGGERS</span>
                    <span className="text-xl font-bold font-mono text-primary">{alerts.filter(a => a.status === 'ACTIVE').length}</span>
                </div>
                <div
                    onClick={() => setActiveTab('HISTORY')}
                    className={`cursor-pointer border p-3 flex items-center justify-between transition-colors ${activeTab === 'HISTORY' ? 'bg-primary/5 border-primary' : 'bg-card border-border hover:border-primary/50'}`}
                >
                    <span className="text-xs font-mono text-muted-foreground">LOG HISTORY</span>
                    <span className="text-xl font-bold font-mono text-muted-foreground">{alerts.filter(a => a.status !== 'ACTIVE').length}</span>
                </div>
                <div className="md:col-span-2 flex items-center bg-card border border-border p-1">
                    <Search className="w-4 h-4 text-muted-foreground ml-2" />
                    <Input
                        placeholder="SEARCH LOGS..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border-0 bg-transparent h-8 font-mono text-xs focus-visible:ring-0"
                    />
                </div>
            </div>

            {/* Alerts Table */}
            <div className="border border-border bg-card">
                <div className="grid grid-cols-6 p-2 border-b border-border bg-[#0A0A0A] text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    <div className="col-span-1">STATUS</div>
                    <div className="col-span-1">ASSET</div>
                    <div className="col-span-2">CONDITION</div>
                    <div className="col-span-1">CREATED</div>
                    <div className="col-span-1 text-right">ACTION</div>
                </div>
                <div className="divide-y divide-[rgba(255,255,255,0.05)]">
                    {filteredAlerts.length > 0 ? (
                        filteredAlerts.map((alert) => (
                            <div key={alert.id} className="grid grid-cols-6 p-2 items-center hover:bg-[#111] group transition-colors">
                                <div className="col-span-1 flex items-center gap-2">
                                    <StatusIcon status={alert.status} />
                                    <span className={`text-xs font-mono ${alert.status === 'ACTIVE' ? 'text-primary' :
                                            alert.status === 'TRIGGERED' ? 'text-up' : 'text-muted-foreground'
                                        }`}>
                                        {alert.status}
                                    </span>
                                </div>
                                <div className="col-span-1 font-bold text-sm text-foreground">{alert.symbol}</div>
                                <div className="col-span-2 text-xs font-mono text-muted-foreground">
                                    {alert.type.replace('_', ' ')} <span className="text-foreground">{alert.targetValue}</span>
                                </div>
                                <div className="col-span-1 text-xs font-mono text-muted-foreground">
                                    {new Date(alert.createdAt).toLocaleDateString()}
                                </div>
                                <div className="col-span-1 flex justify-end">
                                    <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-muted-foreground font-mono text-xs">
                            NO ALERTS FOUND
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
