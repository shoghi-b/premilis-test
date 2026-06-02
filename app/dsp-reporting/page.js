"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";
import {
  BarChart03,
  Box,
  ChevronDown,
  CoinsStacked03,
  Globe02,
  Home02,
  InfoCircle,
  LayersThree01,
  Link03,
  Sale03,
  SearchRefraction,
  ShoppingCart03,
  Stars02,
  User01,
} from "@untitled-ui/icons-react";

const rows = [
  ["Oct 2, '23", "455", 20, "3.2", 72, "3.77€", 20, "7 223 €", "16 223 €", 24, 526, 20, "2.1K", "1.8K", "2.1K", "1.8K", "6.1K", "11€", "594K", 96, 100, 100, "0.4%", "2%", "3%"],
  ["Sep 25, '23", "1.3K", 14, "3.2", 72, "3.77€", 14, "12 150 €", "21 150 €", 23, 1475, 14, "7.5K", "2.1K", "7.5K", "2.1K", "3.9K", "13€", "760K", 94, 23, 23, "0.3%", "4%", "1%"],
  ["Sep 18, '23", "1.1K", 12, "3.2", 70, "3.77€", 12, "18 100 €", "27 200 €", 20, 1298, 12, "8.2K", "2.1K", "8.2K", "2.1K", "9.2K", "17€", "727K", 59, 55, 55, "0.3%", "6%", "0%"],
  ["Sep 11, '23", "494", 10, "3.2", 62, "3.77€", 10, "16 950 €", "26 000 €", 22, 654, 10, "3.2K", "2.3K", "3.2K", "2.3K", "2.8K", "7€", "695K", 88, 76, 76, "0.7%", "4%", "0%"],
  ["Sep 4, '23", "469", 10, "3.2", 44, "3.77€", 10, "11 000 €", "20 000 €", 18, 617, 10, "2.1K", "1.6K", "2.1K", "1.6K", "7.5K", "22€", "743K", 83, 88, 88, "0.6%", "7%", "0%"],
  ["Aug 28, '23", "456", 8, "3.2", 88, "3.77€", 8, "10 300 €", "19 300 €", 24, 1023, 8, "2.3K", "1.5K", "2.3K", "1.5K", "1.3K", "9€", "710K", 81, 99, 99, "0.4%", "8%", "0%"],
  ["Aug 21, '23", "461", -6, "3.2", 72, "3.77€", -6, "9 100 €", "18 100 €", 26, 566, -6, "1.8K", "2.1K", "1.8K", "2.1K", "5.5K", "35€", "660K", -78, 80, 80, "0.2%", "-", "0%"],
  ["Aug 14, '23", "604", -4, "3.2", 36, "3.77€", -4, "8 450 €", "17 450 €", 31, 617, -4, "2.4K", "2.1K", "2.4K", "2.1K", "8.9K", "4€", "645K", 65, 10, 10, "0.3%", "-", "0%"],
  ["Aug 7, '23", "306", -4, "3.2", 64, "3.77€", -4, "7 223 €", "16 223 €", 15, 1298, -4, "2.4K", "1.9K", "2.4K", "1.9K", "4.1K", "22€", "678K", 52, 12, 12, "0.5%", "-", "0%"],
  ["Aug 7, '23", "231", -4, "3.2", 48, "3.77€", -4, "15 800 €", "24 800 €", 27, 1475, -4, "2.1K", "1.8K", "2.1K", "1.8K", "9.8K", "22€", "628K", 41, 45, 45, "0.6%", "-", "0%"],
  ["Aug 7, '23", "313", -4, "3.2", 58, "3.77€", -4, "13 400 €", "22 400 €", 29, 654, -4, "2.2K", "8.8K", "2.2K", "8.8K", "2.2K", "22€", "612K", 37, 66, 66, "0.4%", "-", "0%"],
  ["Aug 7, 2023", "287", -4, "3.2", 42, "3.77€", -4, "14 600 €", "23 600 €", 30, 526, -4, "1.9K", "6.4K", "1.9K", "6.4K", "6.7K", "22€", "594K", 24, 79, 79, "0.4%", "8%", "0%"],
];

