import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockDataThunk } from "../redux/stockSlice";
import { Line } from "react-chartjs-2";
import { CircularProgress, Typography, Box } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockGraph = () => {
  console.log("📊 Stock Data Received: Sujeet");
  const dispatch = useDispatch();
  let stockData = useSelector((state) => state.stocks.stockData) || [];
  const selectedStock = useSelector((state) => state.stocks.selectedStock);
  const duration = useSelector((state) => state.stocks.duration);
  const isLoading = useSelector((state) => state.stocks.isLoading);
  const error = useSelector((state) => state.stocks.error);

  useEffect(() => {
    if (selectedStock && duration) {
      dispatch(fetchStockDataThunk({ id: selectedStock, duration }));
    }
  }, [dispatch, selectedStock, duration]);

  console.log("📊 Stock Data Received: Deepak", stockData);

  const stockArray = Array.isArray(stockData.data) ? stockData.data : [];

  const data = {
    labels: stockArray.map((entry) => entry.timestamp || "N/A"), 
    datasets: [
      {
        label: "Stock Price",
        data: stockArray.map((entry) => entry.price || 0), 
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
      {isLoading && <CircularProgress />}
      {error && <Typography color="error">Error: {error}</Typography>}
      {stockArray.length === 0 && !error && (
        <Typography>No data available for the selected stock and duration.</Typography>
      )}
      {stockArray.length > 0 && (
        <Box sx={{ width: "90%", maxWidth: "900px" }}>
          <Line data={data} />
        </Box>
      )}
    </Box>
  );
};

export default StockGraph;
