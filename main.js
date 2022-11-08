function createGame(player1, hour, player2) {
  return ` 
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"></img>
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"></img>
  </li>
  `
}

function createCard(date, day, games) {
  return ` 
    <div class ="card">
    <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  
  `
}

document.querySelector("#app").innerHTML = `
 <header>
      <img src="./assets/logo.svg" alt="">

  </header>

  <main id= "cards">
      ${createCard(
        "24/11",
        "QUINTA",
        createGame("swit", "07:00", "camaroes") +
          createGame("portugal", "13:00", "ghana") +
          createGame("brasil", "16:00", "serbia")
      )}
    ${createCard(
      "28/11",
      "SEGUNDA",
      createGame("coreiasul", "10:00", "ghana") +
        createGame("brasil", "13:00", "swit") +
        createGame("portugal", "07:00", "uruguay")
    )}
      ${createCard(
        "02/12",
        "SEXTA",
        createGame("camaroes", "16:00", "brasil") +
          createGame("camaroes", "16:00", "brasil") +
          createGame("camaroes", "16:00", "brasil")
      )}
          
  </main>
`
