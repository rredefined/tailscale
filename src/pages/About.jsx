import React from "react";
import {
  Users,
  Shield,
  Settings,
  Globe,
  Server,
  Award,
  Clock,
} from "lucide-react";
import { Helmet } from "react-helmet";

const AboutHero = () => (
  <div className="border-b border-slate-800">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <span className="text-yellow-400 text-sm font-medium mb-2 block">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Powering Digital
            <br />
            Infrastructure Since 2015
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
            We're dedicated to providing enterprise-grade hosting solutions with
            unmatched performance and reliability. Our mission is to empower
            businesses and individuals with cutting-edge server infrastructure.
          </p>
        </div>
        <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="Data Center"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

const StatsSection = () => (
  <div className="border-t border-slate-800 bg-slate-900/50">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            50K+
          </div>
          <div className="text-gray-400 text-sm sm:text-base">
            Active Servers
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            40+
          </div>
          <div className="text-gray-400 text-sm sm:text-base">Data Centers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            100K+
          </div>
          <div className="text-gray-400 text-sm sm:text-base">Customers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            8
          </div>
          <div className="text-gray-400 text-sm sm:text-base">
            Years of Service
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TimelineItem = ({ year, title, description }) => (
  <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 last:pb-0">
    <div className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-400"></div>
    <div className="absolute left-1.5 sm:left-2 top-4 bottom-0 w-[1px] bg-yellow-400/20 last:hidden"></div>
    <div className="text-yellow-400 text-sm font-medium mb-2">{year}</div>
    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
);

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability First",
      description:
        "We prioritize uptime and performance above all else, ensuring your services stay online.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our support team is available 24/7 to help you succeed with your hosting needs.",
    },
    {
      icon: Settings,
      title: "Innovation",
      description:
        "Constantly improving our infrastructure with the latest technology and security measures.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Strategic data center locations worldwide for optimal performance everywhere.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Started with a vision to provide enterprise-grade hosting solutions.",
    },
    {
      year: "2017",
      title: "Global Expansion",
      description: "Expanded to multiple data centers across three continents.",
    },
    {
      year: "2019",
      title: "Cloud Platform Launch",
      description: "Introduced our revolutionary cloud hosting platform.",
    },
    {
      year: "2021",
      title: "Enterprise Solutions",
      description: "Launched dedicated enterprise hosting solutions.",
    },
    {
      year: "2023",
      title: "Next-Gen Infrastructure",
      description:
        "Upgraded to latest generation hardware across all locations.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>About Us | ZoutGames</title>
      </Helmet>
      <AboutHero />

      {/* Values Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-slate-800"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <StatsSection />

      {/* Timeline Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Our Journey
        </h2>
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Infrastructure Section */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Server Infrastructure"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
                Our data centers are equipped with the latest hardware and
                security measures to ensure optimal performance and protection
                for your applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Premium Hardware</div>
                    <div className="text-gray-400 text-sm">
                      Latest gen processors
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Security</div>
                    <div className="text-gray-400 text-sm">DDoS protection</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">24/7 Monitoring</div>
                    <div className="text-gray-400 text-sm">
                      Real-time alerts
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Certified</div>
                    <div className="text-gray-400 text-sm">ISO compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
