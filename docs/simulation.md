# Design Team GitHub Workflow — End-to-End Simulation

## Purpose

This document walks through a realistic, end-to-end simulation of how a Design Builders team can collaborate on a feature using GitHub — without long-lived branches, without losing iteration history, and with built-in support for curating what stakeholders see.

It demonstrates the full workflow through a single concrete feature, covering parallel work, refinement, internal feedback, stakeholder presentations, and post-stakeholder iteration.

---

## Foundational Principles

Before the simulation, here are the principles the workflow is built on:

- **One `main` branch** holds the full archive of every iteration and the showcase wrapper.
- **Folder-based versioning** — each version and iteration is a folder, never overwritten, never deleted.
- **Short-lived feature branches** — one per iteration, deleted after merge. No personal branches, no long-lived stakeholder branch.
- **Metadata-driven curation** — each iteration declares its tags, audience, and lineage in a `meta.json` file. The wrapper reads these to drive the UI.
- **PR-based collaboration** — every iteration goes through a PR, which becomes the feedback trail.
- **Optional frozen branches** — short-lived branches created from `main` immediately before a stakeholder presentation, never updated again, serve as immutable bookmarks of "what was shown."

---

## The Feature

**Feature:** Adding a "Saved Payment Methods" section to the checkout flow.

**Team:**
- **Maya** — Design Lead
- **Raj** — Designer
- **Sam** — Designer

**Goal:** Explore two design directions, refine them, present to stakeholders, incorporate feedback, finalize.

---

## Starting State

The repo already has the wrapper and base structure. `main` looks like:

```
/products/
  /saved-payment-methods/
    /showcase/
      wrapper.jsx
      index.html
    README.md
.github/
  pull_request_template.md
TAGS.md
```

No iterations yet — we're starting from scratch on this feature.

---

## Scenario 1 — Parallel Work on Two Versions

Maya and Raj kick off two parallel explorations. Maya takes v1 (card-list approach), Raj takes v2 (carousel approach).

### Maya's flow

```bash
git checkout main
git pull
git checkout -b add/saved-pmt-v1-iter01-card-list
```

She creates the folder and files:

```
/products/saved-payment-methods/v1/iteration-01-card-list/
  designs.fig
  preview.html
  README.md
  meta.json
```

Her `meta.json`:

```json
{
  "id": "v1-iter01",
  "version": "v1",
  "label": "Card list — initial",
  "author": "Maya",
  "createdAt": "2026-05-26",
  "tags": ["internal-review"],
  "description": "Vertical list of saved cards with inline edit/delete."
}
```

She commits, pushes, opens **PR #1**: *"Add v1/iteration-01 — card list approach"*.

### Raj's flow (in parallel)

```bash
git checkout main
git pull
git checkout -b add/saved-pmt-v2-iter01-carousel
```

He creates:

```
/products/saved-payment-methods/v2/iteration-01-carousel/
  designs.fig
  preview.html
  README.md
  meta.json
```

His `meta.json`:

```json
{
  "id": "v2-iter01",
  "version": "v2",
  "label": "Carousel — initial",
  "author": "Raj",
  "createdAt": "2026-05-26",
  "tags": ["internal-review"],
  "description": "Horizontal swipeable carousel of saved cards."
}
```

Pushes, opens **PR #2**.

### Merging both

Both PRs touch completely different folders — **no merge conflict**. They get reviewed independently:

- PR #1 reviewed by Raj and Sam → approved → Maya merges → branch deleted
- PR #2 reviewed by Maya and Sam → approved → Raj merges → branch deleted

**State of `main` after both merges:**

```
/products/saved-payment-methods/
  /v1/iteration-01-card-list/
  /v2/iteration-01-carousel/
  /showcase/
```

The wrapper, reading `meta.json` from each folder, now shows both versions in the "internal review" view.

---

## Scenario 2 — Internal Feedback Drives a New Iteration

The team reviews both versions. Internal feedback on Raj's v2: *"Carousel feels slow on mobile; consider showing 2 cards at once with a peek."*

