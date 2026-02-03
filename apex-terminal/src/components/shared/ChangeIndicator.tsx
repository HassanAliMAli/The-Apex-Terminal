import { ArrowUp, ArrowDown } from 'lucide-react';
import { formatPercent } from '@/lib/utils/formatters';
import { cn } from '@/lib/utils';

interface ChangeIndicatorProps {
    value: number; // Percentage value (e.g., 2.5 for 2.5%)
    decimals?: number;
    showIcon?: boolean;
    className?: string;
}

export const ChangeIndicator = ({
    value,
    decimals = 2,
    showIcon = true,
    className,
}: ChangeIndicatorProps) => {
    const isPositive = value >= 0;
    const isZero = value === 0;

    return (
        <span
            className={cn(
                'flex items-center gap-0.5 font-mono text-sm font-medium',
                isPositive ? 'text-up' : 'text-down',
                isZero && 'text-muted-foreground',
                className
            )}
        >
            {showIcon && !isZero && (
                isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />
            )}
            {isPositive ? '+' : ''}
            {formatPercent(value, decimals)}
        </span>
    );
};
