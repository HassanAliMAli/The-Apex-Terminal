import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

const mockInvites = [
    { code: 'APEX-ALPHA-001', created: '2026-02-01', status: 'Used', usedBy: 'AlM1GhTy' },
    { code: 'APEX-ALPHA-002', created: '2026-02-03', status: 'Active', usedBy: '-' },
    { code: 'APEX-ALPHA-003', created: '2026-02-03', status: 'Active', usedBy: '-' },
];

export default function InvitesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Invite Codes</h1>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" /> Generate New
                </Button>
            </div>

            <Card className="bg-transparent border-border">
                <CardHeader>
                    <CardTitle>Active Codes</CardTitle>
                    <CardDescription>Manage beta access keys.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="font-mono">Code</TableHead>
                                <TableHead>Created</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Used By</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockInvites.map((invite) => (
                                <TableRow key={invite.code} className="hover:bg-muted/5">
                                    <TableCell className="font-mono font-bold tracking-wider">{invite.code}</TableCell>
                                    <TableCell className="text-muted-foreground">{invite.created}</TableCell>
                                    <TableCell>
                                        <span className={`text-xs px-2 py-1 rounded ${invite.status === 'Active' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                                            {invite.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{invite.usedBy}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
