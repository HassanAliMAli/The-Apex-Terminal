import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const posts = [
    {
        id: 1,
        title: 'Introducing Apex Terminal',
        excerpt: 'The future of retail trading is here. Discover how we built the fastest web-based terminal.',
        date: 'Feb 1, 2026',
        author: 'Apex Team',
        slug: 'introducing-apex-terminal',
    },
    {
        id: 2,
        title: 'Mastering Market Structure',
        excerpt: 'A deep dive into understanding market structure and how to use it to your advantage.',
        date: 'Jan 28, 2026',
        author: 'Head Analyst',
        slug: 'mastering-market-structure',
    },
    {
        id: 3,
        title: 'Update 1.0.0 Changelog',
        excerpt: 'We have just released our first stable version. Here is what is new.',
        date: 'Jan 15, 2026',
        author: 'Engineering',
        slug: 'update-1-0-0',
    },
];

export default function BlogPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h2>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground">
                        News, deep dives, and product updates from the Apex team.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <Card className="h-full hover:bg-muted/5 transition-colors border-border bg-card">
                                <CardHeader>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.date} className="text-muted-foreground">
                                            {post.date}
                                        </time>
                                        <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                                            {post.author}
                                        </span>
                                    </div>
                                    <CardTitle className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
