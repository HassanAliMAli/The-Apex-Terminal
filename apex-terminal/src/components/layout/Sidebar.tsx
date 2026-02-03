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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NAV_ITEMS = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Market & Charts', icon: LineChart, href: '/dashboard/charts' },
    { label: 'Portfolio', icon: Wallet, href: '/dashboard/portfolio' },
    { label: 'Watchlists', icon: LineChart, href: '/dashboard/watchlists' }, // Reusing icon for now
    { label: 'News & Events', icon: Newspaper, href: '/dashboard/news' },
    { label: 'Alerts', icon: Bell, href: '/dashboard/alerts' },
    { label: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export const Sidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const NavContent = () => (
        <div className="flex flex-col h-full py-4 space-y-4 bg-sidebar border-r border-sidebar-border w-64">
            <div className="px-6 py-2">
                <h1 className="text-xl font-bold tracking-tighter text-sidebar-primary">
                    APEX <span className="text-sidebar-foreground">TERMINAL</span>
                </h1>
            </div>
            <nav className="flex-1 px-3 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                isActive
                                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
            <div className="px-3 py-2 border-t border-sidebar-border">
                <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 text-sidebar-foreground/70 hover:bg-destructive/10 hover:text-destructive"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </Button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex h-screen flex-col border-r bg-sidebar">
                <NavContent />
            </aside>

            {/* Mobile Sidebar */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden fixed top-3 left-3 z-50">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64 bg-sidebar border-sidebar-border">
                    <NavContent />
                </SheetContent>
            </Sheet>
        </>
    );
};
