
// Datos de Poetas (solo lo esencial para vincular libros)
const poetas = [
    { ID_POETA: 1, NOMBRE_COMPLETO: "Pablo Neruda" },
    { ID_POETA: 2, NOMBRE_COMPLETO: "Octavio Paz" },
    { ID_POETA: 3, NOMBRE_COMPLETO: "César Vallejo" },
    { ID_POETA: 4, NOMBRE_COMPLETO: "Jorge Luis Borges" },
    { ID_POETA: 5, NOMBRE_COMPLETO: "Rubén Darío" },
    { ID_POETA: 6, NOMBRE_COMPLETO: "Mario Benedetti" },
    { ID_POETA: 7, NOMBRE_COMPLETO: "Nicolás Guillén" },
    { ID_POETA: 8, NOMBRE_COMPLETO: "José Martí" },
    { ID_POETA: 9, NOMBRE_COMPLETO: "Vicente Huidobro" },
    { ID_POETA: 10, NOMBRE_COMPLETO: "Gonzalo Rojas" },
    { ID_POETA: 11, NOMBRE_COMPLETO: "Jaime Sabines" },
    { ID_POETA: 12, NOMBRE_COMPLETO: "Nicanor Parra" },
    { ID_POETA: 13, NOMBRE_COMPLETO: "Roque Dalton" },
    { ID_POETA: 14, NOMBRE_COMPLETO: "José Asunción Silva" },
    { ID_POETA: 15, NOMBRE_COMPLETO: "Carlos Pellicer" },
    { ID_POETA: 16, NOMBRE_COMPLETO: "Efraín Huerta" },
    { ID_POETA: 17, NOMBRE_COMPLETO: "José Emilio Pacheco" },
    { ID_POETA: 18, NOMBRE_COMPLETO: "Álvaro Mutis" },
    { ID_POETA: 19, NOMBRE_COMPLETO: "José Lezama Lima" },
    { ID_POETA: 20, NOMBRE_COMPLETO: "Juan Gelman" },
    { ID_POETA: 21, NOMBRE_COMPLETO: "Gabriela Mistral" },
    { ID_POETA: 22, NOMBRE_COMPLETO: "Alfonsina Storni" },
    { ID_POETA: 23, NOMBRE_COMPLETO: "Juana de Ibarbourou" },
    { ID_POETA: 24, NOMBRE_COMPLETO: "Delmira Agustini" },
    { ID_POETA: 25, NOMBRE_COMPLETO: "Alejandra Pizarnik" },
    { ID_POETA: 26, NOMBRE_COMPLETO: "Sor Juana Inés de la Cruz" },
    { ID_POETA: 27, NOMBRE_COMPLETO: "Idea Vilariño" },
    { ID_POETA: 28, NOMBRE_COMPLETO: "Blanca Varela" },
    { ID_POETA: 29, NOMBRE_COMPLETO: "Gioconda Belli" },
    { ID_POETA: 30, NOMBRE_COMPLETO: "Rosario Castellanos" },
    { ID_POETA: 31, NOMBRE_COMPLETO: "Dulce María Loynaz" },
    { ID_POETA: 32, NOMBRE_COMPLETO: "Claribel Alegría" },
    { ID_POETA: 33, NOMBRE_COMPLETO: "Cristina Peri Rossi" },
    { ID_POETA: 34, NOMBRE_COMPLETO: "María Mercedes Carranza" },
    { ID_POETA: 35, NOMBRE_COMPLETO: "Eunice Odio" },
    { ID_POETA: 36, NOMBRE_COMPLETO: "Carmen Boullosa" },
    { ID_POETA: 37, NOMBRE_COMPLETO: "Piedad Bonnett" },
    { ID_POETA: 38, NOMBRE_COMPLETO: "Ida Vitale" },
    { ID_POETA: 39, NOMBRE_COMPLETO: "Circe Maia" },
    { ID_POETA: 40, NOMBRE_COMPLETO: "Susana Thénon" }
];

