import express from "express";
import { AppDataSource } from "../data-source";
import { Order } from "../entity/Order";

const orderRoute = express.Router();

// GET /api/orders
orderRoute.get("/orders", async (req, res) => {
  const data = await AppDataSource.getRepository(Order).findAndCount({
    relations: ["customer"]
  }
  );
  res.send(data);
});

orderRoute.post("/orders", async (req, res) => {
  const order = req.body;
  const data = await AppDataSource.getRepository(Order).save(order);

  res.send(data);
});

orderRoute.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;

  const data = await AppDataSource.getRepository(Order).delete(id);

  res.send(data);
});

orderRoute.put("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const data = await AppDataSource.getRepository(Order).update(id, newData);

  res.send(data);
});

export default orderRoute;