var conteudo = document.getElementById('conteudo')
var botao = document.getElementById('mostre_mais')

//cria evento do click do botão ultilizando uma função anônima
botao.onclick = function(){

    if(conteudo.className == "open"){
        //encurtar a caixa
        conteudo.className = ""; //muda a classe da div conteudo para " "
        botao.innerHTML = "Mostrar Mais"; //muda o texto do botão para Mostrar Mais
    }
    else{
        //expandir a caixa
        conteudo.className = "open"; //muda a classe da div conteudo para open
        botao.innerHTML = "Mostrar Menos"; //muda o texto do botão para Mostrar Menos
    }
    
};