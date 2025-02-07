import { Router, Request, Response } from "express";
import { getAllStockMeta, pollStock } from "./service";

export const router: Router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.json({ message: "Welcome to the alloan.ai API!" });
});

router.get("/stocks", (req: Request, res: Response): void => {
  try {
    const response = getAllStockMeta();
    res.json(response);
  } catch (error) {
    console.error("Error fetching stocks:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/stocks/:id", (req: Request, res: Response): void => {
  try {
    const id = req.params.id;
    const { duration } = req.body;

    console.log(`🔹 Received request: Stock ID=${id}, Duration=${duration}`);

    if (!duration) {
      console.error("❌ Error: Duration is missing");
      res.status(400).json({ message: "Duration is required" });
      return;
    }

    const reqBody = {
      id,
      duration: typeof duration === "string" ? duration.toLowerCase() : duration,
    };

    console.log("🔹 Processing request:", reqBody);

    const response = pollStock(reqBody);

    console.log("✅ Backend Response:", response); 

    res.json(response);
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
