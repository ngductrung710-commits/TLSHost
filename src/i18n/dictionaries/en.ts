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

    menuLabel: "The platform",
    allFeatures: "See all features",
    menu: [
      { slug: "calendar", title: "Calendar & operations", blurb: "Every property, every booking — one board." },
      { slug: "ai-agent", title: "AI operations assistant", blurb: "Drafts the repetitive half. Waits for you." },
      { slug: "channel-manager", title: "Channel sync", blurb: "Airbnb to Agoda, always in agreement." },
      { slug: "direct-booking", title: "Direct booking page", blurb: "Your own storefront. No commission." },
      { slug: "housekeeping", title: "Housekeeping app", blurb: "Staff see the rooms to clean, on any phone." },
      { slug: "team", title: "Team & permissions", blurb: "Clear access, clear accountability." },
    ],
  },

  hero: {
    eyebrow: "The operating system for independent hosts",
    body: "One calendar for every property. Every OTA channel synced hourly. An AI partner that drafts the small stuff — and never acts without your nod.",
    ctaPrimary: "Start free",
    ctaSecondary: "See the platform",
    notes: ["Free forever plan", "No credit card", "Ready for guests in minutes"],

    rotator: {
      words: [
        "Your calendar",
        "Your channels",
        "Your housekeeping",
        "Your booking page",
      ],
      tail: "",
      emphasis: "runs itself.",
    },

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
  },

  platform: {
    eyebrow: "The platform",
    titleEmphasis: "Hundreds",
    titleRest: "of decisions a day. One approver: you.",
    body: "TLSHost replaces the spreadsheet, the channel logins and the message threads with one workspace that runs itself all day for you.",
  },

  pillars: {
    calendar: {
      eyebrow: "Calendar & operations",
      title: "The whole property, on one board",
      body: "Bookings, blocks, cleaning and inventory across every property — on one fast multi-day board that stays the single source of truth.",
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
      title: "AI drafts. You approve.",
      body: "Ask in plain language. The assistant drafts bookings, properties, rooms and payments — then shows you exactly what would change and waits for your nod.",
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
      title: "Every channel accurate — all the time",
      body: "Two-way iCal sync with Airbnb, Booking.com, Agoda and Traveloka, refreshed hourly. A night booked anywhere is blocked everywhere.",
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
      title: "Your own storefront, 0% commission",
      body: "A booking page worth sharing, on a link that is yours. Guests book direct and are confirmed on the spot — you keep all of every booking.",
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
      title: "Housekeeping that runs itself",
      body: "Staff open their phone and see which rooms need cleaning after checkout. One tap marks a room clean — the whole team sees it at once.",
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
    eyebrow: "From solo to serious scale",
    title: "Start with one villa. Grow without a ceiling.",
    body: "The same workspace for a single property or a whole portfolio — you never have to change tools to grow.",
    tiers: [
      {
        label: "Solo host",
        title: "Everything you need. Nothing you don't.",
        body: "One calendar, your own booking page and 0% commission — hosting without the spreadsheet.",
        points: ["One unified calendar", "Your own booking page", "0% commission, forever"],
        link: "Explore direct booking",
      },
      {
        label: "Growing team",
        title: "An AI colleague for the odd jobs",
        body: "Let drafting, syncing and scheduling run themselves, and scope each person to exactly the properties they manage.",
        points: ["AI assistant on duty", "Scoped permissions", "Hourly channel sync"],
        link: "Meet the AI assistant",
      },
      {
        label: "Large portfolio",
        title: "The bigger it gets, the tighter your grip",
        body: "Trace who created every booking, scope permissions down to the detail, and read multi-property numbers that hold up at any size.",
        points: ["Multi-property numbers", "Booking creator trail", "Granular permissions"],
        link: "Explore team & permissions",
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
        "Bookings, blocks, inventory and housekeeping across every property \u2014 on one fast multi-day board that stays the source of truth.",
    },
    back: "All features",

    hero: {
      eyebrow: "Calendar & operations",
      title: "One board. The whole picture.",
      body: "Bookings, blocks, inventory and housekeeping across every property \u2014 on one fast multi-day board that stays the source of truth.",
    },

    overview: {
      eyebrow: "One view",
      title: "Every property, side by side",
      body: "The past, present and future of all your properties and rooms on one board \u2014 no logging into each channel, no spreadsheet tab.",
      bullets: [
        "See multiple properties and multiple rooms",
        "Bookings and blocks side by side",
        "Jump to any date or property fast",
        "Live occupancy at a glance",
      ],
    },

    control: {
      eyebrow: "In your control",
      title: "Edit right on the board",
      body: "Add a booking, move a stay or block a night in place. Changes take effect instantly and flow straight into your dashboard numbers.",
      bullets: [
        "Create and edit bookings on the board",
        "Block nights for maintenance or owner stays",
        "Housekeeping status per room",
        "Dashboard numbers: revenue, occupancy, check-ins",
      ],
    },

    journey: {
      eyebrow: "End to end",
      title: "From booking to housekeeping, no gaps",
      body: "The board follows the guest's journey so nothing slips through a crack.",
      steps: [
        {
          title: "Booking",
          body: "New bookings and blocks appear on the board and update occupancy the moment they are created.",
        },
        {
          title: "Stay",
          body: "Know who is in, who is arriving and who is leaving across every property.",
        },
        {
          title: "Housekeeping",
          body: "Cleaning status sits on each room, so the next guest is never a surprise.",
        },
      ],
      always: {
        label: "With AI",
        title: "AI operations assistant",
        body: "Ask the operations assistant to draft a booking \u2014 it proposes the change, you approve it right on the board.",
      },
    },

    stats: [
      { value: "1", caption: "Board", label: "Board for every property and room" },
      { value: "24/7", caption: "Assistant", label: "AI assistant ready to draft changes" },
      { value: "0%", caption: "Commission", label: "Commission on direct bookings, forever" },
    ],

    faq: {
      title: "Calendar questions",
      items: [
        {
          q: "Does the calendar show every channel?",
          a: "Yes. Direct bookings and bookings synced from OTAs all sit on the same board, so a night is never sold twice.",
        },
        {
          q: "Can I manage multiple properties?",
          a: "The board was built for multiple properties and rooms \u2014 scan your whole portfolio without leaving the page.",
        },
        {
          q: "Where do housekeeping and numbers live?",
          a: "Cleaning status sits on each room, while revenue, occupancy and upcoming check-ins roll up to the dashboard automatically.",
        },
      ],
    },

    cta: {
      title: "Put everything on one board.",
      body: "Set up your first property and take a direct booking today.",
    },
  },

  aiPage: {
    meta: {
      title: "AI operations assistant",
      description:
        "A ChatGPT-style assistant inside your workspace. It handles the odd jobs in plain language \u2014 and proposes every change for you to approve first.",
    },
    back: "All features",

    hero: {
      eyebrow: "AI operations assistant",
      title: "AI drafts. You approve.",
      body: "A ChatGPT-style assistant inside your workspace. It handles the odd jobs in plain language \u2014 and proposes every change for you to approve first.",
    },

    overview: {
      eyebrow: "Plain language",
      title: "Ask it like you would ask a colleague",
      body: "Create a booking, add a property, set a rate, record a payment \u2014 just describe it and the assistant drafts the exact change, showing its reasoning as it goes.",
      bullets: [
        "Ask in plain language",
        "Drafts bookings, properties, rooms and payments",
        "Conversational replies, streamed live",
        "Sits right inside the workspace",
      ],
    },

    control: {
      eyebrow: "You set the rules",
      title: "Nothing moves until you nod",
      body: "Every proposal comes with a full preview of what will change. Approve and it takes effect; reject and nothing happens. Double the output, all of the control.",
      bullets: [
        "Proposals come with a full preview",
        "The host approves every change",
        "Nothing runs unsupervised",
        "Fewer odd jobs, same control",
      ],
    },

    journey: {
      eyebrow: "How it works",
      title: "Four steps. Complete control.",
      body: "The assistant doubles your time without ever acting unsupervised.",
      steps: [
        {
          title: "Ask",
          body: "Say what you need in your own words \u2014 no forms, no menus to hunt through.",
        },
        {
          title: "AI drafts",
          body: "The assistant proposes the exact change to a booking, property, room or payment.",
        },
        {
          title: "You review",
          body: "A full preview of what will change, before anything is recorded.",
        },
        {
          title: "You approve",
          body: "One click applies it to the calendar. Reject it and nothing happens.",
        },
      ],
    },

    stats: [
      { value: "24/7", caption: "No shift ends", label: "Ready for the odd jobs" },
      { value: "100%", caption: "Awaiting you", label: "Of changes wait for your approval" },
      { value: "0%", caption: "Commission", label: "Commission on direct bookings, forever" },
    ],

    faq: {
      title: "Assistant questions",
      items: [
        {
          q: "Does the AI change things on its own?",
          a: "Never. The assistant only proposes changes with a full preview \u2014 nothing touches the calendar until you approve it.",
        },
        {
          q: "What can it do?",
          a: "It drafts bookings, properties, rooms and payments from a plain-language request, then hands the proposal to you to approve.",
        },
        {
          q: "Do I have to learn special commands?",
          a: "No. Type the way you would explain it to a colleague \u2014 the assistant reads the intent and drafts the change.",
        },
      ],
    },

    cta: {
      title: "Hand off the odd jobs.",
      body: "You keep control of every change. Start free today.",
    },
  },

  channelsPage: {
    meta: {
      title: "Channel sync",
      description:
        "Two-way iCal sync with Airbnb, Booking.com, Agoda, Traveloka and more \u2014 availability stays accurate everywhere, automatically.",
    },
    back: "All features",

    hero: {
      eyebrow: "Channel sync",
      title: "Every channel. No collisions.",
      body: "Two-way iCal sync with Airbnb, Booking.com, Agoda, Traveloka and more \u2014 availability stays accurate everywhere, automatically.",
    },

    overview: {
      eyebrow: "Distribution",
      title: "Sell everywhere at once",
      body: "Connect Airbnb, Booking.com, Agoda, Traveloka and any OTA with iCal. Availability flows both ways \u2014 booked on one channel, blocked instantly on the rest.",
      bullets: [
        "Two-way iCal import and export",
        "Every major OTA supported",
        "Availability accurate everywhere",
        "Connect a new channel in minutes",
      ],
    },

    control: {
      eyebrow: "No double bookings",
      title: "Booked anywhere, blocked everywhere",
      body: "Sync runs itself every hour and mirrors out to every connected channel \u2014 a direct guest and an Airbnb guest never land on the same night.",
      bullets: [
        "Automatic hourly sync",
        "Changes mirrored to every channel",
        "Direct and OTA bookings on one calendar",
        "No more juggling availability by hand",
      ],
    },

    journey: {
      eyebrow: "Why it matters",
      title: "Reach without the manual work",
      steps: [
        {
          title: "Reach",
          body: "Be on every channel your guests search, from one place.",
        },
        {
          title: "Always current",
          body: "Hourly sync keeps availability accurate without you lifting a finger.",
        },
        {
          title: "Two-way",
          body: "Bookings flow both directions \u2014 import from OTAs, export your blocks.",
        },
        {
          title: "No collisions",
          body: "One shared calendar means a night is never sold twice.",
        },
      ],
    },

    stats: [
      { value: "60\u2032", caption: "Every hour", label: "Automatic two-way sync" },
      { value: "2", caption: "Both ways", label: "Bookings in, blocks out \u2014 one connection" },
      { value: "0", caption: "Collisions", label: "Double bookings" },
    ],

    faq: {
      title: "Channel sync questions",
      items: [
        {
          q: "How does sync work?",
          a: "TLSHost connects each channel's iCal and syncs availability both ways \u2014 importing OTA bookings, exporting your blocks \u2014 automatically, every hour.",
        },
        {
          q: "Which channels can I connect?",
          a: "Any OTA with iCal, including Airbnb, Booking.com, Agoda and Traveloka.",
        },
        {
          q: "Does it stop double bookings?",
          a: "Yes. Every channel and your direct bookings share one calendar, so a night booked anywhere is blocked everywhere on the next sync.",
        },
      ],
    },

    cta: {
      title: "Turn on sync. Then forget it.",
      body: "Connect your OTAs and end double bookings for good.",
    },
  },

  directPage: {
    meta: {
      title: "Direct booking page",
      description:
        "Every property gets a guest-facing booking page on your own link. Direct bookings, no commission, straight onto the same calendar.",
    },
    back: "All features",

    hero: {
      eyebrow: "Direct booking page",
      title: "Your storefront. 100% yours.",
      body: "Every property gets a guest-facing booking page on your own link. Direct bookings, no commission, straight onto the same calendar.",
    },

    overview: {
      eyebrow: "Your storefront",
      title: "A booking page on your own link",
      body: "Share it anywhere you meet guests \u2014 a bio, a message, an ad. Guests see availability and book direct, with no OTA in between.",
      bullets: [
        "A booking page carrying your brand",
        "A public link per property",
        "Share it anywhere you meet guests",
        "Direct bookings land straight on the calendar",
      ],
    },

    control: {
      eyebrow: "Own the customer",
      title: "Cut the commission, keep the guest",
      body: "A direct booking is a relationship you own from the first click to check-out \u2014 and revenue you keep whole. No per-booking fee, ever.",
      bullets: [
        "No commission on any booking",
        "Keep 100% of direct revenue",
        "Own the guest from click to check-out",
        "Bookings sit on the same calendar",
      ],
    },

    journey: {
      eyebrow: "Why direct wins",
      title: "The revenue and the guest \u2014 both yours",
      steps: [
        {
          title: "Keep the revenue",
          body: "Nobody skims a percentage \u2014 every direct booking pays you in full.",
        },
        {
          title: "Own the relationship",
          body: "The guest is yours, from the first click to the day they check out.",
        },
        {
          title: "One calendar",
          body: "Direct bookings land on the same board as your OTA bookings.",
        },
      ],
    },

    stats: [
      { value: "0%", caption: "Forever", label: "Commission on direct bookings, forever" },
      { value: "100%", caption: "Yours", label: "Of direct revenue is yours" },
      { value: "1", caption: "Shared calendar", label: "Calendar for both direct and OTA bookings" },
    ],

    faq: {
      title: "Direct booking questions",
      items: [
        {
          q: "I already have Airbnb \u2014 why do I need direct booking?",
          a: "OTAs bring guests, but they take a percentage of every booking and own the guest relationship. A direct booking page lets you keep 100% of the revenue and build your own guest list.",
        },
        {
          q: "Where do direct bookings go?",
          a: "Straight onto the same calendar as your OTA bookings, so availability stays accurate everywhere and nothing double-books.",
        },
        {
          q: "Is it really no commission?",
          a: "Yes \u2014 absolutely. TLSHost is a flat subscription. There is no per-booking fee on direct bookings, on any plan.",
        },
      ],
    },

    cta: {
      title: "Keep your next booking whole.",
      body: "Open your page and keep every dong of the next booking.",
    },
  },

  housekeepingPage: {
    meta: {
      title: "Housekeeping",
      description:
        "Check-outs turn into cleaning jobs automatically. Your housekeepers see what needs doing on any phone \u2014 and you follow it live on the board.",
    },
    back: "All features",

    hero: {
      eyebrow: "Housekeeping",
      title: "Every turnover, spotless.",
      body: "Check-outs turn into cleaning jobs automatically. Your housekeepers see what needs doing on any phone \u2014 and you follow it live on the board.",
    },

    overview: {
      eyebrow: "For the housekeeping team",
      title: "Open the phone, see the work",
      body: "No group chat, no paperwork. Staff log in and see exactly the rooms assigned to them \u2014 which just checked out, which is a turnover and which needs doing first.",
      bullets: [
        "Rooms flip to \u201cDirty\u201d the moment a guest checks out",
        "Front-desk context: check-out, turnover or stayover",
        "One-tap Mark clean on any phone",
        "Staff only see the properties you assign",
      ],
    },

    control: {
      eyebrow: "For hosts & managers",
      title: "Cleaning progress, live",
      body: "The inspection board shows every room's status next to today's arrivals and departures. Mark a room inspected, flag maintenance, or mark everything clean at once.",
      bullets: [
        "An inspection board across every room",
        "Status: clean, dirty, inspected, maintenance",
        "Housekeeping state right on the calendar",
        "Mark everything clean in one click",
      ],
    },

    journey: {
      eyebrow: "From check-out to check-in",
      title: "Turnovers, in order",
      body: "TLSHost walks each room through the cleaning cycle so the next guest never waits.",
      steps: [
        {
          title: "Check-out",
          body: "The guest leaves and the room flips to dirty \u2014 nobody has to remember.",
        },
        {
          title: "Assigned",
          body: "The room appears in a housekeeper's list, with front-desk context attached.",
        },
        {
          title: "Cleaned",
          body: "One tap marks it clean. The board and the whole team update instantly.",
        },
        {
          title: "Inspected",
          body: "A manager confirms with an inspected mark \u2014 ready for the next check-in.",
        },
      ],
    },

    stats: [
      { value: "1", caption: "Action", label: "Tap to mark a room clean" },
      { value: "0", caption: "Dropped", label: "Paper lists or group chats" },
      { value: "100%", caption: "Automatic", label: "Of check-outs become cleaning jobs" },
    ],

    faq: {
      title: "Housekeeping questions",
      items: [
        {
          q: "Do staff need to install an app?",
          a: "No. The housekeeping view runs in a phone browser and installs to the home screen like an app \u2014 no app store required.",
        },
        {
          q: "What do housekeepers see?",
          a: "Only the properties and rooms assigned to them: which need cleaning, which are turnovers today, and a Mark clean button. No rates and no guest payment details.",
        },
        {
          q: "How does a room turn dirty?",
          a: "Automatically at check-out. You can also flag a room dirty or under maintenance yourself, from the calendar or the housekeeping board.",
        },
      ],
    },

    cta: {
      title: "Give your housekeeping team superpowers",
      body: "Set up housekeeping in minutes \u2014 included on every TLSHost plan.",
    },
  },

  teamPage: {
    meta: {
      title: "Team & permissions",
      description:
        "Give each collaborator exactly the properties they are responsible for, control who can edit whose bookings \u2014 and see who created each one.",
    },
    back: "All features",

    hero: {
      eyebrow: "Team & permissions",
      title: "Clear access. Clear accountability.",
      body: "Give each collaborator exactly the properties they are responsible for, control who can edit whose bookings \u2014 and see who created each one.",
    },

    overview: {
      eyebrow: "Scoped permissions",
      title: "Everyone sees only their own part",
      body: "Invite collaborators and give each one exactly the properties and room types they are responsible for \u2014 no more. The right person over the right rooms.",
      bullets: [
        "Per-person property & room-type permissions",
        "A separate collaborator portal, scoped to what they see",
        "Invite a collaborator in a few clicks",
        "An interface trimmed to the role",
      ],
    },

    control: {
      eyebrow: "Transparency",
      title: "Know who did what",
      body: "Decide who can edit whose bookings, and see exactly who created each one. The bigger the team, the more control and accountability grow with it.",
      bullets: [
        "Permission to manage other people's bookings",
        "Booking creator tracking",
        "Clear accountability across the team",
        "Control that grows with your portfolio",
      ],
    },

    journey: {
      eyebrow: "From solo to serious scale",
      title: "Permissions that grow with your team",
      body: "Start on your own and add collaborators as the portfolio grows \u2014 without ever changing tools.",
      steps: [
        {
          title: "Right now, just you",
          body: "Run everything yourself today \u2014 and invite help the moment you are ready, without changing tools.",
        },
        {
          title: "Permissions for a growing team",
          body: "Give each collaborator exactly the properties they manage, and track who created each booking.",
        },
        {
          title: "Fine-grained control at scale",
          body: "Run a large portfolio with permissions and accountability that hold across many properties and many collaborators.",
        },
      ],
    },

    stats: [
      { value: "1:1", caption: "Per person", label: "Property & room-type permissions" },
      { value: "100%", caption: "Traceable", label: "Of bookings show who created them" },
      { value: "24/7", caption: "Assistant", label: "AI assistant ready for the odd jobs" },
    ],

    faq: {
      title: "Team & permissions questions",
      items: [
        {
          q: "Can I limit what a collaborator sees?",
          a: "Yes. Each collaborator sees only the properties and room types they are responsible for, through a separate portal scoped to exactly that.",
        },
        {
          q: "Can collaborators edit each other's bookings?",
          a: "Only if you allow it. You control who can manage other people's bookings, and every booking records who created it.",
        },
        {
          q: "Is there a separate collaborator portal?",
          a: "Yes \u2014 collaborators sign in to their own portal, scoped to what they can see, separate from the host workspace.",
        },
      ],
    },

    cta: {
      title: "Get the whole team on board.",
      body: "Permissions per person, tracking per booking. Start free today.",
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
        name: "Free",
        tagline: "Your first property, live tonight.",
        price: "₫0",
        cadence: "forever",
        cta: "Start free",
        popular: false,
        features: [
          "One property",
          "Booking calendar and inventory",
          "Your direct booking page",
          "No booking commission",
        ],
      },
      {
        name: "Channel Manager",
        tagline: "For hosts selling across several OTAs at once.",
        price: "₫290k",
        cadence: "month",
        cta: "Create an account",
        popular: true,
        features: [
          "Everything in Free",
          "Two-way OTA channel sync",
          "Airbnb, Booking.com, Agoda and more channels",
          "Availability synced automatically, hourly",
          "Multiple properties",
        ],
      },
      {
        name: "Professional",
        tagline: "For teams operating a portfolio at scale.",
        price: "₫690k",
        cadence: "month",
        cta: "Create an account",
        popular: false,
        features: [
          "Everything in Channel Manager",
          "AI operations assistant",
          "Members and scoped permissions",
          "Booking creator tracking",
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
    approval: {
      title: "Waiting for you",
      kind: "REFUND",
      headline: "Refund 2,400,000 ₫ to Linh Tran",
      meta: "Proposed by the assistant · Booking #2418",
      reason: "Above the auto-approve limit — needs your confirmation",
      approve: "Approve",
      reject: "Reject",
      note: "You set the rules. The assistant never acts on its own.",
    },
    conflict: {
      title: "Double-booking blocked",
      subtitle: "Garden Suite · 14–17 Jul",
      kept: "Kept",
      blocked: "Blocked",
      nights: "nights",
      note: "The overlapping night is blocked across every channel at once.",
    },
    board: {
      title: "Housekeeping",
      subtitle: "Checklist · Today",
      markAll: "Mark all clean",
      inspected: "Inspected",
      maintenance: "Maintenance",
      checkout: "Checkout",
      turnover: "Turnover",
      stayover: "Staying on",
    },
    activity: {
      title: "Activity",
      subtitle: "Creator trail",
      live: "Live",
      note: "Every record carries the name of who made it.",
      entries: [
        { who: "Mai Le", what: "created booking #A2391", when: "just now" },
        { who: "Trang Do", what: "cleaned Garden Suite", when: "8 min ago" },
        { who: "Hoang Vu", what: "edited the Sky Loft stay", when: "24 min ago" },
        { who: "Bao Nguyen", what: "granted access to Trang Do", when: "51 min ago" },
      ],
    },
  },
};

export default en;
