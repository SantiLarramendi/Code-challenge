document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('registroForm');
  const resultadoDiv = document.getElementById('resultado');

  formulario.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const fechaNacimiento = document.getElementById('fechaNacimiento').value;

      const userData = {
          nombre: nombre,
          apellido: apellido,
          fechaNacimiento: fechaNacimiento
      };
      
      fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
          resultadoDiv.innerHTML = `Usuario registrado con ID: ${data.id}`;
      })
      .catch(error => {
          resultadoDiv.innerHTML = `Error: ${error.message}`;
      });
  });
});
