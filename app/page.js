"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart03,
  Box,
  Calculator,
  ChevronDown,
  CoinsHand,
  CoinsStacked03,
  Equal,
  HelpCircle,
  Home02,
  InfoCircle,
  LayersThree01,
  Link03,
  PauseCircle,
  Percent03,
  Sale03,
  SearchRefraction,
  Settings01,
  ShoppingCart03,
  Star02,
  Stars02,
  Tag03,
  User01,
  UsersUp,
  XClose,
} from "@untitled-ui/icons-react";

const formulaTags = [
  { key: "growth", label: "Growth Ambition", tone: "tone-primary-soft" },
  { key: "customer", label: "Customer Value", tone: "tone-orange" },
  { key: "timing", label: "Timing & Placement", tone: "tone-teal" },
  { key: "cannibalization", label: "Cannibalization", tone: "tone-blue" },
  { key: "boost", label: "Campaign/Product Boost", tone: "tone-neutral" },
];

const performanceRows = [
  {
    id: "non-branded",
    title: "Non-branded keywords",
    description: "All high-performing keywords, excluding branded terms",
    value: "50%",
    icon: Percent03,
    rowClass: "target-row-blue",
    textClass: "target-text-blue",
  },
  {
    id: "competitor",
    title: "Competitor’s products",
    description: "Target competitor product detail pages",
    value: "50%",
    icon: UsersUp,
    rowClass: "target-row-purple",
    textClass: "target-text-purple",
  },
  {
    id: "branded",
    title: "Branded keywords & products",
    description: "Target your brand's keywords and products",
    value: "50%",
    icon: Tag03,
    rowClass: "target-row-magenta",
    textClass: "target-text-magenta",
  },
];

const simulationFactors = [
  { label: "Growth Ambition", className: "sim-factor-growth" },
  { label: "Customer value (120€)", className: "sim-factor-customer" },
  { label: "Timing & Placement", className: "sim-factor-timing" },
  { label: "Cannibalisation (0.8)", className: "sim-factor-cannibalisation" },
  { label: "Product Boost (1.5x)", className: "sim-factor-boost" },
];

