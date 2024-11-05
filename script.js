document.querySelector(".discord-login-btn").addEventListener("click", function() {
    this.classList.add("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 200);
  });
  
  /* Estilo para o efeito de clique */
  document.styleSheets[0].insertRule(`
    .discord-login-btn.clicked {
      transform: scale(0.95);
    }
  `, document.styleSheets[0].cssRules.length);
  