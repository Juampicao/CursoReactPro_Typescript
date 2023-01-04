import { createContext, ReactElement } from "react";
import { coffeeImage, noImage } from "../../assets";

import { useProduct } from "../../hooks/useProduct";
import styles from "../styles/styles.module.css";

// Props  ProductCard
interface Props{
    product: Product
    children?: ReactElement | ReactElement[]
}

// Interfaz Product
interface Product {
    id: string,
    title: string;
    img?: string;
}

// Create Context
interface ProductContextProps{
    counter: number,
    increaseBy: (value: number) => void;
    product: Product

}

const ProductContext = createContext({} as ProductContextProps ); 
const { Provider } = ProductContext; // Proveedor de informacion


// Product Image
export const  ProductImageVieja= ({img = "", alt = ""}) => {
    return (
          <img src={ img? coffeeImage : noImage} alt={alt ? alt : "no hay alt"} className={styles.productImg} />
    )
}

// Product Title
export const  ProductTitleVieja = ({title }: {title: string}) => {
    return (
        <span className={styles.productDescription} >{ title}</span>
    )
}

// Interface Product Button
interface ProductButtonsProps {
    increaseBy: (value: number) => void;
    counter: number

}

//  Product Button
export const ProductButtonsVieja = ({ increaseBy, counter }: ProductButtonsProps) => {
    
    return (
          <div className={styles.buttonsContainer}>
              <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} >
                  -
              </button>
              <div className={styles.countLabel}>
                  {counter}
              </div>
                <button className={styles.buttonAdd} onClick={() => increaseBy(+1)} >
                  +
              </button>
          </div>
    )
}



// Product Card
export const ProductCardVieja = ({ children, product }: Props) => {

    const {counter, increaseBy} = useProduct()
  
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            
        <div className={styles.productCard} >
            {children}
        </div>      
      </Provider>
  )
}

// Vinculando los 3 componentes
ProductCardVieja.Title = ProductTitleVieja;
ProductCardVieja.Image = ProductImageVieja;
ProductCardVieja.Buttons = ProductButtonsVieja;
