# v1 / iteration-2 - Reach Comparison Rework

## What this iteration shows

This iteration updates the DSP reporting Conversion screen after review of the New Reach section.

It keeps the Omny application shell, Conversion tab state, evolution controls, grouped performance table, and adds a bottom-centered iteration switcher with `v1` and `v2` tabs.

## Key design idea

The New Reach section now makes actual-vs-theoretical comparison the primary weekly reach surface:

- `Weekly Reach Split` is merged into `Weekly Cumulative vs Theoretical Reach`.
- The cumulative side of the comparison keeps the retainer/newcomer/churner split using the same reach palette.
- The theoretical side keeps the existing `vs` comparison visualization.
- The merged column header includes a persistent `Weekly` pill to make the fixed granularity explicit across all selected table granularities.

The table viewport remains horizontally scrollable, and v1 remains available through the version switcher for side-by-side review.

## Review notes

- Confirm whether the merged column width gives enough room for the split bar and both values at production data lengths.
- Confirm whether hover tooltip wording should say "Retainer customers" or the shorter "Retainers".
- Confirm if the weekly pill should use the reach color token or a neutral token in future design-system cleanup.

## How to view

Run the Next app and open `/dsp-reporting`, then use the bottom `v1` / `v2` switcher.

The archived static reference is [design.html](/Users/tcules2019mbp/Desktop/premilis-test-main/products/dsp-reporting/v1/iteration-2/design.html).