Raj creates a **new iteration** responding to this — he does not edit `iteration-01`.

```bash
git checkout main
git pull
git checkout -b add/saved-pmt-v2-iter02-peek-carousel
```

He copies `iteration-01-carousel` as a starting point into a new folder:

```
/products/saved-payment-methods/v2/iteration-02-peek-carousel/
  designs.fig
  preview.html
  README.md
  meta.json
```

His `meta.json`:

```json
{
  "id": "v2-iter02",
  "version": "v2",
  "label": "Carousel with peek",
  "author": "Raj",
  "createdAt": "2026-05-28",
  "tags": ["internal-review"],
  "supersedes": "v2-iter01",
  "description": "Shows 2 cards at once with peek of next card. Responds to mobile speed feedback.",
  "feedbackAddressed": ["Carousel felt slow on mobile (internal review 2026-05-27)"]
}
```

**PR #3** → reviewed → merged → branch deleted.

**State of `main`:**

```
/v1/iteration-01-card-list/
/v2/iteration-01-carousel/        ← preserved, but superseded
/v2/iteration-02-peek-carousel/   ← new
```

`iteration-01` is still in the archive. Anyone curious about the evolution can see Raj's original. The `supersedes` field tells the wrapper to show the lineage.

---

## Scenario 3 — Design Lead Refines a Team Member's Work

Maya wants to refine Raj's v2-iter02 before stakeholders see it. She doesn't touch his iteration folder — she creates a new iteration that builds on his.

```bash
git checkout main
git pull
git checkout -b add/saved-pmt-v2-iter03-lead-refinement
```

She copies `iteration-02-peek-carousel` into `iteration-03-lead-refinement`, makes her changes (tighter spacing, accessibility contrast fixes, clearer CTA hierarchy).

Her `meta.json`:

```json
{
  "id": "v2-iter03",
  "version": "v2",
  "label": "Refined peek carousel",
  "author": "Maya (refining Raj's v2-iter02)",
  "createdAt": "2026-05-30",
  "tags": ["internal-review"],
  "supersedes": "v2-iter02",
  "description": "Refined Raj's peek carousel: tightened spacing, fixed contrast on disabled state, clarified primary CTA.",
  "changesFromPrevious": [
    "Reduced gap between cards from 16px to 12px",
    "Increased contrast on disabled 'Use this card' state to meet WCAG AA",
    "Made primary CTA full-width on mobile"
  ]
}
```

She opens **PR #4** and **tags Raj as a required reviewer**. He sees the diff between his iteration and Maya's refinement, comments on the PR (*"Good call on the contrast — I'd missed that"*), and approves.

PR merges, branch deleted.

**State of `main`:**

```
/v1/iteration-01-card-list/
/v2/iteration-01-carousel/
/v2/iteration-02-peek-carousel/      ← Raj's work, preserved
/v2/iteration-03-lead-refinement/    ← Maya's refinement, links back via supersedes
```

The lineage `v2-iter01 → v2-iter02 → v2-iter03` is fully visible to anyone browsing.

**Why this pattern matters:** the team member's original work is preserved, the refinement is explicit and reviewable, and the diff between the two is captured permanently. This is collaboration, not correction.

---

## Scenario 4 — Maya Also Iterates on Her Own v1

In parallel with Scenario 3, Maya has also been iterating on v1 based on internal feedback. She creates `v1/iteration-02-card-list-refined` through the same flow.

**PR #5** → merged → branch deleted.

**State of `main`:**

```
/v1/iteration-01-card-list/
/v1/iteration-02-card-list-refined/  ← current best of v1
/v2/iteration-01-carousel/
/v2/iteration-02-peek-carousel/
/v2/iteration-03-lead-refinement/    ← current best of v2
```

---

## Scenario 5 — Curating for Stakeholder Review

Stakeholder review is scheduled for **June 5**. Maya wants to present the best of both versions, but allow stakeholders to explore everything if they want.

She updates the metadata on the two iterations she wants front-and-center. This is a small, focused PR.

