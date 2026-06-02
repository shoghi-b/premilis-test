# DSP Reporting v1 Iteration 2 Context

## Source

Source page: `/dsp-reporting`

Prior iteration: `products/dsp-reporting/v1/iteration-1`

Review viewport: `1283 x 890`

## Scope

This iteration applies targeted feedback to the New Reach columns on the DSP reporting Conversion table.

## Important behaviors

- v1 remains available as the current reach layout: separate `Weekly Reach Split` and `Weekly Cumulative vs Theoretical Reach` columns.
- v2 merges those columns into a single weekly comparison column.
- The merged v2 column keeps the theoretical `vs` comparison treatment and embeds the weekly split inside the cumulative value side.
- The split keeps the same reach palette: retainers, newcomers, and churners.
- A pill-shaped `Weekly` tag is shown in the merged column header because the metric stays weekly even when the table granularity changes.
- The version switcher sits at the bottom center of the screen with `v1` and `v2` tabs.

## Implementation notes

- The live implementation is in `app/dsp-reporting/page.js` and `app/dsp-reporting/page.module.css`.
- v2 does not hide the merged weekly reach data when another granularity is selected; the weekly tag makes the granularity explicit and avoids the previous jarring overlay behavior for that metric.
- The rationale: merging columns makes it easier to compare real data against theoretical reach because the weekly split is placed directly in the comparison column. The persistent weekly tag tells users this column always uses weekly granularity.
