# High Eye Solutions Roadmap TODOs

## Future Phase 2

- Backend contact form API with validation and spam protection.
- Email notifications for new quote requests.
- Customer portal for active clients.
- Project tracking workflow.
- Deliverable downloads with secure links.
- Client login and account management.
- Online scheduling with weather and availability checks.
- CRM integration for lead tracking and follow-up.

## Future Phase 3

- Enterprise account support.
- Utility asset management workflows.
- Mapping data delivery.
- Inspection reporting platform.
- GCP Cloud Storage integration for media and deliverables.
- Client dashboard for projects, files, invoices, and status.
- Automated report generation.
# Client Portal

- Connect secure client registration, login, password reset, and role-based access.
- Add backend APIs for mission requests, estimates, approvals, scheduling, and status changes.
- Add project messaging and notification delivery.
- Store deliverables in GCP Cloud Storage with expiring signed download links.
- Add client upload support for site plans, shot lists, and reference images.
- Integrate a qualified marketplace payment provider for payment authorization,
  escrow-style milestones, refunds, disputes, and contractor payouts.
- Complete legal, accounting, privacy, and payment-flow review before enabling transactions.

# Operations Platform

- Replace shared demo records with Firestore mission, client, invoice, receipt,
  pilot, credential, assignment, deliverable, message, and audit collections.
- Add administrator authentication and role-based controls.
- Add expandable mission detail APIs with claim, carrier, access, SLA, scope,
  deliverable, invoice, payment, payable, and audit data.
- Add client history and property records.
- Add invoice and receipt PDF generation for client and admin portals.
- Generate client-specific watermarked proof images and proxy videos.
- Keep originals in private Cloud Storage paths and issue short-lived signed
  URLs only after the configured approval and payment-release event.
- Log proof views, approvals, revisions, releases, and original downloads.
- Add deliverable licensing terms and acceptance timestamps to each mission.

# Vendor Assignment Workflow

- Add assignment-source records for direct clients, Bees360, FlyGuys, Zeitview,
  Droners.io, and additional approved platforms.
- Add manual assignment intake and external reference numbers.
- Track acceptance, deadline, scope, required deliverables, platform fees,
  gross revenue, pilot payable, and net revenue by source.
- Add scheduling-attempt and property-contact history.
- Add underwriting inspection templates for residential, commercial, and
  managed high-value assignments.
- Add client-received acknowledgment and source-specific closeout checklists.
- Add pilot payables, payout statements, and provider transaction references.
- Add mobile pilot workflow for accept/decline, en route, on site, upload,
  processing, and completion actions.
- Add CAT mode, bulk mission intake, priority queues, routing, and SLA timers.
- Validate state authority, license numbers, expiration dates, COI, aircraft,
  and pilot credentials before assignment.
