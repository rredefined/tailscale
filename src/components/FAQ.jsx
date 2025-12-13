import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqData = {
  General: [
    {
      question: "How do I get started with ZoutGames?",
      answer:
        "Getting started is easy! Simply choose your desired game server, select a plan, and complete the checkout process. Your server will be instantly set up and ready to use within minutes.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 technical support through live chat, ticket system, and email. Our experienced team is always ready to help with any questions or issues you might encounter.",
    },
    {
      question: "Do you offer DDoS protection?",
      answer:
        "Yes, all our servers come with enterprise-grade DDoS protection included at no extra cost. We use advanced mitigation techniques to ensure your server stays online.",
    },
  ],
  "Game Servers": [
    {
      question: "Can I switch games on my server?",
      answer:
        "Yes, you can easily switch between different games through our control panel. Your server settings and data will be safely stored if you decide to switch back.",
    },
    {
      question: "How many player slots do you offer?",
      answer:
        "Our player slots vary by game and plan. We offer flexible scaling from 10 to 500+ slots depending on your needs and the game type.",
    },
    {
      question: "Do you offer mod support?",
      answer:
        "Yes, we fully support mods for all compatible games. Our control panel includes easy mod installation and management features.",
    },
  ],
  Billing: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and various cryptocurrencies. All payments are processed securely through encrypted channels.",
    },
    {
      question: "Can I upgrade my plan anytime?",
      answer:
        "Yes, you can upgrade your plan at any time. The price difference will be prorated for your current billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 24-hour money-back guarantee for all new servers. If you're not satisfied, simply contact our support team within this period.",
    },
  ],
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [openQuestion, setOpenQuestion] = useState(null);

  const tabs = ["General", "Game Servers", "Billing"];

  const handleQuestionClick = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-12 bg-slate-950  border-t border-gray-800">
      <div className="container mx-auto px-6 py-32">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
            <span className="text-yellow-400">.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-950 border border-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    activeTab === tab
                      ? "bg-yellow-400 text-black"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqData[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900 border border-gray-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleQuestionClick(index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="text-white font-medium">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 
                        ${openQuestion === index ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openQuestion === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-5 text-gray-400 border-t border-gray-700">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
