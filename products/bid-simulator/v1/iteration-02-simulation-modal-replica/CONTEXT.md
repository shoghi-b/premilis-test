# Context — v1 / iteration-02 — Simulation Modal Replica

## What I worked on

Refined `v1-iter01` by moving from a shell simulation modal to a structured Bid simulation modal layout and by applying specific UI adjustment requests from review.
Scope was limited to design/interaction surface updates and did not include API or data persistence behavior.
The current folder preview artifact still needs a final sync pass so the static `preview.html` reflects the latest modal structure exactly.

## What was considered

- Keeping the shell modal and only changing sizing/color details first.
  Rejected because the next meaningful review required complete modal content structure.
- Building the modal as a separate full-screen page instead of an overlay.
  Rejected to preserve the established simulation entry interaction from the Bid Settings screen.
- Keeping the floating history controls while adding modal details.
  Rejected based on explicit review direction to remove the history panel from this pass.

## What was deferred and why

- Fully editable simulation form controls and value recalculation logic were deferred.
  Reason: this pass focuses on structural and visual parity rather than interactive modeling logic.
- Data states (loading, empty, validation, and error) were deferred.
  Reason: they depend on the eventual data contract and simulation behavior design.
- Final pixel-tight pass against Figma node extraction was deferred.
  Reason: current hosted MCP session still does not have direct access to the target file.

## What was explicitly not included and why

- No backend integration for bids, product margin, or computed value sources.
  Reason: this iteration is archive/design-first and review-focused.
- No cross-page navigation or additional settings workflows.
  Reason: requested scope is confined to the Bid Settings + Simulation modal refinement.

## Parked for later

- Add editable inputs and computed bid update behavior in the modal.
- Add modal accessibility hardening (full focus trap audit and tab order QA).
- Re-run exact token extraction once MCP access is available for the required account context.
- Sync `iteration-02/preview.html` to the latest runtime modal implementation for full archive parity.

## Open questions for reviewers

- Should the next iteration prioritize data edit interactions or pixel-level visual parity first?
- Should computed values remain read-first in this modal, or should inline edits be introduced immediately?
- Is current modal width behavior acceptable for all target review screen sizes?

## Decisions recorded

- `v1-iter02` supersedes `v1-iter01` and keeps `iteration-01` immutable.
- Simulation remains an overlay modal launched from the dedicated CTA.
- History panel is removed from this iteration.
- Tabs are normalized to 44px height and ad investment tag to 24px height.
- v1 remains in `internal-review` state; stakeholder curation tags are intentionally deferred to a separate metadata PR.
