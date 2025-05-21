import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({
  title,
  slug,
  description,
  image,
  avatar,
  contentBgColor = "#38C6C6", // default if not passed
}: {
    slug:string;
  title: string;
  description: string;
  image: string;
  avatar: string;
  contentBgColor?: string; // optional prop
}) {
  return (
    <motion.div
      whileHover="hovered"
      initial="initial"
      className="w-[18rem] h-[22rem] rounded-lg shadow-lg shadow-slate-500 overflow-hidden bg-white relative flex flex-col justify-between"
    >
      {/* Envelope-style image reveal */}
      <div className="h-[200px] overflow-hidden relative"
      style={{backgroundColor:contentBgColor}}
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-auto object-cover absolute top-[-30px]"
          variants={{
            initial: { y: 30 },
            hovered: { y: 0 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      </div>

      {/* Avatar overlapping image and content */}
      <motion.div
        variants={{
          initial: { y: 0, scale: 1 },
          hovered: { y: 0, scale: 1.03 },
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute top-[150px] right-4 z-10 bg-white p-1 rounded-full shadow-md"
      >
        <img
          src={avatar}
          alt={`${title} avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div
        className="h-[12rem] flex flex-col justify-between"
        style={{ backgroundColor: contentBgColor }}
      >
        <div className="p-4 pt-5 flex-1 text-white">
          <h3 className="text-2xl font-thin text-center mb-1">{title}</h3>
          <p className="text-sm font-thin h-15 overflow-hidden">{description?.length > 50 ? description.slice(0,100) : description}</p>
        </div>
        <Link to={`/products/${slug}`} className="px-4 pb-4">
          <button className="flex items-center text-white font-semibold hover:underline ml-auto">
            Read more
            <svg
              className="ml-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;
