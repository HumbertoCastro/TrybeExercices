
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()*/
 //Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

 document.getElementsByTagName("p")[1].innerText = "espero desenvolver um site responsivo e seguro"; 
 //Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  let text = document.getElementsByClassName("main-content")[0];
  text.style.backgroundColor = "rgb(76,164,109)"; 
  
 //Crie uma função que mude a cor do quadrado vermelho para branco.
  let texto = document.getElementsByClassName("center-content")[0];
  texto.style.backgroundColor = "white"; 
 //Crie uma função que corrija o texto da tag <h1>.
 document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";  
 //Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 let paragrafos =document.getElementsByTagName("p");
 for(i=0;i<paragrafos.length;i++){
     paragrafos[i].style.textTransform ="uppercase";
     //Crie uma função que exiba o conteúdo de todas as tags <p> no console.
     console.log(paragrafos[i]);
 }