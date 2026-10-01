class VeiculoService{
    async getAll (){
        const res = await Pool.query("SELECT *");
        return res.rows;
    }
}