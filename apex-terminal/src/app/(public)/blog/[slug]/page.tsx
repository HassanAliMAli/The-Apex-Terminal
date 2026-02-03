import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mb-10">
                    <Link href="/blog">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                        </Button>
                    </Link>
                </div>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl capitalize">
                        {slug.replace(/-/g, ' ')}
                    </h1>
                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                        This is a mock blog post content for <strong>{slug}</strong>.
                        In a real application, this content would be fetched from a CMS or database.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h2 className="mt-10 text-2xl font-bold tracking-tight text-white">Section Title</h2>
                        <p className="mt-6 text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
