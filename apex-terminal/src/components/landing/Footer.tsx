import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                                <span className="font-bold text-primary-foreground">A</span>
                            </div>
                            <span className="font-mono font-bold text-xl">APEX TERMINAL</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            The last trading terminal you'll ever need. Built for speed, precision, and dominance.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                            <li><Link href="/download" className="hover:text-foreground transition-colors">Download</Link></li>
                            <li><Link href="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
                            <li><Link href="/api" className="hover:text-foreground transition-colors">API Reference</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="/community" className="hover:text-foreground transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} APEX Terminal. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social icons or other footer elements */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
