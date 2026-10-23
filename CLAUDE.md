# my-portfolio — agniva.in

Next.js + Contentlayer, MDX content. Shared conventions: `..\CLAUDE.md`.

## This site is on the critical path for Play releases

It hosts `https://www.agniva.in/privacy/<app>` for every app in the Flutter line. Play
requires that URL to resolve publicly — outside any login, not a 404 — **before** a
submission is reviewed. The pages are unlisted and `noindex`, but they must be live.

So: **deploying this site is a release blocker for the apps, not a side task.** (Deployed and
verified live on 2026-09-19 for the four apps; a new app's policy page needs the same
push-and-deploy before that app can be submitted. Pushing to `main` auto-deploys via Vercel.) Any change
that could break the build blocks five product launches at once. Check `app/privacy/`
still renders before shipping anything structural.

**Agniva's rule (2026-10-09): the policy pages are reachable only by their exact URL.** No
page on the site may link to them, there is no `/privacy` index (it 404s), no redirect points
at them, and they stay out of `sitemap.ts`. Before pushing anything that touches nav, footer,
home or the sitemap, grep for `privacy` outside `app/privacy/`; after deploy, crawl the
sitemap URLs plus `/`, `/about`, `/contact`, `/projects`, `/resume`, `/skills` and confirm none
mentions `privacy` (verified clean on 2026-10-09, 37 pages).

Each policy page must match its app's Play Data-safety answers. Play cross-checks the two,
and a mismatch is a rejection. When an app's storage or permissions change, the policy page
changes in the same commit. The pages live in `app/privacy/` (`policies.ts` holds the text,
`[slug]/page.tsx` renders it) and print each app's Android package name, so a package rename
touches `policies.ts` too.

## Layout

```
app/              Next.js app router
  privacy/        per-app policy pages at /privacy/<slug> — release-critical
pages/            legacy pages still in use
content/
  projects/*.mdx  ~29 project write-ups
  (privacy pages are NOT here — see app/privacy/)
util/  types/  public/
.contentlayer/    generated, don't edit
```

## Multilingual (added 2026-10-09)

`app/components/language-switcher.tsx` (bottom-right, next to the theme toggle) uses the free
Google Translate website element: picking a language sets the `googtrans` cookie and reloads.
The HTML stays English, so this gives **no SEO in other languages** and nothing gets indexed in
Hindi/Bengali. Real per-locale routes (next-intl + hand-checked text) would be needed for that.
Names get mangled ("Agniva Maiti" → "अग्निवा मैती"), so mark proper nouns with
`translate="no" className="notranslate"`. Google's banner is hidden in `global.css`. Verified
working on localhost, en → hi → en.

## Content notes

The project write-ups are the public evidence behind the jobs goal — they currently lean
toward small tools and student work (calculators, clocks, converters) rather than the Indic
NLP and applied-ML pieces (Bengali tokenizer, rhyming-word finders, Semantic Emotification,
satellite-image classifier), which are the stronger signal for research and senior roles.

2026-10-09: added GScholar (com.mynimalistic.gscholar, 100K+ / 4.4★, live), NagaNLP (arXiv
2512.12537) and NagaTranslate write-ups; home features those + Bengali tokenizer + Semantic
Emotification; publications live in `resume-data.ts` (`publications`) and show on home + /resume.
The four com.spontaneum.* reader apps return 404 on Play (not published): write them up only
once live. Don't link NagaTranslate's Play listing (1.7★) or its repo (private). The ICML 2026
items are GlobalSouthML *affinity-event posters*, not workshop papers: keep that label.
LinkedIn handle conflict unresolved: site uses `agniva-maiti`, resume PDF uses `agnivamaiti`.
