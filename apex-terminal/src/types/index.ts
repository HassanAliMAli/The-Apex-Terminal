export interface User {
    id: number;
    email: string;
    name: string;
    avatarUrl?: string;
    subscriptionTier: 'free' | 'pro' | 'elite' | 'whale' | 'enterprise';
    subscriptionStatus: 'active' | 'inactive' | 'canceled' | 'trialing' | 'past_due';
    subscriptionAddons: string[];
    isMod: boolean;
    isGod: boolean;
    subscriptionEndsAt?: string;
    createdAt: string;
    lastLoginAt?: string;
    activeSessions?: number;
    maxSessions?: number;
}

export interface MarketData {
    symbol: string;
    exchange: string;
    price: number;
    change24h: number;
    volume24h: number;
    high24h?: number;
    low24h?: number;
    marketCap?: number;
    lastUpdated: string;
}

export interface Watchlist {
    id: number;
    userId: number;
    name: string;
    symbols: string[];
    exchange: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
}

export interface Alert {
    id: number;
    userId: number;
    symbol: string;
    exchange: string;
    conditionType: 'price_above' | 'price_below' | 'price_crosses' | 'indicator';
    conditionValue: number;
    conditionExpression?: string;
    channels: ('email' | 'telegram' | 'discord' | 'push')[];
    isActive: boolean;
    lastTriggered?: string;
    triggerCount: number;
    maxTriggers?: number;
    message?: string;
    createdAt: string;
    updatedAt: string;
}

export interface Portfolio {
    id: number;
    userId: number;
    name: string;
    type: 'real' | 'paper';
    cashBalance: number;
    initialBalance: number;
    currentValue: number;
    unrealizedPL: number;
    realizedPL: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Holding {
    id: number;
    portfolioId: number;
    symbol: string;
    exchange: string;
    quantity: number;
    avgEntryPrice: number;
    currentPrice: number;
    unrealizedPL: number;
    unrealizedPLPercent: number;
    lastUpdated: string;
}

export interface Transaction {
    id: number;
    portfolioId: number;
    symbol: string;
    exchange: string;
    type: 'buy' | 'sell';
    quantity: number;
    price: number;
    totalValue: number;
    fees: number;
    realizedPL?: number;
    timestamp: string;
    notes?: string;
    createdAt: string;
}

export interface AuthResponse {
    success: boolean;
    user?: User;
    token?: string;
    error?: string;
    expiresAt?: string;
}
