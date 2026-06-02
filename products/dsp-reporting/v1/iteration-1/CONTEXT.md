# DSP Reporting v1 Iteration 1 Context

## Source

Figma file: PPC - Omny Interface Designs

Primary screen node: `10994:62853`

Full table node: `10994:68084`

## Scope

This iteration is a visual baseline replica of the customer-facing DSP reporting Conversion screen. It is intended to be changed in later iterations after product direction is provided.

## Important behaviors

- The page is a static HTML artifact.
- The report table has a horizontally scrollable viewport.
- The full table includes the columns visible in the separate full-table Figma reference.
- The artifact should be opened directly from `design.html`; no local server is required.

## Implementation notes

- The layout is built with local HTML, CSS, and small inline JavaScript for table generation.
- No framework or build step is required.
- Styling follows the Omny-like Figma values: 64px dark nav, 60px top navigation, 52px tab bar, compact 28px table rows, grouped colored table borders, and muted gray grid lines.
