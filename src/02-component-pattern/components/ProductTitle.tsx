import { useContext } from "react";
import { ProductContext } from "./ProductCardFinal";

import styles from "../styles/styles.module.css";

// Product Title
export const ProductTitle = ({ title }: { title?: string }) => {
    
    const { product } = useContext(ProductContext)

    return (
        <span className={styles.productDescription} >
            {title? title : product.title}
        </span>
    )
}