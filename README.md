# Design Builders — Design Archive

This repository is the design team's collaborative workspace and archive. It holds every design iteration the team produces, organized by feature and version, with full context for each iteration preserved permanently.

## What lives here

- **`/products/<feature>/`** — one folder per feature, containing all versions and iterations
- **`/products/<feature>/v<N>/iteration-<NN>-<short-desc>/`** — individual design iterations, each with `meta.json`, `README.md`, `CONTEXT.md`, and design files
- **`/products/<feature>/showcase/`** — the wrapper that renders the iterations as a browsable showcase for the team and stakeholders
- **`TAGS.md`** — the canonical list of tags used to classify and curate iterations
- **`docs/`** — the workflow reference documents (principles, rules, simulation, rollout plan)

## How to use this repo

If you're new here, read these in order:

1. `docs/principles-and-rules.md` — the foundational principles and full workflow rules
2. `docs/simulation.md` — an end-to-end walkthrough of how the workflow plays out in practice
3. `docs/rollout-plan.md` — how the team is adopting the workflow

To create a new iteration:

1. Branch off `main` with `add/<feature>-v<N>-iter<NN>-<short-desc>`
2. Create the iteration folder following the structure conventions
3. Fill out `meta.json`, `README.md`, and `CONTEXT.md` using the templates
4. Open a PR using the PR template
5. After merge, the branch is deleted automatically

## Core principles

- **History is sacred** — every iteration is preserved forever, never overwritten
- **Branches are temporary; `main` is permanent** — no long-lived working branches
- **Curation is metadata, not file movement** — tags in `meta.json` control what stakeholders see

## Questions?

The rollout owner for this workflow is **[NAME]**. Reach out to them with any questions, or open a discussion in this repo.
