import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Helmet from "react-helmet";
const games = [
  {
    id: 1,
    name: "Counter-Strike 2",
    price: 14.99,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg",
    category: "FPS",
    href: "/counterstrike",
  },
  {
    id: 2,
    name: "Minecraft",
    price: 9.99,
    image:
      "https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg",
    category: "Survival",
    href: "/minecraft",
  },
  {
    id: 3,
    name: "Garry's Mod",
    price: 9.99,
    image: "https://placehold.co/100",
    category: "Survival",
    href: "https://example.com/",
  },
];
const FeaturedGamesGrid = () => (
  <div className="relative aspect-square w-full max-w-xl rounded-lg overflow-hidden">
    <div className="grid grid-cols-2 gap-1 sm:gap-2 h-full">
      <div className="relative row-span-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg"
          alt="Featured Game 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="grid grid-rows-2 gap-1 sm:gap-2">
        <div className="relative">
          <img
            src="https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg"
            alt="Featured Game 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="grid grid-cols-2 gap-1 sm:gap-2">
          <div className="relative">
            <img
              src="https://placehold.co/200x200"
              alt="Featured Game 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="relative">
            <img
              src="https://placehold.co/200x200"
              alt="Featured Game 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GamesHero = () => (
  <div className="bg-slate-950 border-b border-slate-800/50">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col items-start max-w-2xl">
          <span className="text-yellow-500 text-sm font-medium mb-2">
            Premium Game Servers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose Your Game.
            <br />
            Deploy Instantly<span className="text-yellow-500">.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
            Select from our wide range of optimized game servers. Get started in
            minutes with our instant deployment system.
          </p>
        </div>

        <FeaturedGamesGrid />
      </div>
    </div>
  </div>
);

const GameFilter = ({ onFilterChange, selectedFilter }) => {
  const filters = ["All Games", "FPS", "Survival", "RPG", "Strategy"];

  return (
    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition-colors
            ${
              selectedFilter === filter
                ? "bg-yellow-500 text-black"
                : "bg-slate-800/50 text-gray-400 hover:bg-slate-800"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const GameCard = ({ game }) => (
  <div className="group relative rounded-lg overflow-hidden bg-slate-900/50 border border-slate-800/50">
    <div className="aspect-[4/5] relative">
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
            {game.name}
          </h3>
          <p className="text-yellow-500 mb-4 sm:mb-6 text-base sm:text-lg">
            Starting at ${game.price}/mo
          </p>
          <a
            href={`${game.href}`}
            className="inline-flex items-center text-white hover:text-yellow-500 transition-colors text-base sm:text-lg"
          >
            View Server Options
            <ChevronRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const GamesGrid = () => {
  const [filter, setFilter] = useState("All Games");

  const filteredGames = games.filter(
    (game) => filter === "All Games" || game.category === filter
  );

  return (
    <div className="bg-slate-950 py-16 sm:py-32">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
        <GameFilter selectedFilter={filter} onFilterChange={setFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

const GamesPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Games | ZoutGames</title>
    </Helmet>
    <GamesHero />
    <GamesGrid />
  </div>
);

export default GamesPage;
