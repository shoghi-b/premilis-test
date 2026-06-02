# Customer Insights — Product Feedback Brief

## Source

- **Meeting:** Omny Daily UX/UI - June 01
- **Full transcript:** [meeting-transcript.md](./meeting-transcript.md)
- **Recording:** https://fathom.video/share/_9HxSMPvoCpaZ3Dhy62GQYgyBKLsVSBT (Customer Insights feedback ~22:25–32:32)

## Summary

Customer Insights still has unfinished scope to bring into the platform. Elodie highlighted three priority surfaces: **LTV tab**, **Cohort tab**, and **LTV per ASIN** (currently used by Ops in another view). Main needs are better KPI clarity, better product-level analysis behavior, and clear messaging when data is missing due to account type or insufficient historical depth.

## Scope

| Area | Surfaces |
|------|----------|
| Core Customer Insights | LTV tab, Cohort tab, LTV per ASIN |
| UX/data explainability | Empty-state reasons, history coverage guidance, account-type guidance |
| Ops-to-platform migration | Bring existing Ops-facing LTV-per-ASIN usage into Omny platform |

## 1. Complete remaining Customer Insights modules

Elodie called out that this project is **not fully done yet** and should continue across:

- **LTV**
- **Cohort**
- **LTV per ASIN**

The LTV-per-ASIN experience currently exists in another operational view and should be integrated as a productized platform capability.

## 2. Clarify KPIs and metric meaning

### Current concerns

- One KPI in the LTV-per-ASIN view appears unclear/undefined to users (Elodie explicitly questioned its meaning).
- Both **Revenue** and **Margin** are shown; Margin is important for bidding decisions, while Revenue remains useful context.

### Task direction

- Add metric definitions/tooltips or labels that remove ambiguity for each KPI.
- Ensure value interpretation remains explicit when switching between Revenue and Margin perspectives.

## 3. Improve product-level analysis behavior

### Current concern

Product breakdown appears mostly biased toward high-volume products (e.g., entry customers), which can hide promising lower-volume products.

### Task direction

- Add sorting/filtering options that allow analysis independent from pure customer volume.
- Support discovery of products with strong KPI signals even if absolute customer counts are lower.

## 4. Add data availability transparency (major UX need)

### Problem observed by Ops

Users frequently interpret empty screens as bugs, while causes differ:

- Not enough historical data for KPI computation
- Account type constraints (e.g., vendor context)
- Dataset not connected / not purchased

### Task direction

- Show explicit reason-specific empty states/messages (instead of generic empty tables).
- Surface required history windows where relevant (example mentioned: KPIs computed on **12 rolling months**).
- Expose what history is currently available and, where possible, when values should begin to appear.

## 5. Account-type and data-source guidance

### Vendor case

Elodie noted vendor detection is straightforward (via account naming) and can support targeted messaging.

### Task direction

- Add clear guidance when missing data is due to unavailable paid Amazon datasets.
- Differentiate “no data yet,” “insufficient history,” and “requires additional dataset purchase.”

## Action items (from transcript)

- Send LTV-per-ASIN screenshot to Rushali.
- Prioritize finishing DSP first, then continue Customer Insights implementation if capacity remains this week.
- Start design/implementation thinking for Customer Insights improvements now so work can follow immediately after DSP.

## Open questions to resolve in implementation

- Exact definition and formula of the currently unclear KPI in LTV-per-ASIN.
- Preferred default sorting strategy for product-level tables.
- Final UX pattern for historical-depth indicator (banner, inline badge, or table-level helper state).

## Related artifact

- Full transcript: [meeting-transcript.md](./meeting-transcript.md)
