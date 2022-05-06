var botaoMenu = document.querySelector(".botao-menu");
var menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", function(event){
    menu.classList.toggle("menu--ativo");
    menu.parentNode.classList.toggle("cabecalho--preto");
});