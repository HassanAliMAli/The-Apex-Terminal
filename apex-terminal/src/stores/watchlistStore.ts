import { create } from 'zustand';

interface Watchlist {
    id: number;
    name: string;
    symbols: string[];
    exchange: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
}

interface WatchlistState {
    watchlists: Watchlist[];
    selectedWatchlist: Watchlist | null;
    isLoading: boolean;

    // Actions
    setWatchlists: (watchlists: Watchlist[]) => void;
    addWatchlist: (watchlist: Watchlist) => void;
    updateWatchlist: (id: number, updates: Partial<Watchlist>) => void;
    deleteWatchlist: (id: number) => void;
    selectWatchlist: (id: number) => void;
    setLoading: (loading: boolean) => void;
}

export const useWatchlistStore = create<WatchlistState>((set) => ({
    watchlists: [],
    selectedWatchlist: null,
    isLoading: false,

    setWatchlists: (watchlists) => set({ watchlists }),

    addWatchlist: (watchlist) => set((state) => ({
        watchlists: [...state.watchlists, watchlist]
    })),

    updateWatchlist: (id, updates) => set((state) => ({
        watchlists: state.watchlists.map((w) =>
            w.id === id ? { ...w, ...updates } : w
        ),
        selectedWatchlist: state.selectedWatchlist?.id === id
            ? { ...state.selectedWatchlist, ...updates }
            : state.selectedWatchlist
    })),

    deleteWatchlist: (id) => set((state) => ({
        watchlists: state.watchlists.filter((w) => w.id !== id),
        selectedWatchlist: state.selectedWatchlist?.id === id ? null : state.selectedWatchlist
    })),

    selectWatchlist: (id) => set((state) => ({
        selectedWatchlist: state.watchlists.find((w) => w.id === id) || null
    })),

    setLoading: (loading) => set({ isLoading: loading }),
}));
