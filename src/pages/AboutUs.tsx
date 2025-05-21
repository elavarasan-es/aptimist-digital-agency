
import Footer from './Footer';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <div>

      <div className="relative w-full h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source
      src="https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/Careers/Uber+Website+Loop+1080.webm"
      type="video/webm"
    />
  </video>
  <div className="relative z-10 flex-col flex items-start justify-center p-8 h-full text-white">
    <h1 className="font-inter mb-4 text-4xl leading-relaxed font-bold text-white">
              Creative <span className="text-[#38C6C6]">Agency</span>
            </h1>
            <p className="text-white text-xl mb-4 leading-relaxed">
          Aptimist has been renovating the way how brands converse to the
          customers from time to time. The gears we use and our technical
          experts make software solutions more appropriate than it’s ever been
          with soaring privacy principles. So what would you get from us? The
          unique need for all businesses CUSTOMERS.
        </p>
  </div>
</div>

      <div
        id="about-optimist"
        className="text-center leading-loose px-[15%] py-10 "
      >
        <h1 className="font-inter mb-4 text-4xl font-bold text-gray-400">
          About <span className="text-[#38C6C6]">Optimist</span>
        </h1>
        <p className="text-gray-600 text-xl mb-4 leading-relaxed">
          Aptimist has been renovating the way how brands converse to the
          customers from time to time. The gears we use and our technical
          experts make software solutions more appropriate than it’s ever been
          with soaring privacy principles. So what would you get from us? The
          unique need for all businesses CUSTOMERS.
        </p>
      </div>

      <div id="Agency" className="py-10 ">
        <div className="flex flex-col md:flex md:flex-row md:gap-10 items-center px-[5%]">
          <div className="max-w-[50rem] items-center">
            <h1 className="font-inter mb-4 text-4xl leading-relaxed md:text-start text-center font-bold text-gray-500">
              Creative <span className="text-[#38C6C6]">Agency</span>
            </h1>
            <div>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Your audience will recognize your brand value and see why they
                should choose you over the rest through various campaigns that
                we run for you.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Your brand’s ideals and dreams will be absorbed and mirrored as
                if you were doing it yourself. Contact us right now to help us
                put your brand on top.
              </p>
            </div>
          </div>
          <div className="md:w-3/4 w-1/2">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="https://aptimist-tech.com/wp-content/uploads/2020/06/creative-agency.png"
              alt="software_solutions"
            />
          </div>
        </div>
      </div>

      <div id="digital-solutions" className="py-10 ">
        <div className="flex flex-col-reverse md:flex md:flex-row md:gap-10 items-center px-[5%]">
          <div className="md:w-3/4 w-1/2">
            <img
              src="https://aptimist-tech.com/wp-content/uploads/2020/06/what-we-do.png"
              alt="software_solutions"
            />
          </div>
          <div className="max-w-[50rem]">
            <h1 className="font-inter mb-4 text-center leading-relaxed md:text-start text-4xl font-bold text-gray-500">
              WHAT <span className="text-[#38C6C6]">WE DO ?</span>
            </h1>
            <div>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Digital marketing is setting the tone for a successful business
                with the rapid explosion of Internet users. What’s the catch?
                Cost and compromises it tags along. Building just a website
                becomes an expensive affair and digital marketing as a whole
                could make costs sky rocket. At Aptimist, we provide Digital
                marketing solutions, customized software solutions to manage
                your business and much more at a great price and no compromise
                on your dreams.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                We keep you in the loop at every stage of product development so
                that you can add to the recipe of success and rake in more
                customers while we can rake in on the satisfaction. In short, we
                strive for your success as much as you do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-row gap-5 m-10">
        <div className="border p-4 shadow-lg rounded-md bg-blue-50 shadow-slate-400">
          <h1 className="font-inter mb-4 text-center leading-relaxed md:text-start text-4xl font-bold text-gray-500">
            Who <span className="text-[#38C6C6]">WE Are ?</span>
          </h1>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            Aptimist is a software development and Digital Marketing Solutions
            company with one mission—to offer innovative, ingenious solutions
            that are completely centered around you, our customer.
          </p>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            From optimizing and streamlining ideas on the drawing board, to
            delivering the finished product on time, your needs have always been
            our first priority. This way, the end product will gel with your
            business and expectations.
          </p>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            Mobile Applications, Custom software, Digital Marketing, you name
            it, we’ve done it all at an attractive price tag flourished with
            customer satisfaction which makes clients come back for more.
          </p>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            Aptimist is a software development and Digital Marketing Solutions
            company with one mission—to offer innovative, ingenious solutions
            that are completely centered around you, our customer.
          </p>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            From optimizing and streamlining ideas on the drawing board, to
            delivering the finished product on time, your needs have always been
            our first priority. This way, the end product will gel with your
            business and expectations.
          </p>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            Mobile Applications, Custom software, Digital Marketing, you name
            it, we’ve done it all at an attractive price tag flourished with
            customer satisfaction which makes clients come back for more.
          </p>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            We keep you in the loop at every stage of product development so
            that you can add to the recipe of success and rake in more customers
            while we can rake in on the satisfaction. In short, we strive for
            your success as much as you do.
          </p>
        </div>

        <div className="border p-4 shadow-lg rounded-md bg-blue-50 shadow-slate-400">
          <h1 className="font-inter mb-4 text-center leading-relaxed md:text-start text-4xl font-bold text-gray-500">
            <span className="text-[#38C6C6]">The Aptimist Vision</span>
          </h1>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            The Aptimist Vision is to work with ventures from varied areas and
            be recognized as a leading provider of technology and solutions
          </p>

          <h1 className="font-inter mb-4 text-center leading-relaxed md:text-start text-4xl font-bold">
            <span className="text-[#38C6C6]">The Aptimist Mission</span>
          </h1>
          <p className="text-gray-600 text-xl pb-5 leading-relaxed">
            Putting You on the top of your game Yes, our aim is to boost your
            sustainability and visibility through innovative software and
            Digital Marketing solutions that make you rank higher on search
            engine results.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
