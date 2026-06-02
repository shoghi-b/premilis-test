# DSP Reporting v1 / Iteration 1 Plan

## Context and Rationale
This iteration extends the Conversion table design with a new analytical section called **New Reach**. The direction comes from Elodie's meeting feedback and is aligned with the DSP reporting brief:

- Keep evolution behavior aligned with Omny reporting patterns (Weekly-first).
- Add reach-specific metrics that help diagnose budget sufficiency, audience renewal, and rotation quality.
- Keep weekly-native reach metrics explicit, even when the selected evolution granularity is not weekly.

The page now includes a granularity dropdown for prototype validation of these behaviors.

## New Reach Section (7th Category)
The grouped table model now includes 7 sections:

1. Objective
2. Efficiency
3. Business Results
4. **New Reach**
5. Brand Interest
6. Delivery Quality
7. Control

`New Reach` uses a distinct **Indigo** color system that applies to:

- Group header label and border accent
- In-cell bar tracks/fills
- Comparison data-viz chips
- Weekly-only overlay tone

This preserves the existing rule where each section color influences its internal data-viz.

## New Reach Columns and Behavior
The Conversion table includes these New Reach columns:

1. **Avg Daily Reach (ADR)**  
   - Displayed as value + evolution.
   - Keeps visibility across all granularities.
   - Semantics scale with granularity (daily-average framing per selected period).

2. **Weekly Cumulative Reach**  
   - Weekly-native KPI.
   - Visible as full value in Weekly mode.
   - In Monthly/Quarterly/Yearly, replaced by weekly-only overlay guidance.

3. **Retainers vs Newcomers**  
   - Single comparison column.
   - Weekly-native behavior and overlay treatment same as weekly cumulative.

4. **Churners**  
   - Separate KPI, not merged into cumulative total.
   - Weekly-native behavior and overlay treatment same as weekly cumulative.

5. **Theoretical vs Actual Weekly Reach**  
   - Single comparison column.
   - Weekly-native behavior and overlay treatment same as weekly cumulative.
   - Theoretical value is conceptually based on budget + CPM + frequency cap.

## Granularity Control Rules
The evolution selector now includes:

- Weekly (default)
- Monthly
- Quarterly
- Yearly

Behavior:

- **Weekly:** all New Reach columns render full data-viz and values.
- **Monthly/Quarterly/Yearly:** weekly-native columns render BSR-style guidance overlay (`Weekly KPI`, `Switch granularity to Weekly`).
- **ADR remains visible** and continues to show number + evolution.

## Visual and Table System Constraints
- Table border color remains fixed at `#EEEEEE`.
- All bar-style data-viz uses `4px` border radius.
- Horizontal scroll remains enabled for the wider grouped table.
- Category header bottom borders remain removed as previously adjusted.

## Scope and Reuse Assumptions
- This implementation is for the **Conversion** tab only in iteration 1.
- Structure and style tokens are designed to be reusable for **Consideration** and **Loyalty** in future iterations.
- This is a prototype-level behavior simulation; backend-calculated reach fields are not wired in this pass.
