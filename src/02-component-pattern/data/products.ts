import { Product } from "../interfaces/interfaces"

export const product1 : Product = {
    id: "1",
    title: "Pancho",
    img: "./coffee-mug.png",
    price: 970

}

export const product2 : Product = {
    id: "2",
    title: "Hamburguesa",
    img: "./coffee-mug.png",
    price: 1490
}

export const product3 : Product = {
    id: "3",
    title: "Ñoquis",
    img: "./coffee-mug.png",
    price: 1250
}

export const products: Product[] = [product1, product2, product3]