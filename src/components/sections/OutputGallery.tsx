import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const galleryItems = [
  { src: "/images/style-renaissance.png", style: "Renaissance", alt: "Cat as Renaissance noble" },
  { src: "/images/style-watercolor.png", style: "Watercolor", alt: "Dog in watercolor" },
  { src: "/images/style-anime.png", style: "Anime", alt: "Pet in anime style" },
  { src: "/images/style-pop-art.png", style: "Pop Art", alt: "Pet in pop art" },
  { src: "/images/style-memorial.png", style: "Memorial", alt: "Pet memorial portrait" },
  { src: "/images/style-renaissance.png", style: "Oil Painting", alt: "Pet oil painting" },
  { src: "/images/style-watercolor.png", style: "Impressionist", alt: "Pet impressionist" },
  { src: "/images/style-anime.png", style: "Cartoon", alt: "Pet cartoon style" },
  { src: "/images/style-pop-art.png", style: "Pop Art", alt: "Bold pet portrait" },
  { src: "/images/style-renaissance.png", style: "Renaissance", alt: "Dog as royal" },
  { src: "/images/style-watercolor.png", style: "Watercolor", alt: "Cat watercolor" },
  { src: "/images/style-memorial.png", style: "Memorial", alt: "Gentle tribute" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const OutputGallery = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            A gallery of real portraits
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body">
            Every portrait made with PawPrints AI. Click any to create one like
            it.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {galleryItems.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link to="/signup">
                <motion.div
                  className="relative rounded-xl overflow-hidden portrait-frame group cursor-pointer"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 32px rgba(217, 119, 6, 0.15)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  {/* Gold overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-800/20 to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-body text-sm text-white font-medium">
                        {item.style}
                      </span>
                      <span className="font-body text-xs text-white/80 flex items-center gap-1">
                        Create one like this
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OutputGallery;
