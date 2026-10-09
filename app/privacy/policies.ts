// Privacy policies for the unofficial Android apps.
//
// These pages exist so the apps can give Google Play a working privacy policy URL.
// They are deliberately unlisted: nothing links to them, they are kept out of
// sitemap.ts, and each one renders `noindex, nofollow`. They still resolve for
// anyone with the link, which is what Play requires — a policy behind a login or
// a 404 fails review.
//
// Every claim here is checked against what the apps actually ship: the declared
// manifest permissions and the pubspec dependency list. None of the four bundles
// an analytics, advertising or crash-reporting SDK, so "no tracking" is a fact
// about the code, not a marketing line. If a dependency or permission is ever
// added, update the matching policy in the same commit.

export type PolicySection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type Policy = {
  slug: string;
  app: string;
  packageId: string;
  service: string;
  serviceOwner: string;
  servicePrivacyUrl: string;
  updated: string;
  intro: string[];
  sections: PolicySection[];
};

const CONTACT_EMAIL = "maitiagniva@gmail.com";

/** Sections that are identical across all four apps. */
const commonSections = (p: {
  app: string;
  service: string;
  serviceOwner: string;
  servicePrivacyUrl: string;
  storedItems: string;
}): PolicySection[] => [
  {
    heading: "What stays on your device",
    body: [
      `${p.app} stores ${p.storedItems} in the app's own private storage on your phone. None of it is uploaded, backed up to me, or shared with anyone.`,
      "You can remove it at any time from inside the app, or by clearing the app's data or uninstalling it.",
    ],
  },
  {
    heading: "What leaves your device",
    body: [
      `To show you anything, the app has to fetch it. It requests pages and data directly from ${p.service}. Those requests carry the things any internet request carries — your IP address, and a user agent identifying the app.`,
      `I do not operate those servers and I never see those requests. ${p.serviceOwner} handles that data under its own privacy policy.`,
      "The app also embeds a web view. Cookies and local storage set by the site you are viewing are kept in the app's private web view storage, exactly as a browser would keep them, and are cleared when you clear the app's data.",
    ],
  },
  {
    heading: "What I do not do",
    bullets: [
      "No account, no sign-in, no profile.",
      "No advertising, and no advertising identifier is read.",
      "No analytics or crash-reporting SDK is bundled in the app.",
      "No behavioural tracking, and no selling or sharing of personal information.",
      "No data is transmitted to me or to any server I control. I run no server.",
    ],
  },
  {
    heading: "When you share or open a link",
    body: [
      "If you share something, it goes to whichever app you pick from the system share sheet, and that app's own policy takes over.",
      "External links open in your normal browser rather than silently inside the app.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This app is not directed at children under 13, and it does not knowingly collect anything from them. It collects nothing from anyone.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If this policy changes, the date at the top of this page changes with it. Material changes will also be noted in the app's release notes.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy can go to ${CONTACT_EMAIL}.`,
    ],
  },
];

