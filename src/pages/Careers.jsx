import React, { useState } from "react";
import {
  Coffee,
  Gem,
  Globe,
  GraduationCap,
  HeartPulse,
  MapPin,
  Monitor,
  Clock,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Mail,
  Building,
  Calendar,
} from "lucide-react";
import { GlowingButton } from "../components/ui/GlowingButton";
import Helmet from "react-helmet";

const CareersHero = () => (
  <div className="border-b border-slate-800">
    <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <span className="text-yellow-400 text-sm font-medium mb-2 block">
            Careers
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Join Our Team of
            <br />
            Innovators
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
            Build the future of cloud infrastructure with us. We're looking for
            passionate individuals who want to make an impact in the hosting
            industry.
          </p>
        </div>
        <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="Team at work"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

const JobCard = ({
  title,
  department,
  location,
  type,
  description,
  requirements,
  responsibilities,
  salary,
  experience,
  postedDate,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`p-4 sm:p-6 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="inline-flex items-center text-xs sm:text-sm text-gray-400">
                <Briefcase className="w-4 h-4 mr-1" />
                {department}
              </span>
              <span className="inline-flex items-center text-xs sm:text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
              </span>
              <span className="inline-flex items-center text-xs sm:text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {type}
              </span>
              <span className="inline-flex items-center text-xs sm:text-sm text-gray-400">
                <Building className="w-4 h-4 mr-1" />
                {experience}
              </span>
              <span className="inline-flex items-center text-xs sm:text-sm text-gray-400">
                <Calendar className="w-4 h-4 mr-1" />
                Posted: {postedDate}
              </span>
            </div>
            <div className="text-base sm:text-lg font-semibold text-yellow-400 mb-3 sm:mb-4">
              {salary}
            </div>
          </div>
          <button
            className="p-1.5 sm:p-2 hover:bg-slate-800 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            )}
          </button>
        </div>

        <div
          className={`space-y-4 transition-all duration-300 text-sm sm:text-base ${isExpanded ? "block" : "hidden"}`}
        >
          <div>
            <h4 className="font-semibold mb-2">About the Role</h4>
            <p className="text-gray-400">{description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Key Responsibilities</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {responsibilities.map((item, index) => (
                <li key={index} className="text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Requirements</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {requirements.map((item, index) => (
                <li key={index} className="text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={`mailto:careers@zoutgames.com?subject=Application for ${encodeURIComponent(title)}`}
              onClick={(e) => e.stopPropagation()}
            >
              <GlowingButton className="inline-flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base">
                <Mail className="w-4 h-4 mr-2" />
                Apply Now
              </GlowingButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const benefits = [
    {
      icon: HeartPulse,
      title: "Healthcare",
      description:
        "Comprehensive health, dental, and vision coverage for you and your family.",
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible work arrangements with remote options available.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible hours and generous PTO policy to maintain a healthy balance.",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description:
        "Annual budget for professional development and learning resources.",
    },
    {
      icon: Gem,
      title: "Competitive Pay",
      description: "Above-market compensation with equity options and bonuses.",
    },
    {
      icon: Monitor,
      title: "Equipment",
      description: "Latest hardware and software to help you work effectively.",
    },
  ];

  const jobs = [
    {
      title: "Senior DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $160,000 USD/year",
      postedDate: "Dec 10, 2024",
      description:
        "We're looking for an experienced DevOps engineer to help scale our cloud infrastructure and implement best practices for our growing platform.",
      responsibilities: [
        "Design and implement scalable cloud infrastructure",
        "Manage and optimize CI/CD pipelines",
        "Monitor system performance and reliability",
        "Implement security best practices",
        "Mentor junior team members",
      ],
      requirements: [
        "5+ years of experience with AWS or similar cloud platforms",
        "Strong knowledge of Docker and Kubernetes",
        "Experience with Infrastructure as Code (Terraform)",
        "Proficiency in Python or Go",
        "Experience with monitoring and logging tools",
      ],
    },
    {
      title: "Technical Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "$65,000 - $85,000 USD/year",
      postedDate: "Dec 12, 2024",
      description:
        "Join our support team to help customers succeed with our hosting solutions while providing exceptional technical assistance.",
      responsibilities: [
        "Resolve customer technical issues",
        "Document solutions and maintain knowledge base",
        "Collaborate with engineering on bug reports",
        "Provide product feedback from customer interactions",
        "Participate in on-call rotation",
      ],
      requirements: [
        "2+ years of technical support experience",
        "Strong knowledge of Linux systems",
        "Experience with web hosting technologies",
        "Excellent written and verbal communication",
        "Problem-solving mindset",
      ],
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$90,000 - $120,000 USD/year",
      postedDate: "Dec 13, 2024",
      description:
        "Drive product marketing strategy and execution for our hosting products while working closely with product and sales teams.",
      responsibilities: [
        "Develop product marketing strategies",
        "Create compelling product messaging",
        "Conduct market research and analysis",
        "Collaborate with content team on materials",
        "Track and report on marketing metrics",
      ],
      requirements: [
        "4+ years of product marketing experience",
        "Background in technical products",
        "Strong analytical and writing skills",
        "Experience with marketing automation tools",
        "Project management expertise",
      ],
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $140,000 USD/year",
      postedDate: "Dec 14, 2024",
      description:
        "Build and maintain our customer-facing applications and internal tools using modern web technologies.",
      responsibilities: [
        "Develop new features for our platform",
        "Maintain and improve existing codebase",
        "Write clean, testable code",
        "Collaborate with design team",
        "Participate in code reviews",
      ],
      requirements: [
        "3+ years of full stack development experience",
        "Proficiency in React and Node.js",
        "Experience with SQL and NoSQL databases",
        "Understanding of API design",
        "Knowledge of testing frameworks",
      ],
    },
  ];

  const departments = ["All", "Engineering", "Support", "Marketing", "Sales"];

  const filteredJobs =
    selectedDepartment === "All"
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Careers | ZoutGames</title>
      </Helmet>
      <CareersHero />

      {/* Benefits Section */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 border-b border-slate-800">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Why Work With Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            We offer competitive compensation and great benefits to keep you
            happy, healthy, and productive.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-lg bg-slate-900/50 border border-slate-800"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Open Positions
        </h2>

        {/* Department Filter */}
        <div className="flex flex-wrap border w-fit mx-auto rounded-md border-gray-800 justify-center gap-2 mb-8 sm:mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-3 sm:px-4 py-2 rounded text-sm font-medium transition-colors
                ${
                  selectedDepartment === dept
                    ? "bg-yellow-400 text-black"
                    : "bg-slate-950 text-gray-400 hover:bg-slate-800"
                }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="space-y-4 sm:space-y-6">
          {filteredJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
