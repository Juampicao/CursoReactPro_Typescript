import { useContext } from "react";
import { ProductContext } from "./ProductCardFinal";

import styles from "../styles/styles.module.css";

export interface IProductTitleProps{
    title?: string,
    className?: string
    style?: React.CSSProperties

}
// Product Title
export const ProductTitle = ({ title, className, style } : IProductTitleProps) => {
    
    const { product } = useContext(ProductContext)

    return (
        <span className={`${styles.productDescription} ${className} `}
              style={style}        
        >
            {title? title : product.title}
        </span>
    )
}