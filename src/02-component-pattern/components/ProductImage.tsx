import { useContext } from "react";
import { noImage } from "../assets";
import { ProductContext } from "./ProductCardFinal";

import styles from "../styles/styles.module.css";

// Product Image
export const ProductImage = ({ img = "", alt = "" }) => {
    
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
        <img src={imgToShow} alt={alt ? alt : "no hay alt"} className={styles.productImg} />
        </>
    )
}