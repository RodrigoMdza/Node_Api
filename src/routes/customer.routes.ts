import express from "express";
import { AppDataSource } from "../data-source";
import { Customer } from "../entity/Customer";

const customerRouter = express.Router();

customerRouter.get("/customer", async (req, res) => {
  const data = await AppDataSource.getRepository(Customer).findAndCount();
  res.send(data);
});

customerRouter.post("/customer", async (req, res) => {
  const customer = req.body;
  const data = await AppDataSource.getRepository(Customer).save(customer);
  res.send(data);
});

customerRouter.delete("/customer/:id", async (req, res) => {
  const { id } = req.params;
  const data = await AppDataSource.getRepository(Customer).delete(id);
  res.send(data);
});

customerRouter.put("/customer/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const data = await AppDataSource.getRepository(Customer).update(id, newData);
  res.send(data);
});

export default customerRouter;