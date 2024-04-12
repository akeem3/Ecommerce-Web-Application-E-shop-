"use client";

import { Rating } from "@mui/material";

interface productDetailsProps {
  product: any;
}
//**issues here
const ProductDetails: React.FC<productDetailsProps> = ({ product }) => {
  const productRating =
  product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
  product.reviews.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
    
      <div>
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div>
          <Rating value={productRating} readOnly/>
          <div>{product.reviews.length} reviews</div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
