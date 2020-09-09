class ClienteErro extends Error {

    constructor(public descricao: string, public codigo: number = 0) {
        super()
    }
}

export default ClienteErro