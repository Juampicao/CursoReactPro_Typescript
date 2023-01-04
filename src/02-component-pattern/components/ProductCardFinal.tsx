import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";



export const ProductContext = createContext({} as ProductContextProps ); 
const { Provider } = ProductContext; // Proveedor de informacion


// Product Card
export const ProductCardFinal = ({ children, product, className, style, onChange, value }: ProductCardProps) => {

    const {counter, increaseBy} = useProduct( {onChange, product, value} )
    
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            
            <div className={`${styles.productCard} ${className} `}
                style={style} 
            >
            {children}
        </div>      
      </Provider>
  )
}

