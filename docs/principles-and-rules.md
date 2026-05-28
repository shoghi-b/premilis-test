# Design Team Workflow — Principles, Rules, and Context Practices

This document is the team's working rulebook for collaborating on design work through GitHub. It covers the core principles, the workflow rules, and the context-capture practices that turn the archive into institutional memory.

---

## Part 1 — Core Principles

Three principles underpin everything else. When a rule below seems unclear or a new situation comes up, fall back to these.

### 1. History is sacred

Every iteration ever produced stays in the repo, forever. Nothing is overwritten, renamed, or deleted after merge. The archive's value comes from being complete — the moment iterations start getting "cleaned up," the team loses the ability to trace its own reasoning.

### 2. Branches are temporary; `main` is permanent

Branches exist to deliver a unit of work, then they go away. The full archive lives on `main`. No long-lived working branches, no personal branches, no "stakeholder" branch. The only persistent branch is `main`; everything else is short-lived or a frozen historical snapshot.

### 3. Curation is metadata, not file movement

What stakeholders see is controlled by tags in `meta.json`, never by adding, removing, or moving files. This keeps the archive intact while letting the Design Lead reshape the showcase freely.

### Supporting beliefs

- **Design decisions are mostly about what you didn't do.** Capturing alternatives, deferrals, and rejected paths is as important as capturing the chosen design.
- **The archive is a learning resource.** Iterations exist not just for the current project but for future team members, future projects, and future stakeholder questions.
- **Collaboration > correction.** When one designer builds on another's work, the original is preserved and the refinement is explicit. Authorship is honored.

---

## Part 2 — Workflow Rules

### Repository structure

- One repo per product area, or one repo with `/products/<name>/` subfolders if the team prefers consolidation.
- Every feature lives under `/products/<feature-name>/`.
- Every version is a folder: `/products/<feature>/v<N>/`.
- Every iteration is a folder inside its version: `/products/<feature>/v<N>/iteration-<NN>-<short-desc>/`.
- The showcase wrapper lives at `/products/<feature>/showcase/`.
- Canonical tag definitions live in `TAGS.md` at the repo root. New tags require a PR to `TAGS.md` first.

### Branching

- `main` is the only long-lived branch.
- Every iteration gets its own short-lived branch, named `add/<feature>-v<N>-iter<NN>-<short-desc>`.
- Metadata or curation changes use branches named `update/<short-desc>`.
- Branches are deleted immediately after merge. Enable GitHub's "auto-delete head branches" setting.
- No personal branches. No `maya/scratch` or `raj/wip`.
- Exploratory work that isn't ready to be an iteration uses `explore/<short-desc>` branches and is deleted once the exploration ends or converts to a real iteration.
- Frozen stakeholder snapshots use the name `stakeholder-review-<YYYY-MM-DD>`. They are created from `main` immediately before a presentation and never updated again.
- Direct pushes to `main` are forbidden. Everything goes through a PR.

### Iteration creation

- Never edit an existing iteration folder after it's merged. If changes are needed, create a new iteration.
- Every new iteration is a fresh folder, even for small changes. The folder is the unit.
- Every iteration folder must contain:
  - `meta.json` — structured metadata read by the wrapper
  - `README.md` — short, audience-facing description of what the iteration shows
  - `CONTEXT.md` — the design log (see Part 3 below)
  - Design files and any preview assets
- `meta.json`, `README.md`, and `CONTEXT.md` are all required. PRs missing any of them should be blocked at review.
- The `supersedes` field in `meta.json` is required when an iteration builds on a previous one, even a refinement. This is what creates the lineage chain.
- Iteration numbering is sequential within a version (`iteration-01`, `iteration-02`, ...). If two designers might collide, use draft PRs to claim the next number, or switch to date-based naming for that feature.

### Refinement (one person building on another's work)

- The original iteration is never edited. The refiner creates a new iteration that supersedes the original.
- The refinement's `meta.json` must:
  - Set `supersedes` to the original iteration's `id`
  - Credit both authors in the `author` field (e.g., `"Maya (refining Raj's v2-iter02)"`)
  - List the specific changes in `changesFromPrevious`
- The original author is a required reviewer on the refinement PR. They don't have to approve to block the merge, but they must be tagged and given a chance to comment.
- The refinement's `CONTEXT.md` explains the *why*, not just the *what*. Frame it as collaboration, not correction.

### Pull requests

