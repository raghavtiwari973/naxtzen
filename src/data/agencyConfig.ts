export interface Project {
  id: string;
  title: string;
  clientName: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  link: string;
  completionDate: string;
  featured?: boolean;
  testimonial?: {
    text: string;
    rating: number;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  suitableFor: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  note?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const agencyConfig = {
  brand: {
    name: "nextzee",
    logoImage: "/logo-b.png",
    logoText: "NEXTZEE",
    slogan: "Building Professional Portfolios That Get You Noticed",
    description: "We are a premium agency specializing in crafting high-impact portfolios and responsive web applications for individuals, freelancers, and businesses.",
    contact: {
      email: "nextzee@gmail.com",
      phone: "+91 9993800465",
      whatsapp: "https://wa.me/91 9993800465",
      address: "xyz",
      socials: {
        github: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      }
    }
  },
  stats: {
    counters: {
      delivered: 142,
      happyClients: 120,
      completedProjects: 156,
      yearsOfExperience: 2
    },
    statusCards: {
      ongoing: 7,
      inWaiting: 4,
      upcoming: 3
    }
  },
  services: [
    {
      id: "student",
      title: "Student Portfolio",
      description: "Professional portfolio websites for students and freshers to kickstart careers.",
      longDescription: "Stand out in front of recruiters with a responsive, modern digital CV that showcases your university projects, internships, skill badges, and extracurricular accomplishments. Includes fully working contact forms and downloadable resume integration.",
      icon: "graduation"
    },
    {
      id: "professional",
      title: "Professional Portfolio",
      description: "Custom portfolios for developers, designers, freelancers, and consultants.",
      longDescription: "A sleek, highly customized portfolio that highlights your commercial projects, tech stacks, client reviews, and direct booking integrations. Perfect for securing high-paying freelance gigs or top-tier full-time offers.",
      icon: "briefcase"
    },
    {
      id: "business",
      title: "Business Website",
      description: "Enterprise-grade professional websites for small & mid-sized businesses.",
      longDescription: "A solid online foundation for your corporate identity. Fully loaded with customized landing interfaces, team directory layouts, detailed service catalogues, booking integrations, and localized custom branding.",
      icon: "building"
    },
    {
      id: "startup",
      title: "Startup Website",
      description: "Modern, high-speed, and conversion-optimized websites for startups.",
      longDescription: "Accelerate your launch with ultra-fast page speeds, eye-catching landing designs, pitch deck downloads, lead generation capture pages, and direct connection with your waitlist systems.",
      icon: "rocket"
    },
    {
      id: "landing",
      title: "Landing Pages",
      description: "High-converting product landing pages built to maximize ROI.",
      longDescription: "One-page, hyper-focused landing grids designed specifically to turn ad traffic into immediate paying customers. Packed with premium CTAs, responsive sections, and embedded customer reviews.",
      icon: "layout"
    },
    {
      id: "redesign",
      title: "Website Redesign",
      description: "Modern redesign of existing websites for improved performance and UI/UX.",
      longDescription: "Breathe new life into your outdated website. We rebuild older layouts using high-speed React frameworks, premium custom color palettes, sleek animations, and highly optimized code structures.",
      icon: "sparkles"
    },
  ] as Service[],
  portfolio: [
    {
      id: "proj-1",
      title: "IMA Indore",
      clientName: "Indore Management Association",
      category: "Corporate Website",
      description: "Official digital platform for the Indore Management Association featuring events and resources.",
      longDescription: "A comprehensive corporate portal designed for seamless member onboarding, event registrations, and resource sharing. Built with modern web technologies for maximum performance.",
      image: "/images/1.png",
      link: "https://imaindore.vercel.app/",
      completionDate: "2023-11-20",
      featured: true,
      testimonial: {
        text: "Nextzee delivered an exceptional platform that completely streamlined our membership process!",
        rating: 5
      }
    },
    {
      id: "proj-2",
      title: "Sapcon Instruments",
      clientName: "Sapcon Instruments",
      category: "Business Website",
      description: "A comprehensive digital catalog and corporate platform for Sapcon Instruments.",
      longDescription: "An industrial corporate portal designed for seamless product discovery, featuring customized interactive catalogs and immediate lead generation tools.",
      image: "/images/2.png",
      link: "https://sapconinstruments.vercel.app/",
      completionDate: "2026-03-15",
      featured: true,
      testimonial: {
        text: "The new digital catalog and smooth page transitions have drastically increased our corporate lead generation.",
        rating: 4.8
      }
    },
    {
      id: "proj-3",
      title: "Priyanka Dubey Portfolio",
      clientName: "Priyanka Dubey",
      category: "Professional Portfolio",
      description: "A modern personal portfolio and professional showcase.",
      longDescription: "An elegant personal portfolio website designed to showcase professional achievements, skills, and previous work experiences with a clean, modern aesthetic.",
      image: "/images/3.png",
      link: "https://priyankadubey.netlify.app/",
      completionDate: "2024-01-15",
      featured: true,
      testimonial: {
        text: "The portfolio perfectly captures my professional brand and has helped me stand out to recruiters. Highly recommended!",
        rating: 5
      }
    },
    {
      id: "proj-4",
      title: "Raghav Tiwari Portfolio",
      clientName: "Raghav Tiwari",
      category: "Developer Portfolio",
      description: "A high-performance personal portfolio and developer showcase.",
      longDescription: "A modern developer showcase highlighting projects, skills, and technical capabilities. Features seamless page transitions and a clean, responsive design.",
      image: "/images/4.png",
      link: "https://raghavtiwari.netlify.app/",
      completionDate: "2024-02-10",
      featured: false
    },
    {
      id: "proj-5",
      title: "Kuldeep Rajput Portfolio",
      clientName: "Kuldeep Rajput",
      category: "Developer Portfolio",
      description: "A modern, responsive personal portfolio and developer showcase.",
      longDescription: "A clean and engaging personal portfolio designed to effectively display projects, skills, and contact information with smooth navigation.",
      image: "/images/5.png",
      link: "https://kuldeeprajput.netlify.app/",
      completionDate: "2024-03-01",
      featured: false
    },
    {
      id: "proj-6",
      title: "Neeraj Sharma Portfolio",
      clientName: "Neeraj Sharma",
      category: "Student Portfolio",
      description: "A dynamic personal portfolio and developer showcase.",
      longDescription: "A clean and engaging personal portfolio designed to effectively display projects, skills, and contact information with smooth navigation.",
      image: "/images/6.png",
      link: "https://neerajsharma86.netlify.app/",
      completionDate: "2024-04-10",
      featured: false
    }

  ] as Project[],
  testimonials: [
    {
      name: "Siddharth Mehta",
      role: "Founder & CEO",
      company: "CallHQ",
      text: "The team at Nextzee converted our complex requirements into a stunningly beautiful product. The 3D details and smooth interactions have set a new industry benchmark for us.",
      rating: 5
    },
    {
      name: "Anjali Deshmukh",
      role: "Marketing Director",
      company: "Broki India",
      text: "Our brand identity has completely transformed. We get constant compliments from our business clients on how premium and professional our new website looks. Highly recommended!",
      rating: 4.8
    },
    {
      name: "Alex Mercer",
      role: "Lead Designer",
      company: "Studio Shape",
      text: "Working with them was seamless. They understood my minimalist aesthetic and built a portfolio that acts as a true extensions of my physical designs. Fast, clean, and beautiful.",
      rating: 5
    },
    {
      name: "Rahul Khanna",
      role: "Freelance Architect",
      company: "Khanna Associates",
      text: "I was struggling to get clients online. Since deploying my new portfolio designed by Nextzee, I have closed three high-ticket consulting contracts in less than a month!",
      rating: 4.7
    }
  ] as Testimonial[],
  pricing: [
    {
      name: "Student Plan",
      price: "₹2,500",
      suitableFor: "Students, Freshers, Beginners",
      features: [
        "Mobile responsive design",
        "Functional contact form",
        "Social media integrations",
        "Free deployment support",
        "Delivery within 3-5 days"
      ],
      ctaText: "Get Started",
      isPopular: false
    },
    {
      name: "Professional Plan",
      price: "₹3,000 - ₹5,000",
      suitableFor: "Developers, Designers, Freelancers, Consultants, Job Seekers",
      features: [
        "Custom premium design",
        "Skills showcase section",
        "Filterable project showcase",
        "Resume download integration",
        "Analytics dashboard setup",
        "Priority email & chat support",
        "Custom agency branding",
        "Free deployment support",
      ],
      ctaText: "Get Started",
      isPopular: true
    },
    {
      name: "Corporate Plan",
      price: "₹10,000+",
      suitableFor: "Businesses, Startups, Agencies",
      features: [
        "Custom premium design",
        "Team directory & bios showcase",
        "Services detail catalogue",
        "Advanced lead generation forms",
        "Extreme performance tuning",
        "Rigid security optimizations",
        "Priority email & chat support",
        "Free deployment support",
        "24/7 dedicated support"
      ],
      ctaText: "Contact Us",
      isPopular: false,
      note: "Custom requirements and enterprise solutions are available upon request."
    },
    {
      name: "Maintenance Plan",
      price: "₹1,000 / mo",
      suitableFor: "Students, Professionals, Freelancers & Businesses",
      features: [
        "Up to 5 Changes in the Project",
        "Content & text updates",
        "Add new portfolio projects",
        "Replace images and banners",
        "Update contact & social links",
        "Minor design & layout refinements",
        "Fast response & priority support"
      ],
      ctaText: "Get Started Today",
      isPopular: false,
      note: "Unused requests do not carry forward. Major redesigns and custom features require a separate quotation."
    }
  ] as PricingPlan[],
  benefits: [
    {
      title: "Modern Design",
      description: "Sleek, futuristic visual layouts that immediately build strong brand trust.",
      icon: "palette"
    },
    {
      title: "Fast Delivery",
      description: "Quick, efficient turnaround schedules that respect your launch deadlines.",
      icon: "zap"
    },
    {
      title: "Mobile Responsive",
      description: "Flawless rendering and easy navigation across all screens and smartphones.",
      icon: "smartphone"
    },
    {
      title: "Affordable Pricing",
      description: "Top-tier digital craftsmanship priced perfectly for students and startups.",
      icon: "credit-card"
    },
    {
      title: "Premium Support",
      description: "Post-launch support to ensure your website remains pristine and active.",
      icon: "heart"
    },
    {
      title: "Secure Development",
      description: "Rigorous coding practices preventing scripting vulnerabilities or data leaks.",
      icon: "shield"
    },
    {
      title: "Custom Solutions",
      description: "Handcrafted architectures tailored completely to your personal story.",
      icon: "sliders"
    },
    {
      title: "Professional Quality",
      description: "Pixel-perfect visual details matching top global design studios.",
      icon: "award"
    },
    {
      title: "Future Scalability",
      description: "Clean code structure that supports adding blog, shop, or database layers.",
      icon: "trending-up"
    }
  ] as Benefit[],
  process: [
    {
      step: "01",
      title: "Requirement Discussion",
      description: "We host an introductory call to map out your core goals, professional background, target audience, and aesthetic choices."
    },
    {
      step: "02",
      title: "Planning",
      description: "Our leads structure the sitemap architecture, content outlines, feature scopes, and wireframes to finalize the layout roadmap."
    },
    {
      step: "03",
      title: "Design",
      description: "We craft custom layout mocks featuring premium typography systems, beautiful dark and glassmorphism themes, and assets placeholders."
    },
    {
      step: "04",
      title: "Development",
      description: "Our engineers build the site using modern high-performance frameworks (React, Vite, CSS variables, and GSAP) with zero code bloating."
    },
    {
      step: "05",
      title: "Testing",
      description: "We run rigid performance metrics audits, screen-size responsive testing, cross-browser compatibility checks, and form validation verifications."
    },
    {
      step: "06",
      title: "Deployment",
      description: "We deploy your project to high-speed hosting providers (Vercel, Netlify, or custom cloud) and hook up your personalized domain names."
    },
    {
      step: "07",
      title: "Client Approval",
      description: "We host a final walk-through, hand over all source directories and configurations, and secure your final launch approval!"
    }
  ] as ProcessStep[],
  faqs: [
    {
      question: "How long does it take to build a portfolio?",
      answer: "A standard Student Portfolio usually takes 3 to 5 business days, while a fully custom multi-page Professional Portfolio is delivered in 7 to 10 days. Advanced corporate websites take 2 to 3 weeks depending on the backend complexity."
    },
    {
      question: "Can I update the content on my portfolio later?",
      answer: "Yes, absolutely! We build all our portfolios with a clean, localized structure where all content resides in a simple data file."
    },
    {
      question: "Do you provide hosting and domain support?",
      answer: "Yes! We assist in deploying your website to fast, secure, and modern hosting networks (like Vercel or Netlify) which are 100% free for personal portfolios. We also guide you through connecting your custom domain name."
    },
    {
      question: "Will my website be mobile friendly and responsive?",
      answer: "Yes, 100%. All our projects follow a rigid Mobile-First strategy. Your website will render beautifully and operate smoothly across all smartphones, tablets, laptops, and large desktop screens."
    },
    {
      question: "Can I request custom features in the future?",
      answer: "Of course! Our codebase is constructed using modular, reusable React components, which means adding additional pages, integrating blogs, setting up booking systems, or plugging in commerce stores is straightforward."
    }
  ] as FAQItem[]
};
