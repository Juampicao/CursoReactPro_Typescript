import { ReactElement } from "react";

// Props  ProductCard
export interface ProductCardProps{
    product: Product
    children?: ReactElement | ReactElement[]
}

// Interfaz Product
export interface Product {
    id: string,
    title: string;
    img?: string;
}

// Create Context
export interface ProductContextProps{
    counter: number,
    increaseBy: (value: number) => void;
    product: Product

}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}