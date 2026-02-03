import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Users, Activity, FileText, Key, LogOut } from 'lucide-react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex font-mono border-t-4 border-destructive">
            {/* Sidebar */}
            <aside className="w-64 bg-[#050505] border-r border-border flex flex-col">
                <div className="p-6 border-b border-border/50">
                    <div className="flex items-center gap-2 text-destructive">
                        <ShieldAlert className="h-6 w-6" />
                        <span className="font-bold text-xl tracking-tight">GOD MODE</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">Management</div>
                    <Link href="/god/users">
                        <div className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-white/5 rounded-sm transition-colors cursor-pointer text-muted-foreground hover:text-white">
                            <Users className="h-4 w-4" /> Users
                        </div>
                    </Link>
                    <Link href="/god/invites">
                        <div className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-white/5 rounded-sm transition-colors cursor-pointer text-muted-foreground hover:text-white">
                            <Key className="h-4 w-4" /> Invites
                        </div>
                    </Link>

                    <div className="mt-8 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">System</div>
                    <Link href="/god/monitoring">
                        <div className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-white/5 rounded-sm transition-colors cursor-pointer text-muted-foreground hover:text-white">
                            <Activity className="h-4 w-4" /> Monitoring
                        </div>
                    </Link>
                    <Link href="/god/logs">
                        <div className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-white/5 rounded-sm transition-colors cursor-pointer text-muted-foreground hover:text-white">
                            <FileText className="h-4 w-4" /> Logs
                        </div>
                    </Link>
                </nav>

                <div className="p-4 border-t border-border/50">
                    <Link href="/dashboard">
                        <Button variant="outline" className="w-full justify-start gap-2 border-dashed border-muted-foreground/30 text-muted-foreground hover:text-white">
                            <LogOut className="h-4 w-4" /> Exit God Mode
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
