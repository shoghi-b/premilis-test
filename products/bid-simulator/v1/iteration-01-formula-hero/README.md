# v1 / iteration-01 - Formula Mapping Concept

## What this iteration shows

This iteration shows a Bid Simulator modal where the formula is mapped to the selected settings and to every row of the simulation table.

The design addresses the main client pain point from the briefing: the previous simulator did not explain how the top formula related to the displayed columns, targeting rows, customer value choice, timing/placement CVR adjustment, growth ambition values, and final computed bids.

## Key design idea

Make the formula readable as a computation chain:

`Average margin per click = Customer value x Ads CVR`

`Computed max bid = Average margin per click x Growth ambition x Product boost`

The table mirrors that chain column by column, while each row shows the targeting-specific growth ambition.

## Review notes

- Confirm that every formula chip has a corresponding table column or row-level value.
- Confirm that `Growth ambition` is clearer as per-targeting values.
- Confirm that `Timing & Placement` is understandable as the driver of the adjusted `Ads CVR` column.
- Confirm that `Product boost` reads as a non-editable placeholder multiplier.

## How to view

Open [design.html](/Users/tcules2019mbp/Desktop/premilis-test-main/products/bid-simulator/v1/iteration-01-formula-hero/design.html) or [preview.html](/Users/tcules2019mbp/Desktop/premilis-test-main/products/bid-simulator/v1/iteration-01-formula-hero/preview.html) directly in a browser.
