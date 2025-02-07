export interface Stock {
    id: string;
    name: string;
  }
  
  export interface StockData {
    timestamp: string;
    price: number;
  }
  
  export interface StockState {
    stocks: Stock[];
    selectedStock: string | null;
    stockData: StockData[];
    duration: string;
    isLoading: boolean;
    error: string | null;
  }
  