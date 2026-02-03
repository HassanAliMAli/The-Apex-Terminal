'use client';

import { QuickStats } from '@/components/dashboard/QuickStats';
import { HoldingsTable } from '@/components/tables/HoldingsTable';
import { AllocationChart } from '@/components/dashboard/AllocationChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PortfolioPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
            </div>

            <QuickStats />

            <div className="grid gap-6 md:grid-cols-3">
                {/* Holdings Table */}
                <Card className="col-span-2 bg-card border-border">
                    <CardHeader>
                        <CardTitle>Holdings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <HoldingsTable />
                    </CardContent>
                </Card>

                {/* Allocation Chart */}
                <Card className="bg-card border-border">
                    <CardHeader>
                        <CardTitle>Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <AllocationChart />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
