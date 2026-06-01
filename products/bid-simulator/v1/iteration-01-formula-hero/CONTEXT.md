# Context - v1 / iteration-01 - Formula Mapping Concept

## What I worked on

Replaced the shell-only simulator modal with a static concept that maps the visible bid formula to the selected settings and to each row in the simulation table.

The modal now explains:
- `Average margin per click = Customer value x Ads CVR`
- `Computed max bid = Average margin per click x Growth ambition x Product boost`
- `Growth ambition` as a per-targeting value, not a single global percentage
- `Timing & Placement` as an influence on `Ads CVR`, not as an isolated multiplier

## Client feedback addressed

Elodie said the simulator was not clear because the top formula did not map to the table below, growth ambition could not be represented as one top-level percentage, and targeting names were missing from the computation rows.

This version makes the computation chain visible and keeps the information tied to the same settings the user configured.

## What was changed

- Removed visible `Cannibalization` from the formula and simulation table because it is not editable and should not be presented as a setting.
- Kept `Product boost` as a visible multiplier placeholder, styled as non-editable.
- Added targeting names as the primary row labels: Non-branded, Competitor, Branded, and Discovery.
- Moved examples such as keywords/ASINs into secondary row text.
- Added table columns that directly mirror the formula pieces: Customer value, Ads CVR, Average margin per click, Growth ambition, Product boost, and Computed max bid.
- Added colored column accents and formula chips to connect each table value back to the formula.

## What was deferred and why

- Real data binding and exact production values remain deferred because this is a static design concept.
- Editable simulator controls remain deferred because the client asked to clarify the formula mapping first.
- Product boost is shown as a placeholder multiplier because the team noted the real value may not be exposed.

## Decisions recorded

- The simulator remains inside a modal.
- Customer value is always visible because it cannot be disabled; the displayed state is `First + repeat purchase margin`.
- Ads CVR remains visible even when timing/placement is not represented as a standalone active formula chip, because CVR is always used in the computation.
- Growth ambition is shown per targeting row.
- `preview.html` is kept as the archive preview, and `design.html` is added as the requested design artifact with the same concept.
