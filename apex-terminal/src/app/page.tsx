import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Nav */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-border">
        <div className="font-bold text-xl tracking-tighter text-primary">APEX <span className="text-foreground">TERMINAL</span></div>
        <div className="flex gap-4">
          <Link href="/login"><Button variant="ghost">Login</Button></Link>
          <Link href="/signup"><Button>Get Started</Button></Link>
        </div>
      </header>
      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            The Last Trading Terminal
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-primary to-up bg-clip-text text-transparent">
            You'll Ever Need
          </h1>
        </div>
        <p className="max-w-xl text-muted-foreground text-lg">
          Institutional-grade analytics, real-time data, and zero latency.
          Now available for retail traders.
        </p>
        <div className="flex gap-4 pt-4">
          <Link href="/signup"><Button size="lg" className="h-12 px-8 text-lg font-bold">Start Trading Now</Button></Link>
          <Link href="/dashboard"><Button size="lg" variant="outline" className="h-12 px-8 text-lg">View Demo</Button></Link>
        </div>

        <div className="mt-12 p-1 border border-border rounded-xl bg-card/50 backdrop-blur shadow-2xl skew-y-1">
          <div className="w-[80vw] max-w-4xl h-[400px] bg-background/50 rounded-lg flex items-center justify-center text-muted-foreground font-mono">
            [Terminal Preview Interface Placeholder]
          </div>
        </div>
      </main>
    </div>
  );
}
