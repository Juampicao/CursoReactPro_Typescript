import { useContext } from "react";
import { noImage } from "../assets";
import { ProductContext } from "./ProductCardFinal";

import styles from "../styles/styles.module.css";

export interface IProductImageProps{
    img?: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties

}

// Product Image
export const ProductImage = ({ img = "", alt = "", className, style} : IProductImageProps ) => {
    
    const { product } = useContext(ProductContext)

    let imgToShow: string; 

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage // noImage
    }


    return (
        <>
        <img src={imgToShow} alt={alt ? alt : "no hay alt"} className={`${styles.productImg} ${className}`} style={style} />
        </>
    )
}