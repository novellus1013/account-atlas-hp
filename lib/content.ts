// content.ts - Final Version
// Based on Option 2 tone: Problem Recognition → Solution → Complete Clarity

export const siteConfig = {
  appName: "Account Atlas",
  tagline: "Your Accounts, Your Services, One Place",
  description:
    "Juggling multiple emails, phone numbers, and social accounts across dozens of services? Account Atlas brings it all together. Register your accounts once, connect them to your services, and see everything at a glance—no bank connections, just complete clarity.",
  url: "https://accountatlas.app",
  contactEmail: "contact@novelus.dev",
  supportEmail: "support@novelus.dev",
  copyright: `© ${new Date().getFullYear()} AccountAtlas. All rights reserved.`,
  storeLinks: {
    appStore: "https://apps.apple.com/us/app/account-atlas-track-accounts/id6758081039",
    playStore: "https://play.google.com/store/apps/details?id=co.novelus.accountatlas",
  },
  availabilityNote: "Available on iOS and Android",
}

export const heroContent = {
  headline: "Your Accounts. Your Services. Complete Control.",
  subheadline:
    "Register your accounts and connect them to your services. See everything organized by category, subscription, and account—all in one place.",
  primaryCta: "Download",
  secondaryCta: "Learn more",
}

export const screenshots = [
  {
    src: "/images/home-1.png",
    alt: "Home dashboard showing monthly and yearly spending totals, top expense categories, upcoming payments, and subscription count",
  },
  {
    src: "/images/account-detail.png",
    alt: "Account detail showing linked service include Subscription and Free, monthly costs",
  },
  {
    src: "/images/services.png",
    alt: "Services list with filters for category, sort order, and subscription status, plus spending totals",
  },
  {
    src: "/images/service-detail.png",
    alt: "Service detail showing linked account, login type, next payment date, monthly and yearly costs",
  },
]

export const aboutContent = {
  intro: {
    title: "About Account Atlas",
    description: [
      "Juggling multiple emails, phone numbers, and social accounts across dozens of services? Not sure which login belongs to which subscription—or when the next payment hits?",
      "AccountAtlas brings it all together. Register your accounts, connect them to your services, and see everything organized clearly. No bank connections needed—you stay in control of your data.",
    ],
    highlights: [
      "Register accounts and services—you control every detail",
      "See your complete picture at a glance",
      "Works without login—your data stays on your device",
    ],
  },
}

export const features = [
  {
    icon: "home",
    title: "See Your Spending at a Glance",
    bullets: [
      "Monthly and yearly spending totals instantly visible",
      "Top expense categories show exactly where your money goes",
      "Upcoming payments listed so you never miss a due date",
    ],
  },
  {
    icon: "link",
    title: "Know Which Account Owns Which Service",
    bullets: [
      "Connect each service to the account that uses it",
      "See all services linked to any email, phone, or social account",
      "Spot paid subscriptions and free services side by side",
    ],
  },
  {
    icon: "filter",
    title: "Find What You Need in Seconds",
    bullets: [
      "Filter by category, subscription status, or price",
      "Sort by recently added, cost, or account",
      "Totals update instantly as you filter—clarity without clutter",
    ],
  },
]

export const reviews = [
  {
    name: "Coming Soon",
    rating: 5,
    quote: "Be the first to share your Account Atlas experience. We'd love to hear from you!",
  },
]

export const faqItems = [
  {
    question: "Do I need an account or login to use Account Atlas?",
    answer:
      "No. Core features work without sign-up. Your data is stored locally on your device. Login and additional features may be added later.",
  },
  {
    question: "Do I need to link my bank or financial accounts?",
    answer:
      "No. Account Atlas does not connect to your bank, cards, or transactions. You manually register the services and accounts you want to organize.",
  },
  {
    question: "What does the Home screen show?",
    answer:
      "Your monthly and yearly subscription totals, count of subscriptions and all services, top four expense categories by percentage and spending, and upcoming payments with due dates.",
  },
  {
    question: "Can I track both paid and free services?",
    answer:
      "Yes. Register and connect both paid subscriptions and free services to your accounts. Filter and view them however you like.",
  },
  {
    question: "How do I see which account owns which service?",
    answer:
      "When you register a service, you connect it to one of your accounts (email, phone, social login). The app then organizes everything by account, so you always know which login belongs where.",
  },
  {
    question: "Will my data sync across devices?",
    answer:
      "Not in the MVP. The MVP uses a local database by default. Cross-device sync may be added in a future update.",
  },
  {
    question: "How do I contact support?",
    answer:
      `Email us at support@novelus.dev and include your device model and OS version if you can.`
  },
]

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "About the App", href: "#about" },
  { label: "Download", href: "#download" },
]