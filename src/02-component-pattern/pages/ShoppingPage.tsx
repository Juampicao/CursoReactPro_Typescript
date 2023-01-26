import { ProductButtons, ProductCardFinal, ProductTitle, ProductTotalAmount } from "../components";
import { ProductPrice } from "../components/ProductPrice";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import "../styles/styles.module.css";


export const ShoppingPage = () => {
    

   const { shoppingCart, onProductCountChange}  = useShoppingCart()
    

  return (
        <div className="container">
            <h1> Mozo</h1>
            <hr />
            <div style={({display: "flex", flexDirection: "row", flexWrap: "wrap" })}>
                                
                {products?.map(product => (
        
                    <ProductCardFinal
                        className="bg-dark text-white container"
                        key={product.id}
                        product={product}
                        onChange={onProductCountChange}
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        {/* <ProductImage className="custom-image"/> */}
                        <ProductPrice/>
                        <ProductTitle  className="text-white bg-dark" /> 
                        <ProductButtons className="custom-buttons" />
                    </ProductCardFinal>
                ))}      
              
            </div>

          <div className="shopping-cart">
              <h1> Cocina </h1>
              <hr />
                {
                    Object.entries( shoppingCart).map(([key, product]) => (
                        
                        <ProductCardFinal
                            product={product}
                            key={key}
                            className="bg-slate text-white"
                            //Delete or comment onChange & value for not give control to the child. 
                            onChange={onProductCountChange} 
                            value={product.count}
                        >
                            
                            <ProductTitle
                                className="bg-slate text-black text-center"
                                title={product.title}
                                subtitle={`Cantidad: ${product.count}`}
                            /> 
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                  display: "flex",
                                justifyContent: "center"
                            }}
                            />  
                            <ProductTotalAmount/>
                        </ProductCardFinal>
                    ))
                }
            </div>
           
            <div className="" >
                <h1> Caja </h1>
                <hr />

                {
                    Object.entries( shoppingCart).map(([key, product]) => (
                        
                        <ProductCardFinal
                            product={product}
                            key={key}
                            className="bg-blue text-white container"
                           
                            //Delete or comment onChange & value for not give control to the child. 
                            onChange={onProductCountChange} 
                            value={product.count}
                        >
                            <ProductTitle
                                className="text-blue text-center "
                                title={product.title}
                            /> 
                            <ProductTotalAmount/>
                          
                        </ProductCardFinal>
                    ))
                }
            </div>
              
    </div>
  )
}
