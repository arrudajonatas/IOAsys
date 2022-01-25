const isEmpty = (value) => {
    if (typeof value === "string") {
        return !value;
    }

    if (typeof value === "number") {
        return false;
    }

    if (typeof value === "boolean") {
        return false;
    }

    return true;
};

const isEmail = (value) =>
    value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

let valDados = [];

const formValid = (value, key) => {

    if (isEmpty(value)) {
        valDados.push(`${key} está vazio.`);
    }

    if (!isEmpty(value) && key === "email" && !isEmail(value)) {
        valDados.push(`${value} não é um email válido.`);;
    }

    if (key === "age" && value < 0 || value > 200) {
        valDados.push(`${value} não válido.`);
    }
};

const ValDados = () => {
    if (valDados.length > 0) {
        let erros = "";
        for (var i = 0; i < valDados.length; i++) {
            erros = erros + '\n' + valDados[i];
        }
        throw erros;
    }
}

module.exports = {
    isEmpty,
    formValid,
    ValDados
};
