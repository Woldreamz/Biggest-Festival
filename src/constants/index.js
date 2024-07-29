import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Activities",
    url: "#features",
  },
  {
    id: "1",
    title: "Buy Tickets",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Gallery",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Become a Vendor",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo];

export const brainwaveServices = [
  "Vibrant Moments",
  "Colorful Vibes",
  "Radiant Smiles",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "March 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "July 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "December 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Showcase your products and services to thousands of festival-goers. Becoming a vendor at the Biggest Festival is a fantastic opportunity to reach a wide audience and grow your business.";

export const collabText1 =
  "Enjoy prime location spaces, marketing support, and access to festival amenities.";

export const collabText2 =
  "Submit your vendor application through our online form. Limited spots are available, so apply early!";

export const collabText3 =
  "Gain exposure, connect with potential customers, and be part of an exciting event.";

export const collabContent = [
  {
    id: "0",
    title: "Why Become a Vendor?",
    text: collabText3,
  },
  {
    id: "1",
    title: "Vendor Benefits",
    text: collabText1,
  },
  {
    id: "2",
    title: "How to Apply",
    text: collabText2,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "General Access!",
    price: "3K",
    features: [
      "Access to all general areas",
      "Access to all general activities",
      "Ability to explore the features on ground without any cost",
    ],
  },
  {
    id: "1",
    title: "VIP",
    description: "Enjoy premium access!",
    price: "8K",
    features: [
      "Enjoy premium access",
      "Enjoy premium access to the VIP lounge",
      "Priority support and access to exclusive amenities",
    ],
  },
  {
    id: "2",
    title: "V VIP",
    description: "Enjoy ultimate festival experience!",
    price: "20K",
    features: [
      "Experience the ultimate festival luxury",
      "Personalized recommendations based on your preferences",
      "With all-inclusive perks and backstage",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Live Music",
    text: "Experience electrifying performances from top artists and bands.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Art and Culture",
    text: "Explore captivating art installations and cultural shows.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Activities and Events",
    text: "Get details on scheduled performances, workshops, and more.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Food and Drink",
    text: "Savor a diverse range of culinary delights and refreshing beverages.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Family Fun",
    text: "Enjoy activities and workshops designed for families and kids.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Crowd Moments",
    text: "Witness the joy and excitement of our festival-goers.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/X8wQgv68HD",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/Woldreamz",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/woldreamz/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/reyonsa/",
  },
];
