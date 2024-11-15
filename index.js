var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    // Corrigindo a ortografia de "display" e ajustando os estilos
    Leonardo.style.display = "none";        // Oculta Leonardo
    Bruna.style.display = "flex";           // Exibe Bruna

    // Alterando o estilo das setas
    setaDireita.style.display = "none";     // Oculta a seta para a direita
    setaEsquerda.style.display = "flex";    // Exibe a seta para a esquerda
    setaEsquerda.style.marginTop = "105px";  // Define o "margin-top" com a unidade "px"
}

function RolarParaEsquerda() {
    // Definindo o estilo de exibição de Leonardo e Bruna
    Leonardo.style.display = "flex";    // Exibe Leonardo
    Bruna.style.display = "none";       // Oculta Bruna

    // Alterando o estilo das setas
    setaDireita.style.display = "flex";     // Exibe a seta para a direita
    setaDireita.style.marginTop = "105px";   // Corrigido para unidade "px"
    setaEsquerda.style.display = "none";    // Oculta a seta para a esquerda
}
