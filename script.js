document.querySelector(".discord-login-btn").addEventListener("click", function() {
    this.classList.add("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 200);
  });
  
  
  document.styleSheets[0].insertRule(`
    .discord-login-btn.clicked {
      transform: scale(0.95);
    }
  `, document.styleSheets[0].cssRules.length);
  

document.addEventListener("DOMContentLoaded", () => {
    const scheduleForm = document.getElementById('scheduleForm');
    const matchesContainer = document.getElementById('matchesContainer');
    const gameModal = document.getElementById('gameModal');
    const closeModal = document.getElementById('closeModal');
    const gameDetails = document.getElementById('gameDetails');
  
    
    scheduleForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const category = document.getElementById('game-category').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
  

      if (!category || !date || !time) {
        alert("Por favor, preencha todos os campos para agendar a partida.");
        return;
      }
  
      const matchCard = document.createElement('div');
      matchCard.classList.add('match-card');
  
      const matchTitle = document.createElement('h3');
      matchTitle.classList.add('match-title');
      matchTitle.textContent = category;
  
      const matchTime = document.createElement('p');
      matchTime.classList.add('match-time');
      matchTime.textContent = `${formatDate(date)} às ${formatTime(time)}`;
  
      const playersDiv = document.createElement('div');
      playersDiv.classList.add('players');
  
      const player1 = document.createElement('span');
      player1.textContent = "Jogador 1";
      const player2 = document.createElement('span');
      player2.textContent = "Jogador 2";
  
      playersDiv.appendChild(player1);
      playersDiv.appendChild(player2);
  
      matchCard.appendChild(matchTitle);
      matchCard.appendChild(matchTime);
      matchCard.appendChild(playersDiv);
  
      matchCard.addEventListener('click', () => {
        openModal(`Categoria: ${category}\nData: ${formatDate(date)}\nHora: ${formatTime(time)}\nJogadores: Jogador 1, Jogador 2`);
      });
  
      matchesContainer.appendChild(matchCard);
  
      scheduleForm.reset();
    });
  
    function formatDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateStr);
      return date.toLocaleDateString('pt-BR', options);
    }
  
    function formatTime(timeStr) {
      const [hour, minute] = timeStr.split(':');
      return `${hour}:${minute}`;
    }
  
    
    function openModal(details) {
      gameDetails.textContent = details;
      gameModal.style.display = 'flex';
    }
  
  
    closeModal.addEventListener('click', () => {
      gameModal.style.display = 'none';
    });
  
  
    window.addEventListener('click', (event) => {
      if (event.target === gameModal) {
        gameModal.style.display = 'none';
      }
    });
  
    const discordLoginBtn = document.querySelector(".discord-login-btn");
    if (discordLoginBtn) {
      discordLoginBtn.addEventListener("click", function() {
        this.classList.add("clicked");
        setTimeout(() => {
          this.classList.remove("clicked");
        }, 200);
      });
    }
  
    const headerLoginBtn = document.getElementById('loginButton');
    if (headerLoginBtn) {
      headerLoginBtn.addEventListener("click", function() {
        this.classList.add("clicked");
        setTimeout(() => {
          this.classList.remove("clicked");
        }, 200);
      });
    }
  

  });
  
