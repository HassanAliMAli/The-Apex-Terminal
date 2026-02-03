import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: number;
    email: string;
    name: string;
    avatarUrl?: string;
    subscriptionTier: string;
    subscriptionStatus: string;
    subscriptionAddons: string[];
    isMod: boolean;
    isGod: boolean;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;

    // Actions
    setUser: (user: User) => void;
    setToken: (token: string) => void;
    logout: () => void;
    updateUser: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,

            setUser: (user) => set({ user, isAuthenticated: true }),
            setToken: (token) => set({ token }),
            logout: () => set({ user: null, token: null, isAuthenticated: false }),
            updateUser: (updates) => set((state) => ({
                user: state.user ? { ...state.user, ...updates } : null
            })),
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
