import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CustomAccordion from '../../components/Accordian';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function Web() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <div id="Agency" className="pt-10 bg-white ">
        <div className="flex flex-col md:flex md:flex-row md:gap-10 items-center px-[5%]">
          <div className="max-w-[60rem] items-center">
            <h1 className="font-inter pt-5 mb-4 text-4xl leading-relaxed md:text-start text-center font-bold text-gray-500">
              Hosting and Domain {'  '}
              <span className="text-[#38C6C6]">Registration</span>
            </h1>
            <div>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Between the tug of war across platforms, it is vital that
                enterprises choose tailored applications and technology for
                sleek understanding of custom business applications. The
                component that makes things possible for the clients to reach
                their goals is technology. Aptimist delivers tailored solutions
                with leading-edge technologies according to the business
                requirements. A customized business software application lets
                more proximity to a business model, therefore delivering better.
                However, the apprehension relics that how many of all
                contributing this innovative style are meeting the necessities
                and directed enough on appropriate implementations. Aptimist
                knows the route to be successful in business.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                It is important to have technology as a partner to reach great
                heights in business. To face the greatest challenges, our team
                will help you and support from start to end. We fix up foul and
                amplify the slow. Aptimist makes use of brand new, sophisticated
                technologies to increase the business. The steps we take will
                impel power to meet the business. We endow with the power to get
                things done with cutting-edge technologies available out there.
                The product we develop will have an extensive application which
                leads to increased usage.
              </p>
            </div>
          </div>
          <div className="md:w-1/4 w-1/2">
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="https://aptimist-tech.com/wp-content/uploads/2020/06/hosting-and-domains.png"
              alt="software_solutions"
            />
          </div>
        </div>
      </div>

      <div className="px-[5%] bg-white">
        <div className=" bg-white ">
          <CustomAccordion
            panelKey="panel1"
            expanded={expanded}
            onChange={handleChange}
            summary="Static Websites"
            besideIcon={<PriorityHighIcon />}
            details="Static websites are the easiest website design targeting to show the online presence of your business. There is no need of thorny programming in designing both tiny and full-size websites. The static design remains idle with the contents which does not need updating. If you have a business, you can show your business goals and portfolio to the world.
            
            The way your trademark and ethical values are woven into the website design is what makes the website noteworthy. When a client identifies you and your brand at a sheer glance, you have accomplished the zenith of trading.
            We develop all sorts of static websites such as personal or corporate websites. No database or ecommerce system, just a website with your objective is a static website.

            "
          />
        </div>
        <div className=" bg-white ">
          <CustomAccordion
            panelKey="panel2"
            expanded={expanded}
            onChange={handleChange}
            summary="WordPress"
            besideIcon={<PriorityHighIcon />}
            details="Create websites and blogs easily with the web software, Word Press. Aptimist provides the best solutions in Word press with Photoshop document, plug-in development, Word Press customization and template design.

Word Press is a massive hit over the years for a very specific reason, user-friendliness. The business and highest revenue from the blogs and websites are increased. We frequently upgrade innovative techniques and technologies that offer more than pleasing experience to the clients.
"
          />
        </div>
        <div className=" bg-white ">
          <CustomAccordion
            panelKey="panel3"
            expanded={expanded}
            onChange={handleChange}
            summary="Joomla"
            besideIcon={<PriorityHighIcon />}
            details="Joomla is written using PHP and MySQL. It is an award-winning open source content management system. You can develop all sorts of websites, from a simple web application to a complex web application.

You can easily upgrade regarding to your necessities as the content management system is modular.

