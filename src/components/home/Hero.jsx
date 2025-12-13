import React from "react";
import { motion } from "framer-motion";
import { GlowingButton } from "../ui/GlowingButton";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const StatsCard = ({ label, value }) => (
  <motion.div
    {...fadeIn}
    whileInView={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.9 }}
    viewport={{ once: true }}
    className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center"
  >
    <div className="text-3xl font-bold text-yellow-400 mb-2">{value}</div>
    <div className="text-gray-300">{label}</div>
  </motion.div>
);

export const StatsSection = () => {
  const stats = [
    { label: "Global Points of Presence", value: "4+" },
    { label: "Anti-DDoS Capacity", value: "2.5 Tbps" },
    { label: "Customer Satisfaction", value: "99.9%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat) => (
        <StatsCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

const GameCard = ({ game, index, total }) => (
  <motion.div
    key={game.id}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="absolute"
    style={{
      right: `${index * 120}px`,
      zIndex: total - index,
    }}
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.img
        src={game.image}
        alt={game.name}
        loading="lazy"
        className="w-48 h-64 object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 hover:-translate-y-2"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-medium">{game.name}</p>
      </div>
    </div>
  </motion.div>
);

const GameShowcase = () => {
  const games = [
    {
      id: 1,
      name: "Minecraft",
      image:
        "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
    },
    {
      id: 2,
      name: "CS:GO",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
    },
    {
      id: 3,
      name: "Rust",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202103/1501/enihR6QwSYiWCNl2HdPfV6R6.png",
    },
    {
      id: 4,
      name: "ARK: SE",
      image:
        "https://external-preview.redd.it/CAA9sdPu0Moxk1jLfnMjiaFTQhBmB7uP7gGE7myUadY.jpg?auto=webp&s=9b35cde1a9af2e771ce33182e2099063b773bda1",
    },
  ];

  return (
    <div className="relative h-full flex items-center">
      {games.map((game, index) => (
        <GameCard
          key={game.id}
          game={game}
          index={index}
          total={games.length}
        />
      ))}
    </div>
  );
};

const FeatureTag = ({ text, delay }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="px-3 py-1 rounded-full bg-slate-900 text-gray-300 text-sm"
  >
    {text}
  </motion.span>
);

const Hero = () => {
  return (
    <header className="relative min-h-screen flex overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.span
              className="inline-block bg-slate-900 border-slate-800 border px-4 py-2 rounded-xl text-yellow-400 text-base sm:text-lg font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              High-Powered Gaming Servers
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                You Create the Gaming Experience
              </span>
              <span className="text-yellow-400">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              New to Gaming? or Have you been Gaming for years? Regardless of
              your experience you will feel the power of our game servers!
            </p>

            <div className="flex flex-wrap gap-3">
              {["Instant Setup", "24/7 Support", "DDoS Protection"].map(
                (tag, index) => (
                  <FeatureTag key={tag} text={tag} delay={0.3 + index * 0.1} />
                )
              )}
            </div>

            <div className="pt-2">
              <Link to="/gaming-servers">
                <GlowingButton className="text-black py-3 px-4">
                  Game Servers $4/month
                </GlowingButton>
              </Link>
            </div>
          </motion.div>

          <div className="hidden md:block relative h-[500px]">
            <GameShowcase />
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <StatsSection />
        </div>
      </div>
    </header>
  );
};

export default Hero;
