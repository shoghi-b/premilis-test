# v1 / iteration-1 - Monthly

## What this iteration shows

This iteration shows an Omny-style Budget Cockpit editor for creating and validating a revenue target scenario.

The screen starts from a pre-selected seller, marketplace, year, and workspace currency. Those fields are shown as locked confirmation values because the user arrives from a specific row in the Budget Overview table.

## Key design idea

Make the editor feel like a scenario cockpit rather than a file upload form. Monthly values are the main input, allocation methods are action buttons that immediately recalculate the daily preview graph, and the primary CTA is `Validate Scenario`.

The design includes:
- Monthly, yearly, and daily CSV input modes.
- Full-number revenue target inputs with no `K` abbreviation.
- Past months styled subtly but kept editable.
- Smart, equal-per-month, and equal-per-year allocation actions.
- A reactive daily scenario graph with current target and prior-year actual context.
- A mini zoom strip and Year, Quarter, Month graph view controls.
- A daily fine-tune modal where a monthly total stays fixed while pinned day values redistribute the remaining days.
- CSV upload success, reupload, and optional Smart smoothing states.

## Review notes

- Confirm that the locked scope at the top gives enough context after opening from the Budget Overview table.
- Confirm whether the monthly rows should remain in this dense left-panel form or become a wider table in the next iteration.
- Confirm whether the graph needs richer hover details or whether the current interaction level is enough for first review.
- Confirm the wording for overwriting an existing target when the scenario is validated.

## How to view

Open [design.html](/Users/tcules2019mbp/Desktop/premilis-test-main/products/target-budget-edit-console/v1/iteration-1-monthly/design.html) directly in a browser.