Whether you need an engaging news ports that has to be updated regularly or rarely occurring events, Aptimist provides you the best website using Joomla content management system. Nowadays different people are using Joomla for different intentions like business websites, small business websites, non-profit and organization website, private or family homepages etc.
"
          />
        </div>
        <div className=" bg-white ">
          <CustomAccordion
            panelKey="panel4"
            expanded={expanded}
            onChange={handleChange}
            summary="Magento"
            besideIcon={<PriorityHighIcon />}
            details="Aptimist provides professional solutions in developing sites with Magento. Our technical experts provide advanced concepts that you can ever visualize. The magnificent themes will inspire your clients and make them feel comfy while making purchase. Aptimist crafts themes using responsive technologies to suite multiple screen resolutions. They are the influential solution for desktops, mobile devices and tablets. If you want to make your store seem brand new, then our themes are your correct alternative. We work with clients to make certain that their Magento websites provide a genuine and considerable return on investment.
            "
          />
        </div>
      </div>

      <div id="digital-solutions" className="py-10 bg-white">
        <div className="flex flex-col-reverse md:flex md:flex-row md:gap-10 items-center px-[5%]">
          <div className="md:w-1/4 w-1/2">
            <img
              src="https://aptimist-tech.com/wp-content/uploads/2020/06/e-commercce.png"
              alt="software_solutions"
            />
          </div>
          <div className="max-w-[60rem]">
            <h1 className="font-inter mb-4 text-center leading-relaxed md:text-start text-4xl font-bold text-gray-500">
              Ecommerce <span className="text-[#38C6C6]">Websites</span>
            </h1>
            <div>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Whether you have new application that has to be created and
                maintained or available software application that has to be
                managed, we provide all sorts of services regarding maintenance.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Maintaining a Software application involves a set of process
                such as time to time alteration to the software after
                deployments. Maintenance is required to correct bugs, enhance
                performance and used in multiple platforms.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                As the evolution of software programming tends to move from one
                programming language to other, the software should be maintained
                regularly.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Our experts, after getting the in-depth knowledge of your
                business applications, will supervise and examine your software
                solution and deliver the support you need to enhance the
                performance of your application.
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-xl pb-5 leading-relaxed px-[5%]">
          We fix up foul and amplify the slow. Aptimist makes use of brand new,
          sophisticated technologies to increase the business. The steps we take
          will impel power to meet the business. We endow with the power to get
          things done with cutting-edge technologies available out there. The
          product we develop will have an extensive application which leads to
          increased usage.
        </p>
        <hr className="border-t border-dashed border-gray-400 mt-6" />
      </div>

      <div id="Agency" className="pt-10 bg-white ">
        <div className="flex flex-col md:flex md:flex-row md:gap-10 items-center px-[5%]">
          <div className="max-w-[60rem] items-center">
            <h1 className="font-inter pt-5 mb-4 text-4xl leading-relaxed md:text-start text-center font-bold text-gray-500">
              Responsive {'  '}
              <span className="text-[#38C6C6]">Design</span>
            </h1>
            <div>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                You need an e-commerce website and Aptimist is the website
                development company. From small stationary shops to largest
                clothing boutique, every business needs an ecommerce solution to
                arrive as a competitor in global markets.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                Aptimist provides economical e-commerce user-friendly website
                with multiple choices. The website we develop will have the best
                design and best solutions.
              </p>

              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                With business growing rapidly, our e-commerce websites lends a
                hand to your enterprises to stay ahead in the club. Get to know
                about the charges and benefits of using e-commerce, we’ll help
                you to setup an appropriate online payment system to make it
                reality.
              </p>
              <p className="text-gray-600 text-xl pb-5 leading-relaxed">
                You have many new and incredible techniques to shrink your
                expenses without avoiding the directing access to big new
                business areas as internet tends to be scalable day by day.
              </p>
            </div>
          </div>
          <div className="md:w-1/4 w-1/2">
            <img
              src="https://aptimist-tech.com/wp-content/uploads/2020/06/responsive.png"
              alt="software_solutions"
            />
          </div>
        </div>
        <p className="text-gray-600 text-xl pb-5 leading-relaxed px-[5%]">
          The advantages of using an e-commerce websites are increased sales,
          low expenses, calculable outcomes, less management and lower risks.
        </p>
        <hr className="border-t border-dashed border-gray-400 mt-6" />
      </div>
    </div>
  );
}

export default Web;
