import SelectSize from "./SelectSize";

const ProductDetailsCard = ({product}) => {
    return ( 
        <>
        <div className="text-l font-semibold">{product.description}</div>
        <SelectSize />
        </>
     );
}
 
export default ProductDetailsCard;