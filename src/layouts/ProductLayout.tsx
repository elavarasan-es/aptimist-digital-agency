import { Outlet } from 'react-router-dom';
import product_img from '../assets/images/bg_3.jpg';
import Footer from '../pages/Footer';

function ProductLayout() {
  return (
    <div>
      <div
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${product_img})`,
        }}
      >
        <h1 className="font-inter mb-4 text-5xl leading-relaxed  text-center font-bold text-white">
          Our <span className="text-[#38C6C6]">Products</span>
        </h1>
      </div>
      <main>
        <Outlet />
      </main>
      <footer className='pt-20'>
        <Footer />
      </footer>
    </div>
  );
}

export default ProductLayout;