- Every PR uses the team PR template.
- One iteration per PR. Don't bundle multiple iterations or unrelated changes.
- PR titles follow a pattern: `Add v<N>/iteration-<NN> — <short description>` or `Update tags for <purpose>`.
- At least one team member must review and approve before merge. For refinement PRs, the original author should be among the reviewers.
- PRs that only update `meta.json` (tag changes, curation updates) can be approved quickly — the diff is small and low-risk.
- PR discussion is the feedback record. Decisions, rationale, and reviewer suggestions live on the PR thread and are linked from the iteration `README.md` or `CONTEXT.md`.
- Reviewers explicitly check `CONTEXT.md`, not just the design files. A PR with great designs but a sparse context doc isn't ready to merge.

### Curation (controlling what stakeholders see)

- Curation happens by editing `meta.json`, never by adding, removing, or moving files.
- Stakeholder-visible iterations carry the `stakeholder-review` tag. Only the Design Lead (or a delegated curator) modifies this tag.
- The `presentationGroup` field is immutable once set. Once an iteration was shown in a specific review, that field stays — even after the iteration is later untagged from active stakeholder review.
- Before each stakeholder review:
  1. Open a single PR to update tags for that review
  2. Tag the relevant iterations with `stakeholder-review`, `current`, and `presentationGroup: stakeholder-review-<date>`
  3. Untag iterations that should no longer be in the default stakeholder view (add `archived` if appropriate)
  4. Merge before the review
- Immediately before the presentation, create the frozen `stakeholder-review-<date>` branch from `main`. Never modify it again.
- The "show all iterations" toggle in the wrapper is always available to stakeholders. Curation controls the *default* view, not access.

### Tagging

- Tags are additive, not exclusive. An iteration can hold multiple tags.
- Only canonical tags from `TAGS.md` are allowed. New tags require a PR to `TAGS.md` first.
- Tag spelling and casing must be exact. `stakeholder-review`, not `stakeholder_review` or `Stakeholder-Review`.
- Standard canonical tags:
  - `internal-review` — under team review, not stakeholder-ready
  - `stakeholder-review` — currently in the stakeholder default view
  - `current` — currently recommended within its version
  - `archived` — superseded, kept for history, dimmed in full view
  - `experimental` — exploratory, not for formal review

### Feedback handling

- Internal feedback that warrants a design change creates a new iteration. Don't comment-fix on the existing one.
- Stakeholder feedback creates a new iteration, with `feedbackAddressed` populated in `meta.json` listing the specific feedback being responded to.
- Feedback that doesn't warrant a change is still recorded — either as a comment on the existing iteration's PR or in its `CONTEXT.md` — so future readers know it was considered.
- Every iteration's `CONTEXT.md` should answer: what feedback drove this, what changed, and what decisions are being recorded.

### Roles and responsibilities

**Design Lead:**
- Owns curation (tags, `stakeholder-review`, `presentationGroup`)
- Owns refinement decisions and approves refinement PRs
- Creates frozen stakeholder-review snapshots before presentations
- Maintains `TAGS.md` and convention documents
- Reviews `CONTEXT.md` for refinement PRs with particular care, since that's where collaboration culture is reinforced

**Designers:**
- Create iterations following the folder and metadata rules
- Tag relevant reviewers, including original authors when refining
- Keep `meta.json`, `README.md`, and `CONTEXT.md` accurate and complete

**All team members:**
- Review PRs in their area within a reasonable window (24–48 hours)
- Use PR comments as the feedback channel — keep design discussions in the PR, not in DMs

### Hygiene

- Delete branches after merge.
- Don't accumulate draft PRs. If exploration isn't going to ship, close the draft and delete the branch.
- Keep PR scope tight. A PR open more than a week probably needs to be split or closed.
- Don't rename merged iteration folders. Other iterations may reference them via `supersedes`, and PR links would break.
- Large binary files use Git LFS from day one.

### Soft rules (habits worth adopting)

- Write the `CONTEXT.md` outline before the design files, not after. It forces clarity about what you're exploring.
- When in doubt, create a new iteration. Iteration folders are cheap; lost history is expensive.
- Tag changes deserve a quick PR description, even if the diff is one line.
- Review PRs the same day they're opened, even if the review is just "looks good, approving."
- Treat the archive as a learning resource. Browse old iterations and their `CONTEXT.md` files when starting new work.

### Warning signs

A few smells to watch for as early warnings:

- Long-lived branches that aren't `main` — branch sprawl is starting
- Edits to existing iteration folders — history is being lost
- `meta.json` or `CONTEXT.md` missing or outdated — block at review
- Tag drift (`stakeholder-review` vs `stakeholder_review`) — tighten `TAGS.md` enforcement
- PRs sitting open for weeks — scope is wrong or review culture is too slow
- Designers asking "which branch do I work on?" — the personal-branch anti-pattern is creeping back

---

