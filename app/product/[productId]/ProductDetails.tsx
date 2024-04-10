"use client";

interface productDetailsProps {
  product: any;
}

const ProductDetails: React.FC<productDetailsProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div>{product.name}</div>
    </div>
  );
};

export default ProductDetails;
