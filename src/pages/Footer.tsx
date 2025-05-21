
interface FooterProps{
  style?:object
}

function Footer({style}:FooterProps) {
  return (
    <footer className="bg-gray-100" >
      {/* Grid layout */}
      <div style={style} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#38C6C6] p-6">
        <div className="max-w-[15rem]">
          <h1 className="text-2xl font-semibold mb-2 text-white">Office Address</h1>
          <p className="font-poppins text-gray-600">
            48/2, 11th Ave, Ashok Nagar, Chennai, Tamil Nadu 600083
          </p>
        </div>

        <div className="max-w-[15rem]">
          <h1 className="text-2xl font-semibold mb-2 text-white">Services</h1>
          <p className="font-poppins text-gray-600">
            Website Development, Branding, UI/UX, Digital Marketing
          </p>
        </div>

        <div className="max-w-[15rem]">
          <h1 className="text-2xl font-semibold mb-2 text-white">Products</h1>
          <p className="font-poppins text-gray-600">
            Task Manager, CRM Tool, Career Portal, AI Tools
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-2 text-white">Our Location</h1>
          <div className="w-full h-[200px] rounded-md overflow-hidden">
            <iframe
              title="Google Map - Aptimist"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.062505061404!2d80.20866257454752!3d13.031691613559033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526780fb86b521%3A0x48f1268ac3c11248!2sAptimist%20Techno%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747477248683!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-gray-200 text-center text-lg text-gray-600 py-4">
        © {new Date().getFullYear()} Aptimist Techno Solutions Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
