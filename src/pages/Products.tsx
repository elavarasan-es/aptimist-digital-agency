
import ProductCard from '../components/Card';
import { products } from '../constants/Products';
function Products() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              slug={product.slug}
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              avatar={product.avatar}
              contentBgColor={product.bg}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
