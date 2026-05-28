# Commit Message Conventions

This is a quick reference for how to format commit messages in this repo. The structured format is meant to capture in-the-moment thinking that later feeds into the iteration's `CONTEXT.md`.

## Format

For substantive commits:

```
<type>: <short summary>

Considered:
- <alternative 1, why rejected>
- <alternative 2, why rejected>

Decided:
- <what this commit locks in>

Parked:
- <anything noted during this work to revisit later>
```

For trivial commits (typos, formatting), a single line is fine.

## Types

- `add:` — new iteration or file
- `refine:` — improving an iteration's content within the same iteration folder (pre-merge)
- `fix:` — correcting an error
- `doc:` — documentation only
- `meta:` — `meta.json` or tag updates only

## Example

```
refine: tighten card spacing and fix disabled-state contrast

Considered:
- 8px spacing (too cramped on mobile, cards felt like a list not cards)
- 16px (original — felt loose at small viewports)
- 20px (created awkward scrollbar appearance on desktop)

Decided:
- 12px spacing for all viewports
- Disabled state: 60% opacity, no greyscale shift

Parked:
- Animation between active/disabled transitions — needs design system
  motion tokens (issue #51)
```

## Why this format

Capturing alternatives and parked items as they come up — rather than trying to reconstruct them at the end — makes `CONTEXT.md` much easier to write. By the time you're ready to write the context doc, the commit history is already a draft.

## What's not enforced

- Length — write only as much as the change warrants
- Strict formatting on trivial commits — single-line is acceptable for typos, formatting, etc.
- Listing every alternative considered — only the meaningful ones
