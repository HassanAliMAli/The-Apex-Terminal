import { MOCK_USER } from '@/lib/mock/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Smartphone } from 'lucide-react';

export default function ProfileSettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>

            <div className="grid gap-6">
                <Card className="rounded-none border-border bg-[#0A0A0A]">
                    <CardHeader>
                        <CardTitle className="text-base font-bold uppercase">Identity</CardTitle>
                        <CardDescription className="text-xs font-mono">Personal details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase">Display Name</Label>
                            <Input id="name" defaultValue={MOCK_USER.name} className="bg-[#111] border-border rounded-none" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase">Email Address</Label>
                            <Input id="email" defaultValue={MOCK_USER.email} className="bg-[#111] border-border rounded-none" disabled />
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-none border-border bg-[#0A0A0A]">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-primary" />
                            <CardTitle className="text-base font-bold uppercase">Session Info</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-xs border-b border-border pb-2">
                            <span className="text-muted-foreground">IP ADDRESS</span>
                            <span>192.168.1.1</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-b border-border pb-2">
                            <span className="text-muted-foreground">DEVICE</span>
                            <span>Chrome / Windows 11</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-b border-border pb-2">
                            <span className="text-muted-foreground">LAST LOGIN</span>
                            <span>Just now</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
