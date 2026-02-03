'use client';

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts';
import { MOCK_PORTFOLIO } from '@/lib/mock/portfolio';

export const AllocationChart = () => {
    const data = MOCK_PORTFOLIO.holdings.map(h => ({
        name: h.symbol,
        value: h.value
    }));

    const COLORS = ['#0068FF', '#00D09C', '#FB8B1E', '#FF433D', '#9CA3AF'];

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="transparent" />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1E233F', borderColor: '#3A415A', color: '#FFF' }}
                        formatter={(value: any) => [`$${Number(value).toLocaleString()}`, 'Value']}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};
