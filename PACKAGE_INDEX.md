# Design Team Workflow — Complete Package

This package contains everything needed to set up and roll out the design team's GitHub-based collaborative workflow.

## What's in this package

### Reference documents (`docs/`)

These are the documents the team reads to understand the workflow:

- **`docs/principles-and-rules.md`** — the foundational principles, full workflow rules, and context-capture practices. The rulebook.
- **`docs/simulation.md`** — an end-to-end walkthrough using a realistic feature, demonstrating every scenario: parallel work, refinement, stakeholder curation, post-stakeholder iteration.
- **`docs/rollout-plan.md`** — the phased plan for adopting the workflow, including a checklist.

### Scaffolding files

These go directly into the repo:

- **`README.md`** — the repo's front-page README explaining what the repo is for and how to use it
- **`TAGS.md`** — the canonical tag definitions
- **`COMMIT_CONVENTIONS.md`** — quick reference for commit message format
- **`.github/pull_request_template.md`** — the PR template with the context checklist

### Example feature

- **`products/example-feature/`** — a scaffolded feature folder showing the structure
  - `v1/iteration-01-example/` — a sample iteration with template `meta.json`, `README.md`, and `CONTEXT.md` files
  - `showcase/` — placeholder for the wrapper

## How to use this package

### If you're the rollout owner

1. Create a new GitHub repo for the design archive
2. Copy the contents of this `scaffolding/` directory into the repo root
3. Fill in `[NAME]` in `README.md` with your name as the rollout owner
4. Adjust `TAGS.md` if your team wants different starting tags
5. Build out a minimal wrapper in `products/example-feature/showcase/` — even a basic version that just lists iterations is enough to start
6. Commit and push
7. Follow Phase 1 of `docs/rollout-plan.md` to start the pilot

### If you're a designer being onboarded

Read these in order:

1. `README.md` — what this repo is
2. `docs/principles-and-rules.md` — the workflow
3. `docs/simulation.md` — how it plays out in practice
4. `COMMIT_CONVENTIONS.md` — commit format reference

Then, look at `products/example-feature/v1/iteration-01-example/` to see what a real iteration folder looks like.

## A note on what's not included

This package is intentionally minimal. It does **not** include:

- A working showcase wrapper implementation (the team should build this based on their tech preferences and design system)
- Specific design tool integrations (Figma plugins, etc.)
- CI/CD or automated validation of `meta.json` files (worth adding once the workflow is stable)
- A real example feature with real iterations (the example is a structural placeholder)

These are all things to add once the basic workflow is in use and the team has identified what they actually need.

## Recommended first 7–10 days

From the rollout plan:

1. Decide who owns the rollout (one person)
2. Pick the pilot feature and pilot team (real feature, 2–3 designers)
3. Set up the repo with these scaffolding files
4. Schedule a 30-minute kickoff with the pilot team to walk them through `docs/simulation.md`
5. Set a pilot end date 6 weeks out and put the retrospective on the calendar now

Then start the pilot. Follow `docs/rollout-plan.md` from there.
