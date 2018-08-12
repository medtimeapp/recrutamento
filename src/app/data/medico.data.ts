import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MedicoModel } from '../model/medico.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const medicos = [
            {
                id: 1,
                nome: 'Bom Teste Para Você',
                cpf: '12345678901',
                celular: null,
                data_nascimento: null
            } as MedicoModel,
            {
                id: 2,
                nome: 'Luciano Souza',
                cpf: '078.223.213-43',
                celular: '(27) 98136-5671',
                data_nascimento: '2018-07-25'
            } as MedicoModel
        ];

        const db = { medicos };
        return db;
    }
}
