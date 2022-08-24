import express from "express";
import { AppDataSource } from "../data-source";
import { Address } from "../entity/Address";

const addressRouter = express.Router();

addressRouter.get("/address", async (req, res) => {
    const data = await AppDataSource.getRepository(Address).findAndCount({
      relations: ["customer"]
    }
    );
    res.send(data);
  });
  
  addressRouter.get("/address/:id", async (req, res) => {
    const id = Number(req.params.id);
    const data = await AppDataSource.getRepository(Address).findOne({
      where: {
        id
      },
      relations: ["customer"]
    });
    res.send(data);
  });
  
  addressRouter.post("/address", async (req, res) => {
    const customer = req.body;
    const data = await AppDataSource.getRepository(Address).save(customer);
    res.send(data);
  });
  
  addressRouter.delete("/address/:id", async (req, res) => {
    const { id } = req.params;
    const data = await AppDataSource.getRepository(Address).delete(id);
    res.send(data);
  });
  
  addressRouter.put("/address/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const data = await AppDataSource.getRepository(Address).update(id, newData);
    res.send(data);
  });
  
  export default addressRouter;