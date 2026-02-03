'use client';

import { useState } from 'react';
import { MOCK_NEWS, NewsItem } from '@/lib/mock/news';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, ExternalLink, ChevronRight, Hash } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const CATEGORIES = ['ALL', 'CRYPTO', 'STOCKS', 'MACRO', 'FOREX'];

export default function NewsPage() {
    const [filter, setFilter] = useState('ALL');
    const [search, setSearch] = useState('');
    const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

    const filteredNews = MOCK_NEWS.filter(item => {
        const matchesCategory = filter === 'ALL' || item.category === filter;
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.summary.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] space-y-4">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 p-1">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold tracking-tight font-mono text-muted-foreground uppercase mr-4">/ TERMINAL / NEWS</h2>
                    <div className="flex gap-1">
                        {CATEGORIES.map(cat => (
                            <Button
                                key={cat}
                                variant={filter === cat ? "secondary" : "ghost"}
                                size="sm"
                                onClick={() => setFilter(cat)}
                                className={`rounded-none h-7 text-xs font-mono tracking-wider ${filter === cat ? 'bg-primary/20 text-primary border border-primary/50' : 'text-muted-foreground'}`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="relative w-64">
                    <Search className="absolute left-2 top-2 h-3.5 w-3.5 text-muted-foreground" />
                    <Input
                        placeholder="FILTER HEADLINES..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="h-8 pl-8 rounded-none bg-[#0A0A0A] border-border text-xs font-mono"
                    />
                </div>
            </div>

            <div className="flex gap-4 flex-1 min-h-0">
                {/* News Feed List */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-1">
                    {filteredNews.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedNews(item)}
                            className={`group flex flex-col p-3 border border-transparent hover:border-primary/30 hover:bg-[#111] cursor-pointer transition-all ${selectedNews?.id === item.id ? 'bg-[#111] border-primary/50' : 'border-b-border border-b'}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-[10px] px-1.5 py-0.5 border border-opacity-30 mb-2 font-mono ${item.sentiment === 'POSITIVE' ? 'text-up border-up bg-up/5' :
                                        item.sentiment === 'NEGATIVE' ? 'text-down border-down bg-down/5' :
                                            'text-muted-foreground border-muted-foreground'
                                    }`}>
                                    {item.sentiment}
                                </span>
                                <span className="text-[10px] text-muted-foreground font-mono">
                                    {formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true }).toUpperCase()}
                                </span>
                            </div>
                            <h3 className={`font-medium leading-snug group-hover:text-primary transition-colors ${selectedNews?.id === item.id ? 'text-primary' : 'text-foreground'}`}>
                                {item.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-[10px] text-primary uppercase font-bold">{item.source}</span>
                                <span className="text-[10px] text-muted-foreground/50">•</span>
                                <span className="text-[10px] text-muted-foreground font-mono">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reading Pane (Terminal style) */}
                <div className="w-[450px] hidden lg:flex flex-col border border-border bg-[#0A0A0A] relative">
                    {selectedNews ? (
                        <>
                            <div className="h-1 bg-primary w-full animate-marquee-fast" />
                            <div className="p-6 flex-1 overflow-y-auto">
                                <div className="flex items-center gap-2 mb-6 text-xs font-mono text-muted-foreground">
                                    <Hash className="w-3 h-3" />
                                    <span>{selectedNews.id.toUpperCase()}</span>
                                    <span className="flex-1 border-b border-dashed border-border mx-2" />
                                    <span>{new Date(selectedNews.publishedAt).toLocaleTimeString()}</span>
                                </div>

                                <h1 className="text-2xl font-bold mb-4 leading-tight text-white">{selectedNews.title}</h1>

                                <div className="flex gap-4 mb-8 text-xs font-mono border-y border-border py-2">
                                    <div className="flex flex-col">
                                        <span className="text-muted-foreground">SOURCE</span>
                                        <span className="text-primary">{selectedNews.source}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-muted-foreground">SENTIMENT</span>
                                        <span className={selectedNews.sentiment === 'POSITIVE' ? 'text-up' : selectedNews.sentiment === 'NEGATIVE' ? 'text-down' : 'text-white'}>
                                            {selectedNews.sentiment}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-muted-foreground">CATEGORY</span>
                                        <span className="text-white">{selectedNews.category}</span>
                                    </div>
                                </div>

                                <p className="text-lg leading-relaxed text-muted-foreground font-mono">
                                    {selectedNews.summary}
                                </p>

                                <div className="mt-8 pt-4 border-t border-border flex justify-end">
                                    <Button variant="outline" size="sm" className="rounded-none gap-2 hover:bg-primary hover:text-black">
                                        OPEN SOURCE <ExternalLink className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground/50">
                            <Terminal className="w-12 h-12 mb-4 opacity-20" />
                            <span className="font-mono text-xs tracking-widest">SELECT A HEADLINE TO READ</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function Terminal(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" x2="20" y1="19" y2="19" />
        </svg>
    )
}
