import React from 'react';
import showcaseBG from '../assets/images/showcase_bg1.jpg';
import WebsiteCard from '../components/ServiceCard';
import Footer from './Footer';

function Showcase() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${showcaseBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '35vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1 className="text-[3rem] pl-[5%] font-dancing">Showcase</h1>
      </div>
      
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[5%]'>
          <WebsiteCard
            url='https://w3schools.com'
            title="w3schools.com"
            img="https://aptimist-tech.com/wp-content/uploads/2021/09/easygroceries-responsive.png"
            siteLink="https://w3schools.com"
          />
          <WebsiteCard
            url="https://harvard.edu"
            title="harvard.edu"
            img="https://aptimist-tech.com/wp-content/uploads/2021/09/easygroceries-responsive.png"
            siteLink="https://harvard.edu"
          />
          <WebsiteCard
            url="https://nasa.gov"
            title="nasa.gov"
            img="https://aptimist-tech.com/wp-content/uploads/2021/09/easygroceries-responsive.png"
            siteLink="https://nasa.gov"
          />
          <WebsiteCard
            url='https://fonts.google.com'
            title="fonts.google.com"
            img="https://aptimist-tech.com/wp-content/uploads/2021/09/easygroceries-responsive.png"
            siteLink='https://fonts.google.com'
          />
          <WebsiteCard
            url="https://tailwindcss.com"
            title="tailwindcss.com"
            img="https://aptimist-tech.com/wp-content/uploads/2021/09/easygroceries-responsive.png"
            siteLink="https://tailwindcss.com"
          />
          <WebsiteCard
            url="https://reactjs.org"
            title="reactjs.org"
            img="https://aptimist-tech.com/wp-content/uploads/2021/09/easygroceries-responsive.png"
            siteLink="https://reactjs.org"
          />
          <WebsiteCard
            url="https://learn.microsoft.com"
            title="learn.microsoft.com"
            img="https://aptimist-tech.com/wp-content/uploads/2021/09/easygroceries-responsive.png"
            siteLink="https://learn.microsoft.com"
          />
          
        </div>
        
     <Footer/>
    </div>
  );
}

export default Showcase;
