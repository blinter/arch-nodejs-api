import { Router, Request, Response } from 'express'

class RotaExemplo {
    public router = Router()
    constructor() {

        this.router.get('/rota1', function (req: Request, res: Response) {
            console.log('Chamada a rota 1');

            res.status(200).send('ok')

        })

        this.router.get('/erro', function (req: Request, res: Response) {
            throw new Error('Um erro de exemplo. 2')
        })
    }
}

export default RotaExemplo