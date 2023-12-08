let todoLista = [];
let novaLi = "";

// Adiciona elementos na lista
todoLista.push("Estudar CSS");
todoLista.push("Estudar HTML");
todoLista.push("Estudar JavaScript");
todoLista.push("Estudar PHP");
todoLista.push("Estudar Python");
todoLista.push("Estudar Java");

// Remove elementos da lista
todoLista.splice(1, 1);

todoLista.forEach(function (item) {
  novaLi += `
    <li class="todo-item">
    <i class="fa-solid fa-circle-check"></i>
    <p class="">${item}</p>
    <i class="fa-solid fa-trash"></i>
    </li>
`;
});

document.querySelector(".todo-lista").innerHTML = novaLi;
