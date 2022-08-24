import cors from "cors";
import customerRouter from "./routes/customer.routes";
import orderRoute from "./routes/order.routes";
import addressRouter from "./routes/address.routes";
import categoryRouter from "./routes/category.routes";
import productRouter from "./routes/product.routes";
import express from "express";
import { AppDataSource } from "./data-source";

const app = express();
const port = 3000;

// initializes database connection
AppDataSource.initialize().then(() => console.log("Database was connected successfully"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use cors to prevent not allowed client requesting resources
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", customerRouter);
app.use("/api", orderRoute);
app.use("/api", addressRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => console.log("Up and running on port", port));