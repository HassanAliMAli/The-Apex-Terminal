import { QuickStats } from '@/components/dashboard/QuickStats';
import { MarketOverview } from '@/components/dashboard/MarketOverview';
import { MOCK_NEWS } from '@/lib/mock/news';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>

            <QuickStats />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MarketOverview />

                {/* News Feed / Activity Widget */}
                <Card className="col-span-4 lg:col-span-1 bg-card border-border">
                    <CardHeader>
                        <CardTitle>Latest News</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {MOCK_NEWS.map((news) => (
                                <div key={news.id} className="flex flex-col space-y-1 border-b border-border pb-3 last:border-0">
                                    <span className="text-xs text-muted-foreground">{news.source} • {new Date(news.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    <a href="#" className="font-medium text-sm hover:text-primary transition-colors flex items-start gap-1">
                                        {news.title}
                                        <ExternalLink className="w-3 h-3 mt-0.5 opacity-50" />
                                    </a>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded w-fit ${news.sentiment === 'POSITIVE' ? 'bg-up/20 text-up' :
                                            news.sentiment === 'NEGATIVE' ? 'bg-down/20 text-down' :
                                                'bg-muted text-muted-foreground'
                                        }`}>
                                        {news.sentiment}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
