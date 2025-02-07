import axios from "axios";

const API_URL = "http://localhost:3000/api";

// ✅ Fetch all available stocks
export const fetchStocks = async () => {
  try {
    console.log("🔹 Fetching stocks...");
    const response = await axios.get(`${API_URL}/stocks`);

    if (response.status !== 200 || !response.data) {
      console.error("❌ Invalid stocks response:", response);
      return [];
    }

    console.log("✅ Stocks API Response:", response.data);

    return Object.entries(response.data).map(([id, details]) => ({
      id,
      ...details,
    }));
  } catch (error) {
    console.error("❌ Error fetching stocks:", error.response?.data || error.message);
    return [];
  }
};

// ✅ Fetch stock data by stock ID and duration
export const fetchStockData = async (id, duration) => {
  try {
    if (!id || !duration) {
      console.error("❌ Error: Invalid stock ID or duration", { id, duration });
      return [];
    }

    console.log("🔹 Sending request:", { id, duration });

    const response = await axios.post(`${API_URL}/stocks/${id}`, { duration });

    if (response.status !== 200 ) {
      console.error("❌ Unexpected API response format:", response.data);
      return [];
    }

    console.log("✅ Stock Data Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "❌ Error fetching stock data:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};
