async function buscarAgenda(){
    console.log("Agenda definida");

    const resposta = await fetch("https://660f44af356b87a55c510d5e.mockapi.io/agendas");
    const respostaDadosAgenda = await resposta.json();

    console.log("Resposta: ", respostaDadosAgenda);

    const cards = document.getElementById("cards_games")

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
       return "TESTE "
    });
}

console.log("Buscou?")
buscarAgenda();
console.log("Buscou -b")