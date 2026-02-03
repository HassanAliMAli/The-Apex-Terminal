"use client"

import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

interface VolumeData {
    time: string;
    value: number;
    color?: string;
}

export const VolumeChart = (props: {
    data: VolumeData[];
    colors?: {
        backgroundColor?: string;
        upColor?: string;
        downColor?: string;
        textColor?: string;
    };
}) => {
    const {
        data,
        colors: {
            backgroundColor = 'transparent',
            upColor = '#26a69a',
            downColor = '#ef5350',
            textColor = '#d1d5db',
        } = {},
    } = props;

    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const handleResize = () => {
            if (chart && chartContainerRef.current) {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            }
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: chartContainerRef.current.clientWidth,
            height: 150,
            rightPriceScale: {
                scaleMargins: {
                    top: 0.1,
                    bottom: 0,
                }
            },
            grid: {
                vertLines: { color: '#404040' },
                horzLines: { color: '#404040' },
            }
        });
        chart.timeScale().fitContent();

        const volumeSeries = chart.addHistogramSeries({
            color: '#26a69a',
            priceFormat: {
                type: 'volume',
            },
        });

        // Set data with conditional colors for up/down days if not provided in data
        const processedData = data.map(item => ({
            ...item,
            color: item.color || upColor // Default to upColor if logic not provided, ideally data source handles this
        }));

        volumeSeries.setData(processedData as any);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data, backgroundColor, upColor, downColor, textColor]);

    return (
        <div ref={chartContainerRef} className="w-full h-full" />
    );
};
