import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStocks, fetchStockData } from "../api/stocksAPI"; 

export const fetchStocksData = createAsyncThunk("stocks/fetchStocks", async () => {
  return await fetchStocks();
});

export const fetchStockDataThunk = createAsyncThunk(
  "stocks/fetchStockData",
  async ({ id, duration }, { rejectWithValue }) => {
    try {
      const data = await fetchStockData(id, duration);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const stockSlice = createSlice({
  name: "stocks",
  initialState: {
    stocks: [],
    selectedStock: null,
    stockData: [],
    duration: "1Y",
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocksData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStocksData.fulfilled, (state, action) => {
        state.stocks = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStocksData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchStockDataThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStockDataThunk.fulfilled, (state, action) => {
        state.stockData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStockDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedStock, setDuration } = stockSlice.actions;
export default stockSlice.reducer;