## Part 3 — Context Capture

Capturing the reasoning behind each iteration is what turns the archive from a sequence of files into institutional memory. This is the highest-leverage practice in the entire workflow.

### Why this matters

Design decisions are mostly about what you didn't do. The chosen design is visible; the rejected alternatives, the deferred ideas, and the constraints that shaped the outcome are invisible — unless you deliberately capture them. Without context capture:

- Stakeholders six months later ask *"why didn't we just do X?"* and nobody can answer reliably.
- New team members can't learn from past work because the reasoning isn't recorded.
- The team re-explores rejected paths because nobody remembers they were already considered.
- Deferred ideas get lost instead of becoming the natural backlog for future iterations.

With context capture, every new iteration starts from a richer foundation, not a blank slate.

### Two layers of context

**Layer 1 — Per-iteration `CONTEXT.md`**

The considered, retrospective record of the thinking behind a specific iteration. Lives in the iteration folder. This is the canonical context document.

**Layer 2 — Per-commit messages**

The granular, in-flight record captured as the work happens. Feeds into `CONTEXT.md` at the end.

### `CONTEXT.md` — required structure

Every iteration folder includes a `CONTEXT.md` with the following sections. Length is proportional to the iteration — a small refinement might be a paragraph per section; a major exploration might be several paragraphs.

```markdown
# Context — v<N> / iteration-<NN> — <short title>

## What I worked on
Brief narrative of the focus of this iteration — the problem area, the
intended audience, the scope of changes.

## What was considered
Alternatives explored before settling on the chosen direction. Include
options that were rejected and why. This surfaces the design space so
future iterations don't re-explore rejected paths.

## What was deferred and why
Ideas that are likely valuable but were intentionally pushed to a later
iteration. Each item explains the reason for deferral — premature,
out of scope, dependent on something else, etc.

## What was explicitly not included and why
Scope boundaries. Things that might seem like they belong here but were
deliberately excluded. This is what stakeholders most often ask about
retroactively.

## Parked for later
Ideas surfaced during this iteration that need follow-up but don't have
a home yet. Each parked item should be specific enough to act on later.
Link to issues where relevant.

## Open questions for reviewers
Specific things the author wants input on. Focuses the review conversation.

## Decisions recorded
The canonical "what was decided" — specific values, behaviors, or choices
that this iteration locks in. Future iterations should treat these as
starting points, not re-litigate them.
```

### Why these sections

- **What was considered** — surfaces alternatives so future iterations don't re-explore rejected paths.
- **What was deferred and why** — distinguishes "we'll do this later" from "we chose not to do this." These are very different signals.
- **What was explicitly not included and why** — captures scope boundaries, the most common stakeholder retroactive question.
- **Parked for later** — creates a natural backlog that informs future iterations.
- **Open questions for reviewers** — focuses review on what the author actually wants input on.
- **Decisions recorded** — the canonical record so future iterations don't accidentally re-litigate.

### Example `CONTEXT.md`

```markdown
# Context — v2 / iteration-03 — Refined peek carousel

## What I worked on
Refined Raj's peek carousel (v2-iter02) before stakeholder review. Focus
was on accessibility, visual hierarchy, and mobile polish.

## What was considered
- Three options for the disabled-card state: full grey, partial opacity,
  and outlined-only. Chose partial opacity (60%) because it preserves
  card recognizability while clearly signaling state.
- Two CTA placements: inline per-card vs sticky bottom. Chose inline
  because it matches user mental model in testing (users tap the card
  they want, not a separate button).
- Card spacing variations from 8px to 20px. Settled on 12px after
  comparing on real devices.

## What was deferred and why
- Animated transitions between cards — deferred to v2-iter04 or later.
  Reason: animation polish is premature before the static layout is
  locked. Adds review noise.
- Card reordering by drag — deferred. Reason: out of scope for the
  initial stakeholder review; complicates the interaction model before
  we've validated the basic flow.

## What was explicitly not included and why
- A "Saved for later" tab — out of scope. Saved payment methods is a
  focused feature; tabs would broaden it into account-management
  territory, which is a separate roadmap item.
- Apple Pay / Google Pay quick buttons above the card list — not
  included in this iteration. The PM confirmed these belong in a
  separate "express checkout" workstream.

## Parked for later
- Investigation into whether users want to nickname their cards
  ("Work card", "Vacation card"). Raised in internal review but
  needs user research before designing. Logged as issue #47.
- Empty-state design for users with zero saved cards. Will be
  iteration-05 once the populated state is approved.
- Animation language for card add/remove. Needs to wait for design
  system motion guidelines (in progress, owned by Sam).

## Open questions for reviewers
- Is the 60% opacity for disabled cards readable enough? Specifically
  asking accessibility-minded reviewers.
- Does the stacking order of "default" badge and "expires soon" badge
  feel right when both appear?

## Decisions recorded
- Card spacing: 12px (final for this iteration)
- Disabled state: 60% opacity, no greyscale
- CTA placement: inline per-card
- Default-card behavior: first card by default; manual selection in iter04
```

