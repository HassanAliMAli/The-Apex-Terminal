'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    LineChart,
    Wallet,
    Newspaper,
    Bell,
    Settings,
    LogOut,
    Menu,
    TerminalSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_ITEMS = [
    { label: 'DASHBOARD', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'MARKET', icon: LineChart, href: '/dashboard/charts' },
    { label: 'PORTFOLIO', icon: Wallet, href: '/dashboard/portfolio' },
    { label: 'WATCHLIST', icon: LineChart, href: '/dashboard/watchlists' },
    { label: 'NEWS', icon: Newspaper, href: '/dashboard/news' },
    { label: 'ALERTS', icon: Bell, href: '/dashboard/alerts' },
    { label: 'SYSTEM', icon: Settings, href: '/dashboard/settings' },
];

export const Sidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const NavContent = () => (
        <div className="flex flex-col h-full bg-black border-r border-[#333]">
            <div className="h-14 flex items-center px-4 border-b border-[#333]">
                <TerminalSquare className="w-5 h-5 text-primary mr-2" />
                <h1 className="text-lg font-bold tracking-tight text-white font-mono">
                    APEX<span className="text-primary">.TERM</span>
                </h1>
            </div>

            <nav className="flex-1 py-4 space-y-0.5">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                'flex items-center gap-3 px-4 py-3 text-xs font-bold tracking-widest transition-colors font-mono',
                                isActive
                                    ? 'bg-primary/10 text-primary border-r-2 border-primary'
                                    : 'text-[#666] hover:text-white hover:bg-[#111]'
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-[#333]">
                <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 text-[#666] hover:text-destructive hover:bg-destructive/10 font-mono text-xs uppercase tracking-wider h-10 rounded-none"
                >
                    <LogOut className="w-4 h-4" />
                    Disconnect
                </Button>
            </div>

            {/* System Status Footer */}
            <div className="px-4 py-2 bg-[#050505] border-t border-[#333] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#00D09C]" />
                    <span className="text-[10px] text-[#444] font-mono">ONLINE</span>
                </div>
                <span className="text-[10px] text-[#444] font-mono">v1.0.5</span>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-56 h-screen fixed left-0 top-0 z-50">
                <NavContent />
            </aside>
            {/* Spacer for fixed sidebar */}
            <div className="hidden md:block w-56 flex-shrink-0" />

            {/* Mobile Sidebar */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden fixed top-2 left-2 z-50 rounded-none bg-black/50 backdrop-blur border border-[#333]">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64 border-r border-[#333] bg-black">
                    <NavContent />
                </SheetContent>
            </Sheet>
        </>
    );
};
