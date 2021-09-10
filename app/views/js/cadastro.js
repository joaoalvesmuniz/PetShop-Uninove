let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("senha");


document.getElementById("formCadastro").addEventListener( "submit", async (e) =>{
e.preventDefault();
alert("Ola")

const url = "http://localhost:3000/cadastro";

const bodyData = {
 nome: nome.value,
 email: email.value,
 senha: senha.value
}


fetch(url, {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
 },
 body: JSON.stringify(bodyData), // passa o corpo da requisição aqui
})
 .then((response) => {
   console.log(response);
   return response.json()

 })
 .then((data) => {
   // esse data tem os dados da resposta
   //  {
   //      id: 5,
   //    nome: '',
   //    email: '',
   //    senha: '',
   //    updatedAt: '',
   //    createdAt: ''
   //  }
   console.log(data)
 });

});
