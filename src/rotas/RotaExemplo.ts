import { Router, Request, Response } from 'express'
var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(':memory:');

let router = Router()

router.get('/rota1', function (req: Request, res: Response) {
    db.serialize(function () {
        db.run("CREATE TABLE lorem (info TEXT)");

        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();

        db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
            console.log(row.id + ": " + row.info);
        });
    });

    db.close();
    console.log('Chamada a rota 1');

    res.status(200).send('ok')

})

router.get('/erro', function (req: Request, res: Response) {
    throw new Error('Um erro de exemplo. 2')
})


export default router