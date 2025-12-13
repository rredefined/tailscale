import React, { useState } from "react";
import {
  Check,
  Server,
  Shield,
  Cpu,
  Users,
  Layers,
  HardDrive,
} from "lucide-react";
import { GlowingButton } from "../components/ui/GlowingButton";
import ShowcasePanel from "../components/ShowcasePanel";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MinecraftHero = () => (
  <div className="bg-slate-950 relative overflow-hidden border-b border-slate-800/50">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="max-w-xl">
          <span className="text-yellow-500 text-sm font-medium mb-2 block">
            Minecraft Hosting
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            High-Performance
            <br />
            Minecraft Servers<span className="text-yellow-400">.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
            Launch your Minecraft server in seconds. Built for performance with
            NVMe SSDs, DDoS protection, and instant setup with custom control
            panel.
          </p>
        </div>

        <div className="relative h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x500"
            alt="Minecraft Server Dashboard"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute -inset-1 bg-slate-950/10 backdrop-blur-sm -z-10"></div>
        </div>
      </div>
    </div>
  </div>
);

const PlanCard = ({ ram, price, features, href }) => (
  <div className="p-4 sm:p-6 rounded-lg border border-slate-800 bg-slate-900 flex flex-col">
    <div className="mb-4 sm:mb-6">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{ram}GB RAM</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl sm:text-3xl font-bold">${price}</span>
        <span className="text-gray-400">/mo</span>
      </div>
    </div>
    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-300">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to={href}>
      <GlowingButton className="w-full py-2 text-sm sm:text-base">
        Deploy Server
      </GlowingButton>
    </Link>
  </div>
);
const MinecraftPage = () => {
  const [activeTab, setActiveTab] = useState("basic");

  const basicPlans = [
    {
      ram: 2,
      price: 8.99,
      features: [
        "Up to 10 Players",
        "NVMe SSD Storage",
        "Automatic Backups",
        "DDoS Protection",
        "Basic Plugin Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 4,
      price: 15.99,
      features: [
        "Up to 20 Players",
        "NVMe SSD Storage",
        "Automatic Backups",
        "DDoS Protection",
        "Basic Plugin Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 6,
      price: 22.99,
      features: [
        "Up to 30 Players",
        "NVMe SSD Storage",
        "Automatic Backups",
        "DDoS Protection",
        "Basic Plugin Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 8,
      price: 29.99,
      features: [
        "Up to 40 Players",
        "NVMe SSD Storage",
        "Automatic Backups",
        "DDoS Protection",
        "Basic Plugin Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 12,
      price: 39.99,
      features: [
        "Up to 60 Players",
        "NVMe SSD Storage",
        "Automatic Backups",
        "DDoS Protection",
        "Basic Plugin Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 16,
      price: 49.99,
      features: [
        "Up to 80 Players",
        "NVMe SSD Storage",
        "Automatic Backups",
        "DDoS Protection",
        "Basic Plugin Support",
      ],
    },
  ];

  const proPlans = [
    {
      ram: 2,
      price: 12.99,
      features: [
        "Up to 15 Players",
        "NVMe SSD Storage",
        "Advanced Backups",
        "Premium DDoS Protection",
        "Unlimited Plugins",
        "Dedicated IP",
        "Priority Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 4,
      price: 19.99,
      features: [
        "Up to 30 Players",
        "NVMe SSD Storage",
        "Advanced Backups",
        "Premium DDoS Protection",
        "Unlimited Plugins",
        "Dedicated IP",
        "Priority Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 6,
      price: 26.99,
      features: [
        "Up to 45 Players",
        "NVMe SSD Storage",
        "Advanced Backups",
        "Premium DDoS Protection",
        "Unlimited Plugins",
        "Dedicated IP",
        "Priority Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 8,
      price: 33.99,
      features: [
        "Up to 60 Players",
        "NVMe SSD Storage",
        "Advanced Backups",
        "Premium DDoS Protection",
        "Unlimited Plugins",
        "Dedicated IP",
        "Priority Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 12,
      price: 43.99,
      features: [
        "Up to 90 Players",
        "NVMe SSD Storage",
        "Advanced Backups",
        "Premium DDoS Protection",
        "Unlimited Plugins",
        "Dedicated IP",
        "Priority Support",
      ],
      href: "https://example.com/",
    },
    {
      ram: 16,
      price: 53.99,
      features: [
        "Up to 120 Players",
        "NVMe SSD Storage",
        "Advanced Backups",
        "Premium DDoS Protection",
        "Unlimited Plugins",
        "Dedicated IP",
        "Priority Support",
      ],
      href: "https://example.com/",
    },
  ];

  const features = [
    {
      icon: Server,
      title: "One-Click Installation",
      description:
        "Get your server running in seconds with our automated setup system",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description:
        "Enterprise-grade protection against DDoS attacks included free",
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Premium hardware with NVMe SSDs and latest-gen processors",
    },
    {
      icon: Users,
      title: "Player Support",
      description: "Support for multiple player slots with smooth gameplay",
    },
    {
      icon: Layers,
      title: "Mod Support",
      description: "Easy installation of popular mods and modpacks",
    },
    {
      icon: HardDrive,
      title: "Automatic Backups",
      description: "Regular automated backups to keep your world safe",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Minecraft Hosting | ZoutGames</title>
      </Helmet>
      <MinecraftHero />

      {/* Plans Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Choose Your Plan
          </h2>
        </div>

        {/* Plan Type Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex rounded-lg border border-slate-800 p-1">
            <button
              onClick={() => setActiveTab("basic")}
              className={`px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${
                activeTab === "basic"
                  ? "bg-yellow-500 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => setActiveTab("pro")}
              className={`px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${
                activeTab === "pro"
                  ? "bg-yellow-500 text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Pro
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {(activeTab === "basic" ? basicPlans : proPlans).map(
            (plan, index) => (
              <PlanCard key={index} {...plan} type={activeTab} />
            )
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Why Choose Our Minecraft Hosting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-gray-800"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ShowcasePanel />
      <FAQ />
    </div>
  );
};

export default MinecraftPage;
