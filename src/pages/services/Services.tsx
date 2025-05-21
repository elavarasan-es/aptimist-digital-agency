import Footer from '../Footer';
import software from '../../assets/icons/software.png';
import digital from '../../assets/icons/digital_icon.png';
import mobile from '../../assets/icons/mob_icon.png';
import web from '../../assets/icons/web.png';
import services_bg from '../../assets/images/services_bg.jpg';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
function Services() {
  const location = useLocation();
  const page = location.pathname;

  let title = 'Our Services';

  if (page === '/services/software-solutions') {
    title = 'Software Solutions';
  } else if (page === '/services/web-solutions') {
    title = 'Web Solutions';
  } else if (page === '/services/digital-solutions') {
    title = 'Digital Solutions';
  } else if (page === '/services/mobile-solutions') {
    title = 'Mobile Solutions';
  }

  return (
    <div
      style={{
        backgroundImage: `url(${services_bg})`,
        backgroundAttachment: 'fixed', // this keeps the image fixed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative h-[20rem] flex items-center p-4 bg-black/40 backdrop-blur-[1px] text-white font-extrabold text-[40px] font-inter">
        <h1>{title}</h1>
        <div className="absolute bottom-[-10%] flex shadow-lg shadow-slate-500 items-center gap-10 text-lg p-4 mx-[15%] text-black font-semibold bg-white rounded-full ">
          <NavLink
            to={'/services/software-solutions'}
            className="flex gap-3 items-center hover:text-orange-400 focus:text-orange-600 cursor-pointer"
            end
          >
            <img
              src={software}
              alt="software-solutions"
              className="w-9 h-9 cursor-pointer hover:bg-orange-400 focus:text-orange-600 rounded-full text-sm"
            />
            <div className="hidden md:block">Sofware Solutions</div>
          </NavLink>

          <NavLink
            to={'/services/web-solutions'}
            className="flex gap-3 items-center hover:text-blue-600 focus:text-blue-600 cursor-pointer"
          >
            <img
              src={web}
              className="w-9 h-9 cursor-pointer hover:bg-blue-400 focus:text-blue-600 rounded-full text-sm"
            />
            <div className="hidden md:block">Web Solutions</div>
          </NavLink>

          <NavLink
            to={'/services/digital-solutions'}
            className="flex gap-3 items-center hover:text-purple-600 focus:text-purple-600 cursor-pointer"
          >
            <img
              src={digital}
              alt="software-solutions"
              className="w-9 h-9 cursor-pointer hover:bg-purple-400 focus:text-purple-600 rounded-full text-sm"
            />
            <div className="hidden md:block">Digital Solutions</div>
          </NavLink>

          <NavLink
            to={'/services/mobile-solutions'}
            className="flex gap-3 items-center hover:text-pink-600 focus:text-pink-600 cursor-pointer"
          >
            <img
              src={mobile}
              alt="software-solutions"
              className="w-9 h-9 cursor-pointer hover:bg-pink-400 text-pink-400 focus:text-pink-600 rounded-full text-sm"
            />
            <div className="hidden md:block">Mobile Solutions</div>
          </NavLink>
        </div>
      </div>
      <Outlet />
      <div>
        <Footer style={{ paddingTop: 50 }} />
      </div>
    </div>
  );
}

export default Services;
