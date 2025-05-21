import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout';
import Home from '../../pages/Home';
import Careers from '../../pages/Careers';
import AboutUs from '../../pages/AboutUs';
import Products from '../../pages/Products';
import Services from '../../pages/services/Services';
import Showcase from '../../pages/Showcase';
import ContactUs from '../../pages/ContactUs';
import ProductLayout from '../../layouts/ProductLayout';
import ProductDetails from '../../components/ProductDetails';
import Software from '../../pages/services/Software';
import Web from '../../pages/services/Web';
import Digital from '../../pages/services/Digital';
import Mobile from '../../pages/services/Mobile';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'careers', element: <Careers /> },
      { path: 'about-us', element: <AboutUs /> },
      {
        path: 'products',
        element: <ProductLayout />,
        children: [
          { index: true, element: <Products /> },
          { path: ':slug', element: <ProductDetails /> },
        ],
      },
      {
        path: 'services',
        element: <Services />,
        children: [
          { path: 'software-solutions', element: <Software /> },
          { path: 'web-solutions', element: <Web /> },
          { path: 'digital-solutions', element: <Digital /> },
          { path: 'mobile-solutions', element: <Mobile /> },
        ],
      },
      { path: 'showcase', element: <Showcase /> },
      { path: 'contact-us', element: <ContactUs /> },
    ],
  },
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
];
const router = createBrowserRouter(routes);

export default router;
