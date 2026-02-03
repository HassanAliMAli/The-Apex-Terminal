export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tighter text-primary">
                        APEX <span className="text-foreground">TERMINAL</span>
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        The Last Trading Terminal You'll Ever Need
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
}
