'use client';

import {
    Area,
    AreaChart as RechartsAreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

interface AreaChartProps {
    data: { date: string; value: number }[];
    color?: string;
    height?: number;
    showXAxis?: boolean;
    showYAxis?: boolean;
    showTooltip?: boolean;
}

export const AreaChart = ({
    data,
    color = '#0068FF',
    height = 200,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
}: AreaChartProps) => {
    return (
        <div style={{ height }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsAreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    {showXAxis && (
                        <XAxis
                            dataKey="date"
                            hide={!showXAxis}
                            tick={{ fontSize: 10, fill: '#6B7280' }}
                            tickLine={false}
                            axisLine={false}
                        />
                    )}
                    {showYAxis && (
                        <YAxis
                            hide={!showYAxis}
                            tick={{ fontSize: 10, fill: '#6B7280' }}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                    )}
                    {showTooltip && (
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1E233F',
                                border: '1px solid #3A415A',
                                borderRadius: '8px',
                                color: '#FFF',
                            }}
                            formatter={(value: any) => [`$${Number(value).toFixed(2)}`, 'Value']}
                            labelStyle={{ color: '#9CA3AF' }}
                        />
                    )}
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke={color}
                        fill={`url(#gradient-${color})`}
                        strokeWidth={2}
                    />
                </RechartsAreaChart>
            </ResponsiveContainer>
        </div>
    );
};
