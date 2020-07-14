// 217. Introdução ao JavaScript
// 218. Adicionando Arquivo JavaScript Externo
//  console.log('Olá mundo!');

// 219. Trabalhando com Variáveis
//  let email = 'joao@hcode.com.br';

//  email = 'glaucio@hcode.com.br';

//  console.log(email);
//  console.log('O seu e-mail é: ' + email);
//  console.log(`O seu e-mail é: ${email}`); //crase

// 220. Entendendo os Eventos em JavaScript
// document.getElementById('btn-submit').addEventListener('click', e => {
    
//     console.log('O botão foi clicado!');

// });

// document.getElementById('form-login').addEventListener('mouseenter', e => {

//     console.log('O mouse esá sobre o formulário.');

// });

// document.querySelector('#form-login').addEventListener('mouseleave', e => {

//     console.log('O mouse esá FORA o formulário.');

// });

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

// 221. Recuperando dados de um formulário com JavaScript
    // console.log('Formulário enviado! Aqui vai o Ajax.');

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

// 222. Trabalhando com JSON
    let json = {
        email, // se a propridade for igual a variável (email = email), escreve uma vez
        password
    };

    // console.log(json);

    // let stringJSON = JSON.stringify(json); //converte p/texto
    // console.log(stringJSON);

    // let jsonParse = JSON.parse(stringJSON);
    // console.log(jsonParse);
    // console.log(jsonParse.email); //apenas email ou
    // console.log(jsonParse.password); //apenas password

// 223. Validando Dados com JavaScript
    if (!json.email) {
        console.error("O campo email deve ser preenchido!");

    } else if (!json.password){
        console.error("O campo password deve ser preenchido!");

    } else {
        console.info("Dados validados com sucesso!");

    }

});