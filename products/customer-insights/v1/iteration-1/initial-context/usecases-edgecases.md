# Customer Insights — Usecases & Edgecases

## Context

This document translates the current Customer Insights discovery inputs into implementation-ready scenarios for the next iteration. It covers the three identified surfaces:

- LTV tab
- Cohort tab
- LTV per ASIN

Primary source references:

- [customer-insights-feedback-brief.md](./customer-insights-feedback-brief.md)
- [meeting-transcript.md](./meeting-transcript.md)

## Primary Use Cases

### UC-01: Analyze customer value at tab level (LTV/Cohort/LTV per ASIN)

- **Actor:** Ops analyst
- **Trigger/Intention:** Open Customer Insights to evaluate customer value and lifecycle performance.
- **Expected system behavior:** Display available metrics for the selected tab with clear labels/definitions and consistent revenue vs margin framing.
- **Success criteria:** User can interpret all displayed KPIs without ambiguity and identify top opportunities for action.

### UC-02: Compare Revenue and Margin viewpoints for decision-making

- **Actor:** Account manager / media strategist
- **Trigger/Intention:** Switch analysis focus between Revenue and Margin to support bidding and business reporting.
- **Expected system behavior:** Preserve metric context when toggling viewpoint, and clearly indicate how each KPI should be interpreted in each mode.
- **Success criteria:** User can confidently choose the right optimization direction (performance/bidding vs business growth) without misreading metrics.

### UC-03: Discover promising products beyond highest-volume products

- **Actor:** Growth strategist
- **Trigger/Intention:** Explore product-level performance to find high-potential ASINs that are not necessarily top-volume.
- **Expected system behavior:** Provide sorting/filtering options that are not tied only to customer volume (e.g., sort by LTV-oriented KPIs, margin indicators, repeat/cross-repeat signals).
- **Success criteria:** User can surface and shortlist lower-volume but high-signal products for strategic focus.

### UC-04: Understand why a tab or table is empty

- **Actor:** Ops analyst / CSM
- **Trigger/Intention:** User sees no data and needs immediate explanation.
- **Expected system behavior:** Show explicit reason-specific empty states instead of generic blanks.
- **Success criteria:** User can immediately identify whether the issue is insufficient history, account type limitation, or missing dataset connection/purchase.

### UC-05: Know when data will become available

- **Actor:** Ops analyst
- **Trigger/Intention:** User has partial account history and wants to know when KPI computation becomes valid.
- **Expected system behavior:** Display required historical windows (example: 12 rolling months), currently available history, and expected earliest availability date where possible.
- **Success criteria:** User understands the timeline to data readiness and does not escalate as a bug.

### UC-06: Migrate Ops LTV-per-ASIN usage into the platform

- **Actor:** Internal Ops user transitioning to Omny platform
- **Trigger/Intention:** Need equivalent product-level LTV workflow in platform without relying on separate ops-only views.
- **Expected system behavior:** Recreate critical tab-level analysis behavior and KPI readability in the productized Customer Insights experience.
- **Success criteria:** Ops users can run the same core analysis in-platform with no dependency on side tools/views.

## Edge Cases

### EC-01: Insufficient historical depth for KPI computation

- **Root cause:** KPI requires more history than available (explicit example: 12 rolling months needed).
- **Typical symptom:** Empty table/values despite account appearing active.
- **Required UI/system response:**
  - show a dedicated empty state explaining the required history window
  - show currently available history
  - indicate earliest date when KPI can be computed (when derivable)
- **Fail-safe behavior:** Do not present blank values without explanation.

### EC-02: Account type constraint (vendor vs seller behavior differences)

- **Root cause:** Certain insights are constrained by account type and available dataset pathways.
- **Typical symptom:** User expects seller-like insights on vendor setup.
- **Required UI/system response:**
  - detect account type and display account-specific guidance
  - explain what data is unavailable by default for that account type
- **Fail-safe behavior:** Avoid generic “no data” messaging when account-type explanation exists.

### EC-03: Missing paid dataset or disconnected source

- **Root cause:** Required Amazon dataset is not purchased or not connected.
- **Typical symptom:** No values where user expects fully populated insights.
- **Required UI/system response:**
  - explicitly state that additional dataset purchase/connection is required
  - differentiate this from “no data yet” and “insufficient history”
- **Fail-safe behavior:** Prevent users from interpreting this as a platform bug.

### EC-04: Ambiguous or undefined KPI label (LTV per ASIN view)

- **Root cause:** At least one KPI is currently unclear to users (definition/formula not obvious).
- **Typical symptom:** User cannot explain what a KPI represents or how to act on it.
- **Required UI/system response:**
  - add explicit KPI definitions/tooltips
  - provide formula/interpretation guidance where needed
- **Fail-safe behavior:** Block release of KPIs without clear semantic definition.

### EC-05: Product list biased to high-volume items only

- **Root cause:** Default ordering favors entry/high-volume customer counts.
- **Typical symptom:** Potentially strong low-volume products remain hidden.
- **Required UI/system response:**
  - offer alternate sorting/filtering modes independent of pure volume
  - preserve discoverability of “promising but smaller” products
- **Fail-safe behavior:** Ensure at least one ranking mode favors efficiency/quality signals.

## UX Messaging Requirements (Edge Case → Pattern)

- **Insufficient history:** Empty-state card + inline “history coverage” helper (required vs available window).
- **Account type limitation:** Context banner tied to account type, with concise explanation.
- **Missing paid dataset:** Action-oriented empty state describing dependency (purchase/connection).
- **Ambiguous KPI:** Tooltip/info icon on KPI header + glossary-style metric definition.
- **Volume bias risk:** Sort helper text + visible alternate sort presets.

## Open Questions

- What is the exact definition and formula of the unclear KPI in LTV per ASIN?
- What should be the default product table sorting strategy?
- What is the preferred historical-depth UX pattern (banner, inline badge, table-level helper, or combined)?

## Traceability Notes

- Completion scope and priority surfaces derive from the feedback brief (LTV, Cohort, LTV per ASIN).
- KPI ambiguity, revenue/margin interpretation, and product-level sorting concerns derive from both brief and transcript discussion.
- Data-availability messaging requirements (insufficient history, vendor/account-type, dataset purchase/connection) derive from explicit transcript clarification.
