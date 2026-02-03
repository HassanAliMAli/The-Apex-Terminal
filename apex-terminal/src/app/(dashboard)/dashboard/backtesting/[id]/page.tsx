import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

export default async function StrategyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/backtesting">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Strategy #{id}</h2>
                        <Badge>Completed</Badge>
                    </div>
                </div>
                <Button className="gap-2">
                    <Play className="h-4 w-4" /> Run Again
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Return</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-up">+15.4%</div>
                    </CardContent>
                </Card>
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">Win Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">62%</div>
                    </CardContent>
                </Card>
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">Max Drawdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-down">-5.2%</div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-card border-border h-[400px] flex items-center justify-center text-muted-foreground border-dashed">
                [Equity Curve Chart Placeholder]
            </Card>
        </div>
    );
}
