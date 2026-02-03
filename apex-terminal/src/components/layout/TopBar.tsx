'use client';

import { Bell, Search, Wifi } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MOCK_USER } from '@/lib/mock/user';

export const TopBar = () => {
    return (
        <header className="h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 flex items-center justify-between gap-4 sticky top-0 z-40">

            {/* Search - Global */}
            <div className="flex-1 max-w-md hidden md:flex items-center relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search markets, commands..."
                    className="w-full pl-9 h-9 bg-accent/20 border-accent focus-visible:ring-primary"
                />
                <div className="absolute right-2.5 top-2.5 text-xs text-muted-foreground border border-border px-1.5 rounded">
                    ⌘K
                </div>
            </div>

            <div className="flex items-center gap-3 ml-auto">
                {/* Connection Status */}
                <div className="flex items-center gap-2 text-xs text-up bg-up/10 px-2 py-1 rounded-full border border-up/20">
                    <Wifi className="w-3 h-3" />
                    <span className="hidden sm:inline font-mono">CONNECTED</span>
                    <span className="sm:hidden font-mono">ON</span>
                </div>

                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </Button>

                {/* User Mini Profile */}
                <div className="flex items-center gap-2 pl-2 border-l border-border">
                    <div className="text-right hidden sm:block">
                        <div className="text-sm font-medium leading-none">{MOCK_USER.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 font-mono">{MOCK_USER.tier} PLAN</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                        {MOCK_USER.name[0]}
                    </div>
                </div>
            </div>
        </header>
    );
};
