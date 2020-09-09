import * as express from "express"
import { Request, Response } from 'express'
import RotaExemplo from './rotas/RotaExemplo'
import ClienteErro from './modelo/ClienteErro'
import FiltroManipulacaoErro from './filtros/FiltroManipulacaoErros'

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    console.log(req.headers)
    console.log('Entrada?')
    res.send('Hello World!')
})

app.use('/api', RotaExemplo)

app.use('/api', FiltroManipulacaoErro)


app.listen(3000, () => {
    console.log(`Servidor online.`)
})