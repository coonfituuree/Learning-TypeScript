class Player1 {
    readonly first1: string;
    readonly last1: string;
    score1: number = 0;

    constructor (first1: string, last1: string) {
        this.first1 = first1;
        this.last1 = last1;
    }
}
const dog11 = new Player1("Elton", "Steele");
console.log(dog11.first1);
