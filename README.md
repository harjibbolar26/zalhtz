# ZALHTZ website

Two-page Nuxt website for zalhtz.oraclesteps.com, using ZALHTZ branding with the layout and typography conventions established by the Oracle Steps site.

## Pages

- / — company introduction, capability overview, delivery partnership and process
- /solutions — detailed infrastructure, communications, support and software services, plus enquiry form

## Local development

Run npm ci and npm run dev.

## Validation

Run npm test and npm run build.

## Contact form

Copy .env.example to .env and configure the authenticated SMTP mailbox. The form always routes to u2us@zalhtz.com; the visitor address is used only as Reply-To.

## Deployment

Deploy this repository as a separate Node/Nitro project. Point the zalhtz DNS record for oraclesteps.com to the hosting provider after the deployment target is created. The site has not been published from this repository.
