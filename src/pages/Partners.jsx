import React from "react";
import {
  Shield,
  Users,
  CheckCircle2,
  Store,
  BadgeCheck,
  Building2,
} from "lucide-react";
import { Helmet } from "react-helmet";

const PartnersHero = () => (
  <div className="border-b border-slate-800">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl">
        <span className="text-yellow-400 text-sm font-medium mb-2 block">
          Partner Program
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Join Our Partner
          <br />
          Network
        </h1>
        <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
          Partner with us to grow your business and provide your customers with
          enterprise-grade hosting solutions. Benefit from competitive
          commissions and dedicated support.
        </p>
      </div>
    </div>
  </div>
);

const BenefitItem = ({ title, description }) => (
  <div className="flex gap-3 sm:gap-4">
    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 shrink-0 mt-1" />
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm sm:text-base">{description}</p>
    </div>
  </div>
);

const PartnersPage = () => {
  const requirements = [
    {
      icon: Building2,
      title: "Registered Business",
      description:
        "Must have a registered business entity and valid tax documentation.",
    },
    {
      icon: Users,
      title: "Customer Base",
      description:
        "Minimum of 10 active business customers or 1000+ monthly website visitors.",
    },
    {
      icon: Store,
      title: "Marketing Presence",
      description:
        "Established online presence with professional website and marketing materials.",
    },
    {
      icon: Shield,
      title: "Technical Knowledge",
      description:
        "Basic understanding of hosting services and technical support capabilities.",
    },
  ];

  const benefits = [
    {
      title: "Competitive Commission",
      description:
        "Earn up to 20% recurring commission on all referred customers.",
    },
    {
      title: "Priority Support",
      description:
        "Dedicated partner support team and priority ticket handling.",
    },
    {
      title: "Marketing Resources",
      description:
        "Access to marketing materials, training, and co-marketing opportunities.",
    },
    {
      title: "Partner Portal",
      description:
        "Exclusive access to our partner portal with real-time reporting.",
    },
  ];

  const partners = [
    {
      name: "TechCorp Solutions",
      type: "Gold Partner",
      logo: "https://placehold.co/100x100",
      description:
        "Leading provider of enterprise IT solutions and managed services.",
    },
    {
      name: "WebPro Agency",
      type: "Silver Partner",
      logo: "https://placehold.co/100x100",
      description:
        "Digital agency specializing in web development and hosting solutions.",
    },
    {
      name: "Cloud Systems Inc",
      type: "Gold Partner",
      logo: "https://placehold.co/100x100",
      description: "Cloud infrastructure and consulting services provider.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Partner Program | ZoutGames</title>
      </Helmet>
      <PartnersHero />

      {/* Requirements Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Partnership Requirements
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            To ensure mutual success, we have established the following
            requirements for our partner program.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-slate-800"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
                <req.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2">{req.title}</h3>
              <p className="text-gray-400 text-sm">{req.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-b border-slate-800">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Partner Benefits
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} {...benefit} />
              ))}
            </div>
          </div>
          <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/600x400"
              alt="Partner Benefits"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Partners Showcase */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-slate-800"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-8 h-8 object-contain rounded"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">{partner.name}</h3>
                <BadgeCheck className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-sm text-yellow-400 mb-2">{partner.type}</div>
              <p className="text-gray-400 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
