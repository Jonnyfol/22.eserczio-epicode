// Evento attivato quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', function () {
  // Impostazione dell'elemento di collegamento per il dropdown
  var dropdownLink = document.getElementById('navbarDropdownMenuLink');
  // Impostazione del testo del collegamento dropdown al primo elemento del dropdown
  var firstDropdownItem = document.querySelector('.dropdown-menu .dropdown-item');
  dropdownLink.textContent = firstDropdownItem.textContent;
  
  // Aggiunta di event listener agli elementi del dropdown
  var dropdownMenuItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
  dropdownMenuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      dropdownLink.textContent = event.target.textContent;
    });
  });
});

// Evento attivato quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', async function () {
  try {
    // Richiesta asincrona per ottenere i dati degli utenti da un API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // Estrazione dei dati JSON dalla risposta
    const data = await response.json();
    
    // Selezione del corpo della tabella nel DOM
    const tbody = document.querySelector('#userTable tbody');

    // Iterazione su ogni utente nei dati e creazione delle righe della tabella
    data.forEach(user => {
      const tr = document.createElement('tr');
      // Creazione delle celle per i dati dell'utente (nome, username, email)
      const nameTd = document.createElement('td');
      const usernameTd = document.createElement('td');
      const emailTd = document.createElement('td');
      // Impostazione dei dati dell'utente nelle celle
      nameTd.textContent = user.name;
      usernameTd.textContent = user.username;
      emailTd.textContent = user.email;
      // Creazione del pulsante "Dettagli" per ogni utente
      const detailsTd = document.createElement('td');
      const detailsButton = document.createElement('button');
      detailsButton.textContent = 'Dettagli';
      // Aggiunta di un event listener per reindirizzare l'utente alla pagina dei dettagli
      detailsButton.addEventListener('click', function() {
        window.location.href = `dettagli.html?id=${user.id}`;
      });
      detailsTd.appendChild(detailsButton);
      // Aggiunta delle celle alla riga della tabella
      tr.appendChild(nameTd);
      tr.appendChild(usernameTd);
      tr.appendChild(emailTd);
      tr.appendChild(detailsTd);
      // Aggiunta della riga alla tabella
      tbody.appendChild(tr);
    });

    // Implementazione della ricerca degli utenti
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      const filterBy = document.getElementById('navbarDropdownMenuLink').textContent.toLowerCase().trim();
      // Svuota la tabella prima di popolarla con i risultati della ricerca
      tbody.innerHTML = '';
      // Filtraggio e visualizzazione degli utenti che corrispondono alla ricerca
      data.forEach(user => {
        if (user[filterBy].toLowerCase().includes(searchInput)) {
          // Codice per creare le righe della tabella e i pulsanti "Dettagli" (come sopra)
          const tr = document.createElement('tr');
          const nameTd = document.createElement('td');
          const usernameTd = document.createElement('td');
          const emailTd = document.createElement('td');

          nameTd.textContent = user.name;
          usernameTd.textContent = user.username;
          emailTd.textContent = user.email;

          const detailsTd = document.createElement('td');
          const detailsButton = document.createElement('button');
          detailsButton.textContent = 'Dettagli';
          detailsButton.addEventListener('click', function() {
            window.location.href = `dettagli.html?id=${user.id}`;
          });
          detailsTd.appendChild(detailsButton);

          tr.appendChild(nameTd);
          tr.appendChild(usernameTd);
          tr.appendChild(emailTd);
          tr.appendChild(detailsTd);

          tbody.appendChild(tr);
        }
      });
    });

  } catch (error) {
    console.error('Errore durante il recupero dei dati:', error);
  }
});
