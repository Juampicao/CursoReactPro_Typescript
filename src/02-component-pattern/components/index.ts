import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductCardFinal as ProductCardHOC } from "./ProductCardFinal";

// Imports
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";
import { ProductTitle } from "./ProductTitle";
import { ProductTotalAmount } from "./ProductTotalAmount";

// Exports
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductPrice } from "./ProductPrice";
export { ProductTitle } from "./ProductTitle";
export { ProductTotalAmount } from "./ProductTotalAmount";


// Asign new attributes to an object
export const ProductCardFinal: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
    Price: ProductPrice,
    TotalAmount : ProductTotalAmount
})

export default ProductCardFinal;

