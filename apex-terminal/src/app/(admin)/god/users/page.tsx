import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

const mockUsers = [
    { id: '1', name: 'AlM1GhTy', email: 'admin@apex.terminal', role: 'GOD', status: 'Active', joined: '2026-01-01' },
    { id: '2', name: 'TraderJoe', email: 'joe@example.com', role: 'USER', status: 'Active', joined: '2026-02-01' },
    { id: '3', name: 'FudMaster', email: 'fud@example.com', role: 'USER', status: 'Banned', joined: '2026-02-02' },
];

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                <div className="text-sm text-muted-foreground font-mono">Total Users: 3</div>
            </div>

            <Card className="bg-transparent border-border">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead>ID</TableHead>
                                <TableHead>User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Joined</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockUsers.map((user) => (
                                <TableRow key={user.id} className="hover:bg-muted/5">
                                    <TableCell className="font-mono text-muted-foreground">{user.id}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-bold">{user.name}</span>
                                            <span className="text-xs text-muted-foreground">{user.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={user.role === 'GOD' ? 'text-destructive border-destructive' : ''}>
                                            {user.role}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-mono text-muted-foreground">{user.joined}</TableCell>
                                    <TableCell className="text-right">
                                        <Link href={`/god/users/${user.id}`}>
                                            <Button variant="ghost" size="icon">
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
