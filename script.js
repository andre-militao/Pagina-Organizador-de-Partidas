// script.js

document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o reload da página
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Adiciona a partida à lista
    const gameList = document.getElementById('gamesList').querySelector('ul');
    const newGame = document.createElement('li');
    newGame.textContent = `${category} - ${date} às ${time}`;
    gameList.appendChild(newGame);
  });
  