const nome = "Jônatas de Arruda";
const idade = 30;
const nacionalidade = "Brasileiro";
const estado = "Santa Catarina";
const cidade = "Brusque";
const formacao = "ioasysCamp";

const cadastroUsuario = () => {
    if (nome === "Jônatas de Arruda") {
        if (idade === 30) {
            if (nacionalidade === "Brasileiro") {
                if (estado === "Santa Catarina") {
                    if (cidade === "Brusque") {
                        if (formacao === "ioasysCamp") {
                            console.log("Cadastrado!");
                        } else console.log("Não cadastrado");
                    } else console.log("Não cadastrado");
                } else console.log("Não cadastrado");
            } else console.log("Não cadastrado");
        } else console.log("Não cadastrado");
    } else console.log("Não cadastrado");
}

cadastroUsuario();
