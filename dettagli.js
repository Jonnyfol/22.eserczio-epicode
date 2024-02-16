const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Effettua una richiesta per ottenere i dettagli dell'utente
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        // Inserisci i dettagli dell'utente nel DOM
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userUsername').textContent = user.username;
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userPhone').textContent = user.phone;
        document.getElementById('userWebsite').textContent = user.website;
        document.getElementById('userCompany').textContent = user.company.name;
        document.getElementById('userAddress').textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
    })
    .catch(error => {
        console.error('Error fetching user details:', error);
    });