let usuarios = getData("usuarios");
let eventos = getData("eventos");
let inscricoes = getData("inscricoes"); 


function selecaodados() {
  
  const divUsuarios = document.getElementById("listausuarios");
  divUsuarios.innerHTML = "";
  const selectUsuarios = document.createElement("select");
  selectUsuarios.id = "usuario";
  usuarios.forEach((u, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = u.nome;
    selectUsuarios.appendChild(option);
  });
  divUsuarios.appendChild(selectUsuarios);



  const divEventos = document.getElementById("listaeventos");
  divEventos.innerHTML = "";
  const selectEventos = document.createElement("select");
  selectEventos.id = "evento";
  eventos.forEach((e, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${e.titulo} - ${e.data}`;
    selectEventos.appendChild(option);
  });
  divEventos.appendChild(selectEventos);
}


function Inscricoes() {
  const lista = document.getElementById("listaInscricoes");
  lista.innerHTML = "";
  inscricoes.forEach((i) => {
    lista.innerHTML += `
      <div>
        ${i.usuario} -  ${i.evento} - ${i.data}
      </div>
    `;
  });
}


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const usuarioIndex = document.getElementById("usuario").value;
  const eventoIndex = document.getElementById("evento").value;

  const usuario = usuarios[usuarioIndex];
  const evento = eventos[eventoIndex];

  const novaInscricao = {
    usuario: usuario.nome,
    evento: evento.titulo,
    data: evento.data
  };

  inscricoes.push(novaInscricao);
  saveData("inscricoes", inscricoes);

  Inscricoes();
});

function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


selecaodados();
Inscricoes();
