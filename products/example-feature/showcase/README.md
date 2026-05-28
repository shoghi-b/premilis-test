# Showcase Wrapper

The showcase wrapper is the entry point for browsing this feature's design iterations. It reads `meta.json` from each iteration folder and renders a navigable view.

## Files

- `index.html` — the entry point loaded in browsers
- `wrapper.jsx` — the wrapper component that reads metadata and renders the switcher UI

## What the wrapper does

1. Scans all iteration folders under the feature
2. Reads each iteration's `meta.json`
3. Filters and groups iterations based on tags
4. Renders the showcase with a view switcher (stakeholder view / full view / by presentation group)

## View modes

- **Stakeholder view (default for external audience):** shows only iterations tagged `stakeholder-review`, grouped by version. Includes a "See all iterations" toggle.
- **Full view:** shows all iterations grouped by version, with archived ones rendered dimmer. Shows lineage via `supersedes` fields.
- **By presentation group:** filter to a specific `presentationGroup` to reconstruct what was shown at a particular review.

## Customizing the wrapper

The wrapper is shared infrastructure. If you want to change how it behaves, open a PR — don't fork it per feature. Tag changes via `meta.json` are the right tool for per-iteration customization.

## Adding a wrapper to a new feature

Each feature has its own `showcase/` folder, but the wrapper code itself should be common across features. Consider either:

- Symlinking `showcase/wrapper.jsx` to a shared `/showcase-core/wrapper.jsx`, or
- Importing the shared wrapper from a central location

The minimal viable wrapper just needs to read `meta.json` files and render iterations in a list. The fancier features (view switching, presentation groups, lineage display) can come later.
