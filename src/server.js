import express from 'express'
import { VeiculoRouter } from './routes/veiculo.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use ("/veiculos", VeiculoRouter)
app.listen(port, () => {
    console.log ('App rodando em http://localhost:3000');
    
})