const CadastroUsuario = new Map();

CadastroUsuario.set('nome', "Jônatas de Arruda");
CadastroUsuario.set('idade', 30);
CadastroUsuario.set('nacionalidade', "Brasileiro");
CadastroUsuario.set('estado', "Santa Catarina");
CadastroUsuario.set('cidade', "Brusque");
CadastroUsuario.set('formacao', "ioasysCamp");

const DadosInseridos = new Map();

DadosInseridos.set('nome', "Jônatas Arruda");
DadosInseridos.set('idade', 30);
DadosInseridos.set('nacionalidade', "Brasileiro");
DadosInseridos.set('estado', "Santa Catarina");
DadosInseridos.set('cidade', "Brusque");
DadosInseridos.set('formacao', "ioasysCamp");


console.log(compareMaps(CadastroUsuario, DadosInseridos));


//Função para comparar Tamanho e Valores dos Maps do Cadastro do Usuário e os Dados Inseridos
function compareMaps(CadastroUsuario, DadosInseridos) {
    var testVal;
    if (CadastroUsuario.size !== DadosInseridos.size) {
        return "Preencha todos os campos do cadastro.";
    }
    for (var [key, val] of CadastroUsuario) {
        testVal = DadosInseridos.get(key);
        if (JSON.stringify(testVal) !== JSON.stringify(val) || (testVal === undefined && !DadosInseridos.has(key))) {
            return key + " Inválido";
        }
    }
    return "Usuário Cadastrado!";
}
