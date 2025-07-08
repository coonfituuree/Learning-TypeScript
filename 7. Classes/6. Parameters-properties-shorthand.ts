class Player222 {
  //   public readonly first: string;
  //   public readonly last: string;
  //   private score: number = 0;

  constructor(
    public first111: string,
    public last111: string,
    private score111: number
  ) {}

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const dog1222 = new Player222("Elton", "Steele", 10);
console.log(dog1222.first111);
console.log(dog1222.last111);