import { useEffect, useRef, useState } from 'react';
import { useMarketStore } from '@/stores/marketStore';

export function useWebSocket(symbol: string, exchange: string = 'binance') {
    const wsRef = useRef<WebSocket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const { updatePrice } = useMarketStore();

    useEffect(() => {
        // For now, we don't actually connect to a real WS unless one is available.
        // This implementation matches the structure but avoids connection errors in dev.
        // const wsUrl = `wss://api.apexterminal.com/api/crypto/ws/${symbol}?exchange=${exchange}`;

        // Simulating WS for now
        let interval: NodeJS.Timeout;

        setIsConnected(true);

        interval = setInterval(() => {
            const isUp = Math.random() > 0.5;
            const change = (Math.random() * 0.1).toFixed(2);

            // Simplified update simulation
            // In real implementation: wsRef.current = new WebSocket(wsUrl); ...
            /*
           updatePrice(symbol, {
             symbol: symbol,
             exchange: exchange,
             price: 43000 + (Math.random() * 500),
             change24h: isUp ? Number(change) : -Number(change),
             volume24h: 1000000 + Math.random() * 500000,
             lastUpdated: new Date().toISOString() // Store commonly expects string or Date object
           } as any);
           */
        }, 1000);

        return () => {
            clearInterval(interval);
            if (wsRef.current) {
                wsRef.current.close();
            }
            setIsConnected(false);
        };
    }, [symbol, exchange, updatePrice]);

    return { isConnected };
}
