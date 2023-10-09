document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");
  const btnPrevisualizar = document.getElementById("btnPrevisualizar");
  const tarjetasContainer = document.getElementById("tarjetas-container");
  const tituloPrevisualizacion = document.getElementById("previsualizacion");

  // Ocultar el título "Previsualización" inicialmente
  tituloPrevisualizacion.style.display = "none";

  // Controlador de eventos para el botón "Previsualizar"
  btnPrevisualizar.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Capturar los valores de los campos del formulario
    const correo = document.getElementById("correo").value;
    const tituloLibro = document.getElementById("tituloLibro").value;
    const sinopsis = document.getElementById("sinopsis").value;
    const enlaceImagen = document.getElementById("enlaceImagen").value;
    const puntuacion = document.getElementById("puntuacion").value;

    // Realizar alguna acción con los datos (en este caso, crear una tarjeta y agregarla al contenedor de tarjetas)
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("col-md-3");
    nuevaTarjeta.innerHTML = `
            <div class="card mb-4">
                <img src="${enlaceImagen}" class="card-img-top" alt="Imagen del libro">
                <div class="card-body">
                    <h5 class="card-title">${tituloLibro}</h5>
                    <p class="card-text">${sinopsis}</p>
                    <p class="card-text">Puntuación: ${puntuacion}</p>
                </div>
            </div>
        `;

    // Mostrar el título "Previsualización"
    tituloPrevisualizacion.style.display = "block";

    // Agregar la nueva tarjeta al contenedor de tarjetas
    tarjetasContainer.appendChild(nuevaTarjeta);
  });
// Controlador de eventos para el envío del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
  
    // Capturar los valores de los campos del formulario
    const correo = document.getElementById("correo").value;
    const tituloLibro = document.getElementById("tituloLibro").value;
    const sinopsis = document.getElementById("sinopsis").value;
    const enlaceImagen = document.getElementById("enlaceImagen").value;
    const puntuacion = document.getElementById("puntuacion").value;
  
    // Limpiar el formulario
    formulario.reset();
  });
});
