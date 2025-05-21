import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesContent from './HomeBanner';
import ImageBanner from './ImageBanner';
import InfoForm from './InfoForm';
import Navbar from '../navbar/NavigationBar';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative h-auto w-full overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: '#38C6C6' } }, // Background color
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              enable: true,
              distance: 150,
              opacity: 0.4,
              width: 3,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: { value: 0.6 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
      <Navbar />

      <div className="relative mt-10 z-10 md:flex md:flex-row h-full md:justify-between md:items-end flex flex-col items-center gap-3  text-white text-left md:px-8 md:space-x-16">
        <div className="flex flex-col">
          <ParticlesContent />
          <div className="pl-8 md:pt-6 md:pb-10">
            <ImageBanner />
          </div>
        </div>
        <div className="w-full max-w-md mb-10">
          <InfoForm/>
          {/* <SimpleForm /> */}
        </div>
      </div>
    </div>
  );
};

export default ParticlesBackground;
