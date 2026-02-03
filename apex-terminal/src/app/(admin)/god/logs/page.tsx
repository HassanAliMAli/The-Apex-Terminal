import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const mockLogs = [
    { time: '10:42:01', level: 'INFO', msg: 'User login success: AlM1GhTy (10.0.0.1)' },
    { time: '10:41:55', level: 'WARN', msg: 'Rate limit exceeded: 192.168.1.55 [/api/v1/quotes]' },
    { time: '10:40:12', level: 'ERROR', msg: 'DB Connection timeout (retry 1/3)' },
    { time: '10:39:00', level: 'INFO', msg: 'Cron job [cache_refresh] completed in 450ms' },
    { time: '10:38:22', level: 'INFO', msg: 'New order placed: BTCUSDT LIMIT BUY' },
];

export default function LogsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">System Logs</h1>

            <Card className="bg-[#050505] border-border font-mono text-sm">
                <CardHeader>
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <ScrollArea className="h-[600px] w-full p-4">
                        {mockLogs.map((log, i) => (
                            <div key={i} className="mb-1 flex gap-4">
                                <span className="text-muted-foreground shrink-0">{log.time}</span>
                                <span className={`shrink-0 w-12 font-bold ${log.level === 'INFO' ? 'text-blue-400' :
                                        log.level === 'WARN' ? 'text-yellow-400' :
                                            'text-red-500'
                                    }`}>{log.level}</span>
                                <span className="text-gray-300">{log.msg}</span>
                            </div>
                        ))}
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
}
