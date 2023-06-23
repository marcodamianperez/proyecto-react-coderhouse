const books = [
  {
    id: "1",
    idCat: "1",
    stock: 7,
    name: "El Gato Negro",
    author: "E. Allan Poe",
    price: "1700",
    picture: "/proyecto-react-coderhouse/book-covers/el-gato-negro.jpg",
    editorial: "Penguin Books",
    pages: "20",
    genre: ["terror", "ficción gótica"],
    sinopsis:
      '"El Gato Negro" de Allan Poe es un inquietante relato que narra la historia de un hombre aparentemente común y respetable, quien se ve atormentado por la presencia de un gato negro en su vida. A medida que avanza la trama, el felino se convierte en un símbolo de la culpa y la perdición del protagonista, quien se sumerge en una espiral descendente de locura y violencia. Esta breve pero intensa historia explora temas como la culpabilidad, la obsesión y las consecuencias devastadoras de nuestros actos.',
  },
  {
    id: "2",
    idCat: "2",
    stock: 6,
    name: "El Wendigo",
    author: "Algernon Blackwood",
    price: "2100",
    picture: "/proyecto-react-coderhouse/book-covers/el-wendigo.jpg",
    editorial: "Dover Publications",
    pages: "150",
    genre: ["terror", "ficción sobrenatural"],
    sinopsis:
      '"El Wendigo" de Algernon Blackwood es un relato sobrenatural que transporta al lector a los bosques inhóspitos de Canadá. La historia sigue a un grupo de cazadores y excursionistas que se adentran en el territorio salvaje, donde comienzan a experimentar una creciente sensación de terror y opresión. A medida que avanzan, descubren la existencia de una antigua y malévola entidad conocida como el Wendigo, un espíritu depredador que se alimenta de los seres humanos. La narrativa evoca una atmósfera llena de misterio y peligro, explorando los límites de la cordura y el enfrentamiento con lo desconocido en medio de los parajes salvajes de la naturaleza.',
  },
  {
    id: "3",
    idCat: "1",
    stock: 4,
    name: "La rebelión de Atlas",
    author: "Ayn Rand",
    price: "3500",
    picture: "/proyecto-react-coderhouse/book-covers/la-rebelion-de-atlas.jpg",
    editorial: "Signet",
    pages: "1200",
    genre: ["novela filosófica", "ficción política"],
    sinopsis:
      '"La Rebelión de Atlas" de Ayn Rand es una novela épica que se desarrolla en un futuro distópico. En este mundo, la sociedad se encuentra al borde del colapso, y los líderes y empresarios más talentosos comienzan a desaparecer misteriosamente. La trama se centra en Dagny Taggart, una mujer valiente y emprendedora, quien lucha por mantener viva su empresa ferroviaria en medio de la decadencia generalizada. A medida que la historia avanza, Dagny se encuentra con John Galt, un enigmático personaje que lidera una rebelión de los productores y creadores más destacados contra un gobierno opresivo. A través de una mezcla de intriga, romance y filosofía, la novela explora temas como la libertad individual, el poder del espíritu humano y la importancia de la razón en un mundo en crisis.',
  },
  {
    id: "4",
    idCat: "2",
    stock: 9,
    name: "Cosmos",
    author: "Carl Sagan",
    price: "2600",
    picture: "/proyecto-react-coderhouse/book-covers/cosmos.jpg",
    editorial: "Random House",
    pages: "350",
    genre: ["divulgación científica", "ensayo"],
    sinopsis:
      '"Cosmos" de Carl Sagan es un libro que nos invita a realizar un fascinante viaje por el vasto cosmos y explorar los misterios del universo. A través de una narrativa cautivadora y accesible, Sagan nos introduce a los conceptos científicos fundamentales, desde la astronomía y la astrofísica hasta la biología y la evolución. Con un enfoque interdisciplinario, el autor nos muestra la belleza y la complejidad del cosmos, y nos lleva a reflexionar sobre nuestro lugar en él. A lo largo de la obra, Sagan expone su asombro por la inmensidad y la diversidad del universo, así como su pasión por el método científico y la búsqueda de conocimiento. "Cosmos" es un libro que nos invita a maravillarnos con el cosmos y a comprender la importancia de la ciencia en nuestra comprensión del mundo que nos rodea.',
  },
  {
    id: "5",
    idCat: "1",
    stock: 12,
    name: "El arte de la guerra",
    author: "Sun Tzu",
    price: "1200",
    picture: "/proyecto-react-coderhouse/book-covers/el-arte-de-la-guerra.jpg",
    editorial: "HarperOne",
    pages: "100",
    genre: ["estrategia", "filosofía"],
    sinopsis:
      '"El Arte de la Guerra" de Sun Tzu es una obra clásica que ofrece una visión profunda y atemporal sobre la estrategia militar. En este libro, Sun Tzu despliega su sabiduría y experiencia en el campo de batalla, presentando principios estratégicos que van más allá del ámbito militar y se aplican a diversas situaciones de la vida cotidiana. Con un estilo conciso y directo, el autor explora conceptos como el liderazgo, la planificación estratégica, el conocimiento del enemigo y la importancia de la adaptación. A través de sus enseñanzas, Sun Tzu destaca la importancia de la astucia, la diplomacia y el ingenio en la obtención de la victoria. "El Arte de la Guerra" es una obra clásica que ha perdurado a lo largo del tiempo y sigue siendo relevante en el estudio de la estrategia y el liderazgo, tanto en el ámbito militar como en otros aspectos de la vida.',
  },
  {
    id: "6",
    idCat: "2",
    stock: 0,
    name: "El sabueso de los Baskerville",
    author: "Arthur Conan Doyle",
    price: "2100",
    picture:
      "/proyecto-react-coderhouse/book-covers/el-sabueso-de-los-baskerville.jpg",
    editorial: "Wordsworth Editions",
    pages: "300",
    genre: ["misterio", "novela detectivesca"],
    sinopsis:
      '"El Sabueso de los Baskerville" de Arthur Conan Doyle es una apasionante novela de misterio que sigue las investigaciones del famoso detective Sherlock Holmes y su leal compañero, el Dr. Watson. La trama se desarrolla en los páramos sombríos y desolados de Dartmoor, donde la antigua maldición de los Baskerville acecha a la última generación de la familia. Un enorme sabueso sobrenatural se cree que está detrás de las muertes misteriosas que han plagado a la familia a lo largo de los años. Holmes y Watson se sumergen en un intrincado enigma, enfrentando peligros y revelando secretos ocultos mientras tratan de descubrir la verdad detrás de los acontecimientos sobrenaturales. La novela es un cautivador ejercicio de suspense, donde se exploran temas como la superstición, el miedo y el poder del razonamiento lógico en la resolución de un enigma aparentemente sobrenatural.',
  },
];

export const getBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 2000);
  });
};

export const getBooksByCategory = (idCat) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const booksByCategory = books.filter((book) => book.idCat === idCat);
      resolve(booksByCategory);
    }, 2000);
  });
};

export const getBook = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = books.find((book) => book.id === id);
      resolve(book);
    }, 2000);
  });
};
