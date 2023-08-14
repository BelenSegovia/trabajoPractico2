"use strict";
/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  constructor(isbn, titulo, autor, numeroDePaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
  }
  // GETTER (leer) Y SETTER (escribir)
  getISBN() {
    return this.isbn;
  }
  setISBN(ISBN) {
    this.isbn = ISBN;
  }
  getTitulo() {
    return this.titulo;
  }
  setTitulo(titulo) {
    this.titulo = titulo;
  }
  getAutor() {
    return this.autor;
  }
  setAutor(autor) {
    this.autor = autor;
  }
  getNumeroDePaginas() {
    return this.numeroDePaginas;
  }
  setNumeroDePaginas(numeroDePaginas) {
    this.numeroDePaginas = numeroDePaginas;
  }
  // Mostrar Libro
  mostrarLibro() {
    console.log(
      `El libro: ${this.titulo}, con ISBN ${this.isbn}. Creado por ${this.autor} tiene ${this.numeroDePaginas} páginas`
    );
  }
}

// 2 Objetos Libro

const libro1 = new Libro(
  9789871201280,
  "Morir para ser Yo",
  "Anita Moorjani",
  256
);
const libro2 = new Libro(
  9788416029747,
  "Romper la barrera del NO",
  "Chris Voss",
  352
);

libro1.mostrarLibro();
libro2.mostrarLibro();

// Cuál de los 2 tiene más páginas

if (libro1.getNumeroDePaginas() > libro2.getNumeroDePaginas()) {
  console.log(
    `El libro ${libro1.getTitulo()} tiene más páginas que el libro ${libro2.getTitulo()}`
  );
} else if (libro1.getNumeroDePaginas() < libro2.getNumeroDePaginas()) {
  console.log(
    `El libro ${libro2.getTitulo()} tiene más páginas que el libro ${libro1.getTitulo()}`
  );
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas");
}
