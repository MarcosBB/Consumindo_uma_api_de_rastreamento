
const url = 'https://rastreamento-api.herokuapp.com/busca-atualizacoes/'

function adicionaColuna(tabela, content){
    var item
    item = document.createElement("td")
    item.innerText = content
    tabela.appendChild(item)
}

function pesquisar(id){
    fetch(url + "last/" + id + "/")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data.status == "Busca bem sucedida"){
            const status = data.resultado.status
            const date = data.resultado.date
            const rota = data.resultado.rota

            const tabela = document.getElementById("resultados")

            document.createElement("tr")

            adicionaColuna(tabela, status)
            adicionaColuna(tabela, rota)
            adicionaColuna(tabela, date)
            }
        })
}

function clickDoBotao(){
    var input = document.getElementById("id")
    var id = input.value

    pesquisar(id)
}


var btn = document.getElementById("botao")
btn.addEventListener('click', function(){clickDoBotao()})
//pesquisar('e8f37e1f683e6c472721010956ea5798')
