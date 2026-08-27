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

  aiPage: {
    meta: {
      title: "AI operations assistant",
      description:
        "A conversational assistant inside the workspace: it drafts changes to bookings, rates and payments, then waits for your approval.",
    },
    back: "All features",

    hero: {
      eyebrow: "AI operations assistant",
      title: "It drafts. You approve.",
      body: "Ask in plain language, the way you would ask a colleague. The assistant stages the change, shows you exactly what would move, then stops and waits. The decision never leaves your hands.",
    },

    overview: {
      eyebrow: "Plain language",
      title: "No syntax, no menu to hunt through",
      body: "Create a booking, change the weekend rate, block a room for maintenance, record a payment that just landed. Describe it in your own words — the assistant reads the intent and stages the right action.",
      bullets: [
        "Ask in ordinary sentences, with no commands to learn",
        "Drafts bookings, properties, rooms, rates and payments",
        "Answers conversationally, streaming as it goes",
        "Lives inside the workspace, not in a separate tab",
      ],
    },

    control: {
      eyebrow: "You set the rules",
      title: "Nothing is written before you say so",
      body: "Every proposal is a draft with a full preview attached. Approve and it applies; reject and nothing happened. You double the work you get through without handing over control of it.",
      bullets: [
        "A full preview before anything is written",
        "Drafts expire, so a stale one has to be redone",
        "Approving re-checks the proposal against current data",
        "Refunds and cancellations always wait for you, without exception",
      ],
    },

    journey: {
      eyebrow: "The life of a proposal",
      title: "Three steps, and the decision stays where it was",
      body: "The assistant carries the drafting. The deciding never moves.",
      steps: [
        {
          title: "You ask",
          body: "Say what needs doing in your own words. The assistant reads the current calendar and rates before proposing anything.",
        },
        {
          title: "It drafts",
          body: "A draft appears showing the exact lines that would change — not a description of them, the difference itself.",
        },
        {
          title: "You approve",
          body: "One click applies it. Reject and nothing happens, and the log records both who proposed and who approved.",
        },
      ],
      always: {
        label: "Your call",
        title: "Auto-approve limits",
        body: "Set a threshold so small work runs straight through and simply reports back: blocking a night, fixing a note. Anything above it waits. You set the threshold, and you can change it whenever you like.",
      },
    },

    stats: [
      { value: "0", caption: "Exceptions", label: "Changes written without passing through you" },
      { value: "24/7", caption: "No shift ends", label: "The assistant is always there to draft the repetitive half" },
      { value: "100%", caption: "Visible", label: "Every proposal carries the full difference" },
    ],

    faq: {
      title: "Questions about the assistant",
      items: [
        {
          q: "Can the assistant change things on its own?",
          a: "No, and that is an architectural constraint rather than a promise. The assistant has no tool that writes to your data — it can only create a draft. Applying it is a separate action, taken by you.",
        },
        {
          q: "Do I have to learn any commands?",
          a: "No. Type the way you would explain it to someone new. If the request is missing something, the assistant asks rather than guessing.",
        },
        {
          q: "What if the calendar changes after it drafts?",
          a: "Approving re-checks against current data. If an OTA sold that same night in the meantime, the proposal is rejected with the reason instead of quietly overwriting anything.",
        },
      ],
    },

    cta: {
      title: "Hand over the repetitive half.",
      body: "Keep every decision. Start free today.",
    },
  },

  channelsPage: {
    meta: {
      title: "OTA channel sync",
      description:
        "Two-way iCal with Airbnb, Booking.com, Agoda, Traveloka and any iCal-capable OTA. Refreshes hourly, with guards against losing your blocks.",
    },
    back: "All features",

    hero: {
      eyebrow: "Channel sync",
      title: "Sell everywhere. Nothing collides.",
      body: "Two-way iCal connections to every major OTA. A night sold anywhere blocks itself everywhere else, and you never open a channel to reconcile it by hand.",
    },

    overview: {
      eyebrow: "Reach",
      title: "Connect once, every channel knows",
      body: "Paste each channel's iCal link one time. From then on availability flows both ways — OTA bookings come to you, your blocks go out to them.",
      bullets: [
        "iCal import and export, both directions",
        "Airbnb, Booking.com, Agoda, Traveloka and any iCal-capable OTA",
        "Adding a new channel takes under two minutes",
        "Each room type gets its own stable export link",
      ],
    },

    control: {
      eyebrow: "No double-bookings",
      title: "Sold once, blocked everywhere",
      body: "Direct bookings and OTA bookings share one calendar, so they cannot land on the same night. If two channels reach for one night, the database refuses the second and tells you.",
      bullets: [
        "Refreshes hourly with no manual step",
        "Overlaps blocked at the database, not in the interface",
        "Conflicts reported with both sides named",
        "Every sync run is logged: seen, applied, and held back",
      ],
    },

    journey: {
      eyebrow: "One sync run",
      title: "What happens every hour",
      body: "Additions apply immediately. Deletions do not — the two directions are not equally dangerous.",
      steps: [
        {
          title: "Fetch",
          body: "Pull each channel's feed. A network failure or an error page in place of a feed ends the run, leaving existing blocks untouched.",
        },
        {
          title: "Reconcile",
          body: "Each event is matched on its own identifier. New nights become new blocks; a stay whose dates moved is updated in place.",
        },
        {
          title: "Record",
          body: "The run is logged with how many events were seen, applied and held back — so \"where did my block go\" always has an answer.",
        },
      ],
      always: {
        label: "The guard",
        title: "Deleting is the dangerous direction",
        body: "Adding a block by mistake costs you one booking. Removing one by mistake sells a room that already has a guest in it. So a feed that suddenly comes back empty, or a run that would remove an implausible share of your blocks, is held for you to look at rather than carried out.",
      },
    },

    stats: [
      { value: "60′", caption: "Cycle", label: "Every connected channel refreshed each hour" },
      { value: "2", caption: "Directions", label: "Bookings in, blocks out — on one connection" },
      { value: "0", caption: "The target", label: "Nights sold twice across connected channels" },
    ],

    faq: {
      title: "Questions about channel sync",
      items: [
        {
          q: "Which channels can I connect?",
          a: "Any OTA that supports iCal, including Airbnb, Booking.com, Agoda, Traveloka, Expedia and VRBO. No partner approval to wait for.",
        },
        {
          q: "Does sync push rates to the OTAs?",
          a: "No. iCal carries only whether a night is taken — not rates, not guest names. Pushing rates needs each brand's partner API, each with its own approval process, and that is outside the current scope.",
        },
        {
          q: "What happens if a channel goes down?",
          a: "That run stops and backs off, leaving your existing blocks alone. After five consecutive failures you get an email — a channel failing silently is worse than one that says so.",
        },
      ],
    },

    cta: {
      title: "Turn sync on, then forget it.",
      body: "Connect your channels and stop reconciling by hand.",
    },
  },

  directPage: {
    meta: {
      title: "Direct booking page",
      description:
        "Every property gets a branded booking page on its own link. Guests book directly, get confirmed instantly, and no commission is taken.",
    },
    back: "All features",

    hero: {
      eyebrow: "Direct booking",
      title: "Your storefront. Your revenue.",
      body: "A booking page on your own link, one per property. Guests pick dates, book, and are confirmed on the spot. Bookings land in the same calendar as your OTA ones — and nobody takes a percentage.",
    },

    overview: {
      eyebrow: "Your storefront",
      title: "One link you can share anywhere",
      body: "Put it in a bio, send it in a message, attach it to an ad, print it on the card in the room. Guests see real availability and book right there, with no OTA in between.",
      bullets: [
        "A page carrying your property's name and images",
        "A public link for each individual property",
        "Availability read live from your calendar, never a copy",
        "Confirmation sent to the guest the moment they book",
      ],
    },

    control: {
      eyebrow: "Revenue you keep",
      title: "Cut the commission, keep the relationship",
      body: "A direct booking is a relationship you own from the first click to checkout. The guest's email is yours, so the next time they come back they come straight to you.",
      bullets: [
        "0% commission per booking, on every plan",
        "A flat subscription, with no hidden per-booking fee",
        "Guest details belong to you, not to a channel",
        "Direct and OTA bookings share one calendar",
      ],
    },

    journey: {
      eyebrow: "From link to booking",
      title: "Three steps, nobody in between",
      body: "No account for the guest to create, no app to install, no channel to route through.",
      steps: [
        {
          title: "They open the link",
          body: "The page shows real availability from your calendar, with the right rate for the dates they pick.",
        },
        {
          title: "They book",
          body: "Choose dates, fill in details, confirm. No account, and no step standing between intent and booking.",
        },
        {
          title: "It lands",
          body: "The booking appears on your board immediately and blocks that night across every connected channel on the next sync.",
        },
      ],
      always: {
        label: "Worth saying",
        title: "Direct does not replace the OTAs",
        body: "The OTAs are still where new guests find you, and that is worth the commission. The direct page is for the other group: returning guests, referrals, people who found you on social. Paying commission on those is money given away.",
      },
    },

    stats: [
      { value: "0%", caption: "Forever", label: "Commission on direct bookings, on every plan" },
      { value: "1", caption: "Shared calendar", label: "For direct and OTA bookings alike" },
      { value: "100%", caption: "Yours", label: "Revenue and guest details from a direct booking" },
    ],

    faq: {
      title: "Questions about direct booking",
      items: [
        {
          q: "I already sell on Airbnb — why do I need my own page?",
          a: "The OTAs bring new guests, but they keep a percentage and they keep the relationship. Your own page is where you take the bookings that were already yours: returning guests, referrals, people who follow you on social.",
        },
        {
          q: "Where do direct bookings go?",
          a: "Straight into the same calendar as your OTA bookings. That night is blocked across every connected channel, so there is nothing to double-book.",
        },
        {
          q: "How do guests pay?",
          a: "In this version the page collects the booking and sends payment instructions in the confirmation email; you record the money when it arrives. An online payment gateway is planned, not shipped.",
        },
      ],
    },

    cta: {
      title: "Keep all of the next booking.",
      body: "Open your booking page and stop paying commission on guests who were already yours.",
    },
  },

  housekeepingPage: {
    meta: {
      title: "Housekeeping",
      description:
        "Every checkout becomes a cleaning task. Staff see it on their phone, mark clean in one tap, and the host follows progress on the calendar.",
    },
    back: "All features",

    hero: {
      eyebrow: "Housekeeping",
      title: "Guest leaves, room goes to work.",
      body: "No group chat, no paper list, nobody having to remember. A checkout creates the cleaning task, the task reaches the right person, and the board updates the moment the room is done.",
    },

    overview: {
      eyebrow: "For the cleaning team",
      title: "Open the phone, see your own work",
      body: "Staff log in and see exactly the rooms assigned to them — which guest has just left, which is a same-day turnover, which one has a guest staying on.",
      bullets: [
        "Rooms flip to needs-cleaning the moment a guest checks out",
        "With the context: checkout, turnover, or staying on",
        "One tap to mark clean, visible to the team instantly",
        "Only assigned rooms — no rates, no guest payment details",
      ],
    },

    control: {
      eyebrow: "For hosts and managers",
      title: "Cleaning progress without asking anyone",
      body: "A checklist built around today: what is finished, what is in progress, what needs attention — set beside the day's arrivals and departures.",
      bullets: [
        "A checklist covering every room for the day",
        "States: clean, needs cleaning, inspected, under maintenance",
        "Status shown on the room's own cell in the calendar",
        "Flag maintenance so a room cannot be sold",
      ],
    },

    journey: {
      eyebrow: "Checkout to check-in",
      title: "One turnaround, unbroken",
      body: "Each room runs the full cycle without anyone tracking it from memory.",
      steps: [
        {
          title: "Checkout",
          body: "The guest leaves, the room flips to needs-cleaning and appears on the assigned person's list.",
        },
        {
          title: "Clean",
          body: "Staff finish and tap once to mark it clean. The board and the checklist change there and then.",
        },
        {
          title: "Inspect",
          body: "A manager confirms and the room moves to ready. The next arrival is never a gamble.",
        },
      ],
      always: {
        label: "On the phone",
        title: "Nothing to install",
        body: "The housekeeping view runs in a phone browser and can be added to the home screen like an app. No app store, no updates, and no device left behind for being too old.",
      },
    },

    stats: [
      { value: "1", caption: "Action", label: "Taps to report a room as clean" },
      { value: "0", caption: "Retired", label: "Paper lists and group chats left to maintain" },
      { value: "100%", caption: "Automatic", label: "Checkouts that become a cleaning task on their own" },
    ],

    faq: {
      title: "Questions about housekeeping",
      items: [
        {
          q: "Does the team need to install an app?",
          a: "No. It runs in a phone browser and can be added to the home screen. An old Android or an early iPhone handles it fine.",
        },
        {
          q: "What can housekeeping staff see?",
          a: "Only the properties and rooms you assign, with today's work. They do not see rates, revenue, or guest payment details.",
        },
        {
          q: "What if several people share one phone?",
          a: "That is the most common case in practice. The device signs in once for the property, and each person has their own code so the record still shows who did what.",
        },
      ],
    },

    cta: {
      title: "Give the cleaning team a list that is right.",
      body: "Set it up in minutes. Included on every plan.",
    },
  },

  teamPage: {
    meta: {
      title: "Team & permissions",
      description:
        "Give each collaborator the properties they are responsible for, decide who may edit whose bookings, and know who created every record.",
    },
    back: "All features",

    hero: {
      eyebrow: "Team & permissions",
      title: "Hand out the work, not your password.",
      body: "One account per person, one scope per account. Collaborators see the work assigned to them, and every record carries the name of whoever made it.",
    },

    overview: {
      eyebrow: "Scope",
      title: "Everyone sees their own part",
      body: "Invite someone and give them exactly the properties and room types they are responsible for — no more. Whoever runs An Bang has no need to see Hoi An.",
      bullets: [
        "Access scoped per property and per room type",
        "A collaborator portal showing only the assigned scope",
        "Invite by email; they set their own password",
        "An interface trimmed to the role, without what they never use",
      ],
    },

    control: {
      eyebrow: "Accountability",
      title: "Know who did what, and when",
      body: "You decide who may edit whose bookings. Every change leaves a trace, so when something does not add up, \"who did this\" always has an answer.",
      bullets: [
        "Turn editing of other people's bookings on or off",
        "Every booking records who created it",
        "The log keeps actor, action and timestamp",
        "AI proposals record the approver as well",
      ],
    },

    journey: {
      eyebrow: "Adding someone",
      title: "Three steps and they are working",
      body: "From deciding to delegate to them starting work, no step needs you again.",
      steps: [
        {
          title: "Invite",
          body: "Enter an email and pick a role. The invitation goes out and they set their own password.",
        },
        {
          title: "Assign scope",
          body: "Tick the properties and room types they cover. Scope takes effect at once, with no need for them to sign in again.",
        },
        {
          title: "Follow along",
          body: "From then on their actions appear in the log, attached to their name and the time.",
        },
      ],
      always: {
        label: "Grows with you",
        title: "Starting alone is fine",
        body: "Most hosts start with a single account and never open this section. It is here for the day you hire your first person — no tool to change, no data to move.",
      },
    },

    stats: [
      { value: "1:1", caption: "Per person", label: "Its own scope across properties and room types" },
      { value: "100%", caption: "Traceable", label: "Records carrying the name of who made them" },
      { value: "0", caption: "Shared", label: "Passwords that have to pass between people" },
    ],

    faq: {
      title: "Questions about team & permissions",
      items: [
        {
          q: "Can I limit what a collaborator sees?",
          a: "Yes, down to the property and the room type. They sign in to a separate portal showing only their assigned scope, apart from your workspace.",
        },
        {
          q: "Can collaborators edit each other's bookings?",
          a: "Only if you allow it. It is a per-person switch, off by default. Either way, every booking still records who created it.",
        },
        {
          q: "Is there a limit on team members?",
          a: "Members and permissions are on the Professional plan, with no cap on how many people. Lower plans use a single owner account.",
        },
      ],
    },

    cta: {
      title: "Get the team onto one system.",
      body: "Scoped per person, traceable per record. Start free.",
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
