import { useEffect, useState } from "react";
import { ProductButtons, ProductCardFinal, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import "../styles/styles.module.css";

const product1 : Product = {
    id: "1",
    title: "Zanahorias",
    img: "./coffee-mug.png"
}

const product2 : Product = {
    id: "2",
    title: "Manzanas",
    img: "./coffee-mug.png"
}

const products: Product[] = [product1, product2]

// Interface ProductCard
interface ProductInCart extends Product{
    count: number
}

export const ShoppingPage = () => {
    

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    
    
    const onProductCountChange = ({count, product} : {count: number, product:Product}) => {

        console.log("[onProductCountChangeFn] Count:", count, product)

        setShoppingCart(oldShoppingCart => {
        
            if (count === 0) {
                
                const { [product.id] : toDelete , ...rest} = oldShoppingCart

                console.log({toDelete})
                return { ...rest }
            }   
            
            return {
                ...oldShoppingCart,
                [ product.id ] : {...product,count}
            }
        })

        console.log(shoppingCart)
    }

    useEffect(() => {
      console.log("cambio a ", shoppingCart.count)
    }, [shoppingCart.count])
    

  return (
      <div className="bg-red">
          <h1> Shopping Page</h1>
          <hr />
          <div style={({display: "flex", flexDirection: "row", flexWrap: "wrap" })}>
                                
            {products?.map(product => (
    
                <ProductCardFinal
                    className="bg-dark text-white"
                    product={product}
                    onChange={onProductCountChange}
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    {/* <ProductImage className="custom-image"/> */}
                    <ProductTitle  className="text-white bg-dark" /> 
                    <ProductButtons className="custom-buttons" />
                </ProductCardFinal>
            ))}              

              
            <div className="shopping-cart">
                {
                    Object.entries( shoppingCart).map(([key, product]) => (
                        
                        <ProductCardFinal
                            product={product}
                            key={key}
                            className="bg-dark text-white"
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductTitle
                                className="text-white bg-dark"
                                title={product.title}
                                subtitle={`Cantidad: ${product.count}`}
                            /> 
                            <ProductButtons className="custom-buttons"
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        />
                        </ProductCardFinal>
                    ))
                }
            </div>
           
              
            <div>
                  <code>
                    {JSON.stringify(shoppingCart)}
                  </code>   
            </div>
          </div>
      </div>
  )
}
