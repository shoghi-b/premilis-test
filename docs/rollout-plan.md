# Design Team Workflow — Rollout Plan

This document is the practical plan for moving the team from "we have a workflow design" to "the team is actively using it." It pairs with the simulation walkthrough and the principles/rules document.

---

## Why a Rollout Plan Matters

Three things tend to kill process rollouts like this:

1. **Big-bang adoption** — trying to apply the full workflow to all teams and all features at once. Too much change, too fast.
2. **Tool fatigue before value is felt** — people fill in `meta.json` and `CONTEXT.md` for weeks before the archive personally benefits them. Cost is upfront; payoff is delayed.
3. **No clear owner** — without someone explicitly responsible, the rollout becomes everyone's-and-no-one's job.

This plan addresses all three through a phased approach, a named owner, and visible value as early as possible.

---

## Phase 0 — Preparation

**Goal:** Have the scaffolding ready so day one of real adoption isn't blocked by missing pieces.

**Who:** The Design Lead plus one designer who likes process work. Not the whole team.

**What to produce:**

- The repo itself, with the folder structure stubbed out
- `TAGS.md` with the canonical tag set agreed upon
- `.github/pull_request_template.md` with the full template including the context checklist
- A blank `meta.json` template file
- A blank `CONTEXT.md` template file
- A short `README.md` at the repo root explaining what this repo is for
- A minimal wrapper that at least reads `meta.json` and renders iterations — even if the UI is bare-bones
- The reference documents (simulation walkthrough, principles/rules, this rollout plan)

**Exit criteria:** A new designer could clone the repo, follow the templates, and create a valid iteration without asking anyone how.

---

## Phase 1 — Pilot with One Feature, One Small Team

**Goal:** Run the full workflow on a single real feature with a small subset of the team, to find friction before it scales.

**Pick a feature that is:**

