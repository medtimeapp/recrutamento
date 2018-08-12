export class MedicoModel {
    constructor
    (public id: number, public nome: string, public cpf: string, public celular: string, public data_nascimento: string ) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.celular = celular;
        this.data_nascimento = data_nascimento;
    }
}
