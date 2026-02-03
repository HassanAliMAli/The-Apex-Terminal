import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'next/navigation';
// import { apiClient } from '@/lib/api/client'; // Temporarily mocked
import { User, AuthResponse } from '@/types';

// Mock apiClient for now until fully implemented
const apiClient = {
    post: async (url: string, data: any, config?: any): Promise<AuthResponse> => {
        // Simulate API call
        console.log(`POST ${url}`, data);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    user: {
                        id: 1,
                        email: data.email || 'user@apex.com',
                        name: 'Apex Trader',
                        subscriptionTier: 'pro',
                        subscriptionStatus: 'active',
                        subscriptionAddons: [],
                        isMod: false,
                        isGod: false,
                        createdAt: new Date().toISOString()
                    } as User,
                    token: 'mock-jwt-token'
                });
            }, 500);
        });
    },
    get: async (url: string, config?: any): Promise<any> => {
        console.log(`GET ${url}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock response for /auth/me
                if (url === '/auth/me') {
                    resolve({
                        id: 1,
                        email: 'user@apex.com',
                        name: 'Apex Trader',
                        subscriptionTier: 'pro',
                        subscriptionStatus: 'active',
                        subscriptionAddons: [],
                        isMod: false,
                        isGod: false,
                        createdAt: new Date().toISOString()
                    } as User);
                }
            }, 500);
        });
    }
};

export function useAuth() {
    const { user, token, isAuthenticated, setUser, setToken, logout: logoutStore } = useAuthStore();
    const router = useRouter();

    const login = async (email: string, password: string) => {
        try {
            const response = await apiClient.post('/auth/login', { email, password });
            if (response.user && response.token) {
                setUser(response.user);
                setToken(response.token);
                router.push('/dashboard');
                return { success: true };
            }
            return { success: false, error: 'Invalid response' };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Login failed'
            };
        }
    };

    const signup = async (data: {
        email: string;
        name: string;
        password: string;
        inviteCode: string;
    }) => {
        try {
            const response = await apiClient.post('/auth/signup', data);
            if (response.user && response.token) {
                setUser(response.user);
                setToken(response.token);
                router.push('/dashboard');
                return { success: true };
            }
            return { success: false, error: 'Invalid response' };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Signup failed'
            };
        }
    };

    const logout = async () => {
        try {
            await apiClient.post('/auth/logout', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            logoutStore();
            router.push('/login');
        }
    };

    const checkAuth = async () => {
        if (!token) return false;

        try {
            const response = await apiClient.get('/auth/me', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(response);
            return true;
        } catch (error) {
            logoutStore();
            return false;
        }
    };

    return {
        user,
        token,
        isAuthenticated,
        login,
        signup,
        logout,
        checkAuth,
    };
}
