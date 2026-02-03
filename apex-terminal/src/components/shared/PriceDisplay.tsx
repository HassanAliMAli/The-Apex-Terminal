import { formatCurrency } from '@/lib/utils/formatters';
import { cn } from '@/lib/utils'; // Shadcn utility

interface PriceDisplayProps {
    value: number;
    decimals?: number;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PriceDisplay = ({
    value,
    decimals = 2,
    className,
    size = 'md',
}: PriceDisplayProps) => {
    const sizeClasses = {
        sm: 'text-sm font-medium',
        md: 'text-base font-medium',
        lg: 'text-lg font-bold',
        xl: 'text-2xl font-bold',
    };

    return (
        <span className={cn('font-mono tracking-tight', sizeClasses[size], className)}>
            {formatCurrency(value, decimals)}
        </span>
    );
};