const GRANULARITY_OPTIONS = ["Weekly", "Monthly", "Quarterly", "Yearly"];

const ADR_MULTIPLIER = {
  Weekly: 1,
  Monthly: 0.93,
  Quarterly: 0.89,
  Yearly: 0.85,
};

const WEEKLY_ONLY_GRANULARITIES = new Set(["Monthly", "Quarterly", "Yearly"]);

const reachRows = [
  { adr: 265000, adrChange: 15, weeklyCumulative: 998000, retainers: 672000, newcomers: 326000, churners: 81000, theoretical: 1120000 },
  { adr: 252000, adrChange: 12, weeklyCumulative: 963000, retainers: 648000, newcomers: 315000, churners: 78400, theoretical: 1089000 },
  { adr: 244000, adrChange: 10, weeklyCumulative: 932000, retainers: 619000, newcomers: 313000, churners: 76500, theoretical: 1040000 },
  { adr: 236000, adrChange: 8, weeklyCumulative: 901000, retainers: 601000, newcomers: 300000, churners: 74800, theoretical: 1004000 },
  { adr: 228000, adrChange: 7, weeklyCumulative: 872000, retainers: 580000, newcomers: 292000, churners: 72300, theoretical: 976000 },
  { adr: 219000, adrChange: 5, weeklyCumulative: 842000, retainers: 559000, newcomers: 283000, churners: 70600, theoretical: 953000 },
  { adr: 205000, adrChange: -2, weeklyCumulative: 791000, retainers: 541000, newcomers: 250000, churners: 68900, theoretical: 914000 },
  { adr: 198000, adrChange: -3, weeklyCumulative: 764000, retainers: 522000, newcomers: 242000, churners: 66800, theoretical: 889000 },
  { adr: 191000, adrChange: -4, weeklyCumulative: 738000, retainers: 507000, newcomers: 231000, churners: 65100, theoretical: 861000 },
  { adr: 186000, adrChange: -4, weeklyCumulative: 721000, retainers: 499000, newcomers: 222000, churners: 63500, theoretical: 844000 },
  { adr: 179000, adrChange: -5, weeklyCumulative: 695000, retainers: 479000, newcomers: 216000, churners: 61800, theoretical: 822000 },
  { adr: 172000, adrChange: -6, weeklyCumulative: 669000, retainers: 458000, newcomers: 211000, churners: 60100, theoretical: 793000 },
];

