import React from "react";
import StockSelector from "./components/StockSelector";
import StockGraph from "./components/StockGraph";

function App() {
  console.log("📌 App Component Rendering..."); 

  return (
    <div>
      <h1>Stock Dashboard</h1>
      <StockSelector />
      <StockGraph />
    </div>
  );
}

export default App;
