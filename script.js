var barraPesquisa = document.getElementById('barraPesquisa')
barraPesquisa.onchange = function() {
    console.log(barraPesquisa.value);
    dadosdoFilme();
}

var api = 'https://ghibliapi.herokuapp.com/films/'

var conteiner1 = document.querySelector('.conteiner')
var conteiner2 = document.querySelector('.conteiner2')

conteiner2.addEventListener('click', function esconder(){
    conteiner2.style.display = "none"
    conteiner1.style.display = "flex"

})

function dadosdoFilme() {
    fetch(`${api}`)
    .then((response =>{
        return response.json()
    }))
    .then((data =>{
        for(filme of data){
            if(filme.title == barraPesquisa.value){
                    
                document.getElementById('tituloFilme').innerHTML = filme.title
                document.getElementById('descFilme').innerHTML = filme.description
                document.querySelector('#diretor').innerHTML = `Diretor: ${filme.director}`
                document.querySelector('#produtor').innerHTML = `Produtor: ${filme.producer}` 

                conteiner1.style.display = "none"
                conteiner2.style.display = "flex"
            }
        }
    }))
    .catch((error =>{
        console.log(error)
    }))    
}


if(localStorage.ultimaBusca){
    document.getElementById('barraPesquisa').value = localStorage.ultimaBusca;
}
var salvarPesquisa = function() {
    var ultimo = document.getElementById(barraPesquisa.value);
    localStorage.getItem('ultimaBusca', ultimo);
    console.log(ultimo)
}
document.onchange = salvarPesquisa;