```bash
git checkout main
git pull
git checkout -b update/stakeholder-review-2026-06-05
```

She edits two files:

**`/v1/iteration-02-card-list-refined/meta.json`:**

```json
{
  "id": "v1-iter02",
  "version": "v1",
  "label": "Card list — refined",
  "author": "Maya",
  "createdAt": "2026-05-29",
  "tags": ["stakeholder-review", "current"],
  "presentationGroup": "stakeholder-review-2026-06-05",
  "supersedes": "v1-iter01",
  "description": "Refined card list with grouped categories and inline edit."
}
```

**`/v2/iteration-03-lead-refinement/meta.json`:**

```json
{
  "id": "v2-iter03",
  "version": "v2",
  "label": "Refined peek carousel",
  "author": "Maya (refining Raj's v2-iter02)",
  "createdAt": "2026-05-30",
  "tags": ["stakeholder-review", "current"],
  "presentationGroup": "stakeholder-review-2026-06-05",
  "supersedes": "v2-iter02",
  "description": "Refined Raj's peek carousel with tighter spacing and contrast fixes."
}
```

**PR #6:** *"Tag iterations for stakeholder review 2026-06-05"*. One-line diffs each. Sam reviews quickly, approves, merge, branch deleted.

The wrapper now defaults to showing just these two iterations when stakeholders open the showcase. The *"See all iterations"* toggle still gives them full access to the journey.

### Optional — Freeze a Snapshot

Right before the stakeholder meeting, Maya creates a frozen branch from `main`:

```bash
git checkout main
git pull
git branch stakeholder-review-2026-06-05
git push origin stakeholder-review-2026-06-05
```

This branch is **never updated again**. It's a permanent bookmark of "exactly what we showed on June 5." If a stakeholder asks three months later, *"What did we see in that June review?"*, anyone can check out this branch and see it.

---

## Scenario 6 — Stakeholder Feedback After the Review

Stakeholders preferred v2 but asked: *"Can we see what it looks like with a 'Set as default' toggle on each card?"*

This is post-stakeholder feedback. Raj takes it on.

```bash
git checkout main
git pull
git checkout -b add/saved-pmt-v2-iter04-set-default
```

Copies `iteration-03-lead-refinement` to `iteration-04-set-default-toggle`, adds the toggle.

His `meta.json`:

```json
{
  "id": "v2-iter04",
  "version": "v2",
  "label": "With 'Set as default' toggle",
  "author": "Raj",
  "createdAt": "2026-06-07",
  "tags": ["internal-review"],
  "supersedes": "v2-iter03",
  "description": "Added per-card 'Set as default' toggle per stakeholder request.",
  "feedbackAddressed": ["Stakeholder review 2026-06-05: requested default-card selection"]
}
```

**PR #7** → reviewed → merged → branch deleted.

### Updating the curation

`iteration-03-lead-refinement` still has the `stakeholder-review` tag from before. Maya now decides: does the new iter04 replace iter03 in the curation, or do both get shown at the next review?

She opens **PR #8** to update tags:

- Remove `stakeholder-review` and `current` from iter03
- Add `stakeholder-review` and `current` to iter04
- Add `archived` to iter03 (still visible in full view, just no longer recommended)

`presentationGroup` on iter03 **stays** as `stakeholder-review-2026-06-05` — that's permanent history.

iter04 gets a new `presentationGroup`: `stakeholder-review-2026-06-12` (the next review date).

---

## Final State of `main`

```
/products/saved-payment-methods/
  /v1/
    /iteration-01-card-list/                  [tags: archived]
    /iteration-02-card-list-refined/          [tags: archived]
                                              (was stakeholder-tagged for June 5)
  /v2/
    /iteration-01-carousel/                   [tags: archived]
    /iteration-02-peek-carousel/              [tags: archived]
    /iteration-03-lead-refinement/            [tags: archived,
                                                presentationGroup: 2026-06-05]
    /iteration-04-set-default-toggle/         [tags: stakeholder-review, current,
                                                presentationGroup: 2026-06-12]
  /showcase/
    wrapper.jsx

Branches: only `main` + `stakeholder-review-2026-06-05` (frozen snapshot)
Active working branches: none
```

