document.querySelectorAll('.dev-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    
    alert('Esta página ainda está em desenvolvimento.');
  });
});


document.getElementById('save-button').addEventListener('click', () => {
  // Obtém o formulário e seus dados
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);

  // Cria um objeto para armazenar os dados
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Armazena os dados no localStorage
  localStorage.setItem('formData', JSON.stringify(data));

  // Opcional: Exibe uma mensagem de confirmação
  alert('Dados salvos com sucesso!');
});

console.log(localStorage)