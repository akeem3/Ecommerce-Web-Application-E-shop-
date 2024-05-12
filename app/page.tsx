import { products } from "@/utils/products";
import Container from "./Components/Container";
import HomeBanner from "./Components/nav/HomeBanner";
import { truncateText } from "@/utils/truncateText";
import ProductCard from "./Components/products/productCard";

export default function Home() {
  return (
    <div>
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
          xl:grid-cols-5 2xl:grid-cols-6 gap-8"
        >
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />; // Adding key prop
          })}
        </div>
      </Container>
    </div>
  );
}