
document.addEventListener('DOMContentLoaded', function(){

  /* -----------------------------
      NOTICIAS DINÁMICAS
  ------------------------------ */

  const newsData = [
    { fuente: 'ONPE', fecha: '2025-11-15', titulo: 'Publican cronogramas oficiales para el proceso electoral 2026', descripcion: 'La ONPE ha publicado el cronograma oficial que detalla las fechas clave para inscripción, campaña y jornada de votación.', enlace: 'https://www.onpe.gob.pe' },
    { source:'LA REPÚBLICA', fecha:'2025-11-03', titulo:'Análisis de propuestas: impacto en política social', descripcion:'Expertos discuten la viabilidad y costo de las nuevas propuestas en educación y salud presentadas por los candidatos.', url:'https://larepublica.pe', sourceType:'medio'},
    { fuente: 'RPP', fecha: '2025-11-13', titulo: 'Debates Presidenciales: Resumen', descripcion: 'Resumen de los debates y principales propuestas de los candidatos.', enlace: '#' },
    { fuente:'RPP', date:'2025-10-15', titulo:'Análisis: propuestas de seguridad ciudadana en campaña', descripcion:'Debates sobre las propuestas en materia de seguridad y su factibilidad presupuestal.', enlace:'https://rpp.pe', sourceType:'medio'},
    { fuente:'ONPE', date:'2025-10-12', titulo:'Procedimientos de escrutinio y actas de votación', descripcion:'Explicación oficial sobre cómo se realizará el escrutinio y registro de actas durante la jornada.', enlace:'https://www.onpe.gob.pe', sourceType:'oficial'}
  ];

  const carousel = document.getElementById('news-carousel');
  carousel.innerHTML = '';

  // Crear las tarjetas dinámicas
  newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.className = 'flex-shrink-0 w-full md:w-1/3 p-4';
    newsItem.innerHTML = `
      <div class="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow">
        <div class="flex items-center justify-between mb-2 text-xs text-light-text-secondary dark:text-dark-text-secondary">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18" /></svg>
            <span>${news.fuente || news.source}</span>
          </div>
          <span>${news.fecha || news.date}</span>
        </div>
        <h4 class="font-bold mb-1">${news.titulo}</h4>
        <p class="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">${news.descripcion}</p>
        <a href="${news.enlace || news.url}" class="text-primary font-bold text-sm hover:underline">📖 Ver noticia completa</a>
      </div>
    `;
    carousel.appendChild(newsItem);
  });

  /* -----------------------------
      CARRUSEL INFINITO REAL
  ------------------------------ */

  let index = 1;
  let autoplaySpeed = 4000;

  let slides = Array.from(carousel.children);
  const totalRealSlides = slides.length;

  // Clonar primero y último
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, slides[0]);

  slides = Array.from(carousel.children);

  function getSlideWidth() {
    return slides[index].getBoundingClientRect().width;
  }

  function setPosition(animate = true) {
    const width = getSlideWidth();

    if (!animate) {
      carousel.style.transition = "none";
    } else {
      carousel.style.transition = "transform 0.45s ease-in-out";
    }

    carousel.style.transform = `translateX(${-index * width}px)`;
  }

  // Autoplay continuo
  function startAutoplay() {
    return setInterval(() => {
      index++;
      setPosition();
    }, autoplaySpeed);
  }

  let autoplay = startAutoplay();

  // Loop perfecto al llegar a clones
  carousel.addEventListener("transitionend", () => {
    if (index === slides.length - 1) {
      index = 1;
      setPosition(false);
    }
    if (index === 0) {
      index = totalRealSlides;
      setPosition(false);
    }
  });

  // Posición inicial
  setTimeout(() => setPosition(false), 100);

  // Ajustar ancho al cambiar ventana
  window.addEventListener("resize", () => {
    setPosition(false);
  });

});

const dotsContainer = document.getElementById("news-dots");

// Crear dots según cantidad real de slides
for (let i = 0; i < totalRealSlides; i++) {
  const dot = document.createElement("div");
  dot.classList.add(
    "w-3", "h-3", "rounded-full", 
    "bg-gray-400", "cursor-pointer", 
    "transition"
  );
  if (i === 0) dot.classList.add("bg-primary");
  dotsContainer.appendChild(dot);

  // Ir al slide al hacer clic
  dot.addEventListener("click", () => {
    index = i + 1; // +1 por el clon
    setPosition();
    updateDots();
  });
}

const dots = dotsContainer.children;

// Actualizar visualmente los dots
function updateDots() {
  const realIndex =
    index === 0
      ? totalRealSlides - 1
      : index === slides.length - 1
      ? 0
      : index - 1;

  Array.from(dots).forEach((dot, i) => {
    dot.classList.remove("bg-primary");
    dot.classList.add("bg-gray-400");
    if (i === realIndex) {
      dot.classList.remove("bg-gray-400");
      dot.classList.add("bg-primary");
    }
  });
}

// Detectar cambio de slide y actualizar dots
carousel.addEventListener("transitionend", updateDots);


