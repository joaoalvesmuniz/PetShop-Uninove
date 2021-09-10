

const url = "http://localhost:3000/login";
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const botao = document.getElementById("botao");
const form = document.getElementById("form")


 form.addEventListener("submit", async (e)  => {
 
  
    e.preventDefault();

    const bodyData = {
      email: email.value,
      senha: senha.value
    }

   const result = await fetch(url,{
       body: JSON.stringify(bodyData),
       headers: {
           "Content-Type": "application/json",
       },
       method: "POST"
   }).then((response) => {
               
      console.log(response)
      return response.json()

   }).then((data)=>{

    console.log(data);
   })
   
 
 

  
    


  });
