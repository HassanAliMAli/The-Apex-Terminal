'use client';

import { Bell, Search, Wifi, Terminal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MOCK_USER } from '@/lib/mock/user';
import { useState } from 'react';
import { toast } from 'sonner';
import { PriceDisplay } from '@/components/shared/PriceDisplay';
import { ChangeIndicator } from '@/components/shared/ChangeIndicator';

const TICKER_TAPE = [
    { symbol: 'BTC', price: 43250.50, change: 2.98 },
    { symbol: 'ETH', price: 2250.75, change: -0.68 },
    { symbol: 'SOL', price: 98.40, change: 5.58 },
    { symbol: 'SPX', price: 4780.20, change: 0.45 },
    { symbol: 'NDX', price: 16800.50, change: 1.20 },
    { symbol: 'GLD', price: 2050.10, change: -0.15 },
    { symbol: 'EUR', price: 1.0850, change: -0.05 },
];

export const TopBar = () => {
    const [status, setStatus] = useState<'CONNECTED' | 'DISCONNECTED'>('CONNECTED');

    return (
        <div className="flex flex-col sticky top-0 z-40 bg-background/95 backdrop-blur">
            {/* Ticker Tape */}
            <div className="h-6 bg-[#0A0A0A] border-b border-[#222] flex items-center overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee items-center gap-6 px-4">
                    {TICKER_TAPE.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono">
                            <span className="text-muted-foreground font-bold">{item.symbol}</span>
                            <span className="text-foreground">{item.price.toFixed(2)}</span>
                            <span className={`${item.change >= 0 ? 'text-up' : 'text-down'}`}>
                                {item.change > 0 ? '+' : ''}{item.change}%
                            </span>
                        </div>
                    ))}
                    {/* Duplicate for seamless scrolling illusion (simplified) */}
                    {TICKER_TAPE.map((item, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-2 text-xs font-mono">
                            <span className="text-muted-foreground font-bold">{item.symbol}</span>
                            <span className="text-foreground">{item.price.toFixed(2)}</span>
                            <span className={`${item.change >= 0 ? 'text-up' : 'text-down'}`}>
                                {item.change > 0 ? '+' : ''}{item.change}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <header className="h-14 border-b border-border px-4 flex items-center justify-between gap-4">
                {/* Search - Global */}
                <div className="flex-1 max-w-md hidden md:flex items-center relative">
                    <Terminal className="absolute left-3 top-3 h-4 w-4 text-primary" />
                    <Input
                        type="search"
                        placeholder="EXECUTE COMMAND..."
                        className="w-full pl-10 h-10 bg-[#0A0A0A] border-border focus-visible:ring-primary rounded-none font-mono text-xs tracking-wider"
                    />
                    <div className="absolute right-2.5 top-2.5 text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 bg-[#111]">
                        CTRL+K
                    </div>
                </div>

                <div className="flex items-center gap-3 ml-auto">
                    {/* Connection Status */}
                    <div className="flex items-center gap-2 text-[10px] text-up bg-up/5 px-2 py-1 border border-up/20 tracking-wider">
                        <Wifi className="w-3 h-3" />
                        <span className="hidden sm:inline font-mono font-bold">NET.OK</span>
                        <span className="sm:hidden font-mono">OK</span>
                    </div>

                    {/* Notifications */}
                    <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground hover:bg-[#111] rounded-none">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-none animate-pulse" />
                    </Button>

                    {/* User Mini Profile */}
                    <div className="flex items-center gap-3 pl-3 border-l border-border">
                        <div className="text-right hidden sm:block">
                            <div className="text-xs font-bold leading-none uppercase tracking-wider">{MOCK_USER.name}</div>
                            <div className="text-[10px] text-primary mt-1 font-mono">{MOCK_USER.tier} ACCESS</div>
                        </div>
                        <div className="w-8 h-8 bg-[#111] flex items-center justify-center text-primary font-bold border border-primary/30 text-xs">
                            {MOCK_USER.name[0]}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
