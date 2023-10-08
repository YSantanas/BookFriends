document.addEventListener("DOMContentLoaded", function () {
    // Tu código JavaScript aquí
  
    // Define el número de cards que deseas crear (por ejemplo, 5)
    var n = 12;
  
    // Obtén el contenedor de las cards
    var cardContainer = document.getElementById('card-container');
  
    // Arreglo de títulos
    var titulos = ['Harry Potter y la piedra filosofal', 'Harry Potter y la cámara secreta',
     'Harry Potter y el prisionero de Azkaban', 'Harry Potter y el cáliz de fuego', 'Harry Potter y la orden del Fénix', "Harry Potter y el misterio del principe","Harry Potter y las reliquias de la muerte","El Señor de los Anillos I. La Comunidad del Anillo","El Señor de los Anillos II. Las Dos Torres","El Señor De Los Anillos 3 El Retorno Del Rey","Juego de tronos (Canción de Hielo y Fuego 1)","Choque de reyes (Canción de Hielo y Fuego 2)" ];
  
    // Arreglo de descripciones
    var descripciones = [
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
      '<div class="calificacion"><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span><span class="estrella">&#9733;</span></div>',
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
          <img src="../images/img-fantasia/imagen${i + 1}.jpg" class="card-img-top" alt="...">
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
  