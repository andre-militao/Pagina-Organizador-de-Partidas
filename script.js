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
  // script.js

document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o reload da página
    
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Validação básica
    if (!category || !date || !time) {
      alert("Por favor, preencha todos os campos para agendar a partida.");
      return;
    }
  
    // Simulação de carregamento
    const loadingText = document.createElement('p');
    loadingText.textContent = "Agendando sua partida...";
    loadingText.style.color = "#a29bfe";
    document.body.appendChild(loadingText);
  
    // Simulação de delay (1 segundo)
    setTimeout(() => {
      loadingText.remove(); // Remove a mensagem de carregamento
  
      // Adiciona a partida à lista
      const gameList = document.getElementById('gamesList').querySelector('ul');
      const newGame = document.createElement('li');
      newGame.textContent = `${category} - ${date} às ${time}`;
      gameList.appendChild(newGame);
  
      // Limpa o formulário após agendar
      document.getElementById('scheduleForm').reset();
  
      // Confirmação de sucesso
      alert("Partida agendada com sucesso!");
    }, 1000);
  });
  // Função para abrir o modal com detalhes do jogo
document.getElementById('gamesList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      const gameDetails = event.target.textContent;
      document.getElementById('gameDetails').textContent = `Detalhes: ${gameDetails}`;
      document.getElementById('gameModal').style.display = 'flex';
    }
  });
  
  // Função para fechar o modal
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('gameModal').style.display = 'none';
  });
  
  // Fechar o modal ao clicar fora dele
  window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('gameModal')) {
      document.getElementById('gameModal').style.display = 'none';
    }
  });
  