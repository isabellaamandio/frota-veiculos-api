import { pool } from "../database/db.js";
class VeiculoService{
    async getAll (){
        const res = await pool.query("SELECT *");
        return res.rows;
    }
    async create (dados){
        const res = await pool.query("INSERT INTO... RETURNING*", (dados...));
        return res.rows(0);
    }
}

export const VeiculoService = new VeiculoService();