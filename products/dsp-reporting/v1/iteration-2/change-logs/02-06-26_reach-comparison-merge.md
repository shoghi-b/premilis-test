# Reach Comparison Merge

## Feedback Applied

- Merged `Weekly Reach Split` into `Weekly Cumulative vs Theoretical Reach`.
- Kept the existing `vs` comparison visualization, with the weekly split embedded into the cumulative side.
- Preserved the reach split palette for retainers, newcomers, and churners.
- Added a pill-shaped `Weekly` tag to the merged column header.
- Added a bottom-centered `v1` / `v2` switcher on `/dsp-reporting`.

## Follow-up Feedback Applied

- Reduced the shared `Avg Daily Reach` column width in both v1 and v2 and right-aligned its content.
- Renamed the v2 header tag to `Weekly Data` and made it more prominent.
- Removed the extra cumulative-side chip wrapper from the v2 merged comparison cell.
- Increased the embedded split visualization height so it matches the theoretical reach comparison chip height.

## Rationale

Merging the columns makes it easier for users to compare real data against theoretical data because the split now appears directly inside the comparison column.

The weekly tag makes the fixed granularity explicit. The column remains weekly across views, so users do not see a jarring visual change when the top-level granularity changes.
