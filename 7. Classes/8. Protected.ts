class Player1111 {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get score(): number {
    return this._score;
  }
}

class SuperPlayer extends Player1111 {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

const dog1221 = new Player1111("Elton", "Steele", 10);