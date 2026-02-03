import { MOCK_USER } from '@/lib/mock/user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export default function BillingSettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Billing & Plans</h3>
                <p className="text-sm text-muted-foreground">
                    Manage your subscription and payment method.
                </p>
            </div>

            <Card className="bg-card border-primary/20 bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Current Plan</span>
                        <Badge className="bg-primary text-primary-foreground font-mono">{MOCK_USER.tier}</Badge>
                    </CardTitle>
                    <CardDescription>You are actively subscribed to the {MOCK_USER.tier} plan.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold font-mono">$49.00<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Unlimited Watchlists</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Level 2 Data Access</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Priority Support</li>
                    </ul>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t border-border pt-4">
                    <Button variant="outline">Cancel Subscription</Button>
                    <Button>Upgrade Plan</Button>
                </CardFooter>
            </Card>

            <Card className="rounded-none border-border bg-[#0A0A0A]">
                <CardHeader>
                    <CardTitle className="text-base font-bold uppercase">Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-12 bg-white rounded flex items-center justify-center">
                            <span className="text-black font-bold text-xs">VISA</span>
                        </div>
                        <div className="text-sm">
                            <p className="font-bold">Visa ending in 4242</p>
                            <p className="text-muted-foreground">Expires 12/28</p>
                        </div>
                    </div>
                    <Button variant="ghost">Edit</Button>
                </CardContent>
            </Card>
        </div>
    );
}
