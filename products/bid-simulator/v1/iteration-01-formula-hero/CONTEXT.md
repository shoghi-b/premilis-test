# Context — v1 / iteration-01 — Formula Hero

## What I worked on

Built the first implementation artifact for the bid settings direction as a static preview screen and wired the Simulation entry interaction to a shell modal.
Scope focused on getting the screen structure and interaction contract in place, not the full simulation modal design.

## What was considered

- Embedding simulation controls inline inside the settings card rather than opening a modal.
  Rejected for this pass because the requested flow explicitly starts from a Simulation trigger button and modal.
- Leaving modal behavior unimplemented and only rendering the button.
  Rejected because a clickable shell with complete close interactions provides a stronger base for the next iteration.

## What was deferred and why

- Full simulation modal content (fields, outputs, chart area, primary/secondary actions) was deferred.
  Reason: this iteration is intentionally scoped to shell behavior while waiting for modal-specific design specifications.
- Pixel-perfect parity against the Figma node was deferred pending MCP access.
  Reason: the available MCP session is authenticated as `vm@kopperdesign.com`, which cannot access the target file.

## What was explicitly not included and why

- No API integration or persistence for settings values.
  Reason: iteration target is UI-only and interaction scaffolding.
- No advanced modal behaviors such as focus trapping between all controls.
  Reason: modal currently contains minimal shell content and will be expanded in the next iteration.

## Parked for later

- Add full simulation modal design spec and interactions.
- Re-run Figma extraction after authenticating MCP as `rushali@tcules.com` and tighten all spacing/typography tokens to exact node values.
- Add data states for empty, loading, and validation inside the modal.

## Open questions for reviewers

- Is the current Simulation button size and emphasis correct for this screen hierarchy?
- Should the next modal iteration include advanced keyboard accessibility (focus trap and initial focus strategy) as part of the same pass?
- Should this screen remain a standalone preview artifact or be migrated into a runtime app surface in v1-iter02?

## Decisions recorded

- Simulation opens from a dedicated top-level CTA button on the bid settings screen.
- Modal shell interaction contract is fixed for now: open via button; close via close button, overlay click, or `Esc`.
- Detailed modal layout and controls are deferred to the next iteration.
- This folder is treated as immutable baseline history and is superseded by `v1-iter02`.
