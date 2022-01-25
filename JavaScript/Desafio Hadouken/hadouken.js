const utils = require("./utils.js");

const user = {
    name: "",
    email: "",
    age: 18,
    password: "jonatas@123",
    confirmPassword: "jonatas@123",
};

const myUser = new Map();

myUser.set("name", user.name);
myUser.set("email", user.email);
myUser.set("age", user.age);
myUser.set("password", user.password);
myUser.set("confirmPassword", user.confirmPassword);

const formValid = () => {
    try {
        myUser.forEach(utils.formValid);
        myUser.forEach(utils.ValDados);


        if (user.password !== user.confirmPassword) {
            throw "Senha inválida";
        }
        console.log("Usuário válido.");
    } catch (e) {
        console.error(e);
    }
};

formValid();


//retornar um array com informações que estão vazios. (nome e e-mail).