Seven iterations across two versions. Full lineage preserved. Curation done through tags. One frozen snapshot for the June 5 presentation. Zero long-lived working branches.

---

## What the Wrapper Renders

- **Stakeholder view (default):** v1-iter02 and v2-iter04, both tagged `stakeholder-review`, shown with descriptions and recommendation badges.
- **Full view (toggle):** all seven iterations, grouped by version, with lineage arrows from `supersedes` fields. Archived iterations rendered dimmer.
- **By presentation group:** filter to `stakeholder-review-2026-06-05` and the wrapper reconstructs exactly what was shown in that meeting (v1-iter02 and v2-iter03).

---

## PR and Branch Summary

| PR  | Branch                                          | Lifespan | Purpose                              |
|-----|-------------------------------------------------|----------|--------------------------------------|
| #1  | `add/saved-pmt-v1-iter01-card-list`             | 1 day    | Maya adds v1-iter01                  |
| #2  | `add/saved-pmt-v2-iter01-carousel`              | 1 day    | Raj adds v2-iter01                   |
| #3  | `add/saved-pmt-v2-iter02-peek-carousel`         | 2 days   | Raj iterates on v2 (internal fbk)    |
| #4  | `add/saved-pmt-v2-iter03-lead-refinement`       | 2 days   | Maya refines Raj's v2                |
| #5  | `add/saved-pmt-v1-iter02-card-list-refined`     | 2 days   | Maya iterates on v1                  |
| #6  | `update/stakeholder-review-2026-06-05`          | hours    | Tag iterations for June 5 review     |
| #7  | `add/saved-pmt-v2-iter04-set-default`           | 2 days   | Post-stakeholder iteration           |
| #8  | `update/stakeholder-tags-after-iter04`          | hours    | Move stakeholder tags to iter04      |

Every branch deleted after merge. Every PR has a clear, narrow purpose. Every change is reviewable. Every iteration is preserved permanently.

---

## Patterns This Simulation Demonstrates

- **Parallel work merges without conflict** because folders are disjoint.
- **Refinement creates new iterations** rather than editing existing ones — preserving authorship and showing the diff explicitly.
- **Curation is metadata-only** — diffs stay tiny and reviewable, and the underlying iterations are never touched during curation.
- **Stakeholder snapshots can be optionally frozen as branches** for permanent reference.
- **Post-stakeholder feedback flows naturally back into the iteration cycle** without disrupting history.
- **Lineage is queryable** via the `supersedes` and `presentationGroup` fields, so the design journey can always be reconstructed.

---

## Conventions and Templates

### Branch naming

- `add/<feature>-v<N>-iter<NN>-<short-desc>` — adding a new iteration
- `update/<short-desc>` — metadata or curation changes
- `stakeholder-review-<YYYY-MM-DD>` — frozen presentation snapshot (never updated)

### Folder naming

- `/products/<feature>/v<N>/iteration-<NN>-<short-desc>/`

### Required files per iteration

- `meta.json` — structured metadata read by the wrapper
- `README.md` — human-readable context and feedback notes
- Design files and any preview assets

### Canonical tags

Defined in `TAGS.md` at the repo root. Example set:

- `internal-review` — under team review, not yet stakeholder-ready
- `stakeholder-review` — currently shown to stakeholders
- `current` — currently recommended within its version
- `archived` — superseded, kept for history
- `experimental` — exploratory, not for review

### PR template prompts

- Iteration being added
- Builds on (linked via `supersedes`)
- What changed and why
- Feedback sources
- Tags applied
- Ready for (internal review / stakeholder review / archive)

---

## Summary

This workflow keeps everything on `main`, preserves every iteration permanently, supports independent and collaborative work without merge friction, lets the Design Lead curate the stakeholder experience through lightweight metadata changes, and maintains full traceability of the design journey — all without long-lived branches or branch sprawl.