export const policies: Policy[] = [
  {
    slug: "wikitionary-app",
    app: "Wikitionary App",
    packageId: "com.spontaneum.wikitionary",
    service: "Wiktionary and the Wikimedia Foundation's APIs",
    serviceOwner: "The Wikimedia Foundation",
    servicePrivacyUrl: "https://foundation.wikimedia.org/wiki/Policy:Privacy_policy",
    updated: "9 October 2026",
    intro: [
      "Wikitionary App is an unofficial, independent reader for Wiktionary. It is not affiliated with, endorsed by, or supported by the Wikimedia Foundation.",
      "The short version: the app collects nothing about you, has no account, no ads and no analytics, and the only network requests it makes are to Wikimedia to fetch the dictionary content you asked for.",
    ],
    sections: [
      ...commonSections({
        app: "Wikitionary App",
        service: "Wiktionary and the Wikimedia Foundation's APIs",
        serviceOwner: "The Wikimedia Foundation",
        servicePrivacyUrl: "https://foundation.wikimedia.org/wiki/Policy:Privacy_policy",
        storedItems:
          "your saved words (with their offline definitions, any notes you add and your review progress), reading history, preferred language and display settings",
      }),
      {
        heading: "Text you look up from other apps",
        body: [
          'The app can receive text when you select it elsewhere and choose "Look up in Wiktionary", or when you share text to it.',
          "That text is used for one thing: to run the lookup you asked for. It is sent to Wiktionary (as a search term, or to its public definition API for a quick definition) and is not stored separately or sent anywhere else.",
        ],
      },
      {
        heading: "Permissions",
        bullets: ["Internet access, to fetch dictionary content. That is the only permission the app declares."],
      },
    ],
  },
  {
    slug: "wikivoyager-app",
    app: "WikiVoyager App",
    packageId: "com.spontaneum.wikivoyager",
    service: "Wikivoyage and the Wikimedia Foundation's APIs",
    serviceOwner: "The Wikimedia Foundation",
    servicePrivacyUrl: "https://foundation.wikimedia.org/wiki/Policy:Privacy_policy",
    updated: "19 September 2026",
    intro: [
      "WikiVoyager App is an unofficial, independent reader for Wikivoyage. It is not affiliated with or endorsed by the Wikimedia Foundation.",
      "The short version: no account, no ads, no analytics, nothing sent to me. The app asks for your location only for the Nearby screen, and only while you are using it.",
    ],
    sections: [
      {
        heading: "Location",
        body: [
          "This is the one piece of sensitive data the app touches, so it gets its own section.",
          "The Nearby screen finds travel destinations within about 10 km of you. To do that, the app reads your approximate or precise location from Android and sends those coordinates to Wikimedia's geosearch API, which returns the nearby articles. That request is the only place your coordinates go.",
          "Your location is not stored on the device, not written to any log, not attached to anything else, and never sent to me. It is read when you open Nearby and discarded afterwards.",
          "The permission is optional. If you decline it, every other part of the app works normally; only Nearby stops being useful.",
        ],
      },
      ...commonSections({
        app: "WikiVoyager App",
        service: "Wikivoyage and the Wikimedia Foundation's APIs",
        serviceOwner: "The Wikimedia Foundation",
        servicePrivacyUrl: "https://foundation.wikimedia.org/wiki/Policy:Privacy_policy",
        storedItems:
          "your bookmarks, reading history, offline copies of articles, and display settings",
      }),
      {
        heading: "Offline copies",
        body: [
          "Articles you save for offline reading are written to the app's private storage on your device. They are readable only by this app and are deleted when you remove them, clear the app's data, or uninstall it.",
        ],
      },
      {
        heading: "Permissions",
        bullets: [
          "Internet access, to fetch travel guides.",
          "Approximate and precise location, used only by the Nearby screen, as described above. Optional.",
        ],
      },
    ],
  },
  {
    slug: "wikiquotes-app",
    app: "WikiQuotes App",
    packageId: "com.spontaneum.wikiquotes",
    service: "Wikiquote and the Wikimedia Foundation's APIs",
    serviceOwner: "The Wikimedia Foundation",
    servicePrivacyUrl: "https://foundation.wikimedia.org/wiki/Policy:Privacy_policy",
    updated: "19 September 2026",
    intro: [
      "WikiQuotes App is an unofficial, independent reader for Wikiquote. It is not affiliated with or endorsed by the Wikimedia Foundation.",
      "The short version: the app collects nothing about you, has no account, no ads and no analytics, and only talks to Wikimedia to fetch the quotations you asked for.",
    ],
    sections: [
      ...commonSections({
        app: "WikiQuotes App",
        service: "Wikiquote and the Wikimedia Foundation's APIs",
        serviceOwner: "The Wikimedia Foundation",
        servicePrivacyUrl: "https://foundation.wikimedia.org/wiki/Policy:Privacy_policy",
        storedItems:
          "your saved quotes, bookmarks, reading history and display settings",
      }),
      {
        heading: "Quote images",
        body: [
          "The quote-card composer renders the image on your device. Nothing is uploaded to make it. The finished image goes only where you send it through the share sheet.",
        ],
      },
      {
        heading: "Permissions",
        bullets: ["Internet access, to fetch quotations. That is the only permission the app declares."],
      },
    ],
  },
  {
    slug: "biorxiv-reader",
    app: "BioRxiv Reader",
    packageId: "com.spontaneum.biorxiv",
    service: "biorxiv.org and the public bioRxiv API",
    serviceOwner: "bioRxiv and Cold Spring Harbor Laboratory",
    servicePrivacyUrl: "https://www.biorxiv.org/content/privacy-statement",
    updated: "19 September 2026",
    intro: [
      "BioRxiv Reader is an unofficial, independent reader for bioRxiv. It is not affiliated with, endorsed by, or supported by bioRxiv or Cold Spring Harbor Laboratory.",
      "The short version: no account, no ads, no analytics, nothing sent to me. Your saved papers and the notes you write on them never leave your phone.",
    ],
    sections: [
      ...commonSections({
        app: "BioRxiv Reader",
        service: "biorxiv.org and the public bioRxiv API",
        serviceOwner: "bioRxiv and Cold Spring Harbor Laboratory",
        servicePrivacyUrl: "https://www.biorxiv.org/content/privacy-statement",
        storedItems:
          "your saved papers, the private notes you attach to them, your reading history, followed subject categories, a cache of the last feed results, and display settings",
      }),
      {
        heading: "Your notes",
        body: [
          "Notes you write on a paper are personal content. They are stored in the app's private storage and are never transmitted anywhere — not to bioRxiv, not to me. They are included only if you choose to export or share them yourself.",
        ],
      },
      {
        heading: "Permissions",
        bullets: ["Internet access, to fetch preprints. That is the only permission the app declares."],
      },
    ],
  },
];

export const getPolicy = (slug: string): Policy | undefined =>
  policies.find((policy) => policy.slug === slug);
