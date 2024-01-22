import questionMark from "../assets/questionMark.svg";
import lightBulb from "../assets/lightBulb.svg";
import CodeKeeper from "../assets/CodeKeeper.png";
import FeedbackLabs from "../assets/FeedbackLabs.png";
import LegalSite from "../assets/LegalSite.png";
import Tolq from "../assets/Tolq.png";
import Twitter from "../assets/Twitter.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Instagram from "../assets/Instagram.svg";

export const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const navigation = [
  { name: "Startups", normal: true, href: "#works" },
  { name: "Contact", normal: true, href: "#contact-form" },
  { name: "Work with us!", normal: false, href: "https://www.startupz.site/jobs" },
];

export const whoWeAre = {
  text: "Who we are",
  list: [
    {
      id: 1,
      description: "We develop innovative products, systems and services",
    },
    { id: 2, description: "Next we build teams to scale them into companies" },
    { id: 3, description: "Each startup solving one problem at a time" },
  ],
  descriptions: [
    {
      id: 1,
      description:
        "We create products that have innovation and technology at their core.",
    },
    {
      id: 2,
      description:
        "We value working with talented people that understand the possibilities of today.",
    },
  ],
  image: questionMark,
};

export const coreValues = {
  text: "Our core values",
  list: [
    {
      id: 1,
      idTitle: "Innovation",
      description:
        "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    },
    {
      id: 2,
      idTitle: "People",
      description: "Talent is what enable us to create great companies.",
    },
  ],
  descriptions: [],
  image: lightBulb,
};

export const bannerSolvingProblems = {
  text: "We love solving problems!",
  styles: "lg:container py-20 lg:py-[11rem] px-2",
};

export const worksSection = {
  text: "Our works",
  list: [
    {
      id: 1,
      name: "Tolq",
      color: "text-[#A9BC87]",
      href: "https://www.startupz.com/works/tolq",
      image: Tolq,
      description:
        "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
    },
    {
      id: 2,
      name: "Feedback Labs",
      color: "text-[#8BB5C9]",
      href: "https://www.startupz.com/works/feedback-labs",
      image: FeedbackLabs,
      description:
        "Feedback Labs turns feedback into actionable insights for your team.",
    },
    {
      id: 3,
      name: "Codekeeper",
      color: "text-[#00A0B6]",
      href: "https://www.startupz.com/works/codekeeper",
      image: CodeKeeper,
      description:
        "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
    },
    {
      id: 4,
      name: "LegalSite",
      color: "text-[#8B60D3]",
      href: "https://www.startupz.com/works/legal-site",
      image: LegalSite,
      description:
        "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
    },
  ],
};

export const bannerWorksSection = {
  text: "Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.",
  styles: "mt-40",
};

export const hiringSection = {
  text: "We are hiring!",
  description:
    "We're always looking for talented people to join and help build our startups. Check out our current openings",
  buttonText: "See current openings ",
}

export const footerData = {
  company: [
    { name: 'Tolq', href: 'https://tolq.com/' },
    { name: 'LegalSite', href: 'https://legalsite.co/' },
    { name: 'Codekeeper', href: 'https://codekeeper.co/' },
    { name: 'Feedback Labs', href: 'https://feedbacklabs.org/' },
  ],
  contact: {
      address: "World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague",
      city: 'The Netherlands',
      mailMessage: 'Send us an email',
  },
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/startupzcom',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/startupz.com/',
      icon: LinkedIn,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: Instagram,
    }
  ],
}

export const contactFormInitialValues = {
  name: '',
  email: '',
  message: '',
}