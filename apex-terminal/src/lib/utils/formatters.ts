import numeral from 'numeral';

export const formatCurrency = (value: number, decimals: number = 2) => {
    if (Math.abs(value) < 0.01 && value !== 0) {
        return '$' + numeral(value).format('0.000000');
    }
    return '$' + numeral(value).format(`0,0.${'0'.repeat(decimals)}`);
};

export const formatNumber = (value: number, decimals: number = 2) => {
    return numeral(value).format(`0,0.${'0'.repeat(decimals)}`);
};

export const formatPercent = (value: number, decimals: number = 2) => {
    return numeral(value).format(`0,0.${'0'.repeat(decimals)}`) + '%';
};

export const formatCompactNumber = (value: number) => {
    return numeral(value).format('0.0a').toUpperCase();
};
