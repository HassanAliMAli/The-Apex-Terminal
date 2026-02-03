import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function NotificationsSettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                    Configure how you receive alerts.
                </p>
            </div>

            <Card className="rounded-none border-border bg-[#0A0A0A]">
                <CardHeader>
                    <CardTitle className="text-base font-bold uppercase">Email Notifications</CardTitle>
                    <CardDescription className="text-xs font-mono">Receive emails about your account activity.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="marketing_emails" className="flex flex-col space-y-1">
                            <span>Marketing emails</span>
                            <span className="font-normal text-muted-foreground text-xs">Receive emails about new products, features, and more.</span>
                        </Label>
                        <Switch id="marketing_emails" />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="security_emails" className="flex flex-col space-y-1">
                            <span>Security emails</span>
                            <span className="font-normal text-muted-foreground text-xs">Receive emails about your account security.</span>
                        </Label>
                        <Switch id="security_emails" defaultChecked disabled />
                    </div>
                </CardContent>
            </Card>

            <Card className="rounded-none border-border bg-[#0A0A0A]">
                <CardHeader>
                    <CardTitle className="text-base font-bold uppercase">Real-time Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="price_alerts" className="flex flex-col space-y-1">
                            <span>Price Alerts</span>
                            <span className="font-normal text-muted-foreground text-xs">Push notifications when price targets are hit.</span>
                        </Label>
                        <Switch id="price_alerts" defaultChecked />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
