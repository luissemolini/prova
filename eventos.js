
let eventos = getData("eventos");

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  eventos.forEach((u, i) => {
    lista.innerHTML += `
      <div>
        ${u.titulo} - ${u.data}
        <button onclick="remover(${i})">X</button>
      </div>
    `;
  });
}

function remover(i) {
  eventos.splice(i, 1);
  saveData("eventos", eventos);
  render();
}

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const data = document.getElementById("data").value;

  eventos.push({ titulo, data });
  saveData("eventos", eventos);

  e.target.reset();
  render();
});

render();

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
  
  function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

const listaeventos = document.getElementById("listaeventos");
const select = document.createElement("select");

eventos.forEach((eventos) => {
  const option = document.createElement("option");
  option.value = eventos.titulo;
  option.textContent = eventos.titulo;
  select.appendChild(option);
});

listaeventos.appendChild(select);
