import * as express from "express"
import { Request, Response } from 'express'
import RotaExemplo from './rotas/RotaExemplo'
import ClienteErro from './modelo/ClienteErro'

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    console.log(req.headers)
    console.log('Entrada?')
    res.send('Hello World!')
})

app.use('/api', new RotaExemplo().router)


//Loga erros
//Envia para o cliente um erro apropriado.
app.use(function (err, req, res, next) {
    console.log(JSON.stringify(err.stack));
    console.log(typeof err)
    res.status(500).send(new ClienteErro('Uma mensagem amigável de erro.'));
});

app.listen(3000, () => {
    console.log(`Servidor online.`)
})