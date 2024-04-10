import Container from "@/app/Components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
interface Iparams {
  productId: string;
}

const Product = ({ params }: { params: Iparams }) => {
  console.log("params", params);
  product;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
