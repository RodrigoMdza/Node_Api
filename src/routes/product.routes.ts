import express from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

const productRouter = express.Router();

productRouter.get("/product", async (req, res) => {
  const data = await AppDataSource.getRepository(Product).findAndCount({
    relations: ["category"]
  }
  );
  res.send(data);
});

productRouter.get("/product/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = await AppDataSource.getRepository(Product).findOne({
    where: {
      id
    },
    relations: ["product"]
  });
  res.send(data);
});

productRouter.post("/product", async (req, res) => {
  const product = req.body;
  const data = await AppDataSource.getRepository(Product).save(product);
  res.send(data);
});

productRouter.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  const data = await AppDataSource.getRepository(Product).delete(id);
  res.send(data);
});

productRouter.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const data = await AppDataSource.getRepository(Product).update(id, newData);
  res.send(data);
});

export default productRouter;