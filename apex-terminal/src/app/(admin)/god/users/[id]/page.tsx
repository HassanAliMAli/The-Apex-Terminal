import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Ban, Shield, Trash } from 'lucide-react';
import Link from 'next/link';

export default async function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/god/users">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold tracking-tight">User Details: {id}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-transparent border-border lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Username</Label>
                                <Input defaultValue="TraderJoe" />
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input defaultValue="joe@example.com" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-destructive/30">
                    <CardHeader>
                        <CardTitle className="text-destructive">Administrative Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <Ban className="h-4 w-4" />
                            Ban User
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <Shield className="h-4 w-4" />
                            Promote to Mod
                        </Button>
                        <Button variant="destructive" className="w-full justify-start gap-2">
                            <Trash className="h-4 w-4" />
                            Nuke Account
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