const compactFormatter = new Intl.NumberFormat("en-GB", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const COLUMN_WIDTHS = [32, 120, 159, 106, 115, 204, 108, 108, 166, 198, 220, 184, 184, 112, 78, 144, 70, 86, 86, 74, 144, 62];
const TABLE_WIDTH = COLUMN_WIDTHS.reduce((sum, width) => sum + width, 0);
const REACH_WEEKLY_ONLY_COLUMN_INDEXES = [9, 10];
const FIRST_HEADER_HEIGHT = 29;
const SECOND_HEADER_HEIGHT = 28;

function Change({ value }) {
  const sign = value > 0 ? "+" : "";
  return <span className={value >= 0 ? styles.positive : styles.negative}>{sign}{value}%</span>;
}

function CustomerCell({ count, change }) {
  const width = Math.max(8, Math.min(52, Number.parseInt(count, 10) / 12 || 18));
  return (
    <div className={`${styles.cellFlex} ${styles.left}`}>
      <span>{count}</span>
      <span className={styles.miniTrack}><span className={styles.miniBar} style={{ width }} /></span>
      <Change value={change} />
    </div>
  );
}

function RoasCell({ value, width, good }) {
  return (
    <div className={`${styles.cellFlex} ${styles.left}`}>
      <span>{value}</span>
      <span className={`${styles.progress} ${good ? styles.good : ""}`}><span style={{ width: `${width}%` }} /></span>
    </div>
  );
}

function BlueCell({ value, width }) {
  return (
    <div className={styles.cellFlex}>
      <span>{value}%</span>
      <span className={styles.blueTrack}><span style={{ width: `${width}%` }} /></span>
    </div>
  );
}

function ComparisonVizCell({ primary, secondary }) {
  return <ComparisonVizCellWithTone primary={primary} secondary={secondary} tone="blue" />;
}

function ComparisonVizCellWithTone({ primary, secondary, tone }) {
  const toneClass = tone === "reach" ? styles.comparisonToneReach : styles.comparisonToneBlue;
  return (
    <div className={`${styles.comparisonCell} ${toneClass}`}>
      <div className={styles.comparisonSideRight}>
        <div className={`${styles.comparisonChip} ${styles.comparisonChipPrimary}`}>
          <span>{primary}</span>
        </div>
      </div>
      <div className={styles.comparisonSideLeft}>
        <div className={`${styles.comparisonChip} ${styles.comparisonChipSecondary}`}>
          <span>{secondary}</span>
        </div>
      </div>
    </div>
  );
}

function TealCell({ value, width }) {
  return (
    <div className={styles.cellFlex}>
      <span>{value}</span>
      <span className={styles.tealTrack}><span style={{ width: `${width}%` }} /></span>
    </div>
  );
}

function HeatCell({ value }) {
  const numeric = Number(value);
  const tone = numeric >= 65 ? styles.green : styles.red;
  return <span className={`${styles.heat} ${tone}`}>{value}%</span>;
}

function InlineIcon({ icon: Icon, className = styles.inlineIcon }) {
  return <Icon className={className} />;
}

function SpendComparisonCell({ spend, sales }) {
  return <ComparisonVizCell primary={spend} secondary={sales} />;
}

function formatReach(value) {
  return compactFormatter.format(value).replace("M", "M").replace("K", "K");
}

function ReachAdrCell({ value, change }) {
  return (
    <div className={`${styles.cellFlex} ${styles.left}`}>
      <span>{formatReach(value)}</span>
      <Change value={change} />
    </div>
  );
}

function ReachComparisonCell({ primary, secondary }) {
  return <ComparisonVizCellWithTone primary={formatReach(primary)} secondary={formatReach(secondary)} tone="reach" />;
}

function ReachSplitCell({ cumulative, retainers, newcomers, churners, showTooltip }) {
  const totalWithChurn = cumulative + churners;
  const retainersWidth = (retainers / totalWithChurn) * 100;
  const newcomersWidth = (newcomers / totalWithChurn) * 100;
  const churnersWidth = (churners / totalWithChurn) * 100;
  return (
    <div className={`${styles.reachSplitCell} ${styles.left}`}>
      <span>{formatReach(cumulative)}</span>
      <span className={styles.reachStackedTrack}>
        <span className={styles.reachStackedIncluded} style={{ width: `${retainersWidth}%` }} />
        <span className={styles.reachStackedNew} style={{ width: `${newcomersWidth}%` }} />
        <span className={styles.reachStackedExcluded} style={{ width: `${churnersWidth}%` }} />
      </span>
      {showTooltip ? (
        <div className={styles.reachSplitTooltip} role="tooltip" aria-label="Weekly reach split details">
          <div className={styles.reachTooltipHeader}>
            <p className={styles.reachTooltipTitle}>Weekly Reach Split</p>
            <p className={styles.reachTooltipValue}>{formatReach(cumulative)}</p>
          </div>
          <div className={styles.reachTooltipContent}>
            <div className={styles.reachTooltipTrack}>
              <span className={styles.reachTooltipIncluded} style={{ width: `${retainersWidth}%` }} />
              <span className={styles.reachTooltipNew} style={{ width: `${newcomersWidth}%` }} />
              <span className={styles.reachTooltipExcluded} style={{ width: `${churnersWidth}%` }} />
            </div>
            <div className={styles.reachTooltipList}>
              <div className={styles.reachTooltipRow}>
                <span className={styles.reachTooltipDotIncluded} />
                <span className={styles.reachTooltipLabel}>Retainer customers</span>
                <span className={styles.reachTooltipCount}>{formatReach(retainers)}</span>
              </div>
              <div className={styles.reachTooltipRow}>
                <span className={styles.reachTooltipDotNew} />
                <span className={styles.reachTooltipLabel}>New customers</span>
                <span className={styles.reachTooltipCount}>{formatReach(newcomers)}</span>
              </div>
              <div className={styles.reachTooltipRow}>
                <span className={styles.reachTooltipDotExcluded} />
                <span className={styles.reachTooltipLabel}>Churners</span>
                <span className={styles.reachTooltipCount}>{formatReach(churners)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function WeeklyColumnOverlay({ label }) {
  return (
    <div className={styles.weeklyColumnOverlay}>
      <div className={styles.weeklyColumnOverlayContent}>
        <Globe02 className={styles.weeklyColumnOverlayIcon} />
        <p className={styles.weeklyColumnOverlayText}>Select Weekly to display {label}</p>
      </div>
    </div>
  );
}

export default function DspReportingPage() {
  const [granularity, setGranularity] = useState("Weekly");

  const isNonWeeklyView = WEEKLY_ONLY_GRANULARITIES.has(granularity);

  const scaledReachRows = useMemo(() => {
    const multiplier = ADR_MULTIPLIER[granularity] ?? 1;
    return reachRows.map((row) => ({
      ...row,
      adrScaled: Math.round(row.adr * multiplier),
    }));
  }, [granularity]);

  const weeklyOverlayColumns = useMemo(() => {
    return REACH_WEEKLY_ONLY_COLUMN_INDEXES.map((columnIndex) => {
      const left = COLUMN_WIDTHS.slice(0, columnIndex).reduce((sum, width) => sum + width, 0);
      return { left, width: COLUMN_WIDTHS[columnIndex] };
    });
  }, []);

  return (
    <div className={styles.screen}>
      <aside className={styles.leftNav} aria-label="Primary navigation">
        <div className={styles.account}>
          <div className={styles.accountInner}>
            <div className={styles.avatar}>H</div>
          </div>
        </div>
        <nav className={styles.navList}>
          <div className={`${styles.navItem} ${styles.navItemTight}`} title="Home">
            <Home02 className={styles.navIcon} />
          </div>
          <div className={styles.navItem} title="Catalog">
            <Box className={styles.navIcon} />
          </div>
          <div className={styles.navItem} title="Pages">
            <LayersThree01 className={styles.navIcon} />
          </div>
          <div className={styles.navStack}>
            <div className={styles.navItem} title="Advertising">
              <Sale03 className={styles.navIcon} />
            </div>
            <div className={`${styles.navItem} ${styles.navItemActive}`} title="Reporting">
              <Link03 className={styles.navIcon} />
            </div>
          </div>
          <div className={styles.navItem} title="Finance">
            <CoinsStacked03 className={styles.navIcon} />
          </div>
          <div className={styles.navItem} title="Insights">
            <BarChart03 className={styles.navIcon} />
          </div>
        </nav>
        <div className={styles.navLogo}>
          <div className={styles.userDot}>
            <User01 className={styles.userIcon} />
          </div>
        </div>
      </aside>

      <main className={styles.content}>
        <header className={styles.topbar}>
          <div className={styles.topLeft}>
            <div className={styles.breadcrumb} aria-label="Breadcrumb">
              <span className={styles.previous}>Advertising</span>
              <span>/</span>
              <span className={styles.current}>DSP reporting</span>
            </div>
            <div className={styles.filters}>
              <div className={styles.filter}><InlineIcon icon={ShoppingCart03} /><span className={styles.filterLabel}>Omny, Maped Helix, Organic Tattva</span><span className={styles.badge}>4</span><InlineIcon icon={ChevronDown} className={styles.caretIcon} /></div>
              <div className={styles.filter}><InlineIcon icon={Stars02} /><span className={styles.filterLabel}>amazon.fr</span><span className={styles.badge}>1</span><InlineIcon icon={ChevronDown} className={styles.caretIcon} /></div>
              <div className={styles.filter}><InlineIcon icon={Box} /><span className={styles.filterLabel}>B0BH6DVKZD, B0BH6DVKZD</span><span className={styles.badge}>4</span><InlineIcon icon={ChevronDown} className={styles.caretIcon} /></div>
              <div className={styles.filter}><InlineIcon icon={BarChart03} /><span className={styles.filterLabel}>Order</span><InlineIcon icon={ChevronDown} className={styles.caretIcon} /></div>
            </div>
          </div>
          <div className={styles.topRight}>
            <div className={styles.range}>Daily <InlineIcon icon={ChevronDown} className={styles.caretIcon} /></div>
            <div>€ EUR <InlineIcon icon={ChevronDown} className={styles.caretIcon} /></div>
            <button className={styles.iconButton} type="button" aria-label="Information"><InfoCircle className={styles.inlineIcon} /></button>
          </div>
        </header>

        <div className={styles.tabbar}>
          <div className={styles.tabs}>
            <div className={styles.tab}>Overview</div>
            <div className={`${styles.tab} ${styles.active}`}>Conversion</div>
            <div className={styles.tab}>Consideration</div>
            <div className={styles.tab}>Awareness</div>
            <div className={styles.tab}>Loyalty</div>
          </div>
        </div>

        <section className={styles.main}>
          <div className={styles.evolution}>
            <span className={styles.evolutionTitle}>Evolution</span>
            <InlineIcon icon={SearchRefraction} />
            <label className={`${styles.selectPill} ${styles.selectDropdown}`}>
              <select
                value={granularity}
                onChange={(event) => setGranularity(event.target.value)}
                aria-label="Evolution granularity"
                className={styles.selectInput}
              >
                {GRANULARITY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <InlineIcon icon={ChevronDown} className={styles.caretIcon} />
            </label>
            <div className={styles.selectPill}>vs previous week</div>
            <div className={`${styles.selectPill} ${styles.muted}`}>vs same week previous year</div>
          </div>

          <div className={styles.tableShell} aria-label="DSP reporting table with horizontal scroll">
            <div className={styles.tableStage} style={{ width: TABLE_WIDTH }}>
              <table className={styles.reportTable}>
                <colgroup>
                  {COLUMN_WIDTHS.map((width, index) => (
                    <col key={`col-${index}`} style={{ width }} />
                  ))}
                </colgroup>
                <thead>
                  <tr>
                    <th className={styles.blank} colSpan={2}>Performance</th>
                    <th className={styles.groupObjective}>Objective</th>
                    <th className={styles.groupEfficiency} colSpan={2}>Efficiency</th>
                    <th className={styles.groupBusiness} colSpan={3}>Business Results</th>
                    <th className={styles.groupNewReach} colSpan={3}>New Reach</th>
                    <th className={styles.groupBrand} colSpan={3}>Brand Interest</th>
                    <th className={styles.groupDelivery} colSpan={3}>Delivery Quality</th>
                    <th className={styles.groupControl} colSpan={5}>Control</th>
                  </tr>
                  <tr>
                    <th />
                    <th className={`${styles.period} ${styles.left}`}>Period</th>
                    <th className={`${styles.objective} ${styles.left}`}>New Customers</th>
                    <th className={`${styles.efficiency} ${styles.left}`}>ROAS vs Target</th>
                    <th className={`${styles.efficiency} ${styles.right}`}>CPA NTB Conv.</th>
                    <th className={`${styles.business} ${styles.right}`}>Spend vs Assist Sales</th>
                    <th className={`${styles.business} ${styles.right}`}>% of Assist. sales</th>
                    <th className={`${styles.business} ${styles.right}`}>Units Sold</th>
                    <th className={`${styles.newReach} ${styles.right}`}>Avg Daily Reach</th>
                    <th className={`${styles.newReach} ${styles.right}`}>Weekly Reach Split</th>
                    <th className={`${styles.newReach} ${styles.right}`}>Weekly Cumulative vs Theoretical Reach</th>
                    <th className={`${styles.brand} ${styles.right}`}>ATC Clicks vs ATC Views</th>
                    <th className={`${styles.brand} ${styles.right}`}>DPV Clicks vs DPV Views</th>
                    <th className={`${styles.brand} ${styles.right}`}>Brand Search</th>
                    <th className={`${styles.delivery} ${styles.right}`}>eCPM</th>
                    <th className={`${styles.delivery} ${styles.right}`}>Impressions</th>
                    <th className={`${styles.delivery} ${styles.right}`}>VTR</th>
                    <th className={`${styles.control} ${styles.right}`}>Delivery Rate</th>
                    <th className={`${styles.control} ${styles.right}`}>% NTB cust.</th>
                    <th className={`${styles.control} ${styles.right}`}>DPVR</th>
                    <th className={`${styles.control} ${styles.right}`}>Post Click Purch</th>
                    <th className={`${styles.control} ${styles.right}`}>Halo</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const [period, customers, customerChange, roas, roasWidth, cpa, cpaChange, spend, sales, assist, units, unitsChange, atc, atcViews, dpv, dpvViews, brandSearch, ecpm, impressions, vtr, deliveryRate, ntb, dpvr, postClick, halo] = row;
                    const spendWidth = 30 + (index % 5) * 9;
                    const reachRow = scaledReachRows[index];
                    return (
                      <tr key={`${period}-${index}`}>
                        <td className={styles.zoom}><SearchRefraction className={styles.zoomIcon} /></td>
                        <td className={styles.left}>{period}</td>
                        <td className={styles.objective}><CustomerCell count={customers} change={customerChange} /></td>
                        <td className={styles.efficiency}><RoasCell value={roas} width={roasWidth} good={index === 10} /></td>
                        <td className={`${styles.efficiency} ${styles.right}`}><span>{cpa}</span> <Change value={cpaChange} /></td>
                        <td className={`${styles.business} ${styles.right}`}><SpendComparisonCell spend={spend} sales={sales} /></td>
                        <td className={styles.business}><BlueCell value={assist} width={spendWidth} /></td>
                        <td className={`${styles.business} ${styles.right}`}><span>{units}</span> <Change value={unitsChange} /></td>
                        <td className={styles.newReach}>
                          <ReachAdrCell value={reachRow.adrScaled} change={reachRow.adrChange} />
                        </td>
                        <td className={`${styles.newReach} ${styles.reachSplitColumn}`}>
                          <div className={isNonWeeklyView ? styles.weeklyHiddenContent : ""}>
                            <ReachSplitCell
                              cumulative={reachRow.weeklyCumulative}
                              retainers={reachRow.retainers}
                              newcomers={reachRow.newcomers}
                              churners={reachRow.churners}
                              showTooltip={!isNonWeeklyView}
                            />
                          </div>
                        </td>
                        <td className={styles.newReach}>
                          <div className={isNonWeeklyView ? styles.weeklyHiddenContent : ""}>
                            <ReachComparisonCell primary={reachRow.weeklyCumulative} secondary={reachRow.theoretical} />
                          </div>
                        </td>
                        <td className={styles.brand}><ComparisonVizCell primary={atc} secondary={atcViews} /></td>
                        <td className={styles.brand}><ComparisonVizCell primary={dpv} secondary={dpvViews} /></td>
                        <td className={`${styles.brand} ${styles.right}`}>{brandSearch}</td>
                        <td className={`${styles.delivery} ${styles.right}`}>{ecpm}</td>
                        <td className={styles.delivery}><TealCell value={impressions} width={Math.max(12, Math.min(96, Number.parseInt(impressions, 10) / 8))} /></td>
                        <td className={`${styles.delivery} ${styles.right}`}><span className={vtr >= 0 ? styles.positive : styles.negative}>{vtr}%</span></td>
                        <td className={`${styles.control} ${styles.center}`}><HeatCell value={deliveryRate} /></td>
                        <td className={`${styles.control} ${styles.center}`}><HeatCell value={ntb} /></td>
                        <td className={`${styles.control} ${styles.right}`}>{dpvr}</td>
                        <td className={`${styles.control} ${styles.right}`}>{postClick}</td>
                        <td className={`${styles.control} ${styles.right}`}>{halo}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {isNonWeeklyView && (
                <div className={styles.weeklyColumnOverlayLayer} aria-hidden="true">
                  {weeklyOverlayColumns.map((column) => (
                    <div
                      key={`overlay-${column.left}`}
                      className={styles.weeklyColumnOverlayFrame}
                      style={{
                        left: column.left,
                        width: column.width,
                        top: FIRST_HEADER_HEIGHT + SECOND_HEADER_HEIGHT,
                      }}
                    >
                      <WeeklyColumnOverlay label="reach KPI" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
