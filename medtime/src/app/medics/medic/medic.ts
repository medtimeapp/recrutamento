export interface Medic {
    id_medico:number;
    nome:string;
    cpf:string;
    celular:string;
    data_nascimento:string;
}

export class MedicObject {

    constructor(
        public id_medico:number,
        public nome:string,
        public cpf:string,
        public celular:string,
        public data_nascimento:string
    ) {  }
  
  }