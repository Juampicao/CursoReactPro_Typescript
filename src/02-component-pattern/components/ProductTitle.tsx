import { useContext } from "react";
import { ProductContext } from "./ProductCardFinal";

import styles from "../styles/styles.module.css";

export interface IProductTitleProps{
    title?: string,
    subtitle?: string,
    className?: string
    style?: React.CSSProperties

}
// Product Title
export const ProductTitle = ({ title, subtitle, className, style } : IProductTitleProps) => {
    
    const { product } = useContext(ProductContext)

    return (
        <div>
            <h3 className={`${styles.productDescription} ${className} `}
                    style={style}        
                    >
                {title ? title : product.title}
                
            </h3>
            <p> {subtitle? subtitle : ""} </p>
        </div>

    )
}