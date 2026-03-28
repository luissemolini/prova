
let inscricoes = getData("inscricoes");
let usuarios = getData("usuarios");
let eventos = getData("eventos");

let listaUsuario = document.getElementById("listaUsuario");
let ListaEventos = document.getElementById("listaEventos");

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  inscricoes.forEach((u, i) => {
    lista.innerHTML += `
      <div>
        ${u.nome} - ${u.titulo}
        <button onclick="remover(${i})">X</button>
      </div>
    `;
  });
}

function remover(i) {
  inscricoes.splice(i, 1);
  saveData("inscricoes", inscricoes);
  render();
}

function populaSelectEventos() {

usuarios.forEach((usuario) => {
const selectUsuario = document.createElement("select");
    selectUsuario.name = "usuario";
    option = document.createElement("option");
    option.value = usuario.nome;
    option.textContet = usuario.nome; 

    selectUsuario.appendChild(option);
    
})

listaUsuario.appendChild(selectUsuario);


    

}

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const titulo = document.getElementById("titulo").value;

  inscricoes.push({ nome, titulo });
  saveData("inscricoes", inscricoes);

  e.target.reset();
  render();
});

populaSelectEventos();

render();

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
  
  function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
