function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo ID.
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Você não escreveu nada</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) dentro do array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se o titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {
                resultados += `
                <div class="item-resultado"> <h2> <a href="#" target="_blank">${dado.titulo}</a> </h2>
                  <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais</a> </div>
              `;
            }

    }
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }
    // Atribui o conteúdo HTML gerado à seção de resultados.
    section.innerHTML = resultados;
  }