- Real (not a fabricated exercise — people won't take fake work seriously)
- Bounded in scope (not a 6-month project)
- Involves at least 2 designers (so collaboration patterns get tested)
- Not so high-stakes that experimentation is risky

**The pilot team:** Design Lead plus one or two designers. Everyone else watches but isn't required to change their workflow yet.

**Specifically test:**

- Creating iterations with all three required files (`meta.json`, `README.md`, `CONTEXT.md`)
- The refinement pattern when the Design Lead improves a team member's work
- A stakeholder review cycle with tag-based curation
- A frozen branch snapshot
- Post-stakeholder feedback flowing into a new iteration

**Exit criteria:** The pilot feature has gone through at least one stakeholder review cycle, the team has a list of pain points and proposed fixes, and the Design Lead feels confident the workflow can scale.

**Duration:** 3–6 weeks depending on feature complexity. Don't end the pilot prematurely — short pilots only surface obvious issues.

---

## Phase 2 — Refine Based on Pilot Learnings

**Goal:** Update the rules, templates, and tooling based on what the pilot actually surfaced.

Expect to find:

- `CONTEXT.md` sections people consistently leave blank — rewrite them or drop them
- Iteration scenarios not covered by the rules
- Tags being misused or never used
- Wrapper features that weren't obvious until people tried to use it
- PR template asking for something redundant

This phase is mostly editing the documents and templates. **Resist the urge to add new rules** — focus on simplifying what exists.

**Exit criteria:** Pilot participants agree the refined workflow is ready for wider use.

---

## Phase 3 — Expand to the Full Team

**Goal:** All design work on all features moves to the workflow.

### Rollout choices

**Hard cutover vs gradual:**

- *Hard cutover:* "Starting Monday, all new features use the workflow." Cleaner, but higher risk if something is still broken.
- *Gradual:* "All new features started after [date] use the workflow; existing features continue as-is until natural breakpoints." Lower risk, but the team operates in two modes for a while.

**Recommendation: gradual for new features, never migrate old work.** Don't retroactively force features that are mid-flight into the new system.

### Training

- A 60–90 minute walkthrough session using the simulation document as the script. The Design Lead presents; pilot designers share what they learned.
- Pair the session with a hands-on exercise where each designer creates a sample iteration in a sandbox area of the repo.
- Record the session for new joiners.

### Buddy system for the first iteration

Each designer pairs with a pilot participant for their first iteration. The buddy reviews their `CONTEXT.md` and PR specifically to coach on the workflow, not just the design. This catches habits early.

**Exit criteria:** All designers have completed at least one iteration following the full workflow, and the buddy phase has wrapped.

---

## Phase 4 — Steady State and Continuous Improvement

**Goal:** The workflow becomes "how we work," not "the new process."

Practices that keep it healthy long-term:

- **Quarterly retrospectives** specifically on the workflow. Update the rules document with version history at the top.
- **Onboarding checklist** for new joiners that explicitly includes reading the principles/rules document and shadowing an active PR.
- **Archive browsing as a habit** — start design exploration meetings with "let's look at what we've considered before in this space" and pull up relevant past `CONTEXT.md` files. This makes the archive visibly valuable, which reinforces the habit of writing good context.
- **Periodic `TAGS.md` review** — every few months, audit the tags actually in use. Retire dead ones, formalize new ones.

---

## What to Do This Week

Concrete next steps for the next 7–10 days:

1. **Decide who owns the rollout.** One person — probably the Design Lead — needs to be the named owner.
2. **Pick the pilot feature and pilot team.** Real feature, 2–3 people. Don't agonize over the choice.
3. **Set up the repo with the scaffolding from Phase 0.** A day or two of work for one person.
4. **Schedule a 30-minute kickoff with the pilot team** to walk them through the simulation document. Not a training session — a conversation.
5. **Set a pilot end date** — something like 6 weeks out — and put a retrospective on the calendar for that date now, before the work starts.

---

## Things to Actively Avoid

**Don't make the workflow perfect before starting.** The pilot will surface things no amount of documentation can predict. Ship a "good enough" v1 and refine.

**Don't recruit the most skeptical designer to be in the pilot.** Putting the loudest skeptic in the pilot rarely converts them and often slows everyone else down. Pick designers who are genuinely curious. Bring skeptics in after Phase 2 when the workflow has real wins to point to.

**Don't enforce rules before people understand the principles.** If someone forgets to write `CONTEXT.md`, the response in early phases is *"here's why this section matters and how it'll help you later,"* not *"this PR is blocked."* Enforcement comes after understanding.

**Don't measure adoption by document compliance.** Measure it by behavior — are people referencing past iterations? Are stakeholder reviews going smoother? Is onboarding faster? Compliance is a leading indicator at best; outcomes are what matter.

**Don't skip the wrapper.** The showcase is what makes the archive *feel* valuable to stakeholders and to the team. A repo full of folders is just storage; a working wrapper makes it a living tool. Even a minimal wrapper does more for adoption than perfect documentation.

---

## Signals That It's Working

In increasing order of significance:

- **Week 2–3 of the pilot:** designers are creating valid iterations without asking for help.
- **End of pilot:** a stakeholder review has happened using the wrapper's stakeholder view, and the feedback led to a new iteration that referenced previous `CONTEXT.md` content.
- **A few months into Phase 3:** someone says *"hold on, let me check the archive — I think we considered that already"* unprompted.
- **Six months in:** a new joiner gets up to speed primarily by reading past iterations rather than asking the team.
- **A year in:** the team has retrospected on and revised the rules at least twice, and the current version doesn't look exactly like the document you started with.

The last one is the real success indicator. The workflow document isn't sacred — it's a living agreement the team co-owns. The fact that it evolves means it's actually being used.

---

## Rollout Checklist

A condensed checklist the rollout owner can track against:

### Phase 0 — Preparation
- [ ] Rollout owner named
- [ ] Repo created with folder structure
- [ ] `TAGS.md` populated with canonical tags
- [ ] PR template added
- [ ] `meta.json` template file added
- [ ] `CONTEXT.md` template file added
- [ ] Repo root `README.md` written
- [ ] Minimal wrapper functional
- [ ] Reference documents added to repo (simulation, rules, rollout plan)

### Phase 1 — Pilot
- [ ] Pilot feature selected
- [ ] Pilot team (2–3 designers) named
- [ ] Kickoff conversation held
- [ ] Pilot end date and retrospective scheduled
- [ ] At least one stakeholder review completed during pilot
- [ ] Pain points logged

### Phase 2 — Refine
- [ ] Retrospective held
- [ ] Pain points reviewed and prioritized
- [ ] Documents and templates updated
- [ ] Pilot team signs off on refined workflow

### Phase 3 — Expand
- [ ] Rollout approach chosen (gradual recommended)
- [ ] Training session scheduled and held
- [ ] Session recorded for new joiners
- [ ] Buddy pairings assigned for each designer's first iteration
- [ ] All designers have completed at least one iteration

### Phase 4 — Steady State
- [ ] First quarterly retrospective scheduled
- [ ] Onboarding checklist created
- [ ] Archive-browsing habit introduced into design meetings
- [ ] `TAGS.md` review scheduled
