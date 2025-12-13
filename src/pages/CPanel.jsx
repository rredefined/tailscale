import React from "react";
import {
  Check,
  X,
  Server,
  Globe,
  Mail,
  ShieldCheck,
  Database,
  Code,
} from "lucide-react";
import { GlowingButton } from "../components/ui/GlowingButton";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";

const PlanCard = ({ name, price, features, popular, href }) => (
  <div
    className={`p-4 sm:p-6 rounded-lg border ${popular ? "border-yellow-400" : "border-gray-800"} bg-slate-900 flex flex-col h-full`}
  >
    {popular && (
      <span className="bg-yellow-400 ml-auto text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
        Most Popular
      </span>
    )}
    <h3 className="text-lg sm:text-xl font-bold mb-2">{name}</h3>
    <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
      <span className="text-2xl sm:text-3xl font-bold">${price}</span>
      <span className="text-gray-400">/mo</span>
    </div>
    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-300">
          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href={href}>
      <GlowingButton
        className={`w-full py-2 rounded-md text-sm sm:text-base font-medium transition-colors ${popular ? "bg-blue-500 hover:bg-blue-600" : "bg-slate-800 hover:bg-slate-700"}`}
      >
        Select Plan
      </GlowingButton>
    </a>
  </div>
);

const FeatureComparison = ({ plans, featuresList }) => (
  <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
    <div className="min-w-[768px]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="p-3 sm:p-4 text-left text-sm sm:text-base">
              Feature
            </th>
            {plans.map((plan) => (
              <th
                key={plan.name}
                className="p-3 sm:p-4 text-center text-sm sm:text-base"
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featuresList.map((feature, index) => (
            <tr key={index} className="border-b border-slate-800">
              <td className="p-3 sm:p-4 text-gray-300 text-sm sm:text-base">
                {feature.name}
              </td>
              {plans.map((plan) => (
                <td
                  key={`${plan.name}-${feature.name}`}
                  className="p-3 sm:p-4 text-center"
                >
                  {feature.values[plan.name] === true ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto" />
                  ) : feature.values[plan.name] === false ? (
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mx-auto" />
                  ) : (
                    <span className="text-gray-300 text-sm sm:text-base">
                      {feature.values[plan.name]}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const CpanelHostingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: 4.99,
      popular: false,
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "5 Email Accounts",
      ],
      href: "http://example.com",
    },
    {
      name: "Plus",
      price: 9.99,
      popular: true,
      features: [
        "10 Websites",
        "30GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "25 Email Accounts",
        "Domain Privacy",
      ],
      href: "http://example.com",
    },
    {
      name: "Pro",
      price: 14.99,
      popular: false,
      features: [
        "Unlimited Websites",
        "100GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Unlimited Email Accounts",
        "Domain Privacy",
        "Dedicated IP",
      ],
      href: "http://example.com",
    },
  ];

  const featuresList = [
    {
      name: "Websites",
      values: {
        Starter: "1",
        Plus: "10",
        Pro: "Unlimited",
      },
    },
    {
      name: "SSD Storage",
      values: {
        Starter: "10GB",
        Plus: "30GB",
        Pro: "100GB",
      },
    },
    {
      name: "Bandwidth",
      values: {
        Starter: "Unmetered",
        Plus: "Unmetered",
        Pro: "Unmetered",
      },
    },
    {
      name: "Free SSL Certificate",
      values: {
        Starter: true,
        Plus: true,
        Pro: true,
      },
    },
    {
      name: "Email Accounts",
      values: {
        Starter: "5",
        Plus: "25",
        Pro: "Unlimited",
      },
    },
    {
      name: "Domain Privacy",
      values: {
        Starter: false,
        Plus: true,
        Pro: true,
      },
    },
    {
      name: "Dedicated IP",
      values: {
        Starter: false,
        Plus: false,
        Pro: true,
      },
    },
    {
      name: "MySQL Databases",
      values: {
        Starter: "5",
        Plus: "20",
        Pro: "Unlimited",
      },
    },
    {
      name: "Backup Frequency",
      values: {
        Starter: "Weekly",
        Plus: "Daily",
        Pro: "Daily",
      },
    },
  ];

  const features = [
    {
      icon: Server,
      title: "Easy cPanel Management",
      description:
        "Industry-standard control panel for seamless website management",
    },
    {
      icon: Globe,
      title: "99.9% Uptime",
      description: "Reliable hosting with guaranteed uptime SLA",
    },
    {
      icon: Mail,
      title: "Professional Email",
      description: "Create custom email accounts with webmail access",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security",
      description: "Free SSL certificates and DDoS protection included",
    },
    {
      icon: Database,
      title: "MySQL Databases",
      description: "Host your web applications with reliable database support",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Support for PHP, Python, and Node.js applications",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>cPanel Hosting | ZoutGames</title>
      </Helmet>
      {/* Hero Section */}
      <div className="border-b border-slate-800/50">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-xl">
              <span className="text-yellow-400 text-sm font-medium mb-2 block">
                Web Hosting
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Reliable cPanel Hosting.
                <br />
                Made Simple.
              </h1>
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
                Power your website with lightning-fast SSD storage, free SSL
                certificates, and industry-leading cPanel control panel.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x500"
                alt="cPanel Dashboard Preview"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute -inset-1 bg-slate-950/10 backdrop-blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Choose Your Hosting Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-32 border-t border-slate-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Why Choose Our Hosting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-slate-800"
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

      {/* Feature Comparison */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Compare Features
        </h2>
        <FeatureComparison plans={plans} featuresList={featuresList} />
      </div>
      <FAQ />
    </div>
  );
};

export default CpanelHostingPage;
