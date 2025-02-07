video link - https://drive.google.com/file/d/19TyyBaKg2qhSddSqmlTfokyaPIgoN2Vm/view

This project is a Stock Market Data Visualization Platform that allows users to select a stock and view its historical price trends in an interactive chart. The application dynamically fetches stock data using Redux and displays it using Chart.js for a seamless user experience.

🔹 Features of the Project
✅ Stock Selection Dropdown – Users can choose from multiple stocks.
✅ Time Duration Filters – Allows switching between different durations (e.g., 5Y, 1Y, 6M).
✅ Real-time Graph Updates – Fetches stock data over time and updates dynamically.
✅ Loading & Error Handling – Ensures a smooth UI experience.
✅ Fully Responsive Design – Works on both desktop and mobile devices.

🛠 Technologies Used
Frontend:
React.js → Component-based UI development.
Redux Toolkit → Manages global state.
Chart.js → Interactive graphs for data visualization.
MUI (Material-UI) → Stylish and responsive UI components.
Axios → API requests to fetch stock data.
Backend:
Node.js & Express.js → REST API for handling stock data requests.
Mock JSON Server → Simulated database for stocks.
CORS Middleware → Allows frontend-backend communication

🛠 Data Flow
1️⃣ User selects a stock & duration →
2️⃣ Frontend dispatches an API request →
3️⃣ Backend fetches stock data from a JSON file →
4️⃣ Redux updates the store with new data →
5️⃣ Chart.js dynamically updates the graph.

🚀 Future Enhancements
✅ Live Stock API Integration – Use real-time stock market data.
✅ User Authentication – Allow users to save favorite stocks.
✅ Advanced Chart Features – Add more graph types (candlestick, bar charts).
✅ Dark Mode Support – Improve UI experience.

🎯 Conclusion
This project demonstrates how to build a dynamic stock visualization tool using React, Redux, and Chart.js. It provides real-time updates, smooth user experience, and scalable architecture for integrating real-world stock APIs.