### Commit message format

Commits are the granular trail. They feed into `CONTEXT.md` but serve a different purpose — they capture the moment of a change, not the considered summary.

Adopt this commit message format for substantive commits:

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

Example:

```
refine: tighten card spacing and fix disabled-state contrast

Considered:
- 8px spacing (too cramped on mobile, cards felt like a list not cards)
- 16px (Raj's original — felt loose at small viewports)
- 20px (created awkward scrollbar appearance on desktop)

Decided:
- 12px spacing for all viewports
- Disabled state: 60% opacity, no greyscale shift

Parked:
- Animation between active/disabled transitions — needs design system
  motion tokens (issue #51)
```

### Commit types

- `add:` — new iteration or file
- `refine:` — improving an existing iteration's content (within the same iteration folder, pre-merge)
- `fix:` — correcting an error
- `doc:` — documentation only
- `meta:` — `meta.json` or tag updates only

For trivial commits (typo fixes, formatting), a single-line message is fine. The structured format applies to substantive commits.

### Workflow integration

Here's how context capture slots into the iteration flow:

1. Designer creates the iteration branch.
2. As they work, they make commits using the structured message format. Each commit's "Considered" and "Parked" notes capture thinking in the moment.
3. When the iteration is ready, they write `CONTEXT.md` — using their own commit history as a source. The commits act as a draft for the final context doc.
4. The PR description includes a short summary plus a link to `CONTEXT.md`. Reviewers read both.
5. Reviewers' questions and comments on the PR may prompt updates to `CONTEXT.md` before merge — especially the "Open questions" and "Decisions recorded" sections.
6. Merge. `CONTEXT.md` is now part of the permanent archive.

### How the wrapper surfaces context

Since `CONTEXT.md` is a standard file per iteration, the showcase wrapper can expose it:

- An "About this iteration" expandable section in the showcase, rendering `CONTEXT.md`.
- A "What we considered" and "What was parked" aggregated view across iterations of a version.
- A "Parked items" roll-up at the feature level — showing all deferred ideas across all iterations, which becomes a curated backlog for planning future work.

The roll-up view is particularly valuable. When the team plans the next round of work, they have a curated, contextual list of "things we thought about but didn't do" with full reasoning attached.

### Keeping the overhead sustainable

Context capture adds real work to every iteration. Two practices keep it sustainable:

1. **Use the commit log as scaffolding.** If commit messages are structured, writing `CONTEXT.md` at the end is mostly compilation, not fresh writing. The cost stays low.
2. **Keep it proportional.** A small refinement iteration might have a one-paragraph `CONTEXT.md`. A major exploration iteration might have a full multi-section one. Don't enforce length; enforce *completeness for what the iteration actually involved*.

### PR template additions for context

The team PR template should include:

```
**Iteration being added:** v<N> / iteration-<NN> — <short desc>
**Builds on:** <iteration id, linked via supersedes>
**Summary of changes:**
**Feedback sources:** (internal review / user testing / stakeholder note)
**Tags applied:**
**Ready for:** (internal review / stakeholder review / archive)

Context checklist:
- [ ] meta.json is complete and valid
- [ ] README.md describes what this iteration shows
- [ ] CONTEXT.md is filled out:
  - [ ] What I worked on
  - [ ] What was considered
  - [ ] What was deferred and why
  - [ ] What was explicitly not included
  - [ ] Parked for later
  - [ ] Open questions for reviewers
  - [ ] Decisions recorded
```

---

## Part 4 — Summary

This workflow combines three things:

1. **A clean Git model** — single `main` branch, short-lived feature branches, folder-based versioning, optional frozen snapshots.
2. **Metadata-driven curation** — tags in `meta.json` control what stakeholders see by default, without ever moving or hiding files.
3. **Context-rich iterations** — every iteration captures not just what was made but what was considered, deferred, excluded, and parked.

Together these produce an archive that is complete, navigable, curated for different audiences, and rich in reasoning. The team can move fast without losing history, collaborate without overwriting each other's work, and present polished views to stakeholders without sacrificing the depth of work behind them.

The most important thing the team can do beyond following the rules is to internalize the principles: history is sacred, branches are temporary, curation is metadata, and context is what makes the archive valuable.
