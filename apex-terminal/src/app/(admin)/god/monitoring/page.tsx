import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Cpu, Database, Globe } from 'lucide-react';

export default function MonitoringPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">System Status</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-background border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Edge Requests</CardTitle>
                        <Globe className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142,302</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last hour</p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Worker CPU</CardTitle>
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12ms</div>
                        <p className="text-xs text-muted-foreground">Avg execution time</p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">D1 Reads</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.2M</div>
                        <p className="text-xs text-muted-foreground">Rows read 24h</p>
                    </CardContent>
                </Card>
                <Card className="bg-background border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Live Conns</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">573</div>
                        <p className="text-xs text-muted-foreground">Active WebSockets</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-background border-border h-[400px] flex items-center justify-center text-muted-foreground font-mono">
                [Traffic Chart Placeholder]
            </Card>
        </div>
    );
}
