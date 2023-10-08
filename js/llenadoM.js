document.addEventListener("DOMContentLoaded", function () {
    // Tu código JavaScript aquí
  
    // Define el número de cards que deseas crear (por ejemplo, 5)
    var n = 10;
  
    // Obtén el contenedor de las cards
    var cardContainer = document.getElementById('card-container');
  
    // Arreglo de títulos
    var titulos = ['El psicoanalista', 
    'El Club de los Psicópatas', 
    'Sé lo que estás pensando', 
    'Personas desconocidas', 
    'El pecador de Oxford',
    'La chica del tren',
    'El invierno más largo ',
    'La chica atrapada',
    'Asesinato en Fleat House',
    'El silencio de los corderos'];
  
    // Arreglo de descripciones
    var descripciones = [
        '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
        '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
        '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
        '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
        '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>'
        ,
        '', // Descripción vacía
        '----'
      ];

    // Utiliza un bucle for para crear "n" cards
    for (var i = 0; i < n; i++) {
      // Crea un elemento de div para la card
      var cardDiv = document.createElement('div');
      cardDiv.className = 'col-md-3'; // Cambiamos a col-md-3 para 4 columnas en pantallas medianas
  
      // Obtiene el título y la descripción de la card actual del arreglo
      var titulo = titulos[i];
      var descripcion = descripciones[i];
  
      // Crea la estructura de la card con el título y la descripción
      cardDiv.innerHTML = `
        <div class="card mb-4">
          <img src="../images/img-misterio/imagen${i + 1}.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${descripcion}</p>
          </div>
        </div>
      `;
  
      // Agrega la card al contenedor
      cardContainer.appendChild(cardDiv);
    }
  });
  