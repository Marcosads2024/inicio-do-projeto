document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, a.button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Botão clicado!');
        });
    });

    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', function() {
        const query = document.querySelector('.search-bar input').value;
        alert('Procurando por: ' + query);
    });
});