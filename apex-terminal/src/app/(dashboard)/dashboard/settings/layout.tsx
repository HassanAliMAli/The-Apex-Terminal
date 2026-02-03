"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, CreditCard, Bell, Key } from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
    { href: '/dashboard/settings/profile', label: 'Profile', icon: User },
    { href: '/dashboard/settings/billing', label: 'Billing', icon: CreditCard },
    { href: '/dashboard/settings/notifications', label: 'Notifications', icon: Bell },
    { href: '/dashboard/settings/api', label: 'API Keys', icon: Key },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 h-full">
            <aside className="w-full lg:w-1/5 shrink-0">
                <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                                pathname === item.href ? "bg-accent/50 text-accent-foreground border-l-2 border-primary rounded-l-none" : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
    );
}
