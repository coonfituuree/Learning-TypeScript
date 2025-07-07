type ProductType = {
    nameOfProduct: string;
    price: number;
    descriprion?: string // Optional
}

const product: ProductType = {
    nameOfProduct: "Macbook Pro 16",
    price: 6999,
}

console.log(`Item: ${product.nameOfProduct}, Price: $${product.price}`);