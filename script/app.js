let todoLista = [];
let botaoAdicionar = document.getElementById("button-adicionar");
botaoAdicionar.addEventListener("click", adicionaItem);

function exibeLista() {
  let novaLi = "";
  todoLista.forEach(function (item, pos) {
    novaLi += `
    <li class="todo-item">
    <i class="fa-solid fa-circle-check"></i>
    <p class="">${item}</p>
    <i class="fa-solid fa-trash" onclick="removeItem(${pos})"></i>
    </li>
`;
  });
  document.querySelector(".todo-lista").innerHTML = novaLi;
}

function adicionaItem() {
  let inputAtividade = document.getElementById("input-atividade").value;
  todoLista.push(inputAtividade);
  document.getElementById("input-atividade").value = "";
  salvaLista();
  exibeLista();
}

function salvaLista() {
  localStorage.setItem("todoLista", JSON.stringify(todoLista));
}

function carregaLista() {
  let lista = localStorage.getItem("todoLista");
  if (lista) {
    todoLista = JSON.parse(lista);
  }
  exibeLista();
}

function removeItem(pos) {
  todoLista.splice(pos, 1);
  salvaLista();
  exibeLista();
}

carregaLista();
