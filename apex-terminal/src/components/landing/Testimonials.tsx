import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

function TestimonialCard({ quote, author, role, avatar }: TestimonialProps) {
    return (
        <Card className="bg-card/50 border-border">
            <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-foreground italic">"{quote}"</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden relative">
                            {avatar ? (
                                <Image
                                    src={avatar}
                                    alt={author}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-primary font-bold text-lg">{author.charAt(0)}</span>
                            )}
                        </div>
                        <div>
                            <h4 className="font-bold">{author}</h4>
                            <p className="text-sm text-muted-foreground">{role}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function Testimonials() {
    return (
        <section className="py-24 bg-background-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Trusted by Top Traders</h2>
                    <div className="flex flex-wrap items-center justify-center gap-8 text-2xl mt-8">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-3xl">10,000+</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">Active Users</span>
                        </div>
                        <div className="w-px h-12 bg-border hidden sm:block"></div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-3xl text-success">$2.4M</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">Portfolio Value</span>
                        </div>
                        <div className="w-px h-12 bg-border hidden sm:block"></div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-3xl text-up">147%</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">Avg Return</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="Made $47K in 3 months using APEX alerts. Worth every penny."
                        author="@CryptoWhale"
                        role="Full-time Trader"
                    />
                    <TestimonialCard
                        quote="Better than TradingView. Better than Bloomberg. And it's FREE."
                        author="Sarah Chen"
                        role="Prop Firm Trader"
                    />
                    <TestimonialCard
                        quote="The DeFi whale tracker is going to be insane when it launches."
                        author="@DeFiMaxis"
                        role="DeFi Investor"
                    />
                </div>
            </div>
        </section>
    );
}
