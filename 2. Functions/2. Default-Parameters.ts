function greet(person: string = "anonymous") {
    return `Hello ${person}`
}

const greeting = greet();
console.log(greeting);

const greeting_edit = greet("Gala");
console.log(greeting_edit);