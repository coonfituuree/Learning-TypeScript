class Player4 {
  public readonly first5: string;
  public readonly last5: string;
  private score: number = 0;

  constructor(first5: string, last5: string) {
    this.first5 = first5;
    this.last5 = last5;
  }

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const dog33 = new Player4("Elton", "Steele");
// console.log(dog1.score);
// dog1.secretMethod();