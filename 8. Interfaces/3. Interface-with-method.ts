// Interface with method
interface Person111 {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person1: Person111) {
  console.log(`Hello, ${person1.firstName} ${person1.lastName}`);
  person1.sayHello();
}

const john: Person111 = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
  sayHello() {
    console.log("Hi There");
  },
};

greet(john);


// Interface #3 (Interface with method properties)
interface Song {
  songName: string;
  singerName?: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "Natural",
  singerName: "someone",
  printSongInfo: (songName, singerName) => {
    return `Song ${songName}, Singer ${singerName}`;
  },
};

console.log(song1.printSongInfo("Natural" , "somoene"));
