import React from "react";
import { motion } from "framer-motion";

const features = [
  "Instant Setup",
  "DDoS Protection",
  "24/7 Support",
  "Performance SSD",
  "Custom Control Panel",
  "Backup System",
];

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const FeatureItem = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.5) }} 
    viewport={{ once: true, margin: "-50px" }}
    className="flex items-center space-x-2"
  >
    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
    <span className="text-gray-300 text-sm">{feature}</span>
  </motion.div>
);

const ShowcasePanel = () => {
  return (
    <section className="py-16 sm:py-32 bg-slate-950 border-t border-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            {...fadeInLeft}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium Game Server Hosting
              <span className="text-yellow-400">.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              Experience lag-free gaming with our high-performance servers. We
              provide dedicated resources, advanced DDoS protection, and 24/7
              expert support to ensure your game servers run smoothly.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {features.map((feature, index) => (
                <FeatureItem key={feature} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            {...fadeInRight}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden group">
              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <img
                src="https://placehold.co/600x400"
                alt="Game Server Hosting"
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcasePanel;
