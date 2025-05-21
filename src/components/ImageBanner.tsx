

function ImageBanner() {
  const items = [
    {
      title: 'E-commerce',
      img: 'https://aptimist-tech.com/wp-content/uploads/2020/06/banner-ecommerce-icon.png',
      bgColor: 'pink',
    },
    {
      title: 'Custom web apps',
      img: 'https://aptimist-tech.com/wp-content/uploads/2020/06/banner-custom-web-app-icon.png',
      bgColor: 'red',
    },
    {
      title: 'SEO/Digital Marketing',
      img: 'https://aptimist-tech.com/wp-content/uploads/2020/06/banner-seo-icon.png',
      bgColor: 'purple',
    },
    {
      title: 'Website development',
      img: 'https://aptimist-tech.com/wp-content/uploads/2020/06/banner-digital-marketing-icon.png',
      bgColor: 'orange',
    },
    {
      title: 'Mobile Apps',
      img: 'https://aptimist-tech.com/wp-content/uploads/2020/06/banner-mobile-app-icon.png',
      bgColor: 'yellow',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:gap-8 gap-4 mt-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center opacity-0 animate-fadeInLeft"
          style={{
            animationDelay: `${index * 0.3}s`,
            animationFillMode: 'forwards',
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-16 h-16 rounded-full mb-2"
            style={{ backgroundColor: item.bgColor }}
          />
          <h2 className="text-center text-sm font-medium">{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default ImageBanner;
