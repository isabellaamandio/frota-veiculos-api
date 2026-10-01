import { Router } from "express";
import {VeiculoService} from "...services/veiculo.service.js"

export const VeiculoRouter = Router();

VeiculoRouter.get("/", async (req, res) => {
    const veiculo = await VeiculoService.getAll();
    return res.json(veiculo);
    });
VeiculoRouter.post("/"), async (req,res) => {
    const veiculos = await VeiculoService.create(req.body);
    return res.status(201).json(veiculos)
}