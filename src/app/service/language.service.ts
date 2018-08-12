const texto = [
    {
        language: 'ptBR',
        app: {
            title: 'Recrutamento'
        },
        medico: {
            titleBar: 'Para adicionar um médico, escreva CPF/CNPJ e clique em Adicionar',
            titleCadastroModal: 'Cadastrar Médico',
            titleEditModal: 'Editar Médico',
            addItemBtn: 'Adicionar',
            tooltipEdit: 'Editar',
            tooltipDelete: 'Deletar',
            alertFieldRequired: 'Campo obrigatório',
            alertCpfInvalido: 'Campo obrigatório com CPF ou CNPJ valido',
            nome: 'Nome',
            cpf: 'CPF ou CNPJ',
            celular: 'Celular',
            data_nascimento: 'Data de nascimento',
            btnSalvar: 'Salvar',
            btnCancelar: 'Cancelar'
        }
    },
    {
        language: 'en',
        app: {
            title: 'Recrutamento'
        },
        medico: {
            titleBar: 'Para adicionar um médico, escreva CPF/CNPJ e clique em Adicionar',
            titleCadastroModal: 'Cadastrar Médico',
            titleEditModal: 'Editar Médico',
            addItemBtn: 'Adicionar',
            tooltipEdit: 'Editar',
            tooltipDelete: 'Deletar',
            alertFieldRequired: 'Campo obrigatório',
            alertCpfInvalido: 'Campo obrigatório com CPF ou CNPJ valido',
            nome: 'Nome',
            cpf: 'CPF ou CNPJ',
            celular: 'Celular',
            data_nascimento: 'Data de nascimento',
            btnSalvar: 'Salvar',
            btnCancelar: 'Cancelar'
        }
    }
];

export class LanguageService {

    getText(page) {
        const language = navigator.language.replace('-', '');

        const LanguageFound = texto.some(e => {
            return e.language === language;
        });

        if (LanguageFound) {
            return this.getLanguage(language, page);
        } else {
            return this.getLanguage('en', page);
        }
    }

    private getLanguage(language, page) {
        return texto.filter(e => {
            return e.language === language;
        })[0][page];
    }
}
