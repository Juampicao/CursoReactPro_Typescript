import { useContext } from "react";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";


export interface IProductTotalAmountProps{
    className?: string,
    style?: React.CSSProperties
}

//  Product Button
export const ProductTotalAmount = ({className, style} : IProductTotalAmountProps) => {
    
    const { product , counter} = useContext(ProductContext)
    
    return (
      <div className={` ${className} productPrice `}  style={style} >    
        <p> Monto a Abonar : ${product.price * counter} </p>
      </div>
    )
}