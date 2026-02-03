export interface User {
    id: string;
    email: string;
    name: string;
    tier: 'FREE' | 'PRO' | 'ELITE' | 'WHALE' | 'ENTERPRISE';
    avatar?: string;
}

export const MOCK_USER: User = {
    id: 'user_123',
    email: 'trader@apex.com',
    name: 'Apex Trader',
    tier: 'PRO',
    avatar: 'https://github.com/shadcn.png',
};

// Simulated Auth Delay
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
