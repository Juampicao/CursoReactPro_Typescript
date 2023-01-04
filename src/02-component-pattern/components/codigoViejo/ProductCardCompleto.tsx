import { createContext, ReactElement, useContext } from "react";
import { noImage } from "../../assets";
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
export const ProductImage = ({ img = "", alt = "" }) => {
    
    const { product } = useContext(ProductContext)

    let imgToShow: string; 

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }


    return (
          <img src={ imgToShow } alt={alt ? alt : "no hay alt"} className={styles.productImg} />
    )
}

// Product Title
export const ProductTitle = ({ title }: { title?: string }) => {
    
    const { product } = useContext(ProductContext)

    return (
        <span className={styles.productDescription} >
            {title? title : product.title}
        </span>
    )
}



//  Product Button
export const ProductButtons = () => {
    
    const { increaseBy, counter } = useContext(ProductContext)
    
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
export const ProductCardCompleto = ({ children, product }: Props) => {

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
ProductCardCompleto.Title = ProductTitle;
ProductCardCompleto.Image = ProductImage;
ProductCardCompleto.Buttons = ProductButtons;
