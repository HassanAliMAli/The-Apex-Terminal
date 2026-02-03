import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockEvents = [
    { time: '08:30', country: 'USD', impact: 'High', event: 'Non-Farm Payrolls', actual: '215K', forecast: '180K', previous: '170K' },
    { time: '08:30', country: 'USD', impact: 'Medium', event: 'Unemployment Rate', actual: '3.7%', forecast: '3.8%', previous: '3.7%' },
    { time: '10:00', country: 'USD', impact: 'Low', event: 'ISM Services PMI', actual: '53.4', forecast: '52.0', previous: '50.6' },
    { time: '14:00', country: 'USD', impact: 'High', event: 'FOMC Meeting Minutes', actual: '-', forecast: '-', previous: '-' },
];

export default function CalendarPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Economic Calendar</h2>
            <Card className="bg-card border-border">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">Time</TableHead>
                                <TableHead className="w-[60px]">Curr</TableHead>
                                <TableHead className="w-[80px]">Impact</TableHead>
                                <TableHead>Event</TableHead>
                                <TableHead className="text-right">Actual</TableHead>
                                <TableHead className="text-right">Forecast</TableHead>
                                <TableHead className="text-right">Previous</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockEvents.map((e, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-mono text-muted-foreground">{e.time}</TableCell>
                                    <TableCell className="font-bold">{e.country}</TableCell>
                                    <TableCell>
                                        <Badge variant={e.impact === 'High' ? 'destructive' : e.impact === 'Medium' ? 'default' : 'secondary'} className="text-xs">
                                            {e.impact}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{e.event}</TableCell>
                                    <TableCell className="text-right font-mono font-bold text-up">{e.actual}</TableCell>
                                    <TableCell className="text-right font-mono text-muted-foreground">{e.forecast}</TableCell>
                                    <TableCell className="text-right font-mono text-muted-foreground">{e.previous}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
