import React from "react";
import { QUERY_PRODUCTS_BY_IDS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";

const CartItem = ({ product }) => {
  const { _id } = product;
  console.log(product);

  const { loading, data, error } = useQuery(QUERY_PRODUCTS_BY_IDS, {
    // variables: { productIds: [_id] },
    variables: { productIds: "64e735a14ff16d7fa0d61c29" },
  });

  if (error) {
    console.error("Error fetching data:", error);
    return <p>Error loading data</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log("DATA " + data);

  return (
    <div
      className="
        flex
        flex-col
        justify-between
        h-64
        w-64
        border
        border-gray-300
        m-4
        p-4
        rounded-lg
        overflow-hidden"
      onClick={() => console.log(_id)}
    >
      <div className="font-semibold">{_id}</div>
    </div>
  );
};

export default CartItem;
