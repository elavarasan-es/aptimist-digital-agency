
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar/NavigationBar';
import ParticlesBackground from '../components/Canvas';

function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {isHomePage ? (
        // ✅ Home Page Layout with Particles
        <section className="relative w-full">
          <ParticlesBackground />
          
        </section>
      ) : (
        // ✅ Other Pages with Normal Navbar
        <header className="sticky top-0 z-50 shadow-md shadow-slate-200">
          <Navbar />
        </header>
      )}

      {/* Page Content */}
      <main className="relative bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
