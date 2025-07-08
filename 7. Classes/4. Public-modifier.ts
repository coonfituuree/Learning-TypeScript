class Player3 {
  public readonly first2: string;
  public readonly last2: string;
  public score2: number = 0;

  constructor(first2: string, last2: string) {
    this.first2 = first2;
    this.last2 = last2;
  }
}

const dog12 = new Player3("Elton", "Steele");
console.log(dog12.score2);
