/* ChatGPT gives me tasks for interfaces */

/* Task 1 */
interface Book {
  title: string;
  author: string;
  price: number;
  getBookInfo(): string;
}

const book1: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  price: 10.99,
  getBookInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`;
  },
};

console.log(book1.getBookInfo());

/* Task 2 */
interface Book2 {
  title: string;
  author: string;
  price: number;
  getBookInfo(): string;
  applyDiscount(discount: number): number;
}

const book2: Book2 = {
  title: "Martian",
  author: "Andy Weir",
  price: 15.99,
  getBookInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`;
  },
  applyDiscount(discount: number): number {
    const discountedPrice = this.price - (this.price * discount) / 100;
    return parseFloat(discountedPrice.toFixed(2));
  },
};

console.log(
  book2.getBookInfo() + `, Discounted Price: $${book2.applyDiscount(10)}`
);

/* Task 3 */
interface User11 {
  username: string;
  email: string;
  getContactInfo(): string;
}

interface PremiumUser extends User11 {
  subscriptionType: "basic" | "pro" | "enterprise";
  getContactInfo(): string;
}

const premiumUser: PremiumUser = {
  username: "john_doe",
  email: "john_doe@example.com",
  subscriptionType: "pro",
  getContactInfo() {
    return `Username: ${this.username}, Email: ${this.email}, Subscription Type: ${this.subscriptionType}`;
  },
};

console.log(premiumUser.getContactInfo());

/* Task 4 */
interface Movie21 {
  name: string;
  ratings: number;
  year: number;
  isClassic(): boolean;
  getInfo(): string;
}

const movie121: Movie21 = {
  name: "Avengers",
  ratings: 10.0,
  year: 2012,
  isClassic(){
    if(this.year > 2000){
      return true
    }
    else {
      return false
    }
  },
  getInfo() {
    return `Name: ${this.name}, Ratings IMDb: ${this.ratings}, Year: ${this.year}, Classic Movie?: ${this.isClassic() ? "Yes": "No"}`
  },
}

console.log(movie121.getInfo());
