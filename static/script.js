// Lógica para el banner de bienvenida
      document.addEventListener('DOMContentLoaded', () => {
        const welcomeBanner = document.getElementById('welcome-banner');
        const exploreBtn = document.getElementById('explore-btn');
        const body = document.body;

        // Se ha eliminado la función 'disableScroll()' y 'enableScroll()' y su uso.
        // La página será scrollable por defecto.

        // Evento click para el botón "Explorar"
        if (exploreBtn) {
          exploreBtn.addEventListener('click', () => {
            console.log("Explore button clicked!"); // Para depuración

            // Ocultar el banner
            welcomeBanner.style.opacity = '0';
            welcomeBanner.style.pointerEvents = 'none'; // Evita interacciones

            // Esperar a que la animación termine antes de eliminar el banner
            welcomeBanner.addEventListener('transitionend', () => {
              welcomeBanner.style.display = 'none'; // Ocultar completamente

              // Desplazarse a la sección #poetas
              const poetasSection = document.getElementById('poetas');
              if (poetasSection) {
                poetasSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, { once: true }); // Asegura que el evento se dispare solo una vez
          });
        }
      });
// Datos de la base de datos original
const database = {
    poetas: [
      {
        ID_POETA: 1,
        NOMBRE_COMPLETO: "Pablo Neruda",
        PSEUDONIMO: "Pablo Neruda",
        FECHA_NACIMIENTO: "1904-07-12",
        LUGAR_NACIMIENTO: "Parral, Chile",
        FECHA_FALLECIMIENTO: "1973-09-23",
        LUGAR_FALLECIMIENTO: "Santiago, Chile",
        CONYUGE: "Matilde Urrutia",
        HIJOS: "Malva Marina Trinidad",
        BIOGRAFIA: "Poeta y diplomático chileno, Premio Nobel de Literatura en 1971..."
      },
       {
      ID_POETA: 2,
      NOMBRE_COMPLETO: "Octavio Paz",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1914-03-31",
      LUGAR_NACIMIENTO: "Ciudad de México, México",
      FECHA_FALLECIMIENTO: "1998-04-19",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: "Marie-José Tramini",
      HIJOS: null,
      BIOGRAFIA: "Poeta, ensayista y diplomático mexicano. Recibió el Premio Nobel de Literatura en 1990."
    },
    {
      ID_POETA: 3,
      NOMBRE_COMPLETO: "César Vallejo",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1892-03-16",
      LUGAR_NACIMIENTO: "Santiago de Chuco, Perú",
      FECHA_FALLECIMIENTO: "1938-04-15",
      LUGAR_FALLECIMIENTO: "París, Francia",
      CONYUGE: "Georgette Philippart",
      HIJOS: null,
      BIOGRAFIA: "Poeta peruano considerado uno de los más grandes innovadores de la poesía del siglo XX. Autor de 'Trilce'."
    },
    {
      ID_POETA: 4,
      NOMBRE_COMPLETO: "Jorge Luis Borges",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1899-08-24",
      LUGAR_NACIMIENTO: "Buenos Aires, Argentina",
      FECHA_FALLECIMIENTO: "1986-06-14",
      LUGAR_FALLECIMIENTO: "Ginebra, Suiza",
      CONYUGE: "Elsa Astete Millán",
      HIJOS: null,
      BIOGRAFIA: "Escritor argentino, conocido por sus cuentos y ensayos filosóficos. Autor de 'Ficciones'."
    },
    {
      ID_POETA: 5,
      NOMBRE_COMPLETO: "Rubén Darío",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1867-01-18",
      LUGAR_NACIMIENTO: "Metapa, Nicaragua",
      FECHA_FALLECIMIENTO: "1916-02-06",
      LUGAR_FALLECIMIENTO: "León, Nicaragua",
      CONYUGE: "Rafaela Contreras",
      HIJOS: "Rubén Darío Contreras",
      BIOGRAFIA: "Poeta nicaragüense considerado el padre del Modernismo literario en lengua española."
    },
    {
      ID_POETA: 6,
      NOMBRE_COMPLETO: "Mario Benedetti",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1920-09-14",
      LUGAR_NACIMIENTO: "Paso de los Toros, Uruguay",
      FECHA_FALLECIMIENTO: "2009-05-17",
      LUGAR_FALLECIMIENTO: "Montevideo, Uruguay",
      CONYUGE: "Luz López Alegre",
      HIJOS: null,
      BIOGRAFIA: "Poeta, narrador y ensayista uruguayo. Miembro de la Generación del 45."
    },
    {
      ID_POETA: 7,
      NOMBRE_COMPLETO: "Nicolás Guillén",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1902-07-10",
      LUGAR_NACIMIENTO: "Camagüey, Cuba",
      FECHA_FALLECIMIENTO: "1989-07-17",
      LUGAR_FALLECIMIENTO: "La Habana, Cuba",
      CONYUGE: "Consuelo Martínez",
      HIJOS: "Nicolás, Yolanda",
      BIOGRAFIA: "Poeta cubano, exponente de la poesía afroantillana y de compromiso social."
    },
    {
      ID_POETA: 8,
      NOMBRE_COMPLETO: "José Martí",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1853-01-28",
      LUGAR_NACIMIENTO: "La Habana, Cuba",
      FECHA_FALLECIMIENTO: "1895-05-19",
      LUGAR_FALLECIMIENTO: "Dos Ríos, Cuba",
      CONYUGE: "Carmen Zayas-Bazán",
      HIJOS: "José Francisco Martí Zayas-Bazán",
      BIOGRAFIA: "Poeta, ensayista y político cubano. Héroe nacional y figura clave de la independencia cubana."
    },
    {
      ID_POETA: 9,
      NOMBRE_COMPLETO: "Vicente Huidobro",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1893-01-10",
      LUGAR_NACIMIENTO: "Santiago, Chile",
      FECHA_FALLECIMIENTO: "1948-01-02",
      LUGAR_FALLECIMIENTO: "Cartagena, Chile",
      CONYUGE: "Manuela Portales Bello",
      HIJOS: null,
      BIOGRAFIA: "Poeta chileno, fundador del movimiento literario Creacionismo."
    },
    {
      ID_POETA: 10,
      NOMBRE_COMPLETO: "Gonzalo Rojas",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1917-12-20",
      LUGAR_NACIMIENTO: "Lebu, Chile",
      FECHA_FALLECIMIENTO: "2011-04-25",
      LUGAR_FALLECIMIENTO: "Santiago, Chile",
      CONYUGE: "Hilda May",
      HIJOS: "Rodrigo, Raúl, Tomás, Gonzalo Jr.",
      BIOGRAFIA: "Poeta chileno. Ganador del Premio Cervantes en 2003 y reconocido por su estilo lírico y profundo."
    },
    {
      ID_POETA: 11,
      NOMBRE_COMPLETO: "Jaime Sabines",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1926-03-25",
      LUGAR_NACIMIENTO: "Tuxtla Gutiérrez, México",
      FECHA_FALLECIMIENTO: "1999-03-19",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: "Josefina Rodríguez",
      HIJOS: "Julieta, María, Daniel, Jaime",
      BIOGRAFIA: "Poeta mexicano conocido por su estilo directo y cotidiano. Fue también político y diputado."
    },
    {
      ID_POETA: 12,
      NOMBRE_COMPLETO: "Nicanor Parra",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1914-09-05",
      LUGAR_NACIMIENTO: "San Fabián de Alico, Chile",
      FECHA_FALLECIMIENTO: "2018-01-23",
      LUGAR_FALLECIMIENTO: "La Reina, Chile",
      CONYUGE: "Nelly Parra",
      HIJOS: "Catalina, Alberto, Nicanor, Soledad, Juan de Dios",
      BIOGRAFIA: "Poeta chileno creador de la antipoesía. Hermano de Violeta Parra."
    },
    {
      ID_POETA: 13,
      NOMBRE_COMPLETO: "Roque Dalton",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1935-05-14",
      LUGAR_NACIMIENTO: "San Salvador, El Salvador",
      FECHA_FALLECIMIENTO: "1975-05-10",
      LUGAR_FALLECIMIENTO: "San Salvador, El Salvador",
      CONYUGE: "Aída Cañas",
      HIJOS: "Juan José Dalton",
      BIOGRAFIA: "Poeta y revolucionario salvadoreño. Mezcló poesía con compromiso político."
    },
    {
      ID_POETA: 14,
      NOMBRE_COMPLETO: "José Asunción Silva",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1865-11-27",
      LUGAR_NACIMIENTO: "Bogotá, Colombia",
      FECHA_FALLECIMIENTO: "1896-05-24",
      LUGAR_FALLECIMIENTO: "Bogotá, Colombia",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta colombiano precursor del modernismo. Su obra más famosa es 'Nocturno'."
    },
    {
      ID_POETA: 15,
      NOMBRE_COMPLETO: "Carlos Pellicer",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1897-01-16",
      LUGAR_NACIMIENTO: "Villahermosa, México",
      FECHA_FALLECIMIENTO: "1977-02-16",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta mexicano de gran lirismo, vinculado al movimiento estridentista."
    },
    {
      ID_POETA: 16,
      NOMBRE_COMPLETO: "Efraín Huerta",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1914-06-18",
      LUGAR_NACIMIENTO: "Silao, México",
      FECHA_FALLECIMIENTO: "1982-02-03",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: "Mireya Bravo",
      HIJOS: "David Huerta",
      BIOGRAFIA: "Poeta mexicano conocido por su poesía social, política y amorosa. Creador de los 'poemínimos'."
    },
    {
      ID_POETA: 17,
      NOMBRE_COMPLETO: "José Emilio Pacheco",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1939-06-30",
      LUGAR_NACIMIENTO: "Ciudad de México, México",
      FECHA_FALLECIMIENTO: "2014-01-26",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: "Cristina Pacheco",
      HIJOS: "Laura Emilia Pacheco",
      BIOGRAFIA: "Poeta, narrador y ensayista mexicano. Ganador del Premio Cervantes en 2009."
    },
    {
      ID_POETA: 18,
      NOMBRE_COMPLETO: "Álvaro Mutis",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1923-08-25",
      LUGAR_NACIMIENTO: "Bogotá, Colombia",
      FECHA_FALLECIMIENTO: "2013-09-22",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: "Carmen Miracle",
      HIJOS: "Santiago, María, Antonio",
      BIOGRAFIA: "Escritor y poeta colombiano. Creador del personaje Maqroll el Gaviero."
    },
    {
      ID_POETA: 19,
      NOMBRE_COMPLETO: "José Lezama Lima",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1910-12-19",
      LUGAR_NACIMIENTO: "La Habana, Cuba",
      FECHA_FALLECIMIENTO: "1976-08-09",
      LUGAR_FALLECIMIENTO: "La Habana, Cuba",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta, ensayista y novelista cubano. Autor de 'Paradiso'. Figura central del barroquismo literario cubano."
    },
    {
      ID_POETA: 20,
      NOMBRE_COMPLETO: "Juan Gelman",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1930-05-03",
      LUGAR_NACIMIENTO: "Buenos Aires, Argentina",
      FECHA_FALLECIMIENTO: "2014-01-14",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: "Mara La Madrid",
      HIJOS: "Marcelo Ariel Gelman",
      BIOGRAFIA: "Poeta argentino, reconocido con el Premio Cervantes en 2007. Escribió sobre el exilio, la pérdida y la memoria."
    },
    {
      ID_POETA: 21,
      NOMBRE_COMPLETO: "Gabriela Mistral",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1889-04-07",
      LUGAR_NACIMIENTO: "Vicuña, Chile",
      FECHA_FALLECIMIENTO: "1957-01-10",
      LUGAR_FALLECIMIENTO: "Hempstead, Nueva York, EE.UU.",
      CONYUGE: null,
      HIJOS: "Yin Yin (sobrino adoptado)",
      BIOGRAFIA: "Poeta chilena, primera mujer latinoamericana en ganar el Premio Nobel de Literatura (1945)."
    },
    {
      ID_POETA: 22,
      NOMBRE_COMPLETO: "Alfonsina Storni",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1892-05-29",
      LUGAR_NACIMIENTO: "Sala Capriasca, Suiza",
      FECHA_FALLECIMIENTO: "1938-10-25",
      LUGAR_FALLECIMIENTO: "Mar del Plata, Argentina",
      CONYUGE: null,
      HIJOS: "Alejandro",
      BIOGRAFIA: "Poeta feminista argentina-suiza. Reconocida por su lírica apasionada y crítica social."
    },
    {
      ID_POETA: 23,
      NOMBRE_COMPLETO: "Juana de Ibarbourou",
      PSEUDONIMO: "Juana de América",
      FECHA_NACIMIENTO: "1892-03-08",
      LUGAR_NACIMIENTO: "Melo, Uruguay",
      FECHA_FALLECIMIENTO: "1979-07-15",
      LUGAR_FALLECIMIENTO: "Montevideo, Uruguay",
      CONYUGE: "Lucas Ibarbourou",
      HIJOS: "Julio César",
      BIOGRAFIA: "Reconocida por su lírica sensual y vitalista. Fue nombrada 'Juana de América'."
    },
    {
      ID_POETA: 24,
      NOMBRE_COMPLETO: "Delmira Agustini",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1886-10-24",
      LUGAR_NACIMIENTO: "Montevideo, Uruguay",
      FECHA_FALLECIMIENTO: "1914-07-06",
      LUGAR_FALLECIMIENTO: "Montevideo, Uruguay",
      CONYUGE: "Enrique Job Reyes",
      HIJOS: null,
      BIOGRAFIA: "Pionera de la poesía erótica en Hispanoamérica. Fue asesinada por su exesposo."
    },
    {
      ID_POETA: 25,
      NOMBRE_COMPLETO: "Alejandra Pizarnik",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1936-04-29",
      LUGAR_NACIMIENTO: "Avellaneda, Argentina",
      FECHA_FALLECIMIENTO: "1972-09-25",
      LUGAR_FALLECIMIENTO: "Buenos Aires, Argentina",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta surrealista argentina. Su obra explora la angustia existencial y el lenguaje poético."
    },
    {
      ID_POETA: 26,
      NOMBRE_COMPLETO: "Sor Juana Inés de la Cruz",
      PSEUDONIMO: "La Décima Musa",
      FECHA_NACIMIENTO: "1648-11-12",
      LUGAR_NACIMIENTO: "San Miguel Nepantla, México",
      FECHA_FALLECIMIENTO: "1695-04-17",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Monja jerónima, poetisa y filósofa novohispana. Figura icónica del Siglo de Oro y defensora de los derechos de la mujer."
    },
    {
      ID_POETA: 27,
      NOMBRE_COMPLETO: "Idea Vilariño",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1920-08-18",
      LUGAR_NACIMIENTO: "Montevideo, Uruguay",
      FECHA_FALLECIMIENTO: "2009-04-28",
      LUGAR_FALLECIMIENTO: "Montevideo, Uruguay",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta uruguaya de la Generación del 45. Conocida por su poesía amorosa e íntima."
    },
    {
      ID_POETA: 28,
      NOMBRE_COMPLETO: "Blanca Varela",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1926-08-10",
      LUGAR_NACIMIENTO: "Lima, Perú",
      FECHA_FALLECIMIENTO: "2009-03-12",
      LUGAR_FALLECIMIENTO: "Lima, Perú",
      CONYUGE: "Fernando de Szyszlo",
      HIJOS: "Vicente de Szyszlo",
      BIOGRAFIA: "Importante poeta peruana, galardonada con el Premio Octavio Paz en 2007. Asociada al surrealismo."
    },
    {
      ID_POETA: 29,
      NOMBRE_COMPLETO: "Gioconda Belli",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1948-12-09",
      LUGAR_NACIMIENTO: "Managua, Nicaragua",
      FECHA_FALLECIMIENTO: null,
      LUGAR_FALLECIMIENTO: null,
      CONYUGE: "Charles Castaldi",
      HIJOS: "Camilo, María, Adriana, Javier",
      BIOGRAFIA: "Poeta y novelista nicaragüense. Militante sandinista. Defensora de los derechos de la mujer."
    },
    {
      ID_POETA: 30,
      NOMBRE_COMPLETO: "Rosario Castellanos",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1925-05-25",
      LUGAR_NACIMIENTO: "Ciudad de México, México",
      FECHA_FALLECIMIENTO: "1974-08-07",
      LUGAR_FALLECIMIENTO: "Tel Aviv, Israel",
      CONYUGE: "Ricardo Guerra Tejada",
      HIJOS: "Gabriel Guerra Castellanos",
      BIOGRAFIA: "Poeta, novelista y diplomática mexicana. Figura clave del feminismo latinoamericano."
    },
    {
      ID_POETA: 31,
      NOMBRE_COMPLETO: "Dulce María Loynaz",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1902-12-10",
      LUGAR_NACIMIENTO: "La Habana, Cuba",
      FECHA_FALLECIMIENTO: "1997-04-27",
      LUGAR_FALLECIMIENTO: "La Habana, Cuba",
      CONYUGE: "Pablo Álvarez de Cañas",
      HIJOS: null,
      BIOGRAFIA: "Poeta cubana ganadora del Premio Cervantes en 1992. Su obra mezcla lirismo y clasicismo."
    },
    {
      ID_POETA: 32,
      NOMBRE_COMPLETO: "Claribel Alegría",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1924-05-12",
      LUGAR_NACIMIENTO: "Estelí, Nicaragua",
      FECHA_FALLECIMIENTO: "2018-01-25",
      LUGAR_FALLECIMIENTO: "Managua, Nicaragua",
      CONYUGE: "Darwin J. Flakoll",
      HIJOS: "Cuatro",
      BIOGRAFIA: "Poeta y narradora nicaragüense-salvadoreña. Ganadora del Premio Reina Sofía 2017."
    },
    {
      ID_POETA: 33,
      NOMBRE_COMPLETO: "Cristina Peri Rossi",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1941-11-12",
      LUGAR_NACIMIENTO: "Montevideo, Uruguay",
      FECHA_FALLECIMIENTO: null,
      LUGAR_FALLECIMIENTO: null,
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta, narradora y ensayista uruguaya. Premio Cervantes 2021. Exiliada en España desde los años 70."
    },
    {
      ID_POETA: 34,
      NOMBRE_COMPLETO: "María Mercedes Carranza",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1945-05-24",
      LUGAR_NACIMIENTO: "Bogotá, Colombia",
      FECHA_FALLECIMIENTO: "2003-07-11",
      LUGAR_FALLECIMIENTO: "Bogotá, Colombia",
      CONYUGE: "Fernando Garavito",
      HIJOS: null,
      BIOGRAFIA: "Poeta y periodista colombiana, comprometida con la denuncia política y social en su obra."
    },
    {
      ID_POETA: 35,
      NOMBRE_COMPLETO: "Eunice Odio",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1919-10-18",
      LUGAR_NACIMIENTO: "San José, Costa Rica",
      FECHA_FALLECIMIENTO: "1974-03-23",
      LUGAR_FALLECIMIENTO: "Ciudad de México, México",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta costarricense, una de las voces más singulares de la poesía hispanoamericana del siglo XX."
    },
    {
      ID_POETA: 36,
      NOMBRE_COMPLETO: "Carmen Boullosa",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1954-09-04",
      LUGAR_NACIMIENTO: "Ciudad de México, México",
      FECHA_FALLECIMIENTO: null,
      LUGAR_FALLECIMIENTO: null,
      CONYUGE: "Mike Wallace",
      HIJOS: null,
      BIOGRAFIA: "Poeta, novelista y dramaturga mexicana. Reconocida por su obra feminista e innovadora."
    },
    {
      ID_POETA: 37,
      NOMBRE_COMPLETO: "Piedad Bonnett",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1951-01-01",
      LUGAR_NACIMIENTO: "Amalfi, Colombia",
      FECHA_FALLECIMIENTO: null,
      LUGAR_FALLECIMIENTO: null,
      CONYUGE: null,
      HIJOS: "Daniel Segura Bonnett",
      BIOGRAFIA: "Poeta, novelista y dramaturga colombiana. Su obra aborda el dolor, la pérdida y la introspección."
    },
    {
      ID_POETA: 38,
      NOMBRE_COMPLETO: "Ida Vitale",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1923-11-02",
      LUGAR_NACIMIENTO: "Montevideo, Uruguay",
      FECHA_FALLECIMIENTO: null,
      LUGAR_FALLECIMIENTO: null,
      CONYUGE: "Enrique Fierro",
      HIJOS: null,
      BIOGRAFIA: "Poeta, traductora y ensayista uruguaya. Premio Cervantes 2018. Miembro de la Generación del 45."
    },
    {
      ID_POETA: 39,
      NOMBRE_COMPLETO: "Circe Maia",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1932-06-29",
      LUGAR_NACIMIENTO: "Montevideo, Uruguay",
      FECHA_FALLECIMIENTO: null,
      LUGAR_FALLECIMIENTO: null,
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta y traductora uruguaya. Su obra es conocida por su claridad, reflexión filosófica y compromiso ético."
    },
    {
      ID_POETA: 40,
      NOMBRE_COMPLETO: "Susana Thénon",
      PSEUDONIMO: null,
      FECHA_NACIMIENTO: "1935-10-18",
      LUGAR_NACIMIENTO: "Buenos Aires, Argentina",
      FECHA_FALLECIMIENTO: "1991-05-05",
      LUGAR_FALLECIMIENTO: "Buenos Aires, Argentina",
      CONYUGE: null,
      HIJOS: null,
      BIOGRAFIA: "Poeta vanguardista argentina. Asociada al grupo de la revista 'Xul'. Su estilo transgresor y visual es único."
    }
    
      // ... otros 39 poetas con la misma estructura
    ]};
// Mapear la base de datos a la estructura (sin libros)
const poetas = database.poetas.map((poeta) => ({
  id: poeta.ID_POETA.toString(),
  nombre: poeta.NOMBRE_COMPLETO,
  biografia: poeta.BIOGRAFIA,
  // La propiedad 'libros' ha sido eliminada.
}));

// Funciones para la búsqueda
function buscarPoeta() {
  const inputBusqueda = document
    .getElementById("busqueda")
    .value.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const nombreBuscado = inputBusqueda.trim();
  const tarjetasPoetas = document.querySelectorAll(".poeta-card");
  let encontrado = false;

  tarjetasPoetas.forEach((card) => {
    const nombrePoeta = card
      .querySelector("h3")
      .textContent.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Se corrigió la expresión regular
    const nombreNormalizado = nombrePoeta;

    card.style.display = "block";
    card.classList.remove("poeta-resaltado");

    if (nombreNormalizado.includes(nombreBuscado) && nombreBuscado !== "") {
      card.classList.add("poeta-resaltado");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      encontrado = true;
    }
  });

  if (!encontrado && nombreBuscado !== "") {
    alert("Poeta no encontrado.");
  }
}

// Función para cerrar el recuadro estático (se mantiene global)
function cerrarPerfil() {
  const perfilModal = document.getElementById("perfil-modal");
  if (perfilModal) {
    perfilModal.style.display = "none";
  }
}

// Función para generar la biografía con Gemini (llama al backend)
async function generateBiography(poetName) {
  try {
    const response = await fetch('http://localhost:3000/generate-biography', { // URL de tu backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ poetName: poetName }), // Envía el nombre del poeta
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error del servidor: ${response.status} - ${errorData.error || 'Mensaje desconocido'}`);
    }

    const data = await response.json();
    return data.biography; // Devuelve la biografía recibida del backend
  } catch (error) {
    console.error("Error al generar la biografía con IA (problema de conexión/backend):", error);
    return "No se pudo generar la biografía con IA en este momento. Asegúrate de que el servidor backend esté corriendo y sea accesible.";
  }
}

// Función para mostrar el perfil con biografía generada por IA en el modal (SIN LIBROS)
async function verPerfil(poetaNombre) {
  // Encuentra el poeta para obtener su ID e imagen
  const poetaData = poetas.find(p => p.nombre === poetaNombre);
  if (!poetaData) {
      console.error("Poeta no encontrado:", poetaNombre);
      return; // Salir si el poeta no se encuentra
  }

  const poetaId = poetaData.id;
  const imagenPoeta = `../static/images/poeta ${poetaId}.jpg`;

  let biografiaGenerada = "Cargando biografía..."; // Mensaje inicial
  
  // Crear o seleccionar el recuadro estático (modal)
  let perfilModal = document.getElementById("perfil-modal");
  if (!perfilModal) {
    perfilModal = document.createElement("div");
    perfilModal.id = "perfil-modal";
    perfilModal.classList.add("perfil-modal");
    document.body.appendChild(perfilModal);
  }

  // Contenido del modal solo con la biografía (sin sección de libros)
  perfilModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="cerrarPerfil()">&times;</span>
            <img id="modal-poeta-imagen" src="${imagenPoeta}" alt="Imagen de ${poetaNombre}" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin-bottom: 20px;">
            <h2>${poetaNombre}</h2>


            <div id="biografia-section" class="modal-section active"> <p id="biografia-content">${biografiaGenerada}</p>
                <div id="loading-spinner" style="text-align: center; margin-top: 20px;">
                    <i class="fas fa-spinner fa-spin fa-2x" style="color: var(--primary-color);"></i>
                    <p style="font-size: 0.9em; color: var(--text-light);">Generando biografía con IA (esto puede tardar unos segundos)...</p>
                </div>
            </div>

            </div>
    `;
  
  perfilModal.style.display = "flex"; // Muestra el modal

  // Añadir event listeners a los botones de navegación del modal
  // (Aunque solo quede 'Biografía', la lógica se mantiene por si se añaden más secciones en el futuro)
  const modalNavButtons = perfilModal.querySelectorAll('.modal-nav-btn');
  modalNavButtons.forEach(button => {
      button.addEventListener('click', function() {
          const targetId = this.dataset.target; // 'biografia-section'
          mostrarSeccionModal(targetId);
      });
  });
  
  // Si la biografía se genera asincrónicamente, la cargamos después
  try {
    const generatedContent = await generateBiography(poetaNombre);
    biografiaGenerada = generatedContent;
  } catch (error) {
    console.error("Error al obtener biografía desde la API (generateBiography):", error);
    biografiaGenerada = "No se pudo generar la biografía en este momento debido a un error. Verifica la consola del backend para más detalles.";
  } finally {
    // Actualizar el contenido de la biografía y ocultar el spinner
    const biografiaContentElement = perfilModal.querySelector("#biografia-content");
    const loadingSpinnerElement = perfilModal.querySelector("#loading-spinner");

    if (biografiaContentElement) {
      biografiaContentElement.textContent = biografiaGenerada;
    }
    if (loadingSpinnerElement) {
      loadingSpinnerElement.style.display = "none";
    }
  }
}

// Función para alternar entre secciones del modal
// (Solo quedará 'biografia-section' por ahora, pero la función es genérica)
function mostrarSeccionModal(sectionId) {
    const modalContent = document.querySelector('.modal-content');
    const sections = modalContent.querySelectorAll('.modal-section');
    const navButtons = modalContent.querySelectorAll('.modal-nav-btn');

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    navButtons.forEach(button => {
        if (button.dataset.target === sectionId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}


// Lógica que se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Generar dinámicamente las tarjetas de poetas en index.html
  const poetasContainer = document.getElementById("poetas-container");
  if (poetasContainer) {
    poetas.forEach((poeta) => {
      const card = document.createElement("div");
      card.classList.add("poeta-card");
      card.innerHTML = `
                <img src="../static/images/poeta ${poeta.id}.jpg" alt="${poeta.nombre}">
                <h3>${poeta.nombre}</h3>
                <p>${poeta.biografia.substring(0, 100)}...</p>
                <button class="ver-perfil-btn" data-poeta-nombre="${poeta.nombre}">Ver perfil</button>
            `;
      poetasContainer.appendChild(card);
    });

    // ** Importante: Añadir EventListener a los botones "Ver perfil" después de que se crean **
    const verPerfilButtons = document.querySelectorAll('.ver-perfil-btn');
    verPerfilButtons.forEach(button => {
        button.addEventListener('click', function() {
            const poetaNombre = this.dataset.poetaNombre;
            verPerfil(poetaNombre); // Llama a la función verPerfil del modal
        });
    });


    // Actualizar las estadísticas (sin total-libros)
    document.getElementById("total-poetas").textContent = poetas.length;
   
  }
});

// window.onload ya no necesita lógica especial, solo para depuración
window.onload = function() {
    console.log("Página completamente cargada.");
};


// Hacer las funciones globales para que puedan ser llamadas desde el HTML (solo para asegurar)
window.buscarPoeta = buscarPoeta;
window.cerrarPerfil = cerrarPerfil;
window.mostrarSeccionModal = mostrarSeccionModal;
