# v1 / iteration-01 — Formula Hero

## What this iteration shows

This iteration implements a Bid Settings screen preview with the Simulation entry button and a shell simulation modal flow.
The primary goal is to establish the interaction entry point and preserve the visual treatment of the Simulation call-to-action.
This iteration is the baseline for v1 and is superseded by `v1-iter02`.

## Intended audience

Design lead, product stakeholders, and front-end reviewers validating:
- the placement and prominence of the Simulation entry point
- the first modal open/close interaction behavior
- readiness for detailed modal design in the next iteration

## Key design idea

Use a focused settings surface where simulation is a high-priority action, while keeping the first modal implementation intentionally lightweight so detailed simulation UX can be specified separately.

## Review notes

- Validate whether the Simulation button treatment and sizing are aligned with expected hierarchy.
- Confirm the shell modal behavior contract: open on button click, close by `X`, overlay click, and `Esc`.
- Confirm scope for the next pass: simulation content layout, fields, charts, and actions.
- Use this iteration as historical baseline; do not revise this folder in-place after merge.

## How to view

Open [preview.html](/Users/tcules2019mbp/Desktop/premilis-test-main/products/bid-simulator/v1/iteration-01-formula-hero/preview.html) directly in a browser.
