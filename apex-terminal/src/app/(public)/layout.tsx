import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-primary/20">
            {/* Navbar */}
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-6 w-6 bg-primary rounded-sm" />
                        <span className="text-xl font-bold tracking-tighter text-foreground">
                            APEX <span className="text-primary">TERMINAL</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
                        <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                Log In
                            </Button>
                        </Link>
                        <Link href="/signup">
                            <Button size="sm" className="font-semibold">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-card">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-5 bg-primary/80 rounded-sm" />
                                <span className="text-lg font-bold tracking-tight">APEX</span>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                The last trading terminal you'll ever need. Built for speed, precision, and zero latency.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Product</h4>
                            <Link href="/features" className="text-xs text-muted-foreground hover:text-primary">Features</Link>
                            <Link href="/pricing" className="text-xs text-muted-foreground hover:text-primary">Pricing</Link>
                            <Link href="/changelog" className="text-xs text-muted-foreground hover:text-primary">Changelog</Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Company</h4>
                            <Link href="/about" className="text-xs text-muted-foreground hover:text-primary">About</Link>
                            <Link href="/blog" className="text-xs text-muted-foreground hover:text-primary">Blog</Link>
                            <Link href="/careers" className="text-xs text-muted-foreground hover:text-primary">Careers</Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Legal</h4>
                            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary">Privacy</Link>
                            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary">Terms</Link>
                        </div>
                    </div>
                    <div className="mt-12 flex items-center justify-between border-t border-border/50 pt-8 text-xs text-muted-foreground">
                        <p>© 2026 Apex Terminal. All rights reserved.</p>
                        <div className="flex gap-4">
                            <span>System Status: <span className="text-primary">Operational</span></span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
