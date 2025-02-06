// Criando um array vazio para armazenar os amigos
var amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  var input = document.getElementById("amigo");
  var nome = input.value.trim(); // Remover espaços extras

  if (nome !== "") {
    // Verificar se o nome já está na lista
    var existe = false;
    for (var i = 0; i < amigos.length; i++) {
      if (amigos[i] === nome) {
        existe = true;
        break;
      }
    }

    if (!existe) {
      amigos.push(nome); // Adiciona o nome no array
      input.value = ""; // Limpa o campo de entrada
      atualizarLista(); // Atualiza a lista exibida na tela
    } else {
      alert("Nome já adicionado!");
    }
  } else {
    alert("Por favor, insira um nome!");
  }
}
// Função para atualizar a lista de amigos na tela usando um loop for
function atualizarLista() {
  var lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de atualizar

  for (var i = 0; i < amigos.length; i++) {
    var item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}
