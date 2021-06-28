
const url = 'https://rastreamento-api.herokuapp.com/busca-atualizacoes/'

function adicionaColuna(tabela, line, content){
    var item
    item = line.insertCell()
    item.innerText = content
    //tabela.appendChild(item)
}

function adicionaLinhas(tabela){
    linhas = ["Status", "Rotas", "Data"]
    
    var item
    for (linha in linhas){
        item = document.createElement("th")
        item.innerText = linhas[linha]
        tabela.appendChild(item)
    }
}

function pesquisar(id){
    var input = document.getElementById("id")
    var id = input.value

    if(id == ""){
        console.log("Digite o id do seu produto")
        var item
        item = document.getElementById("status")
        item.innerText = "Digite o id do seu produto"
    }
    else{
    fetch(url + "last/" + id + "/")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data.status == "Busca bem sucedida"){
                const status = data.resultado.status
                const date = data.resultado.date
                const rota = data.resultado.rota

                item = document.getElementById("status")
                item.innerText = "Resultado encontrado"

                const tabela = document.getElementById("resultados")

                

                adicionaLinhas(tabela)

                var line = tabela.insertRow()

                adicionaColuna(tabela,line, status)
                adicionaColuna(tabela,line, rota)
                adicionaColuna(tabela,line, date)
            }
            else if (data.status == "Busca mal sucedida"){
                console.log("Nenhum resultado encontrado")
                var item
                item = document.getElementById("status")
                item.innerText = "Nenhum resultado encontrado"
            }
        })
    }
}

function clickDoBotao(){
    
    var input = document.getElementById("id")
    var id = input.value

    pesquisar(id)
}


var btn = document.getElementById("botao")
btn.addEventListener('click', function(){clickDoBotao()})
//pesquisar('e8f37e1f683e6c472721010956ea5798')
