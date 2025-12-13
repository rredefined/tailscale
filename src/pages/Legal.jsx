import React, { useState } from "react";
import { Shield, Lock, FileText, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const LegalTabs = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    {
      id: "terms",
      label: "Terms of Service",
      icon: FileText,
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: Lock,
    },
    {
      id: "aup",
      label: "Acceptable Use",
      icon: Shield,
    },
  ];

  const legalContent = {
    terms: {
      lastUpdated: "December 14, 2024",
      content: [
        {
          title: "1. Agreement to Terms",
          content: `By accessing our Services, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Services. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content.`,
        },
        {
          title: "2. Communications",
          content: `By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.`,
        },
        {
          title: "3. Subscriptions",
          content: `Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis. Billing cycles are set on a monthly basis. At the end of each billing cycle, your subscription will automatically renew under the exact same conditions unless you cancel it or we cancel it.`,
        },
        {
          title: "4. Content",
          content: `Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.`,
        },
      ],
    },
    privacy: {
      lastUpdated: "December 14, 2024",
      content: [
        {
          title: "1. Information Collection",
          content: `We collect several different types of information for various purposes to provide and improve our Service to you. Types of Data Collected include Personal Data (Email address, First name and last name, Phone number, Address) and Usage Data (Browser type, Time spent on pages).`,
        },
        {
          title: "2. Use of Data",
          content: `We use the collected data for various purposes: To provide and maintain the Service, To notify you about changes to our Service, To provide customer care and support, To provide analysis or valuable information so that we can improve the Service, To monitor the usage of the Service, To detect, prevent and address technical issues.`,
        },
        {
          title: "3. Data Security",
          content: `The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.`,
        },
        {
          title: "4. Your Rights",
          content: `You have the right to access, update or delete your information. You can do this by contacting us directly. In certain circumstances, you have data protection rights which include: The right to access, update or delete your information, The right of rectification, The right to object, The right of restriction.`,
        },
      ],
    },
    aup: {
      lastUpdated: "December 14, 2024",
      content: [
        {
          title: "1. Prohibited Activities",
          content: `You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.`,
        },
        {
          title: "2. Security",
          content: `You agree not to engage in any activity that interferes with or disrupts the Services (or the servers and networks which are connected to the Services). You must not attempt to gain unauthorized access to any portion or feature of the Services by hacking, password mining or any other illegitimate means.`,
        },
        {
          title: "3. Content Guidelines",
          content: `You agree not to upload, transmit, or distribute to or through the Service any computer viruses, worms, or any software intended to damage or alter a computer system or data. You must not send unsolicited or unauthorized advertising, promotional materials, email, junk mail, spam, chain letters, or other forms of solicitation.`,
        },
        {
          title: "4. Enforcement",
          content: `We reserve the right to investigate and prosecute violations of any of these prohibited activities. We may involve and cooperate with law enforcement authorities in prosecuting users who violate these terms. You acknowledge that we have no obligation to monitor your access to or use of the Services.`,
        },
      ],
    },
  };
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Legal Information | ZoutGames</title>
      </Helmet>
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Legal Information
            </h1>
            <p className="text-gray-400 text-base sm:text-lg">
              Review our terms of service, privacy policy, and acceptable use
              policy to understand your rights and responsibilities.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-slate-800 sticky top-0 bg-slate-950 z-10">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 border-b-2 transition-colors whitespace-nowrap text-sm sm:text-base
                    ${
                      activeTab === tab.id
                        ? "border-yellow-400 text-yellow-400"
                        : "border-transparent text-gray-400 hover:text-gray-300"
                    }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mb-16 sm:mb-32">
        <div className="mx-auto">
          <div className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">
            Last Updated: {legalContent[activeTab].lastUpdated}
          </div>

          {/* Content Sections */}
          <div className="space-y-8 sm:space-y-12">
            {legalContent[activeTab].content.map((section, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {section.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 sm:mt-16 p-4 sm:p-6 bg-slate-900 rounded-lg border border-gray-800">
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Need Help?
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              If you have any questions about these policies, please contact our
              legal team.
            </p>
            <a
              href="mailto:legal@zoutgames.com"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-600 transition-colors text-sm sm:text-base"
            >
              Contact Legal Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalTabs;
