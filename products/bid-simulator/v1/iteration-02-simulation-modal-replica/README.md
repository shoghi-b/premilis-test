# v1 / iteration-02 — Simulation Modal Replica

## What this iteration shows

This iteration refines the Bid Settings screen from `v1-iter01` and adds a structured Bid simulation modal in place of the shell modal.
It also applies targeted UI adjustments requested in review (history panel removal, tab height updates, and simulation CTA color update).
This is the active refinement iteration for `v1` at the moment.
The iteration documentation captures this intended refinement; the local `preview.html` artifact in this folder still needs to be synchronized with the latest runtime modal implementation.

## Intended audience

Design lead, product stakeholders, and front-end reviewers validating:
- simulation modal content hierarchy and readability
- visual alignment of key controls with the target design system
- readiness for next-pass polish and data behavior details

## Key design idea

Move from interaction scaffolding to a reviewable modal content structure while preserving the existing bid settings workflow and CTA entry pattern.

## Review notes

- Validate whether modal information density is appropriate for first stakeholder walkthrough.
- Confirm table structure, factor chips, and computed values presentation.
- Confirm if the next pass should prioritize pixel-precision polish or interaction depth (editability, data states, keyboard flow).
- Validate that this iteration should become the default `current` candidate when stakeholder curation starts.

## How to view

Open [preview.html](/Users/tcules2019mbp/Desktop/premilis-test-main/products/bid-simulator/v1/iteration-02-simulation-modal-replica/preview.html) directly in a browser.
