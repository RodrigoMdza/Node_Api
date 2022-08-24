import express from "express";
import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";

const categoryRouter = express.Router();

categoryRouter.get("/category", async (req, res) => {
  const data = await AppDataSource.getRepository(Category).findAndCount({
    relations: ["product"]
  }
  );
  res.send(data);
});

categoryRouter.get("/category/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = await AppDataSource.getRepository(Category).findOne({
    where: {
      id
    },
    relations: ["product"]
  });
  res.send(data);
});

categoryRouter.post("/category", async (req, res) => {
  const category = req.body;
  const data = await AppDataSource.getRepository(Category).save(category);
  res.send(data);
});

categoryRouter.delete("/category/:id", async (req, res) => {
  const { id } = req.params;
  const data = await AppDataSource.getRepository(Category).delete(id);
  res.send(data);
});

categoryRouter.put("/category/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const data = await AppDataSource.getRepository(Category).update(id, newData);
  res.send(data);
});

export default categoryRouter;