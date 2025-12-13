import React from "react";
import {
  TicketIcon,
  PhoneCall,
  Mail,
  MessageCircle,
  BookOpen,
  FileText,
  CheckCircle2,
  Users,
} from "lucide-react";
import { GlowingButton } from "../components/ui/GlowingButton";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";

const ContactCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  available,
  href,
}) => (
  <div className="p-6 rounded-lg border border-slate-800 bg-slate-900 flex flex-col">
    <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-yellow-400" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
    {available && (
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-white text-sm">Fastest Response Time</span>
      </div>
    )}
    <a href={href}>
      <GlowingButton className="w-full py-2 rounded-md font-medium bg-slate-800 hover:bg-slate-700 transition-colors">
        {buttonText}
      </GlowingButton>
    </a>
  </div>
);

const SupportPage = () => {
  const contactMethods = [
    {
      icon: TicketIcon,
      title: "Support Ticket",
      description:
        "Create a ticket for detailed technical support. Our team typically responds within 1 hour.",
      buttonText: "Open Ticket",
      available: true,
      href: "https://example.com/",
    },
    {
      icon: PhoneCall,
      title: "Phone Support",
      description:
        "Get immediate assistance from our technical support team. Available 24/7.",
      buttonText: "Call Now",
      available: false,
      href: "tel:+1-800-123-4567",
    },
    {
      icon: Mail,
      title: "Email Support",
      description:
        "Send us an email for non-urgent inquiries. We respond within 24 hours.",
      buttonText: "Send Email",
      available: false,
      href: "mailto:support@zoutgames.com",
    },
    {
      icon: MessageCircle,
      title: "Discord Community",
      description:
        "Join our Discord community for instant help from our team and other users.",
      buttonText: "Join Discord",
      available: true,
      href: "https://example.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Support Center | ZoutGames</title>
      </Helmet>
      {/* Hero Section */}
      <div className="border-b border-slate-800/50">
        <div className="container max-w-screen-xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <span className="text-yellow-400 text-sm font-medium mb-2 block">
              Support Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We're here to help
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Get the support you need, when you need it. Our team is available
              24/7 to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container max-w-screen-xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold text-center mb-12">
          Contact Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="container max-w-screen-xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1hr</div>
              <p className="text-gray-400">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <p className="text-gray-400">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <p className="text-gray-400">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="container max-w-screen-xl mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold text-center mb-12">Help Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-slate-800 bg-slate-900">
            <BookOpen className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
            <p className="text-gray-400 mb-4">
              Browse our extensive collection of guides and tutorials.
            </p>
            <a
              href="https://example.com"
              className="text-yellow-400 hover:text-yellow-600 font-medium"
            >
              View Articles →
            </a>
          </div>
          <div className="p-6 rounded-lg border border-slate-800 bg-slate-900">
            <FileText className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Documentation</h3>
            <p className="text-gray-400 mb-4">
              Detailed technical documentation for developers.
            </p>
            <a
              href="https://example.com"
              className="text-yellow-400 hover:text-yellow-600 font-medium"
            >
              Read Docs →
            </a>
          </div>
          <div className="p-6 rounded-lg border border-slate-800 bg-slate-900">
            <Users className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Community Forum</h3>
            <p className="text-gray-400 mb-4 ">
              Connect with other users and share solutions.
            </p>
            <a
              href="https://example.com"
              className="text-yellow-400 hover:text-yellow-600 font-medium"
            >
              Join Forums →
            </a>
          </div>
        </div>
      </div>
      <FAQ />

      {/* Status Section */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container max-w-screen-xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold">All Systems Operations </div>
                <div className="text-gray-400 text-sm">
                  can be viewed on our status page
                </div>
              </div>
            </div>
            <a
              href="https://example.com"
              className="text-yellow-400 hover:text-yellow-600 font-medium"
            >
              View Status Page →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
