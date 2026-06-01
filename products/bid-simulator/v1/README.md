# Bid Simulator — v1

## Purpose

`v1` captures the first implementation cycle of the Bid Settings + Simulation flow.
The version starts with a shell interaction baseline and then refines into a structured simulation modal.

## Iteration index

1. `v1-iter01` — `iteration-01-formula-hero`
   - Baseline screen and simulation entry interaction.
   - Modal implemented as shell behavior only.
2. `v1-iter02` — `iteration-02-simulation-modal-replica`
   - Supersedes `v1-iter01`.
   - Captures the structured simulation modal refinement direction and key sizing adjustments.
   - Preview artifact in this folder still requires content-sync to the latest runtime modal implementation.

## Current review state

- Both iterations are tagged `internal-review`.
- No stakeholder curation tags are applied yet (`stakeholder-review`, `current`, `archived` are not set in v1 at this time).

## Recommended review order

1. Review `v1-iter01` to understand baseline intent and interaction contract.
2. Review `v1-iter02` for refinement deltas and modal content direction.
3. Use `changesFromPrevious` and `feedbackAddressed` in `v1-iter02/meta.json` as the canonical transition log.
