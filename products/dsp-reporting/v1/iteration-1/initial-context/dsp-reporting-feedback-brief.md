# DSP Reporting — Product Feedback Brief

## Source

- **Meeting:** Omny Daily UX/UI — June 01
- **Full transcript:** [meeting-transcript.md](./meeting-transcript.md)
- **Recording:** https://fathom.video/share/_9HxSMPvoCpaZ3Dhy62GQYgyBKLsVSBT (DSP feedback ~0:00–22:25)

## Summary

Two main workstreams for DSP reporting: fix **Overview** time aggregation (preset snapshots vs evolution granularity) and add a new **Reach** column group on Conversion, Consideration, and Loyalty. Across all tabs, evolution controls should default to **Weekly**, consistent with other Omny tables. Reach data is expected within the week; UI exploration can start with placeholders.

## Scope

| Area | Tabs / surfaces |
|------|-----------------|
| Overview | Aggregation presets, selector rename (per Figma) |
| Evolution granularity | All tabs → Weekly |
| Reach section | Conversion, Consideration, Loyalty only (not Overview, not Awareness) |

## 1. Overview tab — time aggregation

**Problem:** Confusion between evolution granularity and snapshot aggregation. The first design version incorrectly placed a month-to-date value in the wrong context.

**Model:**

- Business axis = funnel steps (not seller/marketplace/ASIN).
- **Frozen time frame** via presets (month-to-date, year-to-date, last month, etc.) — no manual date range, no full history.
- User needs a fixed start and end point, not open-ended history.

**Controls:**

- Only the Overview **snapshot** table uses aggregation presets.
- Evolution tables keep standard period granularity (day, week, month, quarter, year). A second evolution-style table may be added later with the same pattern.
- Align selector labels with Elodie’s Figma renames.

## 2. All tabs — evolution granularity

Change from month/day framing to **Weekly** as the default evolution period, matching how other reporting tables in the app behave.

## 3. Reach section (new column group)

Data is expected within the week. Representation can be explored before live data is available.

### KPIs (columns)

| KPI | Behavior |
|-----|----------|
| **ADR (Average Daily Reach)** | Single value plus evolution. Scales with selected granularity: daily = reach for that day; weekly = average per day in the week; monthly = average per day in the month, etc. Open: progress bar (no evolution) vs number + evolution. |
| **Weekly cumulative reach** | Always a weekly value regardless of top-level granularity. When daily granularity is selected, replicate the same weekly value across each day in the week. For monthly and above: average, hide, or defer — **focus on weekly for now**. |
| **Retainers / Newcomers** | Split of weekly cumulative: profiles already targeted the prior week vs targeted for the first time this week. |
| **Churners** | Profiles stopped being targeted vs the prior week. **Not** included in the weekly cumulative total. Separate column; layout TBD. |
| **Theoretical weekly reach** | Computed from campaign budget, average CPM, and frequency cap (max ads per profile per period). Compare theoretical max profiles to actual weekly reach. Budget is not shown on this screen but exists in the system. |

**Weekly cumulative logic:** Unique profiles targeted across the week sits between one day’s ADR and seven times ADR (same person can be counted on multiple days). Sum of average daily reach is the starting point; the true cumulative accounts for overlap across days.

### Product intent

1. **Budget sufficiency** — With current budget, CPM, and frequency settings, can we target enough people for the pipeline?
2. **Reach quality** — Avoid wasteful patterns: one impression spread across millions of users (no conversion path) vs over-targeting the same profiles (too much pressure, poor rotation). Measure week-over-week rotation: retain audiences until convert or phase out vs constantly replacing targets without results.

### UX pattern for weekly-only KPIs

When granularity is not weekly:

- Keep the column visible but show a **BSR-style overlay** that guides the user to switch to weekly granularity (reference: Dashboard → Listing tab → BSR column when multiple marketplaces are selected). (Here is the figma refernce link: https://www.figma.com/design/MeRDO182mycMieS6JM5Uvt/Dashboard---Omny-Interface-Designs?node-id=5078-54636&t=ltXTQZBtBTjUgK7L-11)
- Alternative discussed: visually mark columns that do not follow the top granularity selector.

Theoretical reach and weekly cumulative metrics should be computed and compared at **weekly** level.

### Open design choices

- ADR: progress bar vs number + evolution
- Churners column layout
- Monthly+ behavior for weekly cumulative column

## Action items (from transcript)

- Set Overview aggregation presets
- Switch all tabs to Weekly evolution default
- Add Reach section: ADR, weekly cumulative, retainers/newcomers/churners, theoretical reach

## Out of scope (this meeting)

- Awareness tab (not available yet)

## Related artifacts

- Full transcript: [meeting-transcript.md](./meeting-transcript.md)
- Current visual baseline: [design.html](../design.html) (Conversion replica; product changes apply in a follow-up iteration)