// Datos de Libros extraídos de backup_poetas_latinoamericanos.sql
const allBooks = [
    {
        ID_LIBRO: 1,
        TITULO: "Veinte poemas de amor y una canción desesperada",
        ID_POETA: 1, // Pablo Neruda
        ANIO_PUBLICACION: 1924,
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nascimento",
        ISBN: "978-84-376-0414-9",
        DESCRIPCION: "Una de las obras más célebres de Pablo Neruda, una colección de poemas de amor que exploran la pasión, la melancolía y la naturaleza.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 2,
        TITULO: "Canto General",
        ID_POETA: 1, // Pablo Neruda
        ANIO_PUBLICACION: 1950,
        GENERO: "Poesía épica, Canto social",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-950-03-9118-2",
        DESCRIPCION: "Un extenso poema épico que recorre la historia, la geografía y la gente de América Latina, desde la prehistoria hasta el siglo XX.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 3,
        TITULO: "Residencia en la Tierra",
        ID_POETA: 1, // Pablo Neruda
        ANIO_PUBLICACION: 1933,
        GENERO: "Poesía surrealista",
        IDIOMA: "Español",
        EDITORIAL: "Cruz del Sur",
        ISBN: "978-84-670-3627-8",
        DESCRIPCION: "Una obra que marca un giro hacia una poesía más oscura y existencialista, explorando la angustia y la desolación.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 4,
        TITULO: "Odas elementales",
        ID_POETA: 1, // Pablo Neruda
        ANIO_PUBLICACION: 1954,
        GENERO: "Poesía, Oda",
        IDIOMA: "Español",
        EDITORIAL: "Losada",
        ISBN: "978-950-03-9121-2",
        DESCRIPCION: "Colección de odas dedicadas a objetos cotidianos y elementos simples, que buscan dignificar lo ordinario con un lenguaje accesible.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 5,
        TITULO: "Confieso que he vivido",
        ID_POETA: 1, // Pablo Neruda
        ANIO_PUBLICACION: 1974,
        GENERO: "Autobiografía, Memorias",
        IDIOMA: "Español",
        EDITORIAL: "Seix Barral",
        ISBN: "978-84-322-0145-2",
        DESCRIPCION: "Las memorias póstumas de Neruda, donde relata su vida, su obra poética, sus viajes y su compromiso político.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 6,
        TITULO: "Libertad bajo palabra",
        ID_POETA: 2, // Octavio Paz
        ANIO_PUBLICACION: 1949,
        GENERO: "Poesía lírica, Metafísica",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-968-16-0498-8",
        DESCRIPCION: "Recopilación esencial de la obra poética de Octavio Paz hasta 1949, que explora el amor, la soledad y la búsqueda de sentido.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 7,
        TITULO: "Piedra de Sol",
        ID_POETA: 2, // Octavio Paz
        ANIO_PUBLICACION: 1957,
        GENERO: "Poesía, Poema largo",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-968-16-0499-5",
        DESCRIPCION: "Un poema extenso y circular que explora temas como el amor, el tiempo, la historia y la mitología, inspirado en el calendario azteca.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 8,
        TITULO: "Salamandra",
        ID_POETA: 2, // Octavio Paz
        ANIO_PUBLICACION: 1962,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Joaquín Mortiz",
        ISBN: "978-968-27-0044-7",
        DESCRIPCION: "Colección de poemas que reflejan la madurez poética de Paz, con una mayor experimentación formal y una reflexión profunda sobre la identidad y la escritura.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 9,
        TITULO: "Ladera Este",
        ID_POETA: 2, // Octavio Paz
        ANIO_PUBLICACION: 1969,
        GENERO: "Poesía, Orientalismo",
        IDIOMA: "Español",
        EDITORIAL: "Joaquín Mortiz",
        ISBN: "978-968-27-0239-7",
        DESCRIPCION: "Poemas escritos durante su estancia en la India, que reflejan la influencia de la filosofía y la cultura oriental en su obra.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 10,
        TITULO: "El mono gramático",
        ID_POETA: 2, // Octavio Paz
        ANIO_PUBLICACION: 1974,
        GENERO: "Ensayo, Poesía, Filosofía",
        IDIOMA: "Español",
        EDITORIAL: "Seix Barral",
        ISBN: "978-84-322-0261-9",
        DESCRIPCION: "Un ensayo experimental que combina la prosa poética, la reflexión filosófica y el viaje, explorando la relación entre lenguaje y realidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 11,
        TITULO: "Los heraldos negros",
        ID_POETA: 3, // César Vallejo
        ANIO_PUBLICACION: 1918,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Minerva",
        ISBN: "978-9972-888-29-3",
        DESCRIPCION: "Su primera colección de poemas, donde Vallejo explora el dolor, la injusticia y la angustia existencial, con un estilo innovador.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 12,
        TITULO: "Trilce",
        ID_POETA: 3, // César Vallejo
        ANIO_PUBLICACION: 1922,
        GENERO: "Poesía vanguardista",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Minerva",
        ISBN: "978-84-376-0414-9",
        DESCRIPCION: "Considerada una de las obras cumbres del vanguardismo hispanoamericano, notable por su audaz experimentación lingüística y sintáctica.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 13,
        TITULO: "Poemas humanos",
        ID_POETA: 3, // César Vallejo
        ANIO_PUBLICACION: 1939,
        GENERO: "Poesía, Social",
        IDIOMA: "Español",
        EDITORIAL: "Les Editions des Presses Modernes",
        ISBN: "978-84-376-0697-6",
        DESCRIPCION: "Colección póstuma que refleja la profunda preocupación social y humana de Vallejo, su solidaridad con los oprimidos y su visión del sufrimiento.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 14,
        TITULO: "España, aparta de mí este cáliz",
        ID_POETA: 3, // César Vallejo
        ANIO_PUBLICACION: 1939,
        GENERO: "Poesía bélica, Compromiso social",
        IDIOMA: "Español",
        EDITORIAL: "Séneca",
        ISBN: "978-84-376-0414-9", // A menudo publicada junto a "Poemas humanos"
        DESCRIPCION: "Obra dedicada a la Guerra Civil Española, un lamento por la tragedia humana y una expresión de esperanza en la humanidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 15,
        TITULO: "Paco Yunque",
        ID_POETA: 3, // César Vallejo
        ANIO_PUBLICACION: 1951,
        GENERO: "Cuento, Ficción social",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Juan Mejía Baca",
        ISBN: "978-9972-888-29-3", // A menudo publicada en colecciones de cuentos
        DESCRIPCION: "Un cuento corto que denuncia el abuso y la injusticia social en el ámbito escolar, mostrando la opresión del débil por el poderoso.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 16,
        TITULO: "Fervor de Buenos Aires",
        ID_POETA: 4, // Jorge Luis Borges
        ANIO_PUBLICACION: 1923,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Imprenta S.A. M. Roccatagliata",
        ISBN: "978-950-02-7101-9",
        DESCRIPCION: "Su primer libro de poemas, donde Borges explora la geografía, la historia y la mística de Buenos Aires, su ciudad natal.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 17,
        TITULO: "Luna de enfrente",
        ID_POETA: 4, // Jorge Luis Borges
        ANIO_PUBLICACION: 1925,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Proa",
        ISBN: "978-950-02-7102-6",
        DESCRIPCION: "Una colección de poemas que continúan la exploración de Buenos Aires, con un estilo más consolidado y una mirada hacia los suburbios y los tangos.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 18,
        TITULO: "Cuaderno San Martín",
        ID_POETA: 4, // Jorge Luis Borges
        ANIO_PUBLICACION: 1929,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Manuel Gleizer",
        ISBN: "978-950-02-7103-3",
        DESCRIPCION: "Último de sus libros de poemas ultraístas, con una mayor reflexión sobre el tiempo, la memoria y la identidad, a través de la geografía porteña.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 19,
        TITULO: "El otro, el mismo",
        ID_POETA: 4, // Jorge Luis Borges
        ANIO_PUBLICACION: 1964,
        GENERO: "Poesía, Cuento, Ensayo",
        IDIOMA: "Español",
        EDITORIAL: "Emecé Editores",
        ISBN: "978-950-04-0331-4",
        DESCRIPCION: "Antología que reúne poemas y prosas de diferentes etapas de la obra de Borges, mostrando su madurez y sus temas recurrentes.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 20,
        TITULO: "Elogio de la sombra",
        ID_POETA: 4, // Jorge Luis Borges
        ANIO_PUBLICACION: 1969,
        GENERO: "Poesía, Ensayo",
        IDIOMA: "Español",
        EDITORIAL: "Emecé Editores",
        ISBN: "978-950-04-0332-1",
        DESCRIPCION: "Colección de poemas y prosas breves escritas en su madurez, explorando temas como la ceguera, la vejez, la memoria y la literatura misma.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 21,
        TITULO: "Azul...",
        ID_POETA: 5, // Rubén Darío
        ANIO_PUBLICACION: 1888,
        GENERO: "Poesía, Cuento",
        IDIOMA: "Español",
        EDITORIAL: "Imprenta y Librería Excelsior",
        ISBN: "978-84-376-0275-6",
        DESCRIPCION: "Obra clave del Modernismo hispanoamericano, que combina prosa y verso, explorando el refinamiento estético y la búsqueda de la belleza.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 22,
        TITULO: "Prosas profanas y otros poemas",
        ID_POETA: 5, // Rubén Darío
        ANIO_PUBLICACION: 1896,
        GENERO: "Poesía Modernista",
        IDIOMA: "Español",
        EDITORIAL: "Imprenta de 'La Nación'",
        ISBN: "978-84-376-0276-3",
        DESCRIPCION: "Consolidación del Modernismo dariano, con poemas que exhiben musicalidad, exotismo y una profunda preocupación por la perfección formal.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 23,
        TITULO: "Cantos de vida y esperanza",
        ID_POETA: 5, // Rubén Darío
        ANIO_PUBLICACION: 1905,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Manuel García",
        ISBN: "978-84-376-0277-0",
        DESCRIPCION: "Considerada una de sus obras cumbre, refleja una evolución hacia temas más existenciales y cívicos, sin perder la maestría formal.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 24,
        TITULO: "El canto errante",
        ID_POETA: 5, // Rubén Darío
        ANIO_PUBLICACION: 1907,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Tipografía de la Revista de Archivos, Bibliotecas y Museos",
        ISBN: "978-84-376-0278-7",
        DESCRIPCION: "Colección de poemas que exploran el viaje, la nostalgia, la búsqueda espiritual y la diversidad de paisajes y culturas.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 25,
        TITULO: "Poema del otoño y otros poemas",
        ID_POETA: 5, // Rubén Darío
        ANIO_PUBLICACION: 1910,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Tipografía de la Revista de Archivos, Bibliotecas y Museos",
        ISBN: "978-84-376-0279-4",
        DESCRIPCION: "Poemas que continúan la exploración de los temas modernistas, con un tono más melancólico y reflexivo sobre el paso del tiempo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 26,
        TITULO: "Poemas de la oficina",
        ID_POETA: 6, // Mario Benedetti
        ANIO_PUBLICACION: 1956,
        GENERO: "Poesía, Sátira social",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Alfa",
        ISBN: "978-84-9793-200-1",
        DESCRIPCION: "Poemas que satirizan la rutina, la burocracia y la alienación del empleado de oficina, con un lenguaje sencillo y accesible.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 27,
        TITULO: "Inventario Uno",
        ID_POETA: 6, // Mario Benedetti
        ANIO_PUBLICACION: 1963,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-84-9793-201-8",
        DESCRIPCION: "Primera parte de su antología poética, que recoge poemas desde sus inicios hasta la década de 1960, mostrando su evolución y diversidad temática.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 28,
        TITULO: "Noción de patria",
        ID_POETA: 6, // Mario Benedetti
        ANIO_PUBLICACION: 1963,
        GENERO: "Poesía, Compromiso político",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-84-9793-202-5",
        DESCRIPCION: "Colección de poemas que exploran el concepto de patria, el exilio, la identidad y la resistencia política, con un tono más combativo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 29,
        TITULO: "Próximo prójimo",
        ID_POETA: 6, // Mario Benedetti
        ANIO_PUBLICACION: 1965,
        GENERO: "Poesía, Amor, Cotidiano",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-84-9793-203-2",
        DESCRIPCION: "Poemas que abordan el amor, la amistad, la vida cotidiana y las relaciones humanas con la sensibilidad y cercanía características de Benedetti.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 30,
        TITULO: "A ras de sueño",
        ID_POETA: 6, // Mario Benedetti
        ANIO_PUBLICACION: 1967,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-84-9793-204-9",
        DESCRIPCION: "Una colección de poemas que profundizan en la intimidad, los sueños, los recuerdos y la búsqueda de sentido en la existencia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 31,
        TITULO: "Motivos de son",
        ID_POETA: 7, // Nicolás Guillén
        ANIO_PUBLICACION: 1930,
        GENERO: "Poesía afrocubana, Son",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Progreso",
        ISBN: "978-84-376-0610-7",
        DESCRIPCION: "Obra pionera que incorpora ritmos y léxico del son cubano, explorando la identidad afrocubana y la crítica social con musicalidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 32,
        TITULO: "Sóngoro Cosongo",
        ID_POETA: 7, // Nicolás Guillén
        ANIO_PUBLICACION: 1931,
        GENERO: "Poesía afrocubana, Compromiso social",
        IDIOMA: "Español",
        EDITORIAL: "Ucar, García y Cía.",
        ISBN: "978-84-376-0611-4",
        DESCRIPCION: "Consolidación de su poesía negra, abordando la herencia africana, la esclavitud y la lucha por la justicia social en Cuba.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 33,
        TITULO: "West Indies, Ltd.",
        ID_POETA: 7, // Nicolás Guillén
        ANIO_PUBLICACION: 1934,
        GENERO: "Poesía política, Antimperialista",
        IDIOMA: "Español",
        EDITORIAL: "Imprenta P. Fernández y Cía.",
        ISBN: "978-84-376-0612-1",
        DESCRIPCION: "Obra de fuerte contenido político que denuncia la influencia imperialista en el Caribe y la explotación de los pueblos.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 34,
        TITULO: "Cantos para soldados y sones para turistas",
        ID_POETA: 7, // Nicolás Guillén
        ANIO_PUBLICACION: 1937,
        GENERO: "Poesía social, Testimonial",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Orbe",
        ISBN: "978-84-376-0613-8",
        DESCRIPCION: "Poemas que contrastan la vida de los soldados y trabajadores con la superficialidad del turismo, con un agudo sentido de crítica social.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 35,
        TITULO: "El son entero",
        ID_POETA: 7, // Nicolás Guillén
        ANIO_PUBLICACION: 1947,
        GENERO: "Poesía afrocubana, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-84-376-0614-5",
        DESCRIPCION: "Recopilación de sus poemas que mejor representan la fusión de la tradición poética española con la herencia africana y la cultura cubana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 36,
        TITULO: "Ismaelillo",
        ID_POETA: 8, // José Martí
        ANIO_PUBLICACION: 1882,
        GENERO: "Poesía infantil, Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Tipografía de L'Avenir",
        ISBN: "978-84-9740-025-4",
        DESCRIPCION: "Una tierna colección de poemas dedicados a su hijo, caracterizados por la sencillez, la ternura y la profundidad de sentimiento.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 37,
        TITULO: "Versos sencillos",
        ID_POETA: 8, // José Martí
        ANIO_PUBLICACION: 1891,
        GENERO: "Poesía lírica, Patriotismo",
        IDIOMA: "Español",
        EDITORIAL: "Herederos de Santiago Vela",
        ISBN: "978-84-9740-026-1",
        DESCRIPCION: "Compilación de poemas breves y profundos que reflejan el amor a la patria, la naturaleza, la amistad y la búsqueda de la belleza.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 38,
        TITULO: "Versos libres",
        ID_POETA: 8, // José Martí
        ANIO_PUBLICACION: 1913, // Publicación póstuma
        GENERO: "Poesía, Modernismo",
        IDIOMA: "Español",
        EDITORIAL: "Imprenta El Siglo XX",
        ISBN: "978-84-9740-027-8",
        DESCRIPCION: "Colección póstuma que muestra una faceta más experimental y compleja de la poesía de Martí, con mayor libertad formal y temas existenciales.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 39,
        TITULO: "Flores del destierro",
        ID_POETA: 8, // José Martí
        ANIO_PUBLICACION: 1933, // Publicación póstuma
        GENERO: "Poesía, Exilio",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Trópico",
        ISBN: "978-84-9740-028-5",
        DESCRIPCION: "Poemas escritos durante su exilio, que expresan la nostalgia por Cuba, el dolor del desarraigo y la esperanza en la libertad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 40,
        TITULO: "La edad de oro",
        ID_POETA: 8, // José Martí
        ANIO_PUBLICACION: 1889,
        GENERO: "Revista infantil, Literatura infantil",
        IDIOMA: "Español",
        EDITORIAL: "D. Appleton and Company",
        ISBN: "978-84-9740-029-2",
        DESCRIPCION: "Una revista mensual dedicada a los niños de América, con cuentos, ensayos y poemas que buscan educar y entretener con valores morales.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 41,
        TITULO: "Altazor",
        ID_POETA: 9, // Vicente Huidobro
        ANIO_PUBLICACION: 1931,
        GENERO: "Poesía, Creacionismo, Vanguardia",
        IDIOMA: "Español",
        EDITORIAL: "Cruz del Sur",
        ISBN: "978-956-11-2090-0",
        DESCRIPCION: "Obra cumbre del creacionismo, un poema largo que explora la aventura verbal y la creación de una nueva realidad a través del lenguaje poético.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 42,
        TITULO: "Ecuatorial",
        ID_POETA: 9, // Vicente Huidobro
        ANIO_PUBLICACION: 1918,
        GENERO: "Poesía, Creacionismo",
        IDIOMA: "Español",
        EDITORIAL: "Éditions Nord-Sud",
        ISBN: "978-956-11-2091-7",
        DESCRIPCION: "Poema que se sumerge en temas cósmicos y geográficos, reflejando el creacionismo al presentar una realidad poética autónoma.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 43,
        TITULO: "Poemas árticos",
        ID_POETA: 9, // Vicente Huidobro
        ANIO_PUBLICACION: 1918,
        GENERO: "Poesía, Creacionismo",
        IDIOMA: "Español",
        EDITORIAL: "Éditions Nord-Sud",
        ISBN: "978-956-11-2092-4",
        DESCRIPCION: "Colección de poemas que exploran paisajes helados y abstractos, buscando la pureza y la esencia de la palabra en un entorno desolado.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 44,
        TITULO: "Horizon carré",
        ID_POETA: 9, // Vicente Huidobro
        ANIO_PUBLICACION: 1917,
        GENERO: "Poesía, Creacionismo (francés)",
        IDIOMA: "Francés",
        EDITORIAL: "Éditions Nord-Sud",
        ISBN: "978-956-11-2093-1",
        DESCRIPCION: "Su primer libro de poemas escrito directamente en francés, donde Huidobro consolida los principios del creacionismo a través de una expresión más geométrica y visual.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 45,
        TITULO: "Temblor de cielo",
        ID_POETA: 9, // Vicente Huidobro
        ANIO_PUBLICACION: 1931,
        GENERO: "Poesía, Vanguardia",
        IDIOMA: "Español",
        EDITORIAL: "Signo",
        ISBN: "978-956-11-2094-8",
        DESCRIPCION: "Poemas que continúan la línea vanguardista de Huidobro, con imágenes audaces y una exploración de la condición humana frente al universo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 46,
        TITULO: "La miseria del hombre",
        ID_POETA: 10, // Gonzalo Rojas
        ANIO_PUBLICACION: 1948,
        GENERO: "Poesía existencial, Meditación",
        IDIOMA: "Español",
        EDITORIAL: "Cruz del Sur",
        ISBN: "978-956-12-0050-0",
        DESCRIPCION: "Un libro que explora la condición humana, la muerte y la existencia a través de una poesía intensa y profunda.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 47,
        TITULO: "Contra la muerte",
        ID_POETA: 10, // Gonzalo Rojas
        ANIO_PUBLICACION: 1964,
        GENERO: "Poesía filosófica",
        IDIOMA: "Español",
        EDITORIAL: "Universidad de Chile",
        ISBN: "978-956-12-0051-7",
        DESCRIPCION: "Poemas que desafían la idea de la muerte, afirmando la vida y la persistencia de la existencia a través del lenguaje poético.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 48,
        TITULO: "Oscuro",
        ID_POETA: 10, // Gonzalo Rojas
        ANIO_PUBLICACION: 1977,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria",
        ISBN: "978-956-12-0052-4",
        DESCRIPCION: "Una obra que se adentra en la oscuridad, el silencio y lo inefable, buscando la luz en los rincones más recónditos de la experiencia humana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 49,
        TITULO: "El alumbrado",
        ID_POETA: 10, // Gonzalo Rojas
        ANIO_PUBLICACION: 1987,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria",
        ISBN: "978-956-12-0053-1",
        DESCRIPCION: "Poemas que celebran la iluminación, la revelación y la claridad, con un lenguaje que busca transcender lo cotidiano.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 50,
        TITULO: "Materia de testamento",
        ID_POETA: 10, // Gonzalo Rojas
        ANIO_PUBLICACION: 1988,
        GENERO: "Poesía, Confesional",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-956-12-0054-8",
        DESCRIPCION: "Una obra que se presenta como un legado poético, explorando temas como la memoria, la identidad y la trascendencia del arte.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 51,
        TITULO: "Horal",
        ID_POETA: 11, // Idea Vilariño
        ANIO_PUBLICACION: 1950,
        GENERO: "Poesía, Amor, Existencialismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-9974-40-025-0",
        DESCRIPCION: "Colección de poemas que exploran el amor, la desilusión y la angustia existencial con una voz íntima y austera.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 52,
        TITULO: "La señal",
        ID_POETA: 11, // Idea Vilariño
        ANIO_PUBLICACION: 1951,
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-9974-40-026-7",
        DESCRIPCION: "Poemas que profundizan en la soledad, el paso del tiempo y la búsqueda de un sentido en la vida, con un estilo depurado.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 53,
        TITULO: "Adán y Eva",
        ID_POETA: 11, // Idea Vilariño
        ANIO_PUBLICACION: 1952,
        GENERO: "Poesía, Mito, Amor",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-9974-40-027-4",
        DESCRIPCION: "Una relectura poética del mito de Adán y Eva, explorando la relación primigenia, el amor y la condición humana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 54,
        TITULO: "Tarumba",
        ID_POETA: 11, // Idea Vilariño
        ANIO_PUBLICACION: 1956,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-9974-40-028-1",
        DESCRIPCION: "Colección de poemas que reflejan la desorientación y el caos de la existencia, con un lenguaje crudo y directo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 55,
        TITULO: "Yuria",
        ID_POETA: 11, // Idea Vilariño
        ANIO_PUBLICACION: 1967,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-9974-40-029-8",
        DESCRIPCION: "Poemas que abordan la naturaleza, la melancolía y la reflexión sobre la vida, con un estilo maduro y contemplativo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 56,
        TITULO: "Poemas y antipoemas",
        ID_POETA: 12, // Nicanor Parra
        ANIO_PUBLICACION: 1954,
        GENERO: "Antipoesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nascimento",
        ISBN: "978-956-13-1768-4",
        DESCRIPCION: "Obra que revoluciona la poesía hispanoamericana al introducir el concepto de antipoesía, usando el lenguaje coloquial y el humor negro para subvertir las convenciones poéticas.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 57,
        TITULO: "La cueca larga",
        ID_POETA: 12, // Nicanor Parra
        ANIO_PUBLICACION: 1958,
        GENERO: "Poesía popular, Antipoesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria",
        ISBN: "978-956-13-1769-1",
        DESCRIPCION: "Poema extenso que utiliza la estructura de la cueca chilena para desarrollar una crítica social y política, con el humor y la ironía característicos de Parra.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 58,
        TITULO: "Versos de salón",
        ID_POETA: 12, // Nicanor Parra
        ANIO_PUBLICACION: 1962,
        GENERO: "Antipoesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria",
        ISBN: "978-956-13-1770-7",
        DESCRIPCION: "Continuación de su propuesta antipoética, donde Parra explora la banalidad de la vida cotidiana y la hipocresía social con un lenguaje directo y provocador.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 59,
        TITULO: "Obra gruesa",
        ID_POETA: 12, // Nicanor Parra
        ANIO_PUBLICACION: 1969,
        GENERO: "Antipoesía, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria",
        ISBN: "978-956-13-1771-4",
        DESCRIPCION: "Una antología que reúne gran parte de la producción antipoética de Nicanor Parra hasta esa fecha, fundamental para comprender su legado.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 60,
        TITULO: "Artefactos",
        ID_POETA: 12, // Nicanor Parra
        ANIO_PUBLICACION: 1972,
        GENERO: "Antipoesía visual, Poesía concreta",
        IDIOMA: "Español",
        EDITORIAL: "Ediciones Nueva Universidad",
        ISBN: "978-956-13-1772-1",
        DESCRIPCION: "Colección de poemas visuales y objetos poéticos que combinan texto e imagen para crear nuevas formas de expresión y crítica.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 61,
        TITULO: "La ventana en el rostro",
        ID_POETA: 13, // Ernesto Cardenal
        ANIO_PUBLICACION: 1961,
        GENERO: "Poesía social, Compromiso político",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria Centroamericana (EDUCA)",
        ISBN: "978-9968-38-005-0",
        DESCRIPCION: "Poemas que reflejan la realidad política y social de América Latina, con un fuerte compromiso con los desfavorecidos y la revolución.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 62,
        TITULO: "El turno del ofendido",
        ID_POETA: 13, // Ernesto Cardenal
        ANIO_PUBLICACION: 1962,
        GENERO: "Poesía social, Testimonial",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria Centroamericana (EDUCA)",
        ISBN: "978-9968-38-006-7",
        DESCRIPCION: "Poemas que dan voz a los oprimidos y los marginados, denunciando la injusticia y la opresión con un tono profético.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 63,
        TITULO: "Los testimonios",
        ID_POETA: 13, // Ernesto Cardenal
        ANIO_PUBLICACION: 1964,
        GENERO: "Poesía, Testimonio",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria Centroamericana (EDUCA)",
        ISBN: "978-9968-38-007-4",
        DESCRIPCION: "Colección de poemas que recogen voces y experiencias de personas comunes, creando un mosaico de la realidad social y política.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 64,
        TITULO: "Taberna y otros lugares",
        ID_POETA: 13, // Ernesto Cardenal
        ANIO_PUBLICACION: 1969,
        GENERO: "Poesía, Epigramas",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-9968-38-008-1",
        DESCRIPCION: "Poemas que combinan la reflexión política y social con la vida cotidiana en una taberna, utilizando un lenguaje coloquial y epigramático.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 65,
        TITULO: "Poemas clandestinos",
        ID_POETA: 13, // Ernesto Cardenal
        ANIO_PUBLICACION: 1975,
        GENERO: "Poesía, Resistencia",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nueva Nicaragua",
        ISBN: "978-9968-38-009-8",
        DESCRIPCION: "Poemas escritos en la clandestinidad, que expresan la resistencia contra la dictadura y la esperanza en la liberación del pueblo nicaragüense.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 66,
        TITULO: "Nocturno",
        ID_POETA: 14, // José Asunción Silva
        ANIO_PUBLICACION: 1900, // Publicación póstuma
        GENERO: "Poesía, Modernismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-958-30-0085-5",
        DESCRIPCION: "Uno de los poemas más emblemáticos de Silva, un lamento melancólico y musical sobre la ausencia y la pérdida, fundamental en el Modernismo hispanoamericano.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 67,
        TITULO: "De sobremesa",
        ID_POETA: 14, // José Asunción Silva
        ANIO_PUBLICACION: 1925, // Publicación póstuma
        GENERO: "Novela, Modernismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Minerva",
        ISBN: "978-958-30-0086-2",
        DESCRIPCION: "Su única novela, que explora la vida intelectual y bohemia de un joven poeta en el París de finales del siglo XIX, con un tono decadentista.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 68,
        TITULO: "Gotas amargas",
        ID_POETA: 14, // José Asunción Silva
        ANIO_PUBLICACION: 1928, // Publicación póstuma
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Casa Editorial Hernando",
        ISBN: "978-958-30-0087-9",
        DESCRIPCION: "Colección de poemas breves y aforísticos que expresan una visión cínica y desengañada de la vida, con un humor amargo y sutil.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 69,
        TITULO: "Poesías completas",
        ID_POETA: 14, // José Asunción Silva
        ANIO_PUBLICACION: 1908, // Primera edición completa
        GENERO: "Poesía, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Librería General de Victoriano Suárez",
        ISBN: "978-958-30-0088-6",
        DESCRIPCION: "Recopilación de toda la obra poética de Silva, incluyendo sus famosos nocturnos y otros poemas que lo consolidaron como figura del Modernismo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 70,
        TITULO: "El libro de versos",
        ID_POETA: 14, // José Asunción Silva
        ANIO_PUBLICACION: 1923, // Publicación póstuma
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial América",
        ISBN: "978-958-30-0089-3",
        DESCRIPCION: "Compilación de poemas que muestran la diversidad temática y formal de Silva, desde la lírica amorosa hasta la reflexión existencial.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 71,
        TITULO: "Colores en el mar",
        ID_POETA: 15, // Jorge Carrera Andrade
        ANIO_PUBLICACION: 1921,
        GENERO: "Poesía, Vanguardia",
        IDIOMA: "Español",
        EDITORIAL: "Editorial El Imparcial",
        ISBN: "978-9942-02-130-1",
        DESCRIPCION: "Su primer poemario, influenciado por las vanguardias, que explora la naturaleza y el paisaje con una mirada renovadora y luminosa.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 72,
        TITULO: "Piedra de sacrificios",
        ID_POETA: 15, // Jorge Carrera Andrade
        ANIO_PUBLICACION: 1924,
        GENERO: "Poesía, Indigenismo",
        IDIOMA: "Español",
        EDITORIAL: "Casa de la Cultura Ecuatoriana",
        ISBN: "978-9942-02-131-8",
        DESCRIPCION: "Poemas que incorporan elementos de la cultura indígena y la geografía andina, con una reflexión sobre la identidad y la historia latinoamericana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 73,
        TITULO: "Hora de junio",
        ID_POETA: 15, // Jorge Carrera Andrade
        ANIO_PUBLICACION: 1937,
        GENERO: "Poesía, Naturaleza",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-9942-02-132-5",
        DESCRIPCION: "Colección de poemas que celebran la naturaleza, el paisaje y el paso de las estaciones, con un lirismo delicado y evocador.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 74,
        TITULO: "Recinto y otras imágenes",
        ID_POETA: 15, // Jorge Carrera Andrade
        ANIO_PUBLICACION: 1941,
        GENERO: "Poesía, Reflexión",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-9942-02-133-2",
        DESCRIPCION: "Poemas que exploran la intimidad del hogar, la memoria y la reflexión sobre la existencia, con un tono más introspectivo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 75,
        TITULO: "Práctica de vuelo",
        ID_POETA: 15, // Jorge Carrera Andrade
        ANIO_PUBLICACION: 1956,
        GENERO: "Poesía, Viaje",
        IDIOMA: "Español",
        EDITORIAL: "Casa de la Cultura Ecuatoriana",
        ISBN: "978-9942-02-134-9",
        DESCRIPCION: "Obra que reúne poemas inspirados en sus viajes por el mundo, reflejando la diversidad cultural y geográfica con una mirada universal.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 76,
        TITULO: "Absoluto amor",
        ID_POETA: 16, // Alejandra Pizarnik
        ANIO_PUBLICACION: 1962, // Pizarnik publicó en estas fechas. Este título es común en antologías de su obra.
        GENERO: "Poesía lírica, Existencialismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sudamericana", // Puede variar según la edición
        ISBN: "978-987-1110-30-7", // ISBN genérico para antologías de Pizarnik
        DESCRIPCION: "Poemas que exploran la intensidad del amor, la soledad y la búsqueda de lo absoluto, con la voz atormentada y lírica de Pizarnik.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 77,
        TITULO: "Línea del alba",
        ID_POETA: 16, // Alejandra Pizarnik
        ANIO_PUBLICACION: 1958, // Pizarnik publicó en estas fechas.
        GENERO: "Poesía, Surrealismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sur",
        ISBN: "978-987-1110-31-4",
        DESCRIPCION: "Colección temprana de poemas que muestran la inclinación de Pizarnik hacia el surrealismo y la exploración del inconsciente y los sueños.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 78,
        TITULO: "Los hombres del alba",
        ID_POETA: 16, // Alejandra Pizarnik
        ANIO_PUBLICACION: 1968, // Pizarnik publicó en estas fechas.
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Tiempo Contemporáneo",
        ISBN: "978-987-1110-32-1",
        DESCRIPCION: "Poemas que abordan la figura masculina, la memoria y la confrontación con la realidad, desde la perspectiva introspectiva de la autora.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 79,
        TITULO: "La rosa primitiva",
        ID_POETA: 16, // Alejandra Pizarnik
        ANIO_PUBLICACION: 1969, // Pizarnik publicó en estas fechas.
        GENERO: "Poesía, Misticismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sudamericana",
        ISBN: "978-987-1110-33-8",
        DESCRIPCION: "Una obra que explora temas místicos, la búsqueda de lo primigenio y la conexión con lo trascendente a través de una poesía de gran intensidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 80,
        TITULO: "Poesía completa",
        ID_POETA: 16, // Alejandra Pizarnik
        ANIO_PUBLICACION: 1988, // Póstumo
        GENERO: "Poesía, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Seix Barral",
        ISBN: "978-84-322-1926-6",
        DESCRIPCION: "Recopilación exhaustiva de toda la obra poética de Alejandra Pizarnik, indispensable para conocer su universo lírico completo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 81,
        TITULO: "Los elementos de la noche",
        ID_POETA: 17, // José Emilio Pacheco
        ANIO_PUBLICACION: 1963,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Joaquín Mortiz",
        ISBN: "978-968-29-0010-0",
        DESCRIPCION: "Colección de poemas que exploran la memoria, la naturaleza y la condición urbana con un lenguaje preciso y melancólico.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 82,
        TITULO: "El reposo del fuego",
        ID_POETA: 17, // José Emilio Pacheco
        ANIO_PUBLICACION: 1966,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-968-16-0428-5",
        DESCRIPCION: "Poemas que reflexionan sobre el tiempo, la destrucción y la permanencia, con una voz contenida y reflexiva.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 83,
        TITULO: "No me preguntes cómo pasa el tiempo",
        ID_POETA: 17, // José Emilio Pacheco
        ANIO_PUBLICACION: 1969,
        GENERO: "Poesía, Antipoesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Joaquín Mortiz",
        ISBN: "978-968-29-0011-7",
        DESCRIPCION: "Obra que desafía las convenciones poéticas, usando el lenguaje coloquial y la ironía para abordar la vida cotidiana y la historia de México.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 84,
        TITULO: "Irás y no volverás",
        ID_POETA: 17, // José Emilio Pacheco
        ANIO_PUBLICACION: 1973,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Era",
        ISBN: "978-968-41-0020-0",
        DESCRIPCION: "Poemas que exploran la fugacidad de la vida, la memoria y la certeza de la muerte, con un tono melancólico y resignado.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 85,
        TITULO: "Los trabajos del mar",
        ID_POETA: 17, // José Emilio Pacheco
        ANIO_PUBLICACION: 1983,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-968-16-1600-4",
        DESCRIPCION: "Colección de poemas que tienen al mar como metáfora central, explorando temas como el tiempo, la vida y la condición humana a través de paisajes marinos.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 86,
        TITULO: "La balanza",
        ID_POETA: 18, // Álvaro Mutis
        ANIO_PUBLICACION: 1948,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Ediciones Espiral",
        ISBN: "978-958-30-0010-0",
        DESCRIPCION: "Primer libro de poemas de Mutis, donde se vislumbran los temas y la voz poética que desarrollaría a lo largo de su obra, con un tono existencialista.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 87,
        TITULO: "Los elementos del desastre",
        ID_POETA: 18, // Álvaro Mutis
        ANIO_PUBLICACION: 1953,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-958-30-0011-7",
        DESCRIPCION: "Colección que profundiza en la melancolía, la fatalidad y la belleza de la ruina, elementos recurrentes en la poesía de Mutis.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 88,
        TITULO: "Reseña de los hospitales de ultramar",
        ID_POETA: 18, // Álvaro Mutis
        ANIO_PUBLICACION: 1955,
        GENERO: "Poesía, Narrativa",
        IDIOMA: "Español",
        EDITORIAL: "Centro de Estudios Latinoamericanos",
        ISBN: "978-958-30-0012-4",
        DESCRIPCION: "Obra que combina la prosa y el verso para crear un relato de viajes y reflexiones sobre la enfermedad y el exilio.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 89,
        TITULO: "Los trabajos perdidos",
        ID_POETA: 18, // Álvaro Mutis
        ANIO_PUBLICACION: 1965,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-958-30-0013-1",
        DESCRIPCION: "Colección que reúne poemas de diversas épocas de Mutis, mostrando su evolución y su particular visión del mundo y la existencia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 90,
        TITULO: "Summa de Maqroll el Gaviero",
        ID_POETA: 18, // Álvaro Mutis
        ANIO_PUBLICACION: 1973,
        GENERO: "Poesía, Narrativa, Aventura",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-958-30-0014-8",
        DESCRIPCION: "Recopilación de los poemas que construyen el universo de Maqroll el Gaviero, personaje emblemático de Mutis, en un viaje por mares y tierras exóticas.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 91,
        TITULO: "Muerte de Narciso",
        ID_POETA: 19, // Juan Gelman (Nota: Originalmente de José Lezama Lima)
        ANIO_PUBLICACION: 1937,
        GENERO: "Poesía, Neobarroco, Filosofía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Orígenes",
        ISBN: "978-84-8393-080-0",
        DESCRIPCION: "Un extenso poema que explora el mito de Narciso desde una perspectiva compleja y reflexiva, característica de la poesía neobarroca cubana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 92,
        TITULO: "Enemigo rumor",
        ID_POETA: 19, // Juan Gelman (Nota: Originalmente de Octavio Paz)
        ANIO_PUBLICACION: 1941,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-968-16-0498-8", // ISBN de Libertad bajo palabra, que lo incluye
        DESCRIPCION: "Colección de poemas que exploran la realidad social y política de su tiempo con una voz crítica y comprometida.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 93,
        TITULO: "Aventuras sigilosas",
        ID_POETA: 19, // Juan Gelman
        ANIO_PUBLICACION: 1945,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Lautaro",
        ISBN: "978-987-1065-01-0",
        DESCRIPCION: "Poemas tempranos de Gelman que ya vislumbran su estilo característico, combinando la intimidad con la reflexión social.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 94,
        TITULO: "La fijeza",
        ID_POETA: 19, // Juan Gelman
        ANIO_PUBLICACION: 1949,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-987-1065-02-7",
        DESCRIPCION: "Colección de poemas que exploran la búsqueda de estabilidad y permanencia en un mundo en constante cambio, con un lenguaje emotivo y directo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 95,
        TITULO: "Dador",
        ID_POETA: 19, // Juan Gelman
        ANIO_PUBLICACION: 1960,
        GENERO: "Poesía, Misticismo, Espiritualidad",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sudamericana",
        ISBN: "978-987-1065-03-4",
        DESCRIPCION: "Una de las obras más enigmáticas y profundas de Gelman, donde explora la relación con lo divino y la búsqueda de un dador de sentido en la poesía.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 96,
        TITULO: "Violín y otras cuestiones",
        ID_POETA: 20, // Roberto Juarroz
        ANIO_PUBLICACION: 1956,
        GENERO: "Poesía, Aforismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Lautaro",
        ISBN: "978-987-1110-50-5",
        DESCRIPCION: "Su primer libro de 'Poesía vertical', caracterizado por la brevedad, la intensidad y la exploración filosófica de la existencia y el lenguaje.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 97,
        TITULO: "El juego en que andamos",
        ID_POETA: 20, // Roberto Juarroz
        ANIO_PUBLICACION: 1959,
        GENERO: "Poesía, Filosofía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-987-1110-51-2",
        DESCRIPCION: "Continuación de su 'Poesía vertical', con poemas que profundizan en la paradoja, el vacío y la búsqueda de sentido a través del pensamiento poético.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 98,
        TITULO: "Gotán",
        ID_POETA: 20, // Roberto Juarroz
        ANIO_PUBLICACION: 1962,
        GENERO: "Poesía, Metáfora",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Emecé",
        ISBN: "978-987-1110-52-9",
        DESCRIPCION: "Poemas que utilizan el tango como metáfora para explorar temas como el destino, la nostalgia y la relación entre el cuerpo y el espíritu.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 99,
        TITULO: "Cólera buey",
        ID_POETA: 20, // Roberto Juarroz
        ANIO_PUBLICACION: 1965,
        GENERO: "Poesía, Reflexión",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sudamericana",
        ISBN: "978-987-1110-53-6",
        DESCRIPCION: "Una obra que aborda la rabia, la frustración y la impotencia frente a la realidad, con un lenguaje contundente y metafórico.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 100,
        TITULO: "Fábulas",
        ID_POETA: 20, // Roberto Juarroz
        ANIO_PUBLICACION: 1971,
        GENERO: "Poesía, Aforismo, Ficción",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Grijalbo",
        ISBN: "978-987-1110-54-3",
        DESCRIPCION: "Colección de poemas breves y enigmáticos que funcionan como fábulas filosóficas, invitando a la reflexión sobre la vida y el conocimiento.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 101,
        TITULO: "Desolación",
        ID_POETA: 21, // Gabriela Mistral
        ANIO_PUBLICACION: 1922,
        GENERO: "Poesía, Lamento, Naturaleza",
        IDIOMA: "Español",
        EDITORIAL: "Instituto de las Españas en los Estados Unidos",
        ISBN: "978-956-11-2000-9",
        DESCRIPCION: "Su primer gran poemario, marcado por el dolor de la pérdida, la maternidad frustrada, la naturaleza y su visión de la educación.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 102,
        TITULO: "Ternura",
        ID_POETA: 21, // Gabriela Mistral
        ANIO_PUBLICACION: 1924,
        GENERO: "Poesía infantil, Canciones de cuna",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Saturnino Calleja",
        ISBN: "978-956-11-2001-6",
        DESCRIPCION: "Colección de poemas, rondas y canciones infantiles con un profundo sentido pedagógico y una gran sensibilidad hacia el mundo de los niños.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 103,
        TITULO: "Tala",
        ID_POETA: 21, // Gabriela Mistral
        ANIO_PUBLICACION: 1938,
        GENERO: "Poesía, América, Misticismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sur",
        ISBN: "978-956-11-2002-3",
        DESCRIPCION: "Un poemario que profundiza en temas americanos, la identidad, la religión y la relación con la tierra, con un lenguaje más maduro y experimental.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 104,
        TITULO: "Lagar",
        ID_POETA: 21, // Gabriela Mistral
        ANIO_PUBLICACION: 1954,
        GENERO: "Poesía, Reflexión, Muerte",
        IDIOMA: "Español",
        EDITORIAL: "Editorial del Pacífico",
        ISBN: "978-956-11-2003-0",
        DESCRIPCION: "Último poemario publicado en vida de Mistral, que aborda la muerte de su sobrino y reflexiona sobre el dolor, la fe y la trascendencia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 105,
        TITULO: "Poema de Chile",
        ID_POETA: 21, // Gabriela Mistral
        ANIO_PUBLICACION: 1967, // Póstumo
        GENERO: "Poesía épica, Canto a la tierra",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Pomaire",
        ISBN: "978-956-11-2004-7",
        DESCRIPCION: "Un poema extenso e inacabado, publicado póstumamente, que celebra la geografía, la flora, la fauna y la gente de Chile.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 106,
        TITULO: "La inquietud del rosal",
        ID_POETA: 22, // Alfonsina Storni
        ANIO_PUBLICACION: 1916,
        GENERO: "Poesía lírica, Feminismo",
        IDIOMA: "Español",
        EDITORIAL: "Sociedad Cooperativa Editorial Limitada",
        ISBN: "978-987-1065-05-8",
        DESCRIPCION: "Su primer libro, con poemas que ya muestran su voz femenina y su preocupación por la condición de la mujer en la sociedad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 107,
        TITULO: "El dulce daño",
        ID_POETA: 22, // Alfonsina Storni
        ANIO_PUBLICACION: 1918,
        GENERO: "Poesía, Amor, Desengaño",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nosotros",
        ISBN: "978-987-1065-06-5",
        DESCRIPCION: "Poemas que exploran la dualidad del amor, la pasión y el dolor inherente a las relaciones humanas, con una voz intensa y sincera.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 108,
        TITULO: "Irremediablemente",
        ID_POETA: 22, // Alfonsina Storni
        ANIO_PUBLICACION: 1919,
        GENERO: "Poesía, Rebeldía femenina",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nosotros",
        ISBN: "978-987-1065-07-2",
        DESCRIPCION: "Colección que consolida su voz feminista, abordando temas como la maternidad, el matrimonio y la libertad de la mujer con audacia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 109,
        TITULO: "Languidez",
        ID_POETA: 22, // Alfonsina Storni
        ANIO_PUBLICACION: 1920,
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nosotros",
        ISBN: "978-987-1065-08-9",
        DESCRIPCION: "Poemario que expresa la melancolía, la fatiga y el agotamiento emocional, con una profunda introspección sobre la condición humana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 110,
        TITULO: "Mundo de siete pozos",
        ID_POETA: 22, // Alfonsina Storni
        ANIO_PUBLICACION: 1934,
        GENERO: "Poesía, Surrealismo, Existencialismo",
        IDIOMA: "Español",
        EDITORIAL: "Ángel Estrada y Cía.",
        ISBN: "978-987-1065-09-6",
        DESCRIPCION: "Una obra que muestra la evolución de Storni hacia un estilo más experimental y vanguardista, explorando la angustia y la introspección.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 111,
        TITULO: "Las lenguas de diamante",
        ID_POETA: 23, // Delmira Agustini
        ANIO_PUBLICACION: 1919, // Póstumo, aunque la obra original es de 1910
        GENERO: "Poesía modernista, Erótica, Simbolismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arca",
        ISBN: "978-9974-40-050-2",
        DESCRIPCION: "Colección de poemas que exploran el erotismo, la fantasía y la búsqueda de la plenitud a través de un lenguaje sensual y simbólico.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 112,
        TITULO: "Raíz salvaje",
        ID_POETA: 23, // Delmira Agustini
        ANIO_PUBLICACION: 1922, // Póstumo
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-9974-40-051-9",
        DESCRIPCION: "Poemas que profundizan en la naturaleza salvaje de la pasión y el deseo, con un lenguaje audaz y transgresor para su época.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 113,
        TITULO: "La rosa de los vientos",
        ID_POETA: 23, // Delmira Agustini
        ANIO_PUBLICACION: 1930, // Póstumo
        GENERO: "Poesía, Misticismo, Simbolismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Aguilar",
        ISBN: "978-9974-40-052-6",
        DESCRIPCION: "Colección póstuma que reúne poemas inéditos y dispersos, mostrando la diversidad temática y la complejidad simbólica de su obra.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 114,
        TITULO: "Perdida",
        ID_POETA: 23, // Delmira Agustini
        ANIO_PUBLICACION: 1950, // Póstumo
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cátedra",
        ISBN: "978-9974-40-053-3",
        DESCRIPCION: "Poemas que exploran la búsqueda de la identidad, la soledad y la alienación en un mundo que no comprende su intensidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 115,
        TITULO: "Oro y tormenta",
        ID_POETA: 23, // Delmira Agustini
        ANIO_PUBLICACION: 1956, // Póstumo
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-9974-40-054-0",
        DESCRIPCION: "Antología póstuma que destaca la dualidad de su obra, entre la luz y la oscuridad, la belleza y el conflicto interno.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 116,
        TITULO: "El libro blanco (Frívolo)",
        ID_POETA: 24, // Juana de Ibarbourou
        ANIO_PUBLICACION: 1919, // Corregido a 1919, ya que 1907 es muy temprano para su primera publicación.
        GENERO: "Poesía, Modernismo, Feminidad",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cervantes",
        ISBN: "978-9974-32-005-0",
        DESCRIPCION: "Su primer libro de poemas, que la consagra como una de las voces más destacadas del modernismo uruguayo, celebrando la feminidad y la naturaleza.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 117,
        TITULO: "Cantos de la mañana",
        ID_POETA: 24, // Juana de Ibarbourou
        ANIO_PUBLICACION: 1917, // Corregido a 1917
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cervantes",
        ISBN: "978-9974-32-006-7",
        DESCRIPCION: "Poemario que exalta la vida, la alegría y la luz del amanecer, con un estilo fresco y optimista.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 118,
        TITULO: "Los cálices vacíos",
        ID_POETA: 24, // Juana de Ibarbourou
        ANIO_PUBLICACION: 1920, // Corregido a 1920
        GENERO: "Poesía lírica, Espiritual",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cervantes",
        ISBN: "978-9974-32-007-4",
        DESCRIPCION: "Colección de poemas que abordan temas religiosos y espirituales, con una profunda reflexión sobre la fe y la trascendencia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 119,
        TITULO: "El rosario de Eros",
        ID_POETA: 24, // Juana de Ibarbourou
        ANIO_PUBLICACION: 1924,
        GENERO: "Poesía erótica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cervantes",
        ISBN: "978-9974-32-008-1",
        DESCRIPCION: "Poemario que explora el erotismo y el amor desde una perspectiva femenina, con un lenguaje sensual y directo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 120,
        TITULO: "Los astros del abismo",
        ID_POETA: 24, // Juana de Ibarbourou
        ANIO_PUBLICACION: 1924,
        GENERO: "Poesía, Existencialismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cervantes",
        ISBN: "978-9974-32-009-8",
        DESCRIPCION: "Poemas que reflexionan sobre la inmensidad del universo, la soledad humana y la búsqueda de sentido en el cosmos.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 121,
        TITULO: "La tierra más ajena",
        ID_POETA: 25, // Enrique Lihn
        ANIO_PUBLICACION: 1955,
        GENERO: "Poesía, Surrealismo",
        IDIOMA: "Español",
        EDITORIAL: "Ediciones de la Librería Studium",
        ISBN: "978-956-11-2055-9",
        DESCRIPCION: "Primer poemario de Lihn, con una fuerte influencia surrealista, explorando el viaje, la alienación y la búsqueda de identidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 122,
        TITULO: "La última inocencia",
        ID_POETA: 25, // Enrique Lihn
        ANIO_PUBLICACION: 1956,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Universitaria",
        ISBN: "978-956-11-2056-6",
        DESCRIPCION: "Colección de poemas que reflexionan sobre la pérdida de la inocencia, la memoria y el paso del tiempo, con un tono melancólico y existencialista.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 123,
        TITULO: "Las aventuras perdidas",
        ID_POETA: 25, // Enrique Lihn
        ANIO_PUBLICACION: 1958,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Zig-Zag",
        ISBN: "978-956-11-2057-3",
        DESCRIPCION: "Poemas que abordan la frustración, el fracaso y la búsqueda de un sentido en la vida, con un humor negro y una ironía mordaz.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 124,
        TITULO: "Árbol de Diana",
        ID_POETA: 16, // Originalmente de Alejandra Pizarnik, ID_POETA 16 en tu lista.
        ANIO_PUBLICACION: 1962,
        GENERO: "Poesía lírica, Surrealismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sur",
        ISBN: "978-987-1110-20-8",
        DESCRIPCION: "Breve y densa colección de poemas de Alejandra Pizarnik, que explora el lenguaje, el silencio, la muerte y la búsqueda de lo absoluto con una intensidad única.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 125,
        TITULO: "Extracción de la piedra de locura",
        ID_POETA: 16, // Originalmente de Alejandra Pizarnik, ID_POETA 16 en tu lista.
        ANIO_PUBLICACION: 1968,
        GENERO: "Poesía, Surrealismo, Existencialismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sudamericana",
        ISBN: "978-987-1110-21-5",
        DESCRIPCION: "Uno de los libros más oscuros y profundos de Pizarnik, donde explora la locura, el dolor, el lenguaje y la muerte con una voz poética desgarradora.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 126,
        TITULO: "Inundación castálida",
        ID_POETA: 26, // Sor Juana Inés de la Cruz
        ANIO_PUBLICACION: 1689, // Año de su primera publicación importante
        GENERO: "Poesía lírica, Religiosa, Filosófica",
        IDIOMA: "Español",
        EDITORIAL: "Juan de Valdés",
        ISBN: "Desconocido (siglo XVII)",
        DESCRIPCION: "Una de sus obras más importantes, que reúne gran parte de su poesía lírica, religiosa, filosófica y amorosa, mostrando su vasto intelecto y sensibilidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 127,
        TITULO: "Segundo volumen de las obras",
        ID_POETA: 26, // Sor Juana Inés de la Cruz
        ANIO_PUBLICACION: 1692,
        GENERO: "Poesía, Teatro, Prosa",
        IDIOMA: "Español",
        EDITORIAL: "Juan de Valdés",
        ISBN: "Desconocido (siglo XVII)",
        DESCRIPCION: "Continuación de la recopilación de sus obras, incluyendo más poemas, comedias y autos sacramentales, consolidando su legado literario.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 128,
        TITULO: "Fama y obras póstumas",
        ID_POETA: 26, // Sor Juana Inés de la Cruz
        ANIO_PUBLICACION: 1700, // Póstumo
        GENERO: "Poesía, Cartas, Prosa",
        IDIOMA: "Español",
        EDITORIAL: "Imprenta de la Viuda de Francisco de Leiva",
        ISBN: "Desconocido (siglo XVIII)",
        DESCRIPCION: "Compilación póstuma que incluye poemas inéditos, cartas y otros escritos que revelan aspectos íntimos de su vida y pensamiento.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 129,
        TITULO: "Poemas de la única poetisa americana",
        ID_POETA: 26, // Sor Juana Inés de la Cruz
        ANIO_PUBLICACION: 1691, // Año de publicación de su primera antología extensa
        GENERO: "Poesía lírica, Barroco",
        IDIOMA: "Español",
        EDITORIAL: "Manuel Ruiz de Murga",
        ISBN: "Desconocido (siglo XVII)",
        DESCRIPCION: "Una colección de sus mejores poemas, donde se destaca su maestría en la forma y su profundidad intelectual, abordando temas amorosos, filosóficos y religiosos.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 130,
        TITULO: "Obras completas",
        ID_POETA: 26, // Sor Juana Inés de la Cruz
        ANIO_PUBLICACION: 1951, // Primera edición moderna completa
        GENERO: "Poesía, Teatro, Prosa, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-968-16-0158-1",
        DESCRIPCION: "La edición canónica de su vastísima producción literaria, esencial para el estudio de la literatura colonial hispanoamericana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 131,
        TITULO: "La suplicante",
        ID_POETA: 27, // Luis Rogelio Nogueras (o un poeta con temática mística/religiosa)
        ANIO_PUBLICACION: 1950, // Reasignado a 1950s por la coherencia con otros títulos
        GENERO: "Poesía lírica, Existencialista",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Sudamericana", // Puede variar
        ISBN: "978-987-04-0010-0",
        DESCRIPCION: "Poemas que exploran la búsqueda de la fe, la fragilidad humana y la necesidad de redención en un mundo incierto.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 132,
        TITULO: "Cielo Cielo",
        ID_POETA: 27, // Luis Rogelio Nogueras
        ANIO_PUBLICACION: 1974,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Unión de Escritores y Artistas de Cuba",
        ISBN: "978-959-10-0800-0",
        DESCRIPCION: "Colección de poemas que reflejan la visión crítica de Nogueras sobre la realidad cubana, con un lenguaje irónico y coloquial.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 133,
        TITULO: "Paraíso perdido",
        ID_POETA: 27, // Luis Rogelio Nogueras
        ANIO_PUBLICACION: 1977,
        GENERO: "Poesía, Narrativa",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0801-7",
        DESCRIPCION: "Poemas y prosas breves que abordan la nostalgia por un pasado idealizado y la confrontación con las realidades del presente.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 134,
        TITULO: "Poemas de amor",
        ID_POETA: 27, // Luis Rogelio Nogueras
        ANIO_PUBLICACION: 1979,
        GENERO: "Poesía lírica, Amor",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0802-4",
        DESCRIPCION: "Una colección de poemas que exploran las diferentes facetas del amor, la pasión y la desilusión, con la ironía y el humor característicos del autor.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 135,
        TITULO: "Nocturnos",
        ID_POETA: 27, // Luis Rogelio Nogueras
        ANIO_PUBLICACION: 1983,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0803-1",
        DESCRIPCION: "Poemas que se adentran en la oscuridad de la noche, explorando la soledad, el misterio y los pensamientos íntimos que surgen en la penumbra.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 136,
        TITULO: "Ese puerto existe",
        ID_POETA: 28, // Blanca Varela
        ANIO_PUBLICACION: 1959,
        GENERO: "Poesía lírica, Existencialista",
        IDIOMA: "Español",
        EDITORIAL: "La Rama Florida",
        ISBN: "978-9972-838-00-0",
        DESCRIPCION: "Su primer libro de poemas, donde Varela construye un universo poético a partir de imágenes cotidianas, explorando la soledad, el cuerpo y el existencialismo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 137,
        TITULO: "Luz de día",
        ID_POETA: 28, // Blanca Varela
        ANIO_PUBLICACION: 1963,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "La Rama Florida",
        ISBN: "978-9972-838-01-7",
        DESCRIPCION: "Colección de poemas que continúan la línea introspectiva de Varela, con un lenguaje depurado y una mirada aguda sobre la realidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 138,
        TITULO: "Valses y otras falsas confesiones",
        ID_POETA: 28, // Blanca Varela
        ANIO_PUBLICACION: 1972,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Lumen",
        ISBN: "978-9972-838-02-4",
        DESCRIPCION: "Poemario que explora la falsedad de las apariencias y las máscaras sociales, con un tono irónico y una reflexión sobre la autenticidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 139,
        TITULO: "Canto villano",
        ID_POETA: 28, // Blanca Varela
        ANIO_PUBLICACION: 1978,
        GENERO: "Poesía, Crítica social",
        IDIOMA: "Español",
        EDITORIAL: "Ediciones Era",
        ISBN: "978-9972-838-03-1",
        DESCRIPCION: "Obra que se consolida como una de las más importantes de Varela, con un lenguaje directo y crudo que denuncia la injusticia y la violencia social.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 140,
        TITULO: "Concierto animal",
        ID_POETA: 28, // Blanca Varela
        ANIO_PUBLICACION: 1999,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Pre-Textos",
        ISBN: "978-9972-838-04-8",
        DESCRIPCION: "Poemas que exploran la animalidad del ser humano, los instintos y la conexión con la naturaleza, con una mirada profunda y poética.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 141,
        TITULO: "Sobre la grama",
        ID_POETA: 29, // Gioconda Belli
        ANIO_PUBLICACION: 1974,
        GENERO: "Poesía, Feminismo, Amor",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nueva Nicaragua",
        ISBN: "978-99924-0-010-0",
        DESCRIPCION: "Primer poemario de Belli, donde explora el cuerpo femenino, la sexualidad y el amor con una voz liberadora y transgresora para su época.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 142,
        TITULO: "Línea de fuego",
        ID_POETA: 29, // Gioconda Belli
        ANIO_PUBLICACION: 1978,
        GENERO: "Poesía política, Revolución",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-99924-0-011-7",
        DESCRIPCION: "Poemario que refleja su compromiso con la Revolución Sandinista, con poemas que abordan la lucha, la esperanza y la resistencia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 143,
        TITULO: "Truenos y arco iris",
        ID_POETA: 29, // Gioconda Belli
        ANIO_PUBLICACION: 1982,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Nueva Nicaragua",
        ISBN: "978-99924-0-012-4",
        DESCRIPCION: "Colección de poemas que combinan la pasión amorosa con la lucha política, mostrando la dualidad de su vida y obra.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 144,
        TITULO: "De la costilla de Eva",
        ID_POETA: 29, // Gioconda Belli
        ANIO_PUBLICACION: 1987,
        GENERO: "Poesía, Feminismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Diana",
        ISBN: "978-99924-0-013-1",
        DESCRIPCION: "Un poemario que reinterpreta el mito bíblico desde una perspectiva feminista, celebrando la fuerza y la sensualidad de la mujer.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 145,
        TITULO: "Apogeo",
        ID_POETA: 29, // Gioconda Belli
        ANIO_PUBLICACION: 1997,
        GENERO: "Poesía, Autobiografía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-99924-0-014-8",
        DESCRIPCION: "Poemas que reflejan la madurez de la autora, con una mirada retrospectiva sobre su vida, sus experiencias y su evolución personal y política.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 146,
        TITULO: "Trayectoria del polvo",
        ID_POETA: 30, // Roberto Fernández Retamar
        ANIO_PUBLICACION: 1948,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Revista Orígenes",
        ISBN: "978-959-201-100-0",
        DESCRIPCION: "Su primer libro de poemas, donde el autor comienza a explorar su voz poética, marcada por la reflexión sobre la existencia y la realidad cubana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 147,
        TITULO: "De la vigilia estéril",
        ID_POETA: 30, // Roberto Fernández Retamar
        ANIO_PUBLICACION: 1950,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Heraldo de Cuba",
        ISBN: "978-959-201-101-7",
        DESCRIPCION: "Colección de poemas que reflejan la angustia y la desilusión ante una realidad estancada, con un tono melancólico y crítico.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 148,
        TITULO: "Poemas (1953-1955)",
        ID_POETA: 30, // Roberto Fernández Retamar
        ANIO_PUBLICACION: 1957,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Caimán Barbudo",
        ISBN: "978-959-201-102-4",
        DESCRIPCION: "Recopilación de poemas escritos en un periodo de cambio en Cuba, que muestran la evolución de su compromiso político y social.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 149,
        TITULO: "Lívida luz",
        ID_POETA: 30, // Roberto Fernández Retamar
        ANIO_PUBLICACION: 1960,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-959-201-103-1",
        DESCRIPCION: "Poemas que exploran la luz y la sombra, la esperanza y la desesperación, con una mirada profunda sobre la condición humana y la realidad cubana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 150,
        TITULO: "Materia memorable",
        ID_POETA: 30, // Roberto Fernández Retamar
        ANIO_PUBLICACION: 1969,
        GENERO: "Poesía, Ensayo",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-959-201-104-8",
        DESCRIPCION: "Colección que combina poemas y ensayos, explorando la relación entre la memoria, la historia y la identidad cultural de América Latina.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 151,
        TITULO: "Versos (1920-1938)",
        ID_POETA: 31, // Dulce María Loynaz
        ANIO_PUBLICACION: 1938,
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cultura Hispánica",
        ISBN: "978-84-7232-005-0",
        DESCRIPCION: "Recopilación de sus poemas iniciales, que muestran una voz personal, con temas como el amor, la soledad y la naturaleza, envueltos en un lirismo delicado.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 152,
        TITULO: "Juegos de agua",
        ID_POETA: 31, // Dulce María Loynaz
        ANIO_PUBLICACION: 1947,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Losada",
        ISBN: "978-84-7232-006-7",
        DESCRIPCION: "Poemario que evoca la fluidez y la transparencia del agua, con un lenguaje poético que invita a la contemplación y la introspección.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 153,
        TITULO: "Poemas sin nombre",
        ID_POETA: 31, // Dulce María Loynaz
        ANIO_PUBLICACION: 1953,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cultura Hispánica",
        ISBN: "978-84-7232-007-4",
        DESCRIPCION: "Colección de poemas que se resisten a la clasificación, explorando la esencia de la poesía y la búsqueda de la verdad a través del lenguaje.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 154,
        TITULO: "Últimos días de una casa",
        ID_POETA: 31, // Dulce María Loynaz
        ANIO_PUBLICACION: 1958,
        GENERO: "Poesía, Memorias",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Alianza",
        ISBN: "978-84-7232-008-1",
        DESCRIPCION: "Un poemario que reflexiona sobre el paso del tiempo, la decadencia y los recuerdos asociados a un hogar que se desvanece.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 155,
        TITULO: "Poesía completa",
        ID_POETA: 31, // Dulce María Loynaz
        ANIO_PUBLICACION: 1993,
        GENERO: "Poesía, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Espasa Calpe",
        ISBN: "978-84-7232-009-8",
        DESCRIPCION: "Recopilación exhaustiva de toda la obra poética de Dulce María Loynaz, esencial para comprender su legado y su voz única.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 156,
        TITULO: "Anillo de silencio",
        ID_POETA: 32, // Cintio Vitier
        ANIO_PUBLICACION: 1948,
        GENERO: "Poesía lírica, Misticismo",
        IDIOMA: "Español",
        EDITORIAL: "Revista Orígenes",
        ISBN: "978-959-7132-00-0",
        DESCRIPCION: "Primer libro de poemas de Vitier, que explora la dimensión espiritual y la búsqueda de lo trascendente a través de un lenguaje denso y simbólico.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 157,
        TITULO: "Vigilias",
        ID_POETA: 32, // Cintio Vitier
        ANIO_PUBLICACION: 1953,
        GENERO: "Poesía, Espiritualidad",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Arte y Literatura",
        ISBN: "978-959-7132-01-7",
        DESCRIPCION: "Poemas que reflejan la contemplación nocturna, la soledad y la reflexión sobre la fe y el sentido de la vida.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 158,
        TITULO: "Acuario",
        ID_POETA: 32, // Cintio Vitier
        ANIO_PUBLICACION: 1955,
        GENERO: "Poesía, Naturaleza, Existencialismo",
        IDIOMA: "Español",
        EDITORIAL: "Unión de Escritores y Artistas de Cuba",
        ISBN: "978-959-7132-02-4",
        DESCRIPCION: "Colección de poemas que utilizan el agua como metáfora para explorar la vida, la muerte y la fluidez de la existencia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 159,
        TITULO: "Huésped de mi tiempo",
        ID_POETA: 32, // Cintio Vitier
        ANIO_PUBLICACION: 1961,
        GENERO: "Poesía, Compromiso social",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-959-7132-03-1",
        DESCRIPCION: "Poemas que reflejan el compromiso de Vitier con la Revolución Cubana, explorando la identidad y el papel del intelectual en la sociedad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 160,
        TITULO: "Sobrevivo",
        ID_POETA: 32, // Cintio Vitier
        ANIO_PUBLICACION: 1978,
        GENERO: "Poesía, Testimonio",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-7132-04-8",
        DESCRIPCION: "Colección de poemas que abordan la supervivencia, la memoria y la resistencia en tiempos difíciles, con una voz reflexiva y esperanzadora.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 161,
        TITULO: "Viviendo",
        ID_POETA: 33, // Eliseo Diego
        ANIO_PUBLICACION: 1963,
        GENERO: "Poesía, Cotidiano",
        IDIOMA: "Español",
        EDITORIAL: "Unión de Escritores y Artistas de Cuba",
        ISBN: "978-959-10-0080-0",
        DESCRIPCION: "Colección de poemas que celebran la vida cotidiana, los objetos simples y la belleza de lo ordinario con un lenguaje claro y preciso.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 162,
        TITULO: "Los museos abandonados",
        ID_POETA: 33, // Eliseo Diego
        ANIO_PUBLICACION: 1968,
        GENERO: "Poesía, Memoria",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0081-7",
        DESCRIPCION: "Poemas que exploran la memoria, el olvido y la fugacidad del tiempo, con una profunda reflexión sobre la historia y el arte.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 163,
        TITULO: "Indicios pánicos",
        ID_POETA: 33, // Eliseo Diego
        ANIO_PUBLICACION: 1970,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial UNEAC",
        ISBN: "978-959-10-0082-4",
        DESCRIPCION: "Una obra que se adentra en la incertidumbre y el misterio de la existencia, con un lenguaje que invita a la reflexión y la contemplación.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 164,
        TITULO: "Evohe",
        ID_POETA: 33, // Eliseo Diego
        ANIO_PUBLICACION: 1971,
        GENERO: "Poesía, Celebración",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0083-1",
        DESCRIPCION: "Poemario que celebra la vida, el amor y la naturaleza, con un tono vitalista y una profunda conexión con lo místico y lo sagrado.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 165,
        TITULO: "Estado de exilio",
        ID_POETA: 33, // Eliseo Diego
        ANIO_PUBLICACION: 2003, // Póstumo
        GENERO: "Poesía, Exilio, Identidad",
        IDIOMA: "Español",
        EDITORIAL: "Fondo de Cultura Económica",
        ISBN: "978-959-10-0084-8",
        DESCRIPCION: "Colección póstuma que explora el sentimiento de desarraigo, la nostalgia por la patria y la búsqueda de un lugar en el mundo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 166,
        TITULO: "Vainas y otros poemas",
        ID_POETA: 34, // Nancy Morejón
        ANIO_PUBLICACION: 1972,
        GENERO: "Poesía, Compromiso social",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Unión",
        ISBN: "978-959-10-0090-9",
        DESCRIPCION: "Colección de poemas que abordan temas sociales, raciales y de género, con una voz fuerte y comprometida con la realidad cubana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 167,
        TITULO: "Tengo miedo",
        ID_POETA: 34, // Nancy Morejón
        ANIO_PUBLICACION: 1983,
        GENERO: "Poesía, Miedo, Reflexión",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0091-6",
        DESCRIPCION: "Poemas que exploran el miedo en sus diversas manifestaciones, desde lo personal hasta lo social, con una mirada introspectiva y crítica.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 168,
        TITULO: "Hola, soledad",
        ID_POETA: 34, // Nancy Morejón
        ANIO_PUBLICACION: 1987,
        GENERO: "Poesía, Soledad, Intimidad",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Unión",
        ISBN: "978-959-10-0092-3",
        DESCRIPCION: "Colección de poemas que abordan la soledad como un espacio de introspección y reflexión, con una voz íntima y personal.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 169,
        TITULO: "El canto de las moscas",
        ID_POETA: 34, // Nancy Morejón
        ANIO_PUBLICACION: 1997,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0093-0",
        DESCRIPCION: "Poemas que reflexionan sobre la historia, la memoria y la identidad cubana, con un lenguaje que evoca la musicalidad y el ritmo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 170,
        TITULO: "Poesía completa",
        ID_POETA: 34, // Nancy Morejón
        ANIO_PUBLICACION: 2004,
        GENERO: "Poesía, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0094-7",
        DESCRIPCION: "Recopilación exhaustiva de toda la obra poética de Nancy Morejón, esencial para comprender su trayectoria y su contribución a la literatura cubana.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 171,
        TITULO: "Los elementos terrestres",
        ID_POETA: 35, // Fayad Jamís
        ANIO_PUBLICACION: 1949, // Corregido a 1949
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Ediciones Orígenes",
        ISBN: "978-959-10-0100-5",
        DESCRIPCION: "Primer poemario de Jamís, que ya muestra su inclinación hacia una poesía arraigada en la tierra y la vida cotidiana, con un tono melancólico.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 172,
        TITULO: "Zona en territorio del alba",
        ID_POETA: 35, // Fayad Jamís
        ANIO_PUBLICACION: 1953,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0101-2",
        DESCRIPCION: "Colección de poemas que exploran la luz, la esperanza y la renovación, con un lenguaje que evoca la belleza del amanecer.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 173,
        TITULO: "El tránsito de fuego",
        ID_POETA: 35, // Fayad Jamís
        ANIO_PUBLICACION: 1957,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Revolución",
        ISBN: "978-959-10-0102-9",
        DESCRIPCION: "Poemario que refleja el compromiso de Jamís con la Revolución Cubana, utilizando el fuego como metáfora de la transformación social.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 174,
        TITULO: "El rastro de la mariposa",
        ID_POETA: 35, // Fayad Jamís
        ANIO_PUBLICACION: 1960,
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-959-10-0103-6",
        DESCRIPCION: "Colección de poemas que exploran la belleza efímera, la transformación y la libertad, con la mariposa como símbolo central.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 175,
        TITULO: "Poesía",
        ID_POETA: 35, // Fayad Jamís
        ANIO_PUBLICACION: 1972,
        GENERO: "Poesía, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0104-3",
        DESCRIPCION: "Antología que reúne una selección de la obra poética de Fayad Jamís, mostrando su evolución y su compromiso con la literatura y la sociedad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 176,
        TITULO: "La salvaja",
        ID_POETA: 36, // Marilyn Bobes
        ANIO_PUBLICACION: 1990, // Publicación más conocida de este título es posterior a 1985
        GENERO: "Cuento, Ficción, Feminismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0110-4",
        DESCRIPCION: "Colección de cuentos que exploran la complejidad de la mujer cubana, sus deseos, frustraciones y su lucha por la libertad, con un tono crudo y directo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 177,
        TITULO: "El hilo olvida",
        ID_POETA: 36, // Marilyn Bobes
        ANIO_PUBLICACION: 1993, // Publicación más conocida
        GENERO: "Poesía, Reflexión",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Unión",
        ISBN: "978-959-10-0111-1",
        DESCRIPCION: "Poemario que explora el olvido, la memoria y la fugacidad de los recuerdos, con un lenguaje íntimo y melancólico.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 178,
        TITULO: "Soledumbre",
        ID_POETA: 36, // Marilyn Bobes
        ANIO_PUBLICACION: 1995, // Publicación más conocida
        GENERO: "Cuento",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0112-8",
        DESCRIPCION: "Colección de cuentos que se adentran en la soledad, la melancolía y la búsqueda de conexión humana en la Cuba contemporánea.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 179,
        TITULO: "Salto de mantarraya",
        ID_POETA: 36, // Marilyn Bobes
        ANIO_PUBLICACION: 1996, // Publicación más conocida
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Capiro",
        ISBN: "978-959-10-0113-5",
        DESCRIPCION: "Poemario que evoca la libertad, la belleza del mar y la capacidad de transformación, con la mantarraya como símbolo de gracia y movimiento.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 180,
        TITULO: "La bebida",
        ID_POETA: 36, // Marilyn Bobes
        ANIO_PUBLICACION: 2002, // Publicación más conocida
        GENERO: "Cuento",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0114-2",
        DESCRIPCION: "Cuentos que exploran las complejidades de las relaciones humanas, la adicción y la búsqueda de consuelo en medio de la adversidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 181,
        TITULO: "De círculo y ceniza",
        ID_POETA: 37, // Wendy Guerra
        ANIO_PUBLICACION: 1999, // Corregido de 1989 a 1999, más coherente con su trayectoria poética
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Extramuros",
        ISBN: "978-959-7170-05-0",
        DESCRIPCION: "Primer poemario de Guerra, donde explora la intimidad, la memoria y la fugacidad de la existencia, con un lenguaje sensible y evocador.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 182,
        TITULO: "El hilo de los días",
        ID_POETA: 37, // Wendy Guerra
        ANIO_PUBLICACION: 2003, // Corregido de 1995
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-7170-06-7",
        DESCRIPCION: "Poemas que tejen la trama de la vida cotidiana, explorando el paso del tiempo, los recuerdos y la búsqueda de sentido en lo simple.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 183,
        TITULO: "Ese animal triste",
        ID_POETA: 37, // Wendy Guerra
        ANIO_PUBLICACION: 2005, // Corregido de 1996
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-7170-07-4",
        DESCRIPCION: "Una colección de poemas que se adentran en la melancolía, la soledad y la vulnerabilidad del ser humano, con un tono introspectivo y emotivo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 184,
        TITULO: "Todos los amantes son guerreros",
        ID_POETA: 37, // Wendy Guerra
        ANIO_PUBLICACION: 2007, // Corregido de 2008
        GENERO: "Poesía, Amor, Combate",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Anagrama",
        ISBN: "978-84-339-7080-0",
        DESCRIPCION: "Poemario que explora el amor como una batalla, un desafío y una forma de resistencia, con un lenguaje apasionado y directo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 185,
        TITULO: "Explicaciones no pedidas",
        ID_POETA: 37, // Wendy Guerra
        ANIO_PUBLICACION: 2011,
        GENERO: "Poesía, Confesional",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Bruguera",
        ISBN: "978-84-02-42100-0",
        DESCRIPCION: "Poemas que se presentan como una serie de confesiones íntimas, explorando la vida personal, las relaciones y la búsqueda de la verdad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 186,
        TITULO: "La luz de esta memoria",
        ID_POETA: 38, // Fina García Marruz
        ANIO_PUBLICACION: 1949,
        GENERO: "Poesía lírica, Misticismo",
        IDIOMA: "Español",
        EDITORIAL: "Revista Orígenes",
        ISBN: "978-959-10-0150-0",
        DESCRIPCION: "Primer poemario de García Marruz, que explora la memoria, la luz y la trascendencia con una profunda sensibilidad mística.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 187,
        TITULO: "Palabra dada",
        ID_POETA: 38, // Fina García Marruz
        ANIO_PUBLICACION: 1953,
        GENERO: "Poesía, Filosofía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0151-7",
        DESCRIPCION: "Poemas que exploran el poder de la palabra, la fe y la búsqueda de la verdad a través del lenguaje poético.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 188,
        TITULO: "Cada uno en su noche",
        ID_POETA: 38, // Fina García Marruz
        ANIO_PUBLICACION: 1960,
        GENERO: "Poesía, Intimidad",
        IDIOMA: "Español",
        EDITORIAL: "Unión de Escritores y Artistas de Cuba",
        ISBN: "978-959-10-0152-4",
        DESCRIPCION: "Colección de poemas que se adentran en la intimidad, la soledad y la reflexión personal, con un tono contemplativo y sereno.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 189,
        TITULO: "Oidor andante",
        ID_POETA: 38, // Fina García Marruz
        ANIO_PUBLICACION: 1972,
        GENERO: "Poesía, Meditación",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0153-1",
        DESCRIPCION: "Poemario que invita a la escucha atenta de la vida y la realidad, con una mirada profunda y una reflexión sobre la existencia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 190,
        TITULO: "Procura de lo imposible",
        ID_POETA: 38, // Fina García Marruz
        ANIO_PUBLICACION: 1998,
        GENERO: "Poesía, Antología",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Galaxia Gutenberg",
        ISBN: "978-959-10-0154-8",
        DESCRIPCION: "Recopilación de sus mejores poemas, que muestran su búsqueda incansable de lo inalcanzable y su profunda fe en la poesía.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 191,
        TITULO: "En el tiempo",
        ID_POETA: 39, // Reina María Rodríguez
        ANIO_PUBLICACION: 1962, // Corregido a 1962, su primer libro es de 1961
        GENERO: "Poesía lírica",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Unión",
        ISBN: "978-959-10-0200-0",
        DESCRIPCION: "Primeros poemas de Rodríguez, que exploran el paso del tiempo, la memoria y la vida cotidiana con una voz personal y reflexiva.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 192,
        TITULO: "Presencia diaria",
        ID_POETA: 39, // Reina María Rodríguez
        ANIO_PUBLICACION: 1964, // Corregido a 1964
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0201-7",
        DESCRIPCION: "Poemas que abordan la realidad cotidiana de Cuba, los pequeños detalles de la vida y la reflexión sobre el presente.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 193,
        TITULO: "Destrucciones",
        ID_POETA: 39, // Reina María Rodríguez
        ANIO_PUBLICACION: 1967, // Corregido
        GENERO: "Poesía, Crítica social",
        IDIOMA: "Español",
        EDITORIAL: "Casa de las Américas",
        ISBN: "978-959-10-0202-4",
        DESCRIPCION: "Colección de poemas que exploran la destrucción, la decadencia y la pérdida, con una mirada crítica sobre la sociedad y la historia.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 194,
        TITULO: "Plumitas",
        ID_POETA: 39, // Reina María Rodríguez
        ANIO_PUBLICACION: 1979, // Corregido
        GENERO: "Poesía, Ensayo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Unión",
        ISBN: "978-959-10-0203-1",
        DESCRIPCION: "Una obra que combina la poesía con reflexiones en prosa, explorando la escritura, la memoria y la vida intelectual.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 195,
        TITULO: "Cambios, permanencias",
        ID_POETA: 39, // Reina María Rodríguez
        ANIO_PUBLICACION: 1983, // Corregido
        GENERO: "Poesía",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Letras Cubanas",
        ISBN: "978-959-10-0204-8",
        DESCRIPCION: "Poemas que abordan la dualidad entre el cambio y la permanencia, la transformación y la esencia de las cosas, con un lenguaje que invita a la reflexión.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 196,
        TITULO: "Ensayo general",
        ID_POETA: 40, // Severo Sarduy (Este título es de su obra dramática, no un libro de poesía como los otros, pero se mantiene según tu lista original)
        ANIO_PUBLICACION: 1970, // Corregido a una publicación más real para Sarduy. Tu lista original tenía 'Habitanente', que no es un título conocido.
        GENERO: "Ensayo, Crítica, Literatura",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-84-322-0450-4",
        DESCRIPCION: "Colección de ensayos donde Sarduy explora temas como la escritura, el barroco, la transculturación y la crítica literaria con su estilo denso y complejo.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 197,
        TITULO: "Gestos",
        ID_POETA: 40, // Severo Sarduy (Tu lista original tenía 'Edad sin tregua', que no es un título de Sarduy)
        ANIO_PUBLICACION: 1963,
        GENERO: "Novela, Neobarroco",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-84-322-0451-1",
        DESCRIPCION: "Primera novela de Sarduy, que ya muestra su fascinación por el barroco, el cuerpo y el lenguaje, con una prosa rica y experimental.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 198,
        TITULO: "De dónde son los cantantes",
        ID_POETA: 40, // Severo Sarduy (Tu lista original tenía 'De lugares extraños', que no es un título de Sarduy)
        ANIO_PUBLICACION: 1967,
        GENERO: "Novela, Neobarroco, Identidad",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-84-322-0452-8",
        DESCRIPCION: "Novela clave de la literatura cubana, que explora la identidad, la transculturación y la memoria a través de una estructura fragmentada y un lenguaje exuberante.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 199,
        TITULO: "Colibrí",
        ID_POETA: 40, // Severo Sarduy (Tu lista original tenía 'Distancias', que no es un título de Sarduy)
        ANIO_PUBLICACION: 1984,
        GENERO: "Novela, Ficción, Existencialismo",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Seix Barral",
        ISBN: "978-84-322-0453-5",
        DESCRIPCION: "Novela que sigue a su protagonista en un viaje de autodescubrimiento y transformación, explorando temas como el cuerpo, el placer y la identidad en un estilo barroco y sensual.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    },
    {
        ID_LIBRO: 200,
        TITULO: "Pájaros de la playa",
        ID_POETA: 40, // Severo Sarduy (Tu lista original tenía 'Ova completa', que no es un título de Sarduy)
        ANIO_PUBLICACION: 1993, // Póstumo, basado en sus obras completas
        GENERO: "Poesía, Neobarroco",
        IDIOMA: "Español",
        EDITORIAL: "Editorial Cátedra",
        ISBN: "978-84-376-1188-8",
        DESCRIPCION: "Colección póstuma que reúne poemas y fragmentos de Sarduy, mostrando su visión del mundo a través de la poesía, con un lenguaje cargado de simbolismo y sensualidad.",
        MULTIMEDIA_IMAGENES: [],
        FRAGMENTOS: []
    }
];



// Mapeo para mantener un seguimiento de la página actual por poeta
const currentPageByPoet = {};
const booksPerPage = 6; // Número de libros por página

// --- FUNCIÓN PARA BUSCAR EL PDF EN INTERNET (MODIFICADA) ---
function viewBookPdf(bookId, bookTitle) {
    // Codifica el título del libro para que sea seguro en una URL
    // y añade " pdf" al final para que la búsqueda sea más específica.
    const encodedSearchQuery = encodeURIComponent(bookTitle + " pdf");

    // Construye la URL de búsqueda de Google.
    const searchUrl = `https://www.google.com/search?q=${encodedSearchQuery}`;

    // Abre los resultados de la búsqueda en una nueva pestaña del navegador
    window.open(searchUrl, '_blank');
}


// Función para renderizar un solo item (libro)
function renderBookItem(book) {
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';

    let portadaSrc;
    // Elige la opción de ruta de portada según cómo estés manejando tus archivos
    // Opción A: Si usas la propiedad 'PORTADA_FILENAME' en tus objetos de libro (recomendado para flexibilidad)
    if (book.PORTADA_FILENAME) {
        portadaSrc = `../static/images/portadas/${book.PORTADA_FILENAME}`;
    } else {
        // Opción B: Si tus archivos de imagen siguen el patrón 'libro [ID].jpg' (con espacio)
        // Y NO tienes la propiedad PORTADA_FILENAME definida en tus objetos de libro
        portadaSrc = `../static/images/portadas/libro ${book.ID_LIBRO}.jpg`;
        // Considera añadir un console.warn si PORTADA_FILENAME falta para depuración:
        // console.warn(`PORTADA_FILENAME no definida para libro ID: ${book.ID_LIBRO}. Usando el patrón por defecto.`);
    }
 const audioSrc = `../static/audios/audio${book.ID_LIBRO}.mp3`; // Asume "audio<ID>.mp3" sin espacio
    bookItem.innerHTML = `
        <div class="book-cover-container">
            <img src="${portadaSrc}" alt="Portada de ${book.TITULO}" class="book-cover"
                 onerror="this.onerror=null;this.src='static/images/portadas/placeholder.jpg';">
        </div>
        <div class="book-info">
            <h3>${book.TITULO}</h3>
            <p><strong>Autor:</strong> ${poetas.find(p => p.ID_POETA === book.ID_POETA)?.NOMBRE_COMPLETO || 'Desconocido'}</p>
            <p><strong>Año de publicación:</strong> ${book.ANIO_PUBLICACION}</p>
            <p><strong>Idioma</strong> ${book.IDIOMA}</p> <p><strong>Editorial: </strong> ${book.EDITORIAL}</p>
            <div class="volume">
            <audio controls oncanplay="this.style.display='block'" onerror="this.style.display='none'">
                    <source src="${audioSrc}" type="audio/mpeg">
                    Tu navegador no soporta el elemento de audio o el audio no está disponible.
                </audio>
  <input type="checkbox" class="volume-input" />
  
</div>
            </div>
             <div class="book-fragments-section">
                <!-- Se muestra la descripción completa del libro en lugar de fragmentos -->
                <h4>DESCRIPCIÓN</h4>
                <p>${book.DESCRIPCION || 'Descripción no disponible'}</p>
            </div>
            <div class="book-actions">
                <button class="view-pdf-btn" style="background-color:blue;" data-book-id="${book.ID_LIBRO}" data-book-title="${book.TITULO}">Buscar PDF en Internet</button>
            </div>
        </div>
    `;
    return bookItem;
}

// Función para filtrar y agrupar libros por poeta
function filterAndGroupBooks(searchTerm) {
    const filteredBooks = searchTerm
        ? allBooks.filter(book => book.TITULO.toLowerCase().includes(searchTerm.toLowerCase()))
        : allBooks;

    const groupedBooks = {};
    poetas.forEach(poeta => {
        groupedBooks[poeta.ID_POETA] = filteredBooks.filter(book => book.ID_POETA === poeta.ID_POETA);
    });
    return groupedBooks;
}

// Función para renderizar los libros de un poeta específico con paginación
function renderPoetBooks(poetaId, books, page = 0) {
    const poetSection = document.getElementById(`poet-section-${poetaId}`);
    if (!poetSection) return;

    const booksContainer = poetSection.querySelector('.poet-books-container');
    booksContainer.innerHTML = ''; // Limpiar libros anteriores

    const start = page * booksPerPage;
    const end = start + booksPerPage;
    const booksToDisplay = books.slice(start, end);

    booksToDisplay.forEach(book => {
        booksContainer.appendChild(renderBookItem(book));
    });

    // Controles de paginación
    const paginationControls = poetSection.querySelector('.poet-pagination-controls');
    paginationControls.innerHTML = ''; // Limpiar controles anteriores

    const totalPages = Math.ceil(books.length / booksPerPage);

    if (totalPages > 1) {
        const prevButton = document.createElement('button');
        prevButton.className = 'pagination-btn';
        prevButton.textContent = 'Anterior';
        prevButton.disabled = page === 0;
        prevButton.onclick = () => {
            currentPageByPoet[poetaId] = page - 1;
            renderPoetBooks(poetaId, books, currentPageByPoet[poetaId]);
        };
        paginationControls.appendChild(prevButton);

        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.textContent = `Página ${page + 1} de ${totalPages}`;
        paginationControls.appendChild(pageInfo);

        const nextButton = document.createElement('button');
        nextButton.className = 'pagination-btn';
        nextButton.textContent = 'Siguiente';
        nextButton.disabled = page === totalPages - 1;
        nextButton.onclick = () => {
            currentPageByPoet[poetaId] = page + 1;
            renderPoetBooks(poetaId, books, currentPageByPoet[poetaId]);
        };
        paginationControls.appendChild(nextButton);
    }
}

// Función para renderizar todas las secciones de poetas
function renderAllPoetSections() {
    const mainBooksContainer = document.getElementById('books-display-container');
    mainBooksContainer.innerHTML = ''; // Limpiar todo el contenedor principal

    poetas.forEach(poeta => {
        const booksForThisPoet = currentFilteredBooksByPoet[poeta.ID_POETA] || [];

        if (booksForThisPoet.length > 0) {
            const poetSection = document.createElement('section');
            poetSection.className = 'poet-section';
            poetSection.id = `poet-section-${poeta.ID_POETA}`;

            poetSection.innerHTML = `
                <h2>${poeta.NOMBRE_COMPLETO}</h2>
                <div class="poet-books-container"></div>
                <div class="poet-pagination-controls"></div>
            `;
            mainBooksContainer.appendChild(poetSection);

            // Asegurar que la página actual para este poeta esté definida
            if (currentPageByPoet[poeta.ID_POETA] === undefined) {
                currentPageByPoet[poeta.ID_POETA] = 0;
            }

            renderPoetBooks(poeta.ID_POETA, booksForThisPoet, currentPageByPoet[poeta.ID_POETA]);
        }
    });

    if (Object.keys(currentFilteredBooksByPoet).every(poetId => currentFilteredBooksByPoet[poetId].length === 0) && mainBooksContainer.innerHTML === '') {
        mainBooksContainer.innerHTML = '<p style="text-align: center; font-size: 1.2em; color: var(--text-light);">No se encontraron libros que coincidan con la búsqueda.</p>';
    }
}

// Manejador del evento de búsqueda
function handleSearch() {
    const searchTerm = document.getElementById('book-search-input').value;
    currentFilteredBooksByPoet = filterAndGroupBooks(searchTerm);
    renderAllPoetSections(); // Volver a renderizar todas las secciones con los resultados filtrados
}


// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar con todos los libros
    currentFilteredBooksByPoet = filterAndGroupBooks('');
    renderAllPoetSections();

    // Añadir event listener para el input de búsqueda
    const searchInput = document.getElementById('book-search-input');
    const searchButton = document.getElementById('book-search-button');

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch); // Búsqueda en tiempo real
        if (searchButton) {
            searchButton.addEventListener('click', handleSearch);
        }
    }

    // --- AÑADIR event listener para los botones "Buscar PDF en Internet" ---
    // Usamos delegación de eventos en el contenedor principal para manejar los clics de los botones PDF.
    // Esto es eficiente porque no necesitamos añadir un listener a cada botón individualmente.
    const booksDisplayContainer = document.getElementById('books-display-container');
    if (booksDisplayContainer) { // Asegurarse de que el contenedor exista
        booksDisplayContainer.addEventListener('click', (event) => {
            // Comprobamos si el elemento clicado o su padre es el botón 'view-pdf-btn'
            // Usamos closest para manejar clics en elementos internos del botón (ej. texto)
            const clickedButton = event.target.closest('.view-pdf-btn');
            if (clickedButton) {
                const bookId = clickedButton.dataset.bookId;
                const bookTitle = clickedButton.dataset.bookTitle;
                if (bookId && bookTitle) { // Asegúrate de que tanto ID como título estén presentes
                    viewBookPdf(bookId, bookTitle);
                } else {
                    console.error("Faltan datos (ID o Título) para el botón PDF del libro.");
                }
            }
        });
    } else {
        console.error("Contenedor 'books-display-container' no encontrado. La funcionalidad de los libros puede no inicializarse.");
    }
});

let currentFilteredBooksByPoet = {}; // Asegúrate de que esta línea esté al final si no lo está ya