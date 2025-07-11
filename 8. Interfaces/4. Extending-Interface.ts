interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra?: string;
}

const movie1: MovieDetails = {
  name: "Avengers",
  ratings: 8.5,
  printMovieInfo(price) {
    return `Movie: ${this.name},Price: ${price} Ratings: ${this.ratings}`;
  },
};

console.log(movie1.printMovieInfo(100));

const movie2: MovieGenra = {
  name: "Avengers",
  ratings: 8.5,
  genra: "Action",
  printMovieInfo(price) {
    return `Movie: ${this.name}, Price: ${price}, Ratings: ${this.ratings}, Genra: ${this.genra}`;
  },
};

console.log(movie2.printMovieInfo(100));
