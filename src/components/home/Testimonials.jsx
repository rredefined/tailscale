import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Customer 1",
    role: "Minecraft Server Owner",
    image: "https://placehold.co/100x100",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur molestiae ipsam labore ex quia. Neque facilis, itaque odit sunt laudantium earum aperiam corrupti reprehenderit dolore dolores quae harum tempore!",
  },
  {
    id: 2,
    name: "Customer 2",
    role: "Minecraft Server Owner",
    image: "https://placehold.co/100x100",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur molestiae ipsam labore ex quia. Neque facilis, itaque odit sunt laudantium earum aperiam corrupti reprehenderit dolore dolores quae harum tempore!",
  },
  {
    id: 3,
    name: "Customer 3",
    role: "Minecraft Server Owner",
    image: "https://placehold.co/100x100",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur molestiae ipsam labore ex quia. Neque facilis, itaque odit sunt laudantium earum aperiam corrupti reprehenderit dolore dolores quae harum tempore!",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const RatingStars = ({ rating }) => (
  <div className="flex space-x-1 mb-4">
    {[...Array(rating)].map((_, index) => (
      <StarIcon
        key={index}
        className="w-4 h-4 text-yellow-400 fill-yellow-400"
        aria-hidden="true"
      />
    ))}
  </div>
);

const ReviewCard = ({ name, role, image, rating, content }) => (
  <div className="bg-slate-900 rounded-xl p-4 sm:p-6 border border-gray-800 h-full flex flex-col">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center space-x-4">
        <div className="relative flex-shrink-0">
          <img
            src={image}
            alt={name}
            width={48}
            height={48}
            loading="lazy"
            className="w-12 h-12 rounded-full object-cover bg-slate-800"
          />
        </div>
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>

    <RatingStars rating={rating} />

    <p className="text-gray-300 leading-relaxed text-sm sm:text-base line-clamp-6">
      {content}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-32 bg-slate-950 border-t border-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
        <motion.div
          {...fadeInUp}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Our Clients Say
            <span className="text-yellow-400">.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.1, 0.3),
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ReviewCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
