import type { Dictionary } from "./vi";

/** English copy. Mirrors the shape of the Vietnamese dictionary. */
const en: Dictionary = {
  meta: {
    siteName: "TLSHost",
    tagline: "The operating system for independent hosts",
    home: {
      title: "TLSHost — The operating system for independent hosts",
      description:
        "One calendar for the whole portfolio, OTA channels that reconcile every hour, your own commission-free booking page, and an AI assistant that never acts without your approval.",
    },
    features: {
      title: "Features",
      description:
        "A unified operations calendar, two-way iCal sync, an AI assistant you approve, direct booking pages, housekeeping dispatch, and scoped team permissions.",
    },
    pricing: {
      title: "Pricing",
      description:
        "A flat subscription with zero commission on any booking. Start free forever and upgrade as your portfolio grows.",
    },
  },

  nav: {
    features: "Features",
    pricing: "Pricing",
    login: "Log in",
    start: "Start free",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    langLabel: "Choose language",
    skipToContent: "Skip to main content",
  },

  hero: {
    eyebrow: "The operating system for independent hosts",
    body: "TLSHost brings your calendar, sales channels, housekeeping and payments into one place. Every OTA reconciles itself hourly. An AI assistant drafts the work — and touches nothing until you approve it.",
    ctaPrimary: "Start free",
    ctaSecondary: "See the platform",
    note: "Free forever plan · No credit card · Taking bookings on day one",

    pickerTitle: "What should TLSHost take off your plate first?",
    jobs: [
      {
        id: "calendar",
        label: "Calendar & bookings",
        titleLead: "Your portfolio,",
        titleEmphasis: "one calendar.",
        line: "Every property, every room type, every night — one board.",
        chipTitle: "New booking",
        chipNote: "On the calendar · 2s ago",
      },
      {
        id: "channels",
        label: "OTA channel sync",
        titleLead: "Sell one night,",
        titleEmphasis: "lock every channel.",
        line: "Two-way iCal with every major OTA, reconciled hourly.",
        chipTitle: "Sync complete",
        chipNote: "6 channels · just now",
      },
      {
        id: "ai",
        label: "AI operations assistant",
        titleLead: "AI drafts.",
        titleEmphasis: "You approve.",
        line: "Guest replies, quotes, reminders — drafted, never auto-sent.",
        chipTitle: "3 drafts waiting",
        chipNote: "Nothing sent yet",
      },
      {
        id: "housekeeping",
        label: "Housekeeping & maintenance",
        titleLead: "Guest checks out,",
        titleEmphasis: "the team knows.",
        line: "Cleaning tasks appear the moment a guest checks out.",
        chipTitle: "Room 204 is clean",
        chipNote: "Ready for the next guest",
      },
      {
        id: "direct",
        label: "Direct booking page",
        titleLead: "Guests book direct,",
        titleEmphasis: "0% commission.",
        line: "Your own booking page, taking payment, feeding one calendar.",
        chipTitle: "Direct booking",
        chipNote: "0% commission",
      },
      {
        id: "team",
        label: "Team & permissions",
        titleLead: "Hand out the work,",
        titleEmphasis: "not your passwords.",
        line: "Everyone gets their own login and sees only their part.",
        chipTitle: "Front desk invited",
        chipNote: "Access: calendar, view only",
      },
    ],
  },

  channels: {
    eyebrow: "Syncs with where you already sell",
    title: "Sell everywhere. Reconcile nowhere.",
    body: "Two-way iCal connections to every major OTA. A night sold anywhere blocks itself everywhere else.",
    names: ["Airbnb", "Booking.com", "Agoda", "Traveloka", "Trip.com", "Expedia", "VRBO"],
    pause: "Pause",
    play: "Resume",
  },

  platform: {
    eyebrow: "The platform",
    title: "Hundreds of decisions a day. One approver: you.",
    body: "A spreadsheet, six channel logins and a group chat — TLSHost replaces all of it with a single workspace that runs all day and reports back to you.",
  },

  pillars: {
    calendar: {
      eyebrow: "Calendar & operations",
      title: "The calendar that runs your property",
      body: "One fast multi-day board showing every booking, block, room type and cleaning status across all your properties. Create and edit right on the grid — no second screen required.",
      bullets: [
        "See multiple properties and room types at once",
        "Create, drag and edit bookings directly on the board",
        "Housekeeping status visible on every cell",
        "Occupancy, revenue and arrivals update as you work",
      ],
      link: "Explore the calendar",
    },
    ai: {
      eyebrow: "AI assistant",
      title: "You describe it. It drafts. You approve.",
      body: "A conversational assistant that lives inside the workspace. Ask it to block a room, change a rate, create a booking or record a payment — it stages the change, shows you exactly what will move, then waits.",
      bullets: [
        "Ask in plain language, no syntax to learn",
        "Every proposal comes with a full preview before it applies",
        "Nothing is written until you approve it",
        "Set auto-approve limits for small work, keep the call on big work",
      ],
      link: "Explore the assistant",
    },
    channels: {
      eyebrow: "Channel sync",
      title: "Every channel accurate, all the time",
      body: "Two-way iCal import and export with Airbnb, Booking.com, Agoda, Traveloka and any OTA that speaks iCal. Availability flows both directions and refreshes hourly.",
      bullets: [
        "Two-way sync, both import and export",
        "Refreshes hourly with no manual step",
        "Works with any iCal-capable OTA",
        "Double-bookings blocked before they happen",
      ],
      link: "Explore channel sync",
    },
    direct: {
      eyebrow: "Direct booking",
      title: "Your own storefront, and you keep all of it",
      body: "Every property gets a branded booking page on its own link. Guests pick dates, book, and are confirmed instantly. Direct bookings land in the same calendar as everything else.",
      bullets: [
        "A booking page carrying your brand",
        "Not one đồng of commission per booking",
        "Instant confirmation for the guest",
        "A public link for each individual property",
      ],
      link: "Explore direct booking",
    },
    housekeeping: {
      eyebrow: "Housekeeping",
      title: "The cleaning team always knows what is next",
      body: "Every checkout becomes a cleaning task on its own. Staff open their phone and see exactly their assigned rooms, mark clean in one tap, and the board updates immediately.",
      bullets: [
        "Flips to needs-cleaning the moment a guest checks out",
        "Phone-first interface, usable one-handed",
        "One tap to mark clean, visible to the team instantly",
        "Staff only see the rooms you assign them",
      ],
      link: "Explore housekeeping",
    },
    team: {
      eyebrow: "Team & permissions",
      title: "Delegate the work, keep the whole picture",
      body: "Each collaborator sees only the properties and room types you assign. You decide who may edit whose bookings, and you always know who created every record.",
      bullets: [
        "Access scoped per property and per room type",
        "Control who can edit other people's bookings",
        "An audit trail of who created what, and when",
        "A collaborator portal limited to their assigned scope",
      ],
      link: "Explore permissions",
    },
  },

  scale: {
    eyebrow: "From one unit to a portfolio",
    title: "Start with one property. Grow without changing tools.",
    body: "The same workspace serves a single rental apartment or thirty villas. Add properties, add people, add channels — the platform stretches with you.",
    tiers: [
      {
        label: "Solo host",
        title: "Everything you need. Nothing you don't.",
        body: "One calendar, your own booking page, and no commission. Hosting without living inside a spreadsheet.",
        points: ["Unified calendar", "Your own booking page", "0% commission, forever"],
        link: "See direct booking",
      },
      {
        label: "Growing team",
        title: "A partner for the repetitive half",
        body: "Let the assistant draft, let sync run itself, and give each person exactly the scope they are responsible for.",
        points: ["AI operations assistant", "Scoped permissions", "Hourly channel sync"],
        link: "See the AI assistant",
      },
      {
        label: "Large portfolio",
        title: "Scale without losing the detail",
        body: "Trace where each booking came from, scope permissions down to room type, and read metrics across the whole portfolio.",
        points: ["Multi-property metrics", "Booking creator trail", "Granular permissions"],
        link: "See team permissions",
      },
    ],
  },

  stats: {
    items: [
      {
        value: "0%",
        caption: "Our commitment",
        label: "Commission on direct bookings, on every plan",
      },
      {
        value: "60′",
        caption: "Two-way iCal",
        label: "Sync cycle across every connected OTA",
      },
      {
        value: "24/7",
        caption: "You stay the approver",
        label: "A partner that never goes off shift",
      },
    ],
  },

  testimonials: {
    eyebrow: "Hosts running on TLSHost",
    title: "Real people. Real numbers.",
    items: [
      {
        quote:
          "I used to open four tabs and a spreadsheet every morning. Now I open TLSHost. The calendar is finally the only thing I need to trust.",
        name: "Tran Mai",
        role: "Host, Riverside Villa",
      },
      {
        quote:
          "The assistant drafts, I read it and approve. About an hour back every day, without worrying what it did on its own.",
        name: "Dang Quoc Huy",
        role: "Operations manager, 12 units",
      },
      {
        quote:
          "The direct booking page paid for the subscription in the first week. Every guest who books direct is about 600,000 đồng I keep.",
        name: "Pham Linh",
        role: "Host, Old Quarter Stays",
      },
    ],
  },

  faq: {
    title: "Before you ask",
    items: [
      {
        q: "Does TLSHost take commission on bookings?",
        a: "No, on any plan. TLSHost is a flat monthly subscription. Every guest who books through your direct page belongs entirely to you, with nothing deducted.",
      },
      {
        q: "Can the AI assistant change data on its own?",
        a: "Never. The assistant only stages a draft and shows exactly what would change. Nothing is written until you approve. You can also set limits so small work runs automatically while big work still waits for you.",
      },
      {
        q: "Which channels can I connect?",
        a: "Any OTA that supports iCal — including Airbnb, Booking.com, Agoda, Traveloka, Expedia and VRBO. Connections run both ways and refresh every hour.",
      },
      {
        q: "How much work is migrating my existing data?",
        a: "Guided setup walks you through rooms, rates, amenities and policies step by step. Existing bookings are pulled in through the channels' own iCal links, so there is nothing to retype.",
      },
    ],
  },

  cta: {
    title: "Take back control of your property.",
    body: "Set up your first property and take a direct booking today. Free to start, no card required.",
    primary: "Start free",
    secondary: "See pricing",
  },

  footer: {
    tagline: "The operating system for independent hosts.",
    productTitle: "Product",
    companyTitle: "Company",
    legalTitle: "Legal",
    company: ["About TLSHost", "Contact", "Careers"],
    legal: ["Terms of service", "Privacy policy"],
    rights: "All rights reserved.",
  },

  featuresPage: {
    hero: {
      eyebrow: "The platform",
      title: "One workspace. No patchwork.",
      body: "TLSHost replaces the spreadsheet, the channel logins and the scattered group chats with a single place that runs your property — from the first enquiry to the last room cleaned.",
    },
    value: {
      eyebrow: "Why hosts switch",
      title: "Four ways TLSHost pays for itself",
      body: "Every feature here reduces to one of four things: reach, control, time saved, or revenue you keep.",
      items: [
        {
          title: "Reach & distribution",
          body: "Appear on every channel your guests search, while taking bookings directly on a page that is yours.",
        },
        {
          title: "Control & transparency",
          body: "One calendar, scoped permissions and a creator trail. You see everything, and nothing surprises you.",
        },
        {
          title: "Time & scale",
          body: "The assistant drafts, sync runs itself. The portfolio grows without the manual work growing with it.",
        },
        {
          title: "Revenue you keep",
          body: "0% commission on every direct booking. Each night you sell comes back to you whole.",
        },
      ],
    },
    extras: [
      {
        title: "Guided setup",
        body: "Rooms, rates, amenities and policies in one step-by-step flow you can finish in an afternoon.",
      },
      {
        title: "Metrics at a glance",
        body: "Revenue, occupancy and upcoming arrivals on a single overview page.",
      },
      {
        title: "Bilingual by design",
        body: "Vietnamese and English, switched per organisation — not a bolted-on translation.",
      },
    ],
    cta: {
      title: "Run all of it, commission-free.",
      body: "Set up a property and take your first direct booking today.",
    },
  },

  calendarPage: {
    meta: {
      title: "Calendar & operations",
      description:
        "One multi-day board for the whole portfolio: bookings, blocked nights, housekeeping status and occupancy — edited in place.",
    },
    back: "All features",

    hero: {
      eyebrow: "Calendar & operations",
      title: "One board. The whole picture.",
      body: "Bookings, blocked nights, rooms still free and cleaning status across every property, on a single multi-day board. This is the original — every other number in TLSHost is read off it.",
    },

    overview: {
      eyebrow: "One view",
      title: "Every property, side by side",
      body: "Last week, today and the next three months across all your properties in one frame. No signing into six channels in turn, no reconciliation spreadsheet.",
      bullets: [
        "Several properties and room types on one board",
        "Bookings and blocked nights side by side on one day scale",
        "Jump to any date or property in a single move",
        "Occupancy recalculates the moment the board changes",
      ],
    },

    control: {
      eyebrow: "Within reach",
      title: "Edit in place",
      body: "Drag across a few days and the booking exists. Move a stay, block a night for maintenance, switch a guest's room — on the board, without opening another screen.",
      bullets: [
        "Drag across dates to create a booking",
        "Move or extend a stay on its own bar",
        "Block nights for maintenance or owner stays",
        "Revenue and arrivals change at the same moment",
      ],
    },

    journey: {
      eyebrow: "Across the stay",
      title: "From booked to clean again",
      body: "The board follows a guest's whole stay, so none of it has to live in your head.",
      steps: [
        {
          title: "Booked",
          body: "New bookings — direct or synced back from an OTA — land on the board and take the room out of inventory as they arrive.",
        },
        {
          title: "Staying",
          body: "Who is in, who arrives this afternoon, who leaves tomorrow — read off one row, no filtering.",
        },
        {
          title: "Cleaned",
          body: "Cleaning status sits on the room's own cell, so the next guest is never a surprise.",
        },
      ],
      always: {
        label: "Throughout",
        title: "The AI assistant",
        body: "Ask the assistant to draft a change: move a room, slot a booking in, block a night. It proposes, you approve on the board. Nothing runs on its own.",
      },
    },

    stats: [
      { value: "1", caption: "Board", label: "For every property and room type you run" },
      { value: "24/7", caption: "Assistant", label: "Always ready to draft a change for you to approve" },
      { value: "0%", caption: "Commission", label: "On every direct booking, permanently" },
    ],

    faq: {
      title: "Questions about the calendar",
      items: [
        {
          q: "Does the calendar cover every channel?",
          a: "Yes. Direct bookings and bookings synced back from the OTAs sit on the same board, so a night cannot be sold twice.",
        },
        {
          q: "What if I run several properties?",
          a: "The board was built for several properties and room types from the start. You scan the whole portfolio without leaving the page.",
        },
        {
          q: "Where do housekeeping and the numbers live?",
          a: "Cleaning status sits on each room's cell. Revenue, occupancy and upcoming arrivals roll up to the dashboard on their own.",
        },
      ],
    },

    cta: {
      title: "Put the whole portfolio on one board.",
      body: "Set up your first property and take a direct booking today.",
    },
  },

  pricingPage: {
    eyebrow: "Pricing",
    title: "Pricing that pays for itself",
    body: "One flat subscription. No per-booking fee, no hidden surcharge. Start free and upgrade only when you actually need to.",
    perMonth: "/ per month",
    forever: "/ forever",
    popular: "Most popular",
    note: "Prices in VND and include every update. No plan takes commission.",
    plans: [
      {
        name: "Starter",
        tagline: "Your first property, live tonight.",
        price: "₫0",
        cadence: "forever",
        cta: "Start free",
        popular: false,
        features: [
          "One property",
          "Booking calendar and inventory",
          "Your direct booking page",
          "0% commission on every booking",
        ],
      },
      {
        name: "Channels",
        tagline: "For hosts selling across several OTAs at once.",
        price: "₫290k",
        cadence: "month",
        cta: "Try 14 days free",
        popular: true,
        features: [
          "Everything in Starter",
          "Two-way iCal sync",
          "Airbnb, Booking.com, Agoda, Traveloka and more",
          "Availability refreshed hourly",
          "Unlimited properties",
        ],
      },
      {
        name: "Professional",
        tagline: "For teams operating a portfolio at scale.",
        price: "₫690k",
        cadence: "month",
        cta: "Talk to us",
        popular: false,
        features: [
          "Everything in Channels",
          "AI operations assistant",
          "Members and scoped permissions",
          "Booking creator audit trail",
          "Housekeeping and the metrics overview",
        ],
      },
    ],
    included: {
      eyebrow: "On every plan",
      title: "Every plan starts with the essentials",
      items: [
        {
          title: "Direct booking",
          body: "Your own booking page at 0% commission — on the free plan, and on every plan above it.",
        },
        {
          title: "One calendar",
          body: "A multi-property board gathering bookings, blocks and cleaning status into a single view.",
        },
        {
          title: "Grow when ready",
          body: "Add channel sync, then the AI assistant and team permissions — without moving to another tool.",
        },
      ],
    },
    faq: {
      title: "Before you ask",
      items: [
        {
          q: "Do you take a percentage of bookings?",
          a: "Never. TLSHost charges a flat subscription only. You keep 100% of every direct booking, on all plans including the free one.",
        },
        {
          q: "Can I try it before paying?",
          a: "Yes. The Starter plan is free forever and needs no credit card. The Channels plan comes with 14 days of full access.",
        },
        {
          q: "Can I change plans later?",
          a: "Any time. Move up or down with your season and your portfolio. The difference is prorated by days used.",
        },
        {
          q: "How do I pay?",
          a: "Domestic bank transfer, credit card, and the common Vietnamese e-wallets. VAT invoices on request.",
        },
      ],
    },
    cta: {
      title: "Start free, in minutes.",
      body: "No credit card required. Upgrade only when it makes sense.",
      primary: "Create your account",
    },
  },

  waitlist: {
    eyebrow: "Early access",
    title: "Hold your place for the day TLSHost opens",
    body: "We are finishing the last pieces. Leave your email and you will be in the first group invited in, with the Starter plan free forever.",
    nameLabel: "Your name",
    namePlaceholder: "Alex Nguyen",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    sizeLabel: "How many properties do you manage?",
    sizeHint: "Optional. It helps us decide who to invite first.",
    sizeOptions: [
      "None yet, just looking",
      "1 property",
      "2–5 properties",
      "6–20 properties",
      "More than 20 properties",
    ],
    submit: "Join the waitlist",
    submitting: "Sending…",
    consent:
      "We will only use this address to tell you when TLSHost opens. No marketing, nothing shared with third parties, and you can ask us to delete it at any time.",
    successTitle: "You are on the list",
    successBody:
      "Thank you. We will send an invitation to the address you left as soon as a place opens up.",
    backHome: "Back to home",
    errorSummary: "We could not send that. Please check:",
    errors: {
      nameRequired: "Please tell us your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "That email does not look right — could you check it?",
      rateLimited: "You have just sent one. Give it a moment and try again.",
      server: "Something broke on our side. Please try again in a few minutes.",
    },
  },

  mock: {
    calendar: {
      title: "Calendar",
      subtitle: "3 properties · July",
      occupancy: "Occupancy",
      newBooking: "New booking",
      blocked: "Blocked on Booking.com · Agoda",
      direct: "Direct",
      zeroFee: "0% commission",
      days: ["M", "T", "W", "T", "F", "S", "S"],
      properties: ["Ocean View Studio", "Garden Suite", "Sky Loft", "Bamboo Room"],
    },
    calendarMonth: {
      title: "Calendar",
      subtitle: "Ocean View Studio · July",
      days: ["M", "T", "W", "T", "F", "S", "S"],
      hint: "Drag across dates to create a booking",
      draft: "New booking",
      guest: "Guest",
      guestName: "Sofia Kapoor",
      initials: "SK",
      partySize: "2 guests",
      nights: "3 nights",
      dates: "15–18 Jul",
      total: "Total",
      confirm: "Create booking",
      others: ["Linh Tran", "Hoang Vu"],
    },
    ai: {
      title: "AI assistant",
      status: "Online",
      userMessage: "Block Ocean View Studio 12–15 Jul for maintenance",
      thinking: "Checking the calendar…",
      reply: "Done — I drafted a maintenance block. Approve to apply it to the calendar.",
      cardTitle: "Maintenance block",
      cardMeta: "12–15 Jul · 3 nights · Ocean View Studio",
      draft: "DRAFT",
      applied: "APPLIED",
      approve: "Approve",
      reject: "Reject",
      done: "Applied to the calendar",
      placeholder: "Ask TLSHost anything",
    },
    channels: {
      title: "Channels",
      subtitle: "Two-way sync · 4 connections",
      syncNow: "Sync now",
      syncing: "Syncing",
      justSynced: "Just synced",
      agoStub: "min ago",
      propertyCount: "properties",
      priceUpdated: "Rate updated",
    },
    housekeeping: {
      title: "Assigned rooms",
      needsCleaning: "need cleaning",
      tabNeeds: "Needs cleaning",
      tabAll: "All rooms",
      dirty: "Dirty",
      clean: "Clean",
      markClean: "Mark clean",
      encouragement: "Nice work — almost done",
      rows: [
        { room: "Garden Suite", property: "An Bang Villa", note: "Checkout 11:00" },
        { room: "Sky Loft", property: "An Bang Villa", note: "Turnover clean" },
        { room: "Bamboo Room", property: "Hoi An House", note: "Guest staying on" },
      ],
    },
    booking: {
      zeroFee: "0% COMMISSION",
      propertyName: "An Bang Beach Villa",
      location: "Hoi An, Da Nang",
      perNight: "/ night",
      checkIn: "CHECK-IN",
      checkOut: "CHECK-OUT",
      guests: "GUESTS",
      nights: "nights",
      total: "Total",
      pickDates: "Pick dates",
      book: "Book now",
      confirmed: "Booking confirmed",
      confirmSent: "Confirmation sent to the guest",
      instant: "Instant confirmation",
    },
    team: {
      title: "Team & permissions",
      members: "members",
      invite: "Invite",
      inviteColleague: "Invite a colleague",
      owner: "Owner",
      collaborator: "Collaborator",
      housekeeper: "Housekeeping",
      pending: "Pending",
      joined: "Joined",
      allProperties: "All properties",
      propertiesSuffix: "properties",
      note: "Collaborators only see the properties you assign.",
    },
    savings: {
      title: "Commission saved",
      subtitle: "3 nights · An Bang Villa",
      viaOta: "Via OTA",
      direct: "Direct booking",
      best: "BEST",
      commission: "commission",
      keepAll: "Keep 100%",
      youGet: "YOU RECEIVE",
      perBooking: "kept per booking",
    },
  },
};

export default en;
