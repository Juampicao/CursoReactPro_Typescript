import { ProductButtons, ProductCardFinal, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";


const product : Product = {
    id: "1",
    title: "Zanahorias",
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
   
  return (
      <div>
          <h1> Shopping Page</h1>
          <hr />
          <div style={({display: "flex", flexDirection: "row", flexWrap: "wrap" })}>
              
              {/* -- - - - Forma Vieja - - - - -   */}
            {/* <ProductCard product={product}>
                <ProductImage img="" />
                <ProductTitle title="Coca Cola 600ml" />
                <ProductButtons increaseBy={increaseBy} counter={counter} />
            </ProductCard>
               */}
              {/* -- - - - Forma Nueva - - - - -   */}
            {/* <ProductCard product={product}>
                <ProductCard.Image img="" />
                <ProductCard.Title title="Coca Cola 600ml" />
                <ProductCard.Buttons increaseBy={increaseBy} counter={counter} />
            </ProductCard> */}
              
            {/* -- - - - Forma Component Compound Pattern Todo en un Archivo - - - - -   */}
            {/* <ProductCardCompleto product={product}>
                <ProductImage  />
                <ProductTitle  />
                <ProductButtons />
            </ProductCardCompleto>
               */}
              

              {/* -- - - - Opcion 1 - Forma Component Compound Pattern Independiente - - - - -   */}
            <ProductCardFinal product={product}>
                <ProductCardFinal.Image />
                <ProductCardFinal.Title /> 
                <ProductCardFinal.Buttons />
            </ProductCardFinal>

              {/* -- - - - Opcion 2- Forma Component Compound Pattern Independiente - - - - -   */}
              {/* Por defecto toma los valores de product.title, pero puedo escribirlo manual.  */}
              
            <ProductCardFinal product={product}>
                <ProductImage />
                <ProductTitle /> 
                <ProductButtons />
            </ProductCardFinal>

              
          </div>
      </div>
  )
}
