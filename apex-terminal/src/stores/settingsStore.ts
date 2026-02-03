import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
    theme: 'dark' | 'light';
    currency: 'USD' | 'EUR' | 'GBP';
    defaultExchange: 'binance' | 'kucoin' | 'bybit';
    chartTimeframe: '1m' | '5m' | '15m' | '1h' | '4h' | '1D';
    notificationsEnabled: boolean;
    soundEnabled: boolean;

    // Actions
    setTheme: (theme: 'dark' | 'light') => void;
    setCurrency: (currency: string) => void;
    setDefaultExchange: (exchange: string) => void;
    setChartTimeframe: (timeframe: string) => void;
    toggleNotifications: () => void;
    toggleSound: () => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            theme: 'dark',
            currency: 'USD',
            defaultExchange: 'binance',
            chartTimeframe: '1h',
            notificationsEnabled: true,
            soundEnabled: true,

            setTheme: (theme) => set({ theme }),
            setCurrency: (currency) => set({ currency }),
            setDefaultExchange: (exchange) => set({ defaultExchange: exchange }),
            setChartTimeframe: (timeframe) => set({ chartTimeframe: timeframe }),
            toggleNotifications: () => set((state) => ({
                notificationsEnabled: !state.notificationsEnabled
            })),
            toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
        }),
        {
            name: 'settings-storage',
        }
    )
);
