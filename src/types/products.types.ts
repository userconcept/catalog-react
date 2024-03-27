export type ProductsItem = {
    title: string;
    category: string;
    categories: {
        popularity: number;
    };
    currency: {
        BTC: {
            id: number;
        };
        ETH?: {
            id: number;
        };
        USDT: {
            id: number;
        };
        XRP: {
            id: number;
        };
        DOGE: {
            id: number;
        };
        LTC: {
            id: number;
        };
    };
    href?: string;
}
