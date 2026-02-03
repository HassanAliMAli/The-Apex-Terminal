export default function AboutPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Apex Terminal</h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        We are democratizing access to institutional-grade trading tools.
                        We believe that every trader deserves professional analytics, zero-latency data, and a powerful workspace without the $24,000/year price tag.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-muted-foreground lg:max-w-none lg:grid-cols-2">
                        <div>
                            <p>
                                Founded in 2026, Apex Terminal was built by a group of ex-quant developers and designers who were frustrated with the state of retail trading software. Clunky interfaces, slow data, and lack of real tools were the norm. We set out to change that.
                            </p>
                            <p className="mt-8">
                                Our mission is simple: <strong>Level the playing field.</strong> Whether you are trading crypto, stocks, or forex, Apex provides the edge you need to compete with the big players.
                            </p>
                        </div>
                        <div>
                            <p>
                                We are built on a modern stack, leveraging Edge computing for speed and reliability. Our infrastructure scales globally, ensuring that you have the fastest connection to the markets, no matter where you are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
