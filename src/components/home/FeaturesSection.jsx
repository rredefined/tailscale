import { useEffect, useRef, useState } from "react";
import { Cloud, Rocket } from "lucide-react";

export const features = [
  {
    icon: Rocket,
    title: "Enterprise Performance",
    description:
      "Leverage cutting-edge network infrastructure with unmatched bandwidth and comprehensive DDoS protection",
  },
  {
    icon: Cloud,
    title: "Redundant Architecture",
    description:
      "Dual fiber links, redundant switches, and enterprise-grade UDP routing ensure 99.99% uptime",
  },
  {
    icon: Rocket,
    title: "Enterprise Performance",
    description:
      "Leverage cutting-edge network infrastructure with unmatched bandwidth and comprehensive DDoS protection",
  },
  {
    icon: Cloud,
    title: "Redundant Architecture",
    description:
      "Dual fiber links, redundant switches, and enterprise-grade UDP routing ensure 99.99% uptime",
  },
  {
    icon: Rocket,
    title: "Enterprise Performance",
    description:
      "Leverage cutting-edge network infrastructure with unmatched bandwidth and comprehensive DDoS protection",
  },
  {
    icon: Cloud,
    title: "Redundant Architecture",
    description:
      "Dual fiber links, redundant switches, and enterprise-grade UDP routing ensure 99.99% uptime",
  },
];

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

const AnimatedFeature = ({ icon: Icon, title, description, delay }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`group relative p-6 sm:p-8 rounded-xl bg-slate-950 border-x-2 border-gray-800 transform transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 mr-3 flex-shrink-0">
            <Icon className="w-full h-full text-yellow-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold line-clamp-1">{title}</h3>
        </div>
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <main className="relative border-t border-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-32 py-16 sm:py-32">
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center">
            Enterprise-Grade Infrastructure
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <AnimatedFeature
                key={index}
                {...feature}
                delay={Math.min(index * 0.1, 0.5)}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default FeaturesSection;
