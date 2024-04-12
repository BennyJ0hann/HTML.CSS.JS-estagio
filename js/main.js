
window.addEventListener('scroll', function () {

    var divComImagem = document.getElementById('divComImagem');
    
    var elemento = document.getElementById("troca");
    var elemento1 = document.getElementById("pagina1");
    var elemento2 = document.getElementById("pagina2");
    var elemento3 = document.getElementById("pagina3");
    var elemento4 = document.getElementById("pagina4");
    var elemento5 = document.getElementById("pagina5");
    var elemento6 = document.getElementById("pagina6");
    var elemento6_2 = document.getElementById("pagina6.2");
    var elemento7 = document.getElementById("pagina7");
    var elemento8 = document.getElementById("pagina8");
    var elemento9 = document.getElementById("pagina9");
    var elemento10 = document.getElementById("pagina10");

    var back1 = document.getElementById("secao2");
    var back2 = document.getElementById("secao3");
    var back3 = document.getElementById("secao4");
    var back4 = document.getElementById("secao5");
    var back5 = document.getElementById("secao6");
    var back6 = document.getElementById("secao7");
    var back7 = document.getElementById("secao8");
    var back8 = document.getElementById("secao9");
    var back9 = document.getElementById("secao10");
    var back10 = document.getElementById("secao11");

    var ethan = document.getElementById("ethan");
    var ethan2 = document.getElementById("ethan2");
    var ethan3 = document.getElementById("ethan3");

    var palhaco = document.getElementById("palhaco")



    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var scrollPercentage = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage > 5) {



        divComImagem.style.position = 'fixed'; // Fixa a posição da div no topo
        divComImagem.style.top = '50px'; // Coloca a div 50px abaixo do topo da tela
        elemento.className = "imagem2";


    }
    else {

        divComImagem.style.position = 'absolute'; // Restaura a posição absoluta da div
        divComImagem.style.top = '50%'; // Mantém a div centralizada verticalmente
        elemento.className = "imagem";

    }
        // pag1

    if (scrollPercentage > 5) {

        elemento1.classList.add("executado");
        back1.classList.add("executado")



    }
    else {

        elemento1.classList.remove("executado");
        back1.classList.remove("executado");



    }
    // pag2
    if (scrollPercentage > 15) {

        elemento2.classList.add("executado");
        back2.classList.add("executado")
        divComImagem.style.display = 'none';
        ethan.classList.add("executado");
        ethan2.classList.add("executado");
        ethan3.classList.add("executado");



    }
    else {

        elemento2.classList.remove("executado");
        back2.classList.remove("executado");
        divComImagem.style.display = 'block';
        ethan.classList.remove("executado");
        ethan2.classList.remove("executado");
        ethan3.classList.remove("executado");




    }
    // pag3
    if (scrollPercentage > 20) {

        elemento3.classList.add("executado2");
        back3.classList.add("executado")


    }
    else {

        elemento3.classList.remove("executado2");
        back3.classList.remove("executado");

    }
    // pag4
    if (scrollPercentage > 30) {

        elemento4.classList.add("executado3");
        back4.classList.add("executado")


    }
    else {

        elemento4.classList.remove("executado3");
        back4.classList.remove("executado");

    }
    // pag5
    if (scrollPercentage > 40) {

        elemento5.classList.add("executado4");
        back5.classList.add("executado")


    }
    else {

        elemento5.classList.remove("executado4");
        back5.classList.remove("executado");

    }
    // pag6
    if (scrollPercentage > 50) {

        elemento6.classList.add("executado5");
        elemento6_2.classList.add("executado5");

        back6.classList.add("executado")


    }
    else {

        elemento6.classList.remove("executado5");
        elemento6_2.classList.remove("executado5");

        back6.classList.remove("executado");

    }
    // pag7
    if (scrollPercentage > 60) {

        elemento7.classList.add("executado");
        back7.classList.add("executado")
        palhaco.classList.add("executado");



    }
    else {

        elemento7.classList.remove("executado");
        back7.classList.remove("executado");
        palhaco.classList.remove("executado");
        

    }
    // pag8
    if (scrollPercentage > 70) {

        elemento8.classList.add("executado");
        back8.classList.add("executado")


    }
    else {

        elemento8.classList.remove("executado");
        back8.classList.remove("executado");

    }
    // pag9
    if (scrollPercentage > 80) {

        elemento9.classList.add("executado");
        back9.classList.add("executado")


    }
    else {

        elemento9.classList.remove("executado");
        back9.classList.remove("executado");

    }
    // pag10
    if (scrollPercentage > 90) {

        elemento10.classList.add("executado");
        back10.classList.add("executado")


    }
    else {

        elemento10.classList.remove("executado");
        back10.classList.remove("executado");

    }

});
// Função para lidar com o evento de rolagem do mouse
function handleScroll(event) {
    const delta = event.deltaY; // Obtém a quantidade de rolagem do scroll

    if (delta > 0) {
        // Rola para a próxima seção
        const currentSection = document.querySelector('.active');
        const nextSection = currentSection.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            currentSection.classList.remove('active');
            nextSection.classList.add('active');
        }
    } else if (delta < 0) {
        // Rola para a seção anterior
        const currentSection = document.querySelector('.active');
        const prevSection = currentSection.previousElementSibling;
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
            currentSection.classList.remove('active');
            prevSection.classList.add('active');
        }
    }
}

// Adiciona evento de rolagem do mouse
window.addEventListener('wheel', handleScroll);

// Adiciona evento de carregamento da página
window.addEventListener('DOMContentLoaded', function () {
    // Define a primeira seção como ativa
    const firstSection = document.querySelector('section');
    firstSection.classList.add('active');
});
setTimeout(function () {
    document.querySelector('.texto-escondido').style.display = "block"; // Define a opacidade para 1 após determinados segundos
}, 5000);
