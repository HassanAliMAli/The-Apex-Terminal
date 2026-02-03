"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function ForgotPasswordPage() {
    return (
        <Card className="border-border bg-card">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold tracking-tight text-white">Forgot password</CardTitle>
                <CardDescription>
                    Enter your email address and we will send you a reset link.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <Button className="w-full">Send Reset Link</Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <div className="text-sm text-muted-foreground text-center">
                    Remember your password?{' '}
                    <Link href="/login" className="text-primary hover:underline">
                        Log in
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
