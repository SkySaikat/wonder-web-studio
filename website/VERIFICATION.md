# Local verification — 7 November 2026

## Automated checks

- Final production build passed, including TypeScript and 78 generated framework routes.
- Seven inquiry/booking tests passed. They cover required consent/contact data, provider receipt requirements, origin checks, malformed/oversized/honeypot payloads, missing configuration, preferred-time email formatting, invalid dates/times/zones and the time-zone-aware future booking window.
- Production HTTP crawl checked all 71 public sitemap URLs. All returned successfully with unique titles and descriptions, one H1, matching canonicals and valid JSON-LD. No missing local assets, duplicate IDs or unmapped internal paths were reported. Preview noindex remained enabled on every page.
- Repeatable command: `AUDIT_BASE_URL=http://127.0.0.1:3001 python3 scripts/audit-pages.py` from this directory. Results: `audit-results.json`.

## Browser review

Reviewed the homepage on desktop and a 390px mobile viewport. The vibrant project showcase and original artwork loaded; the page and mobile booking dialog had no horizontal overflow. The dialog starts at its top and retains a visible close control while scrolling. The founder title reads “Founder & CEO · Team Lead.”

Verified preferred date/time selection, a changed America/New_York time zone, the second-step summary, and the Growth pricing button's service preselection. Escape closes the dialog and returns focus to its trigger. A local test submission showed the truthful missing-delivery-configuration error and retained the entered fields. No live message was sent. Seven automated tests also verify that the requested time is included in the provider payload without claiming a confirmed reservation.

Verified the global motion control pauses the showcase animation using the keyboard. The development toolbar can overlap the lower-left motion control; this toolbar is absent from production. The dismissible scroll invitation was observed. Earlier interaction checks covered gallery filtering, service tabs and arrow-key navigation, FAQs and the normal inquiry form.

## Activation limits

Email/Turnstile credentials, GA4 ID, Search Console verification and Stripe/PayPal links are not configured. Inbox delivery, live analytics and production challenge verification remain untested until those accounts are connected. The site has not been deployed or connected to the live domain. Calendar availability is not connected; call requests require manual confirmation.

The browser injected `cz-shortcut-listen` and `bis_skin_checked` attributes that generated development hydration warnings. These external attributes were not added by the app, and hydration warnings were not globally suppressed. No Lighthouse or field Core Web Vitals score is claimed by this verification.
