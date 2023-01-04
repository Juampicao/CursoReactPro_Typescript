import { ProductButtons, ProductCardFinal, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import "../styles/styles.module.css";


export const ShoppingPage = () => {
    

   const { shoppingCart, onProductCountChange}  = useShoppingCart()
    

  return (
      <div className="bg-red">
          <h1> Shopping Page</h1>
          <hr />
          <div style={({display: "flex", flexDirection: "row", flexWrap: "wrap" })}>
                                
            {products?.map(product => (
    
                <ProductCardFinal
                    className="bg-dark text-white"
                    key={product.id}
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
                            onChange={onProductCountChange} //? Si no quiero que el hijo controle, saco esta funcion.
                            value={product.count}
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
           
              
            {/* <div>
                  <code>
                    {JSON.stringify(shoppingCart)}
                  </code>   
            </div> */}
          </div>
      </div>
  )
}
