import { useEffect } from 'react';
import { useWatchlistStore } from '@/stores/watchlistStore';
import { useAuthStore } from '@/stores/authStore';
// import { apiClient } from '@/lib/api/client';
import { Watchlist } from '@/types';

// Mock apiClient
const apiClient = {
    get: async (url: string, config?: any): Promise<{ watchlists: Watchlist[] }> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    watchlists: [
                        {
                            id: 1,
                            userId: 1,
                            name: 'My Crypto',
                            symbols: ['BTCUSDT', 'ETHUSDT', 'SOLUSDT'],
                            exchange: 'binance',
                            sortOrder: 0,
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString()
                        }
                    ]
                });
            }, 300);
        });
    },
    post: async (url: string, data: any, config?: any): Promise<Watchlist> => {
        // Mock create
        return Promise.resolve({
            id: Math.floor(Math.random() * 1000),
            userId: 1,
            name: data.name,
            symbols: data.symbols,
            exchange: data.exchange,
            sortOrder: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    },
    put: async (url: string, data: any, config?: any): Promise<Watchlist> => {
        // Mock update
        return Promise.resolve({
            id: 1,
            userId: 1,
            name: data.name || 'Updated List',
            symbols: data.symbols || [],
            exchange: 'binance',
            sortOrder: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    },
    delete: async (url: string, config?: any): Promise<void> => {
        return Promise.resolve();
    }
};

export function useWatchlist() {
    const { token } = useAuthStore();
    const {
        watchlists,
        selectedWatchlist,
        isLoading,
        setWatchlists,
        addWatchlist,
        updateWatchlist,
        deleteWatchlist,
        selectWatchlist,
        setLoading,
    } = useWatchlistStore();

    // Fetch watchlists on mount
    useEffect(() => {
        if (token) {
            fetchWatchlists();
        }
    }, [token]);

    const fetchWatchlists = async () => {
        setLoading(true);
        try {
            const response = await apiClient.get('/api/watchlists', {
                headers: { Authorization: `Bearer ${token}` },
            });
            // Ensure API response matches store expectation
            setWatchlists(response.watchlists as any[]);
        } catch (error) {
            console.error('Failed to fetch watchlists:', error);
        } finally {
            setLoading(false);
        }
    };

    const createWatchlist = async (data: {
        name: string;
        symbols: string[];
        exchange: string;
    }) => {
        try {
            const response = await apiClient.post('/api/watchlists', data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            addWatchlist(response as any);
            return { success: true, data: response };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Failed to create watchlist',
            };
        }
    };

    const updateWatchlistData = async (id: number, data: Partial<any>) => {
        try {
            const response = await apiClient.put(`/api/watchlists/${id}`, data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            updateWatchlist(id, response as any);
            return { success: true, data: response };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Failed to update watchlist',
            };
        }
    };

    const removeWatchlist = async (id: number) => {
        try {
            await apiClient.delete(`/api/watchlists/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            deleteWatchlist(id);
            return { success: true };
        } catch (error: any) {
            return {
                success: false,
                error: error.message || 'Failed to delete watchlist',
            };
        }
    };

    return {
        watchlists,
        selectedWatchlist,
        isLoading,
        fetchWatchlists,
        createWatchlist,
        updateWatchlist: updateWatchlistData,
        deleteWatchlist: removeWatchlist,
        selectWatchlist,
    };
}
