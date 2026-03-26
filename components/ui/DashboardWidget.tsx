"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// ─── Types ─────────────────────────────────────────────────────────────────────
type EventType = "call" | "appt" | "review" | "lead" | "remind";

interface FeedItem {
  id: number;
  type: EventType;
  text: string;
  time: string;
}

// ─── Count-up hook ─────────────────────────────────────────────────────────────
// Animates from 0 → target over `duration` ms, starting after `delay` ms.
// Pass skip=true (reduced motion) to jump straight to target.
function useCountUp(
  target: number,
  duration: number,
  delay: number,
  skip: boolean,
): number {
  const [value, setValue] = useState(skip ? target : 0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (skip) { setValue(target); return; }
    const tid = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        setValue(Math.round(target * eased));
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(tid); cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally runs once on mount — target/duration/delay are stable constants

  return value;
}

// ─── Event pool ────────────────────────────────────────────────────────────────
type PoolEntry = Omit<FeedItem, "id">;

const EVENT_POOL: PoolEntry[] = [
  { type: "call",   text: "Missed call \u2192 auto-replied",  time: "Just now" },
  { type: "appt",   text: "Appt. confirmed: 3:30 PM",        time: "Just now" },
  { type: "review", text: "Review request sent",              time: "Just now" },
  { type: "lead",   text: "New lead captured",                time: "Just now" },
  { type: "call",   text: "Missed call \u2192 auto-replied",  time: "Just now" },
  { type: "remind", text: "24hr reminder sent",               time: "Just now" },
  { type: "lead",   text: "New lead captured",                time: "Just now" },
  { type: "appt",   text: "Appt. confirmed: 11:00 AM",       time: "Just now" },
];

// ─── ID factory (module-level counter — never array index) ─────────────────────
let _id = 1000;
const nextId = () => ++_id;

// ─── Initial feed (no entrance animation on mount) ────────────────────────────
function makeInitialFeed(): FeedItem[] {
  return [
    { id: nextId(), type: "call",   text: "Missed call \u2192 auto-replied", time: "Just now"   },
    { id: nextId(), type: "appt",   text: "Appt. confirmed: 2:00 PM",        time: "2 min ago"  },
    { id: nextId(), type: "review", text: "Review request sent",              time: "8 min ago"  },
    { id: nextId(), type: "lead",   text: "New lead captured",                time: "14 min ago" },
    { id: nextId(), type: "remind", text: "24hr reminder sent",               time: "21 min ago" },
  ];
}

// ─── Icons — minimal inline SVGs, no library dependency ────────────────────────
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 2.5a.5.5 0 01.5-.5h1.8a.5.5 0 01.49.4l.46 2.3a.5.5 0 01-.14.48L4 6.18a7.5 7.5 0 003.82 3.82l1.02-1.12a.5.5 0 01.48-.14l2.3.46a.5.5 0 01.4.49V11.5a.5.5 0 01-.5.5C5.22 12 2 8.78 2 5V2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 5.5h11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 1v2.5M9.5 1v2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1.5l1.4 2.84 3.13.46-2.27 2.2.54 3.12L7 8.62l-2.8 1.5.54-3.12-2.27-2.2 3.13-.46L7 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 12.5a4.5 4.5 0 019 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1.5A3 3 0 004 4.5V8L3 9.5h8L10 8V4.5A3 3 0 007 1.5z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"
      />
      <path d="M5.5 9.5a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

// ─── Event visual config ───────────────────────────────────────────────────────
const EVENTS: Record<EventType, {
  Icon: () => React.ReactElement;
  iconBg: string;
  iconColor: string;
}> = {
  call:   { Icon: PhoneIcon,    iconBg: "rgba(42,122,111,.10)",  iconColor: "#2A7A6F" },
  appt:   { Icon: CalendarIcon, iconBg: "rgba(26,58,92,.10)",    iconColor: "#1A3A5C" },
  review: { Icon: StarIcon,     iconBg: "rgba(245,158,11,.10)",  iconColor: "#F59E0B" },
  lead:   { Icon: UserIcon,     iconBg: "rgba(34,197,94,.10)",   iconColor: "#22C55E" },
  remind: { Icon: BellIcon,     iconBg: "rgba(124,58,237,.10)",  iconColor: "#7C3AED" },
};

// ─── Mount-time formatter ──────────────────────────────────────────────────────
function formatMountTime(): string {
  const d = new Date();
  const h = d.getHours() % 12 || 12;
  const m = d.getMinutes().toString().padStart(2, "0");
  return `Today, ${h}:${m} ${d.getHours() >= 12 ? "PM" : "AM"}`;
}

// ─── Shared style constants ────────────────────────────────────────────────────
const metricCard: CSSProperties = {
  background: "#F8FAFC",
  border: "1px solid rgba(26,58,92,.08)",
  borderRadius: "10px",
  padding: "12px",
};
const metricLabel: CSSProperties = {
  fontSize: "10px", fontWeight: 500, color: "#6B7280", margin: 0, lineHeight: 1.3,
};
const metricValue: CSSProperties = {
  fontSize: "24px", fontWeight: 700, color: "#1A3A5C", margin: "3px 0 2px", lineHeight: 1,
};
const metricSub: CSSProperties = {
  fontSize: "10px", fontWeight: 400, margin: 0,
};

// ─── Component ─────────────────────────────────────────────────────────────────
export default function DashboardWidget() {
  const prefersReducedMotion = !!useReducedMotion();

  // Static mount time — formatted once, never updated
  const [mountTime] = useState<string>(() => formatMountTime());

  // Feed state
  const [feedItems, setFeedItems] = useState<FeedItem[]>(() => makeInitialFeed());

  // Metric counts: animated base + live increments
  const leadsBase   = useCountUp(14, 1800,   0, prefersReducedMotion);
  const [leadsPlus, setLeadsPlus] = useState(0);

  const callsBase   = useCountUp(9,  1800, 400, prefersReducedMotion);
  const [callsPlus, setCallsPlus] = useState(0);

  const reviewsBase = useCountUp(6,  1800, 800, prefersReducedMotion);

  // Live update loop — cleared on unmount, skipped on reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;
    let tid: ReturnType<typeof setTimeout>;
    let poolIdx = 0;

    const fire = () => {
      const entry = EVENT_POOL[poolIdx % EVENT_POOL.length];
      poolIdx++;
      setFeedItems(prev => [{ id: nextId(), ...entry }, ...prev].slice(0, 5));
      if (entry.type === "lead") setLeadsPlus(c => c + 1);
      if (entry.type === "call") setCallsPlus(c => c + 1);
    };

    const schedule = () => {
      tid = setTimeout(() => { fire(); schedule(); }, 7000 + Math.random() * 4000);
    };

    // 8-second initial delay — visitor reads headline before first update fires
    tid = setTimeout(() => { fire(); schedule(); }, 8000);

    return () => clearTimeout(tid);
  }, [prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.92, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
      style={{
        width: "100%",
        maxWidth: "520px",
        background: "#fff",
        border: "1px solid rgba(26,58,92,.12)",
        borderRadius: "16px",
        boxShadow: "0 2px 16px rgba(26,58,92,.05), 0 1px 3px rgba(26,58,92,.04)",
        overflow: "hidden",
      }}
    >
      {/* Top gradient strip — brand anchor */}
      <div style={{ height: "4px", background: "linear-gradient(90deg,#1A3A5C 0%,#2A7A6F 100%)" }} />

      {/* Header bar */}
      <div style={{
        background: "#F8FAFC",
        borderBottom: "1px solid rgba(26,58,92,.08)",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Pulse dot — CSS animation via Framer Motion */}
          <div style={{ position: "relative", width: "8px", height: "8px", flexShrink: 0 }}>
            <motion.div
              style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22C55E" }}
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span style={{ fontSize: "12px", fontWeight: 500, color: "#1A3A5C" }}>
            Digital Doorstep — Live
          </span>
        </div>
        <span style={{ fontSize: "12px", fontWeight: 400, color: "#6B7280" }}>{mountTime}</span>
      </div>

      {/* Metric cards */}
      <div style={{
        padding: "16px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
        background: "white",
        borderBottom: "1px solid rgba(26,58,92,.07)",
      }}>
        <div style={metricCard}>
          <p style={metricLabel}>Leads Today</p>
          <p style={metricValue}>{leadsBase + leadsPlus}</p>
          <p style={{ ...metricSub, color: "#22C55E" }}>↑ 3 vs. yesterday</p>
        </div>
        <div style={metricCard}>
          <p style={metricLabel}>Auto-Replied</p>
          <p style={metricValue}>{callsBase + callsPlus}</p>
          <p style={{ ...metricSub, color: "#22C55E" }}>0 missed</p>
        </div>
        <div style={metricCard}>
          <p style={metricLabel}>Review Requests</p>
          <p style={metricValue}>{reviewsBase}</p>
          <p style={{ ...metricSub, color: "#F59E0B" }}>&#9733; 4.9 avg</p>
        </div>
      </div>

      {/* Activity feed */}
      <div style={{ padding: "0 20px 16px", background: "white" }}>
        {/* Feed header */}
        <div style={{
          padding: "14px 0 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{
            fontSize: "11px", fontWeight: 600, color: "#1A3A5C",
            letterSpacing: "0.05em", textTransform: "uppercase",
          }}>
            Recent Activity
          </span>
          <span style={{
            fontSize: "10px", fontWeight: 500, color: "#2A7A6F",
            background: "rgba(42,122,111,.10)", borderRadius: "999px", padding: "2px 8px",
          }}>
            Live
          </span>
        </div>

        {/* Feed list — fixed 220px height, fade overlay instead of hard clip */}
        <div
          style={{ position: "relative", maxHeight: "220px", overflow: "hidden" }}
          aria-live="polite"
          aria-label="Recent automation activity"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {feedItems.map((item, idx) => {
              const { Icon, iconBg, iconColor } = EVENTS[item.type];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "8px 0",
                    borderBottom: idx < feedItems.length - 1
                      ? "1px solid rgba(26,58,92,.05)"
                      : "none",
                  }}
                >
                  {/* Event icon */}
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: iconBg, color: iconColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon />
                  </div>
                  {/* Event text */}
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "#1A3A5C", margin: 0, lineHeight: 1.4 }}>
                      {item.text}
                    </p>
                    <p style={{ fontSize: "11px", fontWeight: 400, color: "#9CA3AF", margin: 0 }}>
                      {item.time}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {/* Fade overlay — graceful bottom fade instead of hard clip */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "40px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>

      {/* Widget footer */}
      <div style={{
        background: "#F8FAFC",
        borderTop: "1px solid rgba(26,58,92,.08)",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "11px", fontWeight: 400, color: "#9CA3AF" }}>
          Powered by Digital Doorstep
        </span>
        <span style={{
          fontSize: "10px", fontWeight: 500, color: "#2A7A6F",
          background: "rgba(42,122,111,.08)", borderRadius: "999px", padding: "3px 10px",
        }}>
          Automating for you 24/7
        </span>
      </div>
    </motion.div>
  );
}
