# Context - v1 / iteration-1 - Monthly

## What I worked on

Created the first interactive Target Budget Edit Console iteration as a revenue scenario builder.

The concept follows the client direction that this is a revenue target setting tool, not an ad spend budget tool. It reframes the feature as a Budget Cockpit editor where users model how a yearly revenue target is distributed before validating it.

## Client feedback addressed

- Seller, marketplace, year, and currency are read-only because the user arrives from a specific overview row.
- The top information card summarizes the existing target, last updated date, and achievement before overwrite.
- Monthly is the primary input mode, yearly is secondary, and daily is CSV-only.
- Weekly input is not included.
- Monthly and yearly values use full numbers, not `K` abbreviations.
- Past months are visually muted but remain editable.
- Allocation methods are action buttons that recalculate the graph immediately, not radio settings.
- Smart allocation is highlighted as recommended.
- Daily CSV upload stays in the Daily tab, supports reupload, and hides the standard allocation section.
- The primary CTA is `Validate Scenario`; there is no draft action.

## What was changed

- Replaced the scaffold placeholder with a self-contained interactive HTML prototype.
- Added Omny-style app shell, dark sidebar, dashboard tab bar, pale panels, and blue active states.
- Added monthly rows with amount inputs, per-month allocation tags, and daily fine-tune buttons.
- Added a yearly mode that redistributes the annual total proportionally into monthly values.
- Added a daily CSV upload mode with upload, reupload, and optional Smart smoothing states.
- Added Smart, Equal per month, and Equal per year allocation actions.
- Added an SVG scenario preview graph that updates when values or allocation methods change.
- Added a mini graph strip and Year, Quarter, Month view controls.
- Added summary cards for Total, Vs last year, Days changing, and Peak month.
- Added a daily fine-tune modal with fixed monthly total, daily values, pinned custom days, and month-level allocation actions.

## Decisions recorded

- Product folder: `target-budget-edit-console`
- Version: `v1`
- Iteration folder: `iteration-1-monthly`
- Artifact file: `design.html` only.
- The concept uses example data for Acme Corp, France, 2026.
- The active scenario overwrites the existing target on validation.

## Deferred

- Production data binding.
- Exact chart math and real historical seasonality.
- CSV schema validation and error states.
- Detailed tooltips and graph hover inspection.
- Return navigation back into the Budget Overview table.
