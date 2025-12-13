import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { GlowingButton } from "./ui/GlowingButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gaming Servers", href: "/gaming-servers" },
  { name: "Deploy a VPS", href: "/vps" },
  { name: "cPanel Hosting", href: "/cpanel-hosting" },
  { name: "Support", href: "/support" },
];

const NavLink = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`text-gray-300 font-semibold hover:text-yellow-400 transition-colors relative group
        ${isActive ? "text-yellow-400" : ""}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-slate-950"}
      `}
    >
      <div className="container max-w-screen-xl mx-auto px-6 py-4">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img
                  src="https://placehold.co/50"
                  alt="Logo"
                  className="h-8 w-8"
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                ZoutGames
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Login Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="https://example.com/">
              <GlowingButton className="hidden md:block">
                Client Area
              </GlowingButton>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="https://example.com/">
                <GlowingButton className="w-full">Client Area</GlowingButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
