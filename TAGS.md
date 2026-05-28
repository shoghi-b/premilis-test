# Tags

This is the canonical list of tags used in `meta.json` files across the archive. Tags control how iterations are classified, filtered, and displayed in the showcase wrapper.

## Rules

- **Only tags listed here are valid.** New tags require a PR to this file before they're used in any iteration.
- **Tags are additive, not exclusive.** An iteration can hold multiple tags simultaneously.
- **Spelling and casing are exact.** Use `stakeholder-review`, never `stakeholder_review` or `Stakeholder-Review`.

## Canonical Tags

### `internal-review`
The iteration is under team review and is not yet considered stakeholder-ready. Used during the active feedback cycle within the design team.

### `stakeholder-review`
The iteration is currently part of the default stakeholder view in the showcase. Only the Design Lead (or a delegated curator) modifies this tag.

### `current`
The iteration is currently recommended within its version. Helps the wrapper distinguish "this is what we'd point to right now" from earlier iterations.

### `archived`
The iteration has been superseded by a later iteration. Still preserved in the archive and visible in the full view, but rendered dimmer in the showcase.

### `experimental`
Exploratory work, not intended for formal review. Useful for radical alternatives or early-stage explorations the team wants in the archive but doesn't want surfaced as recommendations.

## Adding a new tag

If you find yourself wanting to use a tag that isn't listed here:

1. Open a PR to this file adding the tag and its definition
2. Get at least one other team member's review
3. Once merged, the tag is available for use

Don't pre-emptively introduce tags "in case they're useful later." Add tags only when there's an actual need.

## Reviewing this file

Every few months, audit the tags actually in use across the archive. Retire tags that have fallen out of use and formalize any informal patterns that have emerged. Owner: Design Lead.
