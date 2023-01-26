import { useContext } from "react";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";


export interface IProductPriceProps{
    className?: string,
    style?: React.CSSProperties
    price?: number
}

//  Product Button
export const ProductPrice = ({className, style, price} : IProductPriceProps) => {
    
    const { product , counter} = useContext(ProductContext)
    
    return (
      <div className={` ${className} productPrice `}  style={style} >
        <div>
          {price ? `Precio Unitario: ${price}` : <> <p> <span className="font-bold"> Precio Unitario:  $</span> { product.price} </p> </>}
        </div>
    
        <p> Cantidad : { counter} unidades </p>
      </div>
    )
}