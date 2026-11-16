import React from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";

const ProductEdit = () => {
  const { id } = useParams();
  return <ProductForm mode="edit" productId={id} />;
};

export default ProductEdit;
