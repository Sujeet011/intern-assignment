import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocksData, setSelectedStock, setDuration } from "../redux/stockSlice";
import { MenuItem, Select, FormControl, InputLabel, Box } from "@mui/material";

const StockSelector = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);
  const selectedStock = useSelector((state) => state.stocks.selectedStock);
  let duration = useSelector((state) => state.stocks.duration);

  useEffect(() => {
    dispatch(fetchStocksData());
  }, [dispatch]);

  const handleStockChange = (e) => {
    dispatch(setSelectedStock(e.target.value));
  };

  const handleDurationChange = (e) => {
    dispatch(setDuration(e.target.value));
  };
  
  let availableDurations = stocks.find((stock) => stock.id === selectedStock)?.available || [];
  if (!availableDurations.includes(duration)) {
    duration = availableDurations[0] || ""; 
  }

  return (
    <Box sx={{ mb: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Stock</InputLabel>
        <Select value={selectedStock || ""} onChange={handleStockChange}>
          {stocks.map((stock) => (
            <MenuItem key={stock.id} value={stock.id}>
              {stock.name} ({stock.symbol})
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedStock && (
        <FormControl fullWidth>
          <InputLabel>Select Duration</InputLabel>
          <Select value={duration} onChange={handleDurationChange}>
            {availableDurations.map((dur) => (
              <MenuItem key={dur} value={dur}>
                {dur}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default StockSelector;
