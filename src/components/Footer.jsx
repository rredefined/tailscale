import React from "react";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-white font-semibold tracking-tight">{title}</h3>
    {children}
  </div>
);

const FooterLink = ({ href, children }) => (
  <Link
    to={href}
    className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 relative group w-fit"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
  </Link>
);

const Footer = () => {
  const productLinks = [
    { name: "Gaming Servers", href: "/gaming-servers" },
    { name: "Deploy a VPS", href: "/vps" },
    { name: "cPanel Hosting", href: "/cpanel-hosting" },
  ];

  const supportLinks = [
    { name: "Support Center", href: "/support" },
    { name: "Server Status", href: "https://example.com" },
    { name: "Contact Us", href: "https://example.com" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
  ];

  const socialLinks = [
    { name: "Discord", icon: FaDiscord, href: "https://example.com/" },
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-screen-xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="/">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <img
                    src="https://placehold.co/50"
                    alt="Brand Logo"
                    className="h-8 w-8"
                  />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">
                  ZoutGames
                </span>
              </div>
            </a>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <FooterSection title="Products">
            <nav className="space-y-3">
              {productLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </FooterSection>

          {/* Support */}
          <FooterSection title="Support">
            <nav className="space-y-3">
              {supportLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <nav className="space-y-3">
              {companyLinks.map((link) => (
                <FooterLink key={link.name} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 ZoutGames. All rights reserved. Made by 26BZ
            </div>
            <div className="flex space-x-6 text-sm">
              <FooterLink href="/legal">Legal Policies</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
