import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    
    
    const onProductCountChange = ({count, product} : {count: number, product:Product}) => {

        console.log("[onProductCountChangeFn] Count:", count, product)

        setShoppingCart(oldShoppingCart => {

            // if null, appears count: 0.
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
            
            // If Possitive.
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Delete product, not exist. 

            const { [product.id] : toDelete , ...rest} = oldShoppingCart
            console.log({toDelete})
            
            return rest
            
            
        })

    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}