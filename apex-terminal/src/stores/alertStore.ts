import { create } from 'zustand';

interface Alert {
    id: number;
    symbol: string;
    exchange: string;
    conditionType: string;
    conditionValue: number;
    channels: string[];
    isActive: boolean;
    lastTriggered?: string;
    triggerCount: number;
    maxTriggers?: number;
    message?: string;
    createdAt: string;
}

interface AlertState {
    alerts: Alert[];
    isLoading: boolean;

    setAlerts: (alerts: Alert[]) => void;
    addAlert: (alert: Alert) => void;
    updateAlert: (id: number, updates: Partial<Alert>) => void;
    deleteAlert: (id: number) => void;
    setLoading: (loading: boolean) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
    alerts: [],
    isLoading: false,

    setAlerts: (alerts) => set({ alerts }),
    addAlert: (alert) => set((state) => ({ alerts: [...state.alerts, alert] })),
    updateAlert: (id, updates) => set((state) => ({
        alerts: state.alerts.map((a) => a.id === id ? { ...a, ...updates } : a)
    })),
    deleteAlert: (id) => set((state) => ({
        alerts: state.alerts.filter((a) => a.id !== id)
    })),
    setLoading: (loading) => set({ isLoading: loading }),
}));
