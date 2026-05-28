# Example Feature

This folder is a scaffolded example showing the structure of a feature in the archive. Use it as a reference when creating real features.

## What to do with this folder

When the team starts using the workflow for real:

- Treat this as a reference, not a real feature
- For your first real iteration, copy the structure of `v1/iteration-01-example/` into a real feature folder
- Either delete this folder once the team is comfortable with the structure, or keep it as a permanent reference (your call)

## Structure of a feature folder

```
/products/<feature-name>/
  /v1/
    /iteration-01-<short-desc>/
      meta.json
      README.md
      CONTEXT.md
      <design files>
    /iteration-02-<short-desc>/
      ...
  /v2/
    ...
  /showcase/
    wrapper.jsx
    index.html
```

Each iteration folder is self-contained — it has its own metadata, context, and design files. Versions group related iterations exploring the same direction.

## The required files per iteration

- `meta.json` — structured metadata read by the showcase wrapper
- `README.md` — short, audience-facing description of what the iteration shows
- `CONTEXT.md` — the design log capturing reasoning, alternatives, and decisions
- Design files and any preview assets — the actual design artifacts
