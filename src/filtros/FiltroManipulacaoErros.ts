import { Request, Response, NextFunction } from 'express'
import ClienteErro from '../modelo/ClienteErro';

var filterFunction = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(400).send(new ClienteErro('Uma mensagem amigável de erro.'));
};


export default filterFunction