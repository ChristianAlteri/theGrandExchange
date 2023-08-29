import { useMutation } from "@apollo/client";
import { CREATE_ORDER_WITH_PRODUCTS } from "../utils/mutations";
const dayjs = require('dayjs');

const AddToCartButton = ({ product }) => {
  const [createOrder] = useMutation(CREATE_ORDER_WITH_PRODUCTS);


  const handleCreateOrder = async () => {
    console.log("entering create order ", product );
  
    const purchaseDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const productId = product._id.toString()
  
    const input = {
      purchaseDate: purchaseDate,
      user: product.user_id,
      fulfilled: false,
      productIds: [productId],
    };
    
    try {
      const { data } = await createOrder({ variables: { input } });
      console.log("Created order:", data);
    } catch (error) {
      if (error.networkError) {
        console.error("Network error:", error.networkError);
      } else if (error.graphQLErrors) {
        console.error("GraphQL errors:", error.graphQLErrors);
      } else {
        console.error("Other error:", error);
      }
    }
  };

  return (
    <button
      className="
        bg-gray-100 
        text-blue 
        py-1
        px-1
        rounded-md 
        shadow-md

        "
      onClick={handleCreateOrder}
    >
      Buy now
    </button>
  );
};

export default AddToCartButton;
