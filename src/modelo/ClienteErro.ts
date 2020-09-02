class ClienteErro {

    private descricao: string;
    private codigo: number;

    constructor(descricao: string, codigo: number = 0) {
        this.descricao = descricao;
        this.codigo = codigo;
    }
}

export default ClienteErro