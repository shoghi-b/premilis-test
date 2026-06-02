---
title: "DSP Reporting Iteration-1 Change Log"
date: "2026-06-01"
timestamp: "23:42:59 +0530"
artifact: "/dsp-reporting"
methodology: "superpowers"
branch: "feature/dsp-reporting-new-reach-granularity"
---

# Change Summary

## New Reach Column Logic
- Reworked New Reach to align with latest direction:
  - `Weekly Cumulative Reach` and `Theoretical Reach` are now treated as the comparison pair in one column.
  - Added `Weekly Reach Split` column where data viz is split into:
    - Retainer customers
    - New customers
    - Churners (rendered as excluded segment)
- Removed the separate churners-only column and retainers/newcomers comparison column from New Reach.

## Granularity Overlay Behavior (BSR Pattern)
- Replaced cell-level weekly-only fallback with full-column overlays for non-weekly granularities.
- Overlay is applied to the full weekly-only column area (from second header row through table body), based on BSR reference behavior.
- Overlay style follows the Figma BSR pattern:
  - dashed outline
  - soft blurred background
  - centered icon + guidance message

## Color System Update
- New Reach palette changed from indigo to a distinct raspberry family to avoid confusion with Business Results blue tones.
- Updated all New Reach visuals (header accent, bars, chips, split segments, overlay accents) to the new palette.

## Structural Updates
- Updated table column schema and widths for the revised 3-column New Reach model:
  - Avg Daily Reach
  - Weekly Reach Split
  - Weekly Cumulative vs Theoretical Reach
- Added column-overlay positioning logic tied to exact column offsets.

## Verification
- Build validation run: `npm run build` (pass).
