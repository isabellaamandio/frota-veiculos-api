class VeiculoService{
    async getAll (){
        const res = await Pool.query("SELECT *");
        return res.rows;
    }
}

export const VeiculoService = new VeiculoService();