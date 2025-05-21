
import { useParams } from 'react-router-dom';
import { products } from '../constants/Products';

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div> No Product Found!!!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="font-inter mb-4 text-4xl leading-relaxed md:text-start font-bold text-gray-500">
        <span className="text-[#38C6C6]">{product.title}</span>
      </h1>
      <div className="flex-col md:flex md:flex-row md:max-w-[60rem]">
        <div className="w-1/2 ">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-lg shadow-slate-400"
          />
        </div>
        <p className="font-thin text-lg md:w-[45rem] ">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