const simulationRows = [
  {
    keyword: "eponges",
    margin: "120 €",
    cvr: "10%",
    avg: "3 €",
    bid: "4.5 €",
    rowClass: "sim-row-blue",
  },
  {
    keyword: "Spontex",
    margin: "120 €",
    cvr: "10%",
    avg: "3 €",
    bid: "4.5 €",
    rowClass: "sim-row-violet",
  },
  {
    keyword: "eponges inga",
    margin: "120 €",
    cvr: "10%",
    avg: "3 €",
    bid: "4.5 €",
    rowClass: "sim-row-pink",
  },
  {
    keyword: "loose-match",
    margin: "120 €",
    cvr: "10%",
    avg: "3 €",
    bid: "4.5 €",
    rowClass: "sim-row-neutral",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  return (
    <main className="app-canvas">
      <aside className="left-rail">
        <div className="rail-account">
          <div className="avatar-circle">H</div>
        </div>

        <nav className="rail-nav" aria-label="Primary">
          <button className="rail-icon" type="button" aria-label="Home">
            <Home02 strokeWidth={1.8} />
          </button>
          <button className="rail-icon" type="button" aria-label="Products">
            <Box strokeWidth={1.8} />
          </button>
          <button className="rail-icon" type="button" aria-label="Lists">
            <LayersThree01 strokeWidth={1.8} />
          </button>
          <button className="rail-icon rail-icon-active" type="button" aria-label="Bid settings">
            <Sale03 strokeWidth={1.8} />
          </button>
          <button className="rail-icon" type="button" aria-label="Budgets">
            <CoinsStacked03 strokeWidth={1.8} />
          </button>
          <button className="rail-icon" type="button" aria-label="Analytics">
            <BarChart03 strokeWidth={1.8} />
          </button>
        </nav>

        <div className="rail-bottom">
          <button className="rail-icon rail-notification" type="button" aria-label="Notifications">
            <span>99+</span>
          </button>
          <button className="rail-icon rail-help" type="button" aria-label="Help">
            <HelpCircle strokeWidth={1.8} />
          </button>
        </div>

        <div className="rail-logo">
          <div className="rail-logo-badge">
            <User01 strokeWidth={1.8} />
          </div>
        </div>
      </aside>

      <section className="content-shell">
        <header className="page-nav">
          <h1>PPC settings</h1>
          <div className="header-controls">
            <button className="control-select control-omny" type="button">
              <ShoppingCart03 strokeWidth={1.8} />
              <span>Omny</span>
              <ChevronDown strokeWidth={1.8} />
            </button>
            <button className="control-select control-market" type="button">
              <span className="flag-fr" aria-hidden />
              <span>amazon.fr</span>
              <ChevronDown strokeWidth={1.8} />
            </button>
            <span className="header-divider" />
            <button className="control-select control-currency" type="button">
              <span>EUR €</span>
              <ChevronDown strokeWidth={1.8} />
            </button>
          </div>
        </header>

        <div className="toolbar-row">
          <div className="mode-switch">
            <button className="mode-button" type="button">
              <Stars02 strokeWidth={1.8} />
              Strategic
            </button>
            <button className="mode-button" type="button">
              <Star02 strokeWidth={1.8} />
              Performance
            </button>
          </div>
          <button className="settings-button" type="button">
            <Settings01 strokeWidth={1.8} />
            Settings
          </button>
        </div>

        <section className="tabs-row">
          <button className="tab-item tab-item-active" type="button">
            <CoinsHand strokeWidth={1.8} />
            <span>Global Bid settings</span>
            <InfoCircle strokeWidth={1.8} className="tab-info" />
          </button>
          <button className="tab-item" type="button">
            <Box strokeWidth={1.8} />
            <span>Sponsored Product settings</span>
            <InfoCircle strokeWidth={1.8} className="tab-info" />
          </button>
          <button className="tab-item" type="button">
            <ShoppingCart03 strokeWidth={1.8} />
            <span>Sponsored Brand settings</span>
            <InfoCircle strokeWidth={1.8} className="tab-info" />
          </button>
          <button className="pause-button" type="button" aria-label="Pause campaign">
            <PauseCircle strokeWidth={1.8} />
          </button>
        </section>

        <section className="formula-row">
          <div className="formula-left">
            <Tag03 strokeWidth={1.8} />
            <strong>Final Bid calculation</strong>
            <Equal strokeWidth={1.8} />
            {formulaTags.map((tag, index) => (
              <div className="formula-piece" key={tag.key}>
                <span className={`formula-chip ${tag.tone}`}>{tag.label}</span>
                {index < formulaTags.length - 1 && <span className="formula-multiply">*</span>}
              </div>
            ))}
          </div>
          <button
            ref={triggerRef}
            className="simulation-button"
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-controls="simulation-modal"
          >
            <span>Simulation</span>
            <Calculator strokeWidth={1.8} />
          </button>
        </section>

        <section className="panel-wrap">
          <article className="targeting-wrapper">
            <header className="targeting-header">
              <span className="targeting-pill">
                <Percent03 strokeWidth={1.8} />
                Ad investment intensity per targeting
              </span>
              <label className="scale-label">
                <input type="checkbox" defaultChecked />
                <span>Scale all values proportionally</span>
              </label>
            </header>

            <div className="performance-card">
              <div className="performance-header">
                <h2>Performance Targeting</h2>
                <p>Keywords and ASINs that have driven conversions</p>
              </div>

              {performanceRows.map((row, idx) => {
                const RowIcon = row.icon;
                return (
                  <div className="performance-row-wrap" key={row.id}>
                    <div className={`target-row ${row.rowClass}`}>
                      <div className={`target-copy ${row.textClass}`}>
                        <div className="target-title">
                          <RowIcon strokeWidth={1.8} />
                          <h3>{row.title}</h3>
                        </div>
                        <p>{row.description}</p>
                      </div>
                      <span className="value-pill">{row.value}</span>
                    </div>
                    {idx < performanceRows.length - 1 && (
                      <div className="link-break">
                        <Link03 strokeWidth={1.8} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bottom-connector">
              <Link03 strokeWidth={1.8} />
            </div>

            <div className="target-row target-row-neutral">
              <div className="target-copy target-text-neutral">
                <div className="target-title">
                  <SearchRefraction strokeWidth={1.8} />
                  <h3>Discovery targeting</h3>
                </div>
                <p>Exploration campaigns to surface new converting keywords</p>
              </div>
              <span className="value-pill">60%</span>
            </div>
          </article>
        </section>
      </section>

      <div
        id="simulation-modal"
        className={`modal-overlay ${open ? "open" : ""}`}
        aria-hidden={!open}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <section className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="simulation-title">
          <header className="modal-header">
            <h3 id="simulation-title">Bid simulation</h3>
            <button
              ref={closeRef}
              className="modal-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close simulation modal"
            >
              <XClose strokeWidth={1.8} />
            </button>
          </header>
          <div className="modal-body simulation-modal-body">
            <p className="sim-description">Example of bids placed on a product</p>

            <section className="sim-formula-card" aria-label="Bid formula details">
              <div className="sim-product-title">
                <span className="sim-product-thumb" aria-hidden>
                  🥫
                </span>
                <span>Devialet Remote (Matte Black) - BO8T7W2MV1</span>
              </div>

              <div className="sim-final-row">
                <Tag03 strokeWidth={1.8} />
                <strong>Final Bid (12.4€)</strong>
                <span className="sim-equals">=</span>
              </div>

              <div className="sim-factor-wrap">
                {simulationFactors.map((factor, index) => (
                  <div className="sim-factor-group" key={factor.label}>
                    <span className={`sim-factor ${factor.className}`}>{factor.label}</span>
                    {index < simulationFactors.length - 1 && <span className="sim-multiply">×</span>}
                  </div>
                ))}
              </div>
            </section>

            <section className="sim-table" aria-label="Illustrative targeting bids">
              <header className="sim-table-head">
                <span>ILLUSTRATIVE TARGETING</span>
                <span>PRODUCT MARGIN</span>
                <span>ADS CVR</span>
                <span>AVG. MARGIN PER CLICK</span>
                <span>COMPUTED MAX BID</span>
              </header>

              <div className="sim-table-body">
                {simulationRows.map((row) => (
                  <div className={`sim-table-row ${row.rowClass}`} key={row.keyword}>
                    <span>{row.keyword}</span>
                    <span>{row.margin}</span>
                    <span>{row.cvr}</span>
                    <span>{row.avg}</span>
                    <span>{row.bid}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
