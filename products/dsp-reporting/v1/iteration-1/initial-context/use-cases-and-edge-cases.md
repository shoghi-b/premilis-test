# DSP Reporting — Use-Cases and Edge-Cases

## Purpose

This document translates product direction and the current screen baseline into **scenarios for UX exploration**. Use it when comparing different approaches (layout, controls, empty states, overlays) before locking designs in Figma or HTML prototypes.

- Tag exploration frames with scenario IDs (e.g. `UC-09`, `EC-02`).
- Pair each prototype variant with the use cases and edge cases it must satisfy.
- Requirement detail lives in the [product feedback brief](./dsp-reporting-feedback-brief.md); this doc does not replace it.

## Related artifacts

| Artifact | Role |
|----------|------|
| [dsp-reporting-feedback-brief.md](./dsp-reporting-feedback-brief.md) | Product requirements and open design choices |
| [meeting-transcript.md](./meeting-transcript.md) | Verbatim June 01 meeting (~0:00–22:25 DSP section) |
| [design.html](../design.html) | Current Conversion tab visual baseline (grouped table, no Reach yet) |
| [BSR overlay reference (Figma)](https://www.figma.com/design/MeRDO182mycMieS6JM5Uvt/Dashboard---Omny-Interface-Designs?node-id=5078-54636&t=ltXTQZBtBTjUgK7L-11) | Pattern for weekly-only Reach columns when granularity is not weekly |

## Screen context

**Shell (from current replica):** Omny left nav, breadcrumb `Advertising / DSP reporting`, global filters (account, marketplace, ASIN, Order), top-right `Daily` range pill and currency, info affordance.

**Funnel tabs:** Overview, Conversion, Consideration, Awareness, Loyalty. Replica implements **Conversion**; Awareness is not built yet.

**Time controls (three layers to keep distinct in UX):**

1. **Global range** (top-right, currently `Daily`) — app-level reporting window; separate from tab evolution.
2. **Evolution granularity** (per tab, target default **Weekly**) — rows = time periods; compare modes (`vs previous week`, `vs same week previous year`).
3. **Overview snapshot presets** (planned) — frozen windows (MTD, YTD, last month) for funnel-step snapshot table only; no manual date range.

**Table:** Grouped columns (Objective, Efficiency, Business Results, Brand Interest, Delivery Quality, Control), horizontal scroll, period column + row zoom. **Reach** column group is planned on Conversion, Consideration, and Loyalty only.

---

## Primary use cases

### UC-01 — Funnel snapshot for a preset period

| Field | Detail |
|-------|--------|
| **User goal** | See KPIs across funnel steps for one fixed window (e.g. month-to-date) without building a custom range. |
| **Preconditions** | Overview tab; snapshot preset selected (not evolution granularity). |
| **Key actions** | Choose preset (MTD, YTD, last month, etc.); scan snapshot table by funnel step. |
| **Success** | User understands which window is active; metrics match preset boundaries; no confusion with evolution period selector. |
| **Surfaces** | Overview snapshot table, aggregation preset control |
| **UX hooks** | Preset control placement vs evolution controls; label clarity; empty preset state (see EC-15). |

### UC-02 — Week-over-week funnel performance

| Field | Detail |
|-------|--------|
| **User goal** | Track how Conversion / Consideration / Loyalty metrics move week by week. |
| **Preconditions** | Evolution tab; granularity **Weekly** (default); compare `vs previous week`. |
| **Key actions** | Scan period rows; read % change cells and mini visualizations (bars, heat). |
| **Success** | User spots improving or declining weeks and drills into a row if needed. |
| **Surfaces** | Evolution controls, grouped performance table |
| **UX hooks** | Weekly as default; sticky period column; row-level zoom (UC-04). |

### UC-03 — Same week, prior year

| Field | Detail |
|-------|--------|
| **User goal** | Seasonal comparison for the same calendar week year over year. |
| **Preconditions** | Evolution tab; at least one prior-year week of data exists. |
| **Key actions** | Enable `vs same week previous year` compare mode. |
| **Success** | YoY deltas are readable; user knows when YoY is unavailable (EC-22). |
| **Surfaces** | Evolution compare pills |
| **UX hooks** | Muted vs active compare pill; empty or disabled YoY state. |

### UC-04 — Drill into one period

| Field | Detail |
|-------|--------|
| **User goal** | Inspect a single week (or day) in more detail. |
| **Preconditions** | Evolution table with multiple rows. |
| **Key actions** | Use row zoom affordance (⌕ column in replica). |
| **Success** | User reaches detail view or filtered context for that period (exact behavior TBD in product). |
| **Surfaces** | Period column, zoom column |
| **UX hooks** | Zoom interaction model; duplicate period labels in data (EC-21). |

### UC-05 — Scan wide performance table

| Field | Detail |
|-------|--------|
| **User goal** | Review ROAS, spend, impressions, and control metrics in one pass. |
| **Preconditions** | Any evolution tab with existing column groups. |
| **Key actions** | Horizontal scroll; read grouped headers and cell patterns (progress bars, heat, % delta). |
| **Success** | User finds metrics without losing row context. |
| **Surfaces** | Grouped table, horizontal scroll |
| **UX hooks** | Sticky period column; column group colors; density with added Reach columns (EC-20). |

### UC-06 — Average daily reach and trend

| Field | Detail |
|-------|--------|
| **User goal** | Know how many profiles are targeted per day on average for the selected evolution period. |
| **Preconditions** | Conversion, Consideration, or Loyalty; Reach section visible; granularity set. |
| **Key actions** | Read ADR value; optional evolution trend (unless progress-bar variant). |
| **Success** | ADR meaning matches granularity (day vs avg per day in week/month). |
| **Surfaces** | Reach → ADR column |
| **UX hooks** | Number + evolution vs progress bar only (EC-14); granularity scaling copy. |

### UC-07 — Weekly unique reach vs daily overlap

| Field | Detail |
|-------|--------|
| **User goal** | Understand unique profiles reached in a week vs sum/average of daily counts. |
| **Preconditions** | Weekly granularity (or daily with replicated weekly value per EC-03). |
| **Key actions** | Compare ADR row values to weekly cumulative column. |
| **Success** | User grasps that cumulative is between 1× ADR and 7× ADR (overlap). |
| **Surfaces** | ADR, weekly cumulative reach |
| **UX hooks** | Tooltips or helper text for overlap; daily replication pattern (EC-03). |

### UC-08 — Audience rotation (retainers, newcomers, churners)

| Field | Detail |
|-------|--------|
| **User goal** | See who was carried over, newly targeted, or dropped week over week. |
| **Preconditions** | Prior week of data exists; weekly reach context. |
| **Key actions** | Read retainers + newcomers split; read churners separately. |
| **Success** | User interprets rotation strategy (stable audience vs constant churn). |
| **Surfaces** | Retainers, newcomers, churners columns |
| **UX hooks** | Churners layout (not in cumulative); first-week empty state (EC-06, EC-09). |

### UC-09 — Theoretical vs actual reach (budget sufficiency)

| Field | Detail |
|-------|--------|
| **User goal** | Check whether budget, CPM, and frequency cap allow reaching enough profiles for the week. |
| **Preconditions** | Weekly-level view for theoretical metric; backend has budget, CPM, frequency (not shown on screen). |
| **Key actions** | Compare theoretical weekly reach to actual weekly cumulative. |
| **Success** | User sees gap when budget cannot be fully used (too few people to target) or when over-indexed. |
| **Surfaces** | Theoretical weekly reach, weekly cumulative |
| **UX hooks** | Visual comparison (delta, ratio bar); EC-10, EC-11. |

### UC-10 — Reach quality diagnosis

| Field | Detail |
|-------|--------|
| **User goal** | Judge if spend is spread too thin (many users, little pressure) or too concentrated (same profiles, high frequency). |
| **Preconditions** | Reach metrics populated; user understands impressions vs unique reach. |
| **Key actions** | Combine ADR, weekly cumulative, theoretical reach, and rotation columns. |
| **Success** | User can explain whether campaigns can convert given reach pattern. |
| **Surfaces** | Full Reach section + delivery columns (impressions, eCPM) |
| **UX hooks** | Cross-column narrative in UI copy; highlight “quality” outliers. |

### UC-11 — Refine reporting scope via filters

| Field | Detail |
|-------|--------|
| **User goal** | Limit DSP reporting to specific accounts, marketplaces, or ASINs. |
| **Preconditions** | User has access to filter dimensions. |
| **Key actions** | Change account, marketplace, ASIN, or Order filters; review table refresh. |
| **Success** | Table reflects selection; user understands empty or sparse results. |
| **Surfaces** | Top filter bar, all tabs |
| **UX hooks** | Multi-marketplace invalid aggregation (EC-23); restrictive ASIN (EC-24). |

---

## Edge cases

### Time and granularity

| ID | Trigger | Expected behavior / UX notes |
|----|---------|------------------------------|
| **EC-01** | User on Overview treats evolution granularity like snapshot preset (or vice versa). | Separate controls and labels; presets only on snapshot table. Prototype: side-by-side vs stacked controls. |
| **EC-02** | Evolution granularity is Daily (or non-weekly) while weekly-only Reach columns are shown. | BSR-style overlay on column cells; guide user to switch to Weekly. Alternative: visual “fixed weekly” column marker. |
| **EC-03** | Daily granularity selected. | Same weekly cumulative value repeated for each day in that week. |
| **EC-04** | Monthly, quarterly, or yearly granularity. | Weekly cumulative hidden, averaged, or deferred — **defer in v1** per brief. |
| **EC-05** | Current incomplete week. | Clarify whether partial week is labeled, pro-rated, or excluded from compare. |
| **EC-06** | First week of data (no prior week). | Retainers, newcomers, churners empty or “—”; avoid misleading zeros. |
| **EC-07** | Global `Daily` pill + tab `Weekly` evolution on same screen. | Document relationship in UI (helper text, settings tooltip, or align global default to Weekly). |

### Reach metrics

| ID | Trigger | Expected behavior / UX notes |
|----|---------|------------------------------|
| **EC-08** | User sums ADR across days expecting weekly cumulative. | Educate: cumulative accounts for overlap; bounded between 1× and 7× ADR. |
| **EC-09** | Churners shown next to retainers/newcomers. | Churners **not** in cumulative total; prevent double-count misread. |
| **EC-10** | Theoretical reach much greater than actual. | Budget cannot be fully spent (insufficient audience inventory). |
| **EC-11** | Actual much greater than theoretical (or high frequency on few profiles). | Over-pressure on same profiles; poor rotation signal. |
| **EC-12** | Non-weekly granularity for theoretical reach. | Weekly-only metric; overlay or hide per EC-02. |
| **EC-13** | Reach data not yet available. | Skeleton, placeholder, or “coming soon” in Reach group; rest of table usable. |
| **EC-14** | ADR presentation choice. | **A:** progress bar, no evolution. **B:** number + evolution/sparkline. |

### Overview

| ID | Trigger | Expected behavior / UX notes |
|----|---------|------------------------------|
| **EC-15** | Preset window has no data (new campaign, empty last month). | Empty state with active preset label; no broken table. |
| **EC-16** | Future: snapshot table + evolution table on Overview. | Two time models on one tab; clear section headers. |

### Tabs and scope

| ID | Trigger | Expected behavior / UX notes |
|----|---------|------------------------------|
| **EC-17** | User on Overview or Awareness expects Reach. | Reach only on Conversion, Consideration, Loyalty — set expectations in nav or copy. |
| **EC-18** | Awareness tab selected (not built). | Disabled tab, empty state, or “coming soon” — avoid dead click. |
| **EC-19** | User looks for reach quality on Overview snapshot. | Overview answers funnel KPIs for preset window; direct to evolution tabs for Reach. |

### Table and layout

| ID | Trigger | Expected behavior / UX notes |
|----|---------|------------------------------|
| **EC-20** | Reach adds 5+ columns to wide table. | Horizontal scroll; sticky period + zoom columns; Reach group header styling consistent with existing groups. |
| **EC-21** | Negative, zero, missing, or duplicate period values (seen in replica sample). | Consistent empty token (`—`); row grouping if same period appears twice. |
| **EC-22** | YoY compare with no prior-year week. | Disable pill or explain missing history. |

### Filters

| ID | Trigger | Expected behavior / UX notes |
|----|---------|------------------------------|
| **EC-23** | Multiple marketplaces selected. | Some aggregates invalid (BSR precedent); overlay or filter hint if Reach/theoretical affected. |
| **EC-24** | Very narrow ASIN filter. | Sparse rows; empty table messaging. |

---

## Use-case × surface matrix

| Use case | Overview | Conversion | Consideration | Loyalty | Reach columns | Evolution controls | Global filters |
|----------|:--------:|:----------:|:-------------:|:-------:|:-------------:|:------------------:|:--------------:|
| UC-01 | ● | | | | | | |
| UC-02 | | ● | ● | ● | | ● | |
| UC-03 | | ● | ● | ● | | ● | |
| UC-04 | | ● | ● | ● | | ● | |
| UC-05 | | ● | ● | ● | | | |
| UC-06 | | ● | ● | ● | ● | ● | |
| UC-07 | | ● | ● | ● | ● | ● | |
| UC-08 | | ● | ● | ● | ● | ● | |
| UC-09 | | ● | ● | ● | ● | ● | |
| UC-10 | | ● | ● | ● | ● | ● | ● |
| UC-11 | ● | ● | ● | ● | | | ● |

● = primary surface for that use case.

---

## UX exploration backlog

Tied to open items in the [product feedback brief](./dsp-reporting-feedback-brief.md). Each item should be explored against the use cases and edge cases above.

1. **Overview preset control** — placement, labels (Figma renames), and separation from evolution granularity (UC-01, EC-01, EC-15, EC-16).
2. **Weekly default** — evolution pill default and relationship to global `Daily` pill (UC-02, EC-07).
3. **Reach column group** — order, grouping label, color token, and width budget (UC-06–UC-10, EC-20).
4. **ADR cell pattern** — progress bar vs number + evolution (UC-06, EC-14).
5. **Weekly-only overlay** — BSR-style copy and interaction for EC-02, EC-12 (Figma reference linked above).
6. **Churners column** — standalone vs paired with retainers/newcomers (UC-08, EC-09).
7. **Theoretical vs actual** — comparison visualization for UC-09 (EC-10, EC-11).
8. **Daily + weekly cumulative** — replicated values per day (UC-07, EC-03).
9. **Monthly+ deferral** — hide vs message for weekly cumulative (EC-04).
10. **Reach data pending** — skeleton and copy (EC-13).
11. **Awareness / Overview scope** — tab states and wayfinding (EC-17–EC-19).
12. **First-week and empty compare** — retainers/churners and YoY (EC-06, EC-22).

---

## Suggested prototype coverage (minimum)

For a first round of **three UX approaches**, each variant should be walkthrough-tested against:

- **Happy path:** UC-02 + UC-06 + UC-09 at weekly granularity on Conversion.
- **Control confusion:** EC-01 on Overview + EC-07 on Conversion.
- **Constraint:** EC-02 (daily granularity + Reach overlay).
- **Data gap:** EC-13 or EC-15.
- **Layout stress:** EC-20 with full Reach column set.
