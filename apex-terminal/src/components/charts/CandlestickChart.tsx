'use client';

import { useEffect, useRef } from 'react';
import { createChart, ColorType, IChartApi, ISeriesApi } from 'lightweight-charts';
import { Candle } from '@/lib/mock/market';

interface CandlestickChartProps {
    data: Candle[];
    colors?: {
        backgroundColor?: string;
        lineColor?: string;
        textColor?: string;
        areaTopColor?: string;
        areaBottomColor?: string;
        upColor?: string;
        downColor?: string;
    };
    height?: number;
}

export const CandlestickChart = ({
    data,
    colors = {
        backgroundColor: 'transparent',
        textColor: '#A0A8C0',
        upColor: '#00D09C',
        downColor: '#FF433D',
    },
    height = 400,
}: CandlestickChartProps) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<any | null>(null);
    const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const handleResize = () => {
            if (chartRef.current && chartContainerRef.current) {
                chartRef.current.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: colors.backgroundColor },
                textColor: colors.textColor,
                fontFamily: 'JetBrains Mono, monospace',
            },
            grid: {
                vertLines: { color: '#1E233F' }, // Low contrast grid
                horzLines: { color: '#1E233F' },
            },
            width: chartContainerRef.current.clientWidth,
            height: height,
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
                borderColor: '#3A415A',
            },
            rightPriceScale: {
                borderColor: '#3A415A',
            },
        });

        const series = (chart as any).addCandlestickSeries({
            upColor: colors.upColor,
            downColor: colors.downColor,
            borderVisible: false,
            wickUpColor: colors.upColor,
            wickDownColor: colors.downColor,
        });

        series.setData(data.map(d => ({ ...d, time: d.time as any })));

        chartRef.current = chart;
        seriesRef.current = series;

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [colors, height]);

    // Update data if it changes
    useEffect(() => {
        if (seriesRef.current && data.length > 0) {
            seriesRef.current.setData(data.map(d => ({ ...d, time: d.time as any })));
        }
    }, [data]);

    return <div ref={chartContainerRef} className="w-full relative" />;
};
