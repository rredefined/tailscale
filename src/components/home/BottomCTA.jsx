import React from "react";
import { ArrowRight } from "lucide-react";
import { GlowingButton } from "../ui/GlowingButton";
import { Link } from "react-router-dom";
const BottomCTA = () => (
  <div className="relative border-t border-gray-800">
    <div className="container max-w-screen-xl mx-auto px-6 py-32 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
          <br />
          <span className="bg-yellow-400 bg-clip-text text-transparent">
            Deploy Your Server Today
          </span>
        </h2>
        <p className="text-gray-400 text-xl mb-8">
          Start with instant deployment and experience the difference of our
          high-performance infrastructure.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/gaming-servers">
            <GlowingButton className=" px-6 py-3 inline-flex items-center">
              View Gaming Servers
              <ArrowRight className="ml-2 w-5 h-5" />
            </GlowingButton>
          </Link>
          <a
            href="https://example.com/"
            className="border border-slate-700 px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BottomCTA;
