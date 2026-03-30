"use client";

import React from "react";
import { motion } from "framer-motion";

interface CourthouseIllustrationProps {
  className?: string;
}

export default function CourthouseIllustration({ className }: CourthouseIllustrationProps) {
  // Clock tick marks: 12 positions around a circle
  const clockCenter = { x: 380, y: 225 };
  const clockR = 46;
  const tickMarks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const isMajor = i % 3 === 0;
    const innerR = isMajor ? clockR - 9 : clockR - 6;
    const outerR = clockR - 2;
    return {
      x1: clockCenter.x + innerR * Math.cos(angle),
      y1: clockCenter.y + innerR * Math.sin(angle),
      x2: clockCenter.x + outerR * Math.cos(angle),
      y2: clockCenter.y + outerR * Math.sin(angle),
      isMajor,
    };
  });

  // Clock hands at ~10:10
  const hourAngle = (10 * 30 + 10 * 0.5 - 90) * (Math.PI / 180);
  const minAngle = (10 * 6 - 90) * (Math.PI / 180);
  const hourLen = 24;
  const minLen = 34;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeIn", delay: 0.3 }}
      style={{ "--courthouse-opacity": "0.9" } as React.CSSProperties}
    >
      <svg
        viewBox="0 0 800 900"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ opacity: "var(--courthouse-opacity, 0.9)" }}
      >
        <defs>
          {/* Watercolor edge filter */}
          <filter id="wc" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.055"
              numOctaves="4"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="0.9" />
          </filter>

          {/* Sketch texture filter */}
          <filter id="sk" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025 0.05"
              numOctaves="3"
              seed="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Stone gradient for main building body */}
          <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EDE5D0" />
            <stop offset="100%" stopColor="#D8CDB5" />
          </linearGradient>

          {/* Tower gradient */}
          <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8DFC8" />
            <stop offset="100%" stopColor="#D5C9AE" />
          </linearGradient>

          {/* Mansard gradient */}
          <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8E7A62" />
            <stop offset="100%" stopColor="#7A6750" />
          </linearGradient>

          {/* Right-side fade gradient */}
          <linearGradient id="rfg" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="58%" stopColor="white" stopOpacity="1" />
            <stop offset="78%" stopColor="white" stopOpacity="0.45" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Right-side fade mask */}
          <mask id="rfm">
            <rect x="0" y="0" width="800" height="900" fill="url(#rfg)" />
          </mask>
        </defs>

        {/* All illustration layers wrapped in fade mask */}
        <g mask="url(#rfm)">

          {/* 1. Ground shadow */}
          <ellipse
            cx="380"
            cy="845"
            rx="285"
            ry="22"
            fill="#9E8E73"
            opacity="0.18"
            filter="url(#wc)"
          />

          {/* 2. Main building body */}
          <rect
            x="100"
            y="475"
            width="560"
            height="365"
            fill="url(#sg)"
            opacity="0.92"
            filter="url(#wc)"
          />

          {/* 3. Left shadow wash */}
          <rect
            x="100"
            y="475"
            width="28"
            height="365"
            fill="#C4B08A"
            opacity="0.18"
          />

          {/* Right shadow wash */}
          <rect
            x="632"
            y="475"
            width="28"
            height="365"
            fill="#B09878"
            opacity="0.14"
          />

          {/* 4. Main cornice strip */}
          <rect
            x="85"
            y="456"
            width="590"
            height="20"
            fill="#E3D9C2"
            opacity="0.95"
          />
          <rect
            x="85"
            y="456"
            width="590"
            height="4"
            fill="#C4AE8A"
            opacity="0.6"
          />

          {/* Mansard bottom shadow strip */}
          <rect
            x="90"
            y="453"
            width="580"
            height="8"
            fill="#9E8878"
            opacity="0.25"
          />

          {/* 5. Mansard roof body */}
          <rect
            x="90"
            y="388"
            width="580"
            height="70"
            fill="url(#mg)"
            opacity="0.9"
            filter="url(#wc)"
          />

          {/* Mansard texture overlay: subtle horizontal lines */}
          <rect
            x="90"
            y="388"
            width="580"
            height="70"
            fill="#6A5840"
            opacity="0.12"
          />

          {/* Mansard top cornice */}
          <rect
            x="82"
            y="378"
            width="596"
            height="14"
            fill="#C4AE8A"
            opacity="0.9"
          />
          <rect
            x="82"
            y="378"
            width="596"
            height="3"
            fill="#D8CDB5"
            opacity="0.8"
          />

          {/* 6. Dormer windows in mansard */}
          {/* Dormer centers: 135, 225, 535, 625 — skipping center for tower */}
          {[135, 225, 535, 625].map((cx) => (
            <g key={`dormer-${cx}`}>
              {/* Dormer body */}
              <rect
                x={cx - 17}
                y="393"
                width="34"
                height="28"
                fill="#E3D9C2"
                opacity="0.85"
              />
              {/* Dormer arch top */}
              <ellipse
                cx={cx}
                cy="393"
                rx="17"
                ry="10"
                fill="#E3D9C2"
                opacity="0.85"
              />
              {/* Dormer window glass */}
              <rect
                x={cx - 10}
                y="398"
                width="20"
                height="18"
                fill="#8EA8C0"
                opacity="0.4"
              />
              <ellipse
                cx={cx}
                cy="398"
                rx="10"
                ry="6"
                fill="#8EA8C0"
                opacity="0.4"
              />
              {/* Dormer trim */}
              <rect
                x={cx - 17}
                y="418"
                width="34"
                height="3"
                fill="#B8A07A"
                opacity="0.5"
              />
            </g>
          ))}

          {/* 7. Second-floor windows */}
          {/* Centers: 155, 248, 512, 605 — skipping center for tower */}
          {[155, 248, 512, 605].map((cx) => (
            <g key={`win2-${cx}`}>
              <rect
                x={cx - 22}
                y="483"
                width="44"
                height="52"
                fill="#EDE5D0"
                opacity="0.9"
              />
              {/* Window glass pane */}
              <rect
                x={cx - 18}
                y="487"
                width="36"
                height="44"
                fill="#7A9BAF"
                opacity="0.42"
              />
              {/* Window muntins */}
              <line
                x1={cx}
                y1="487"
                x2={cx}
                y2="531"
                stroke="#D8CDB5"
                strokeWidth="1.2"
                opacity="0.7"
              />
              <line
                x1={cx - 18}
                y1="509"
                x2={cx + 18}
                y2="509"
                stroke="#D8CDB5"
                strokeWidth="1.2"
                opacity="0.7"
              />
              {/* Window frame */}
              <rect
                x={cx - 22}
                y="483"
                width="44"
                height="52"
                fill="none"
                stroke="#B8A07A"
                strokeWidth="1.5"
                opacity="0.6"
              />
            </g>
          ))}

          {/* 8. First-floor arched windows */}
          {/* Centers: 155, 248, 512, 605 */}
          {[155, 248, 512, 605].map((cx) => (
            <g key={`win1-${cx}`}>
              {/* Window body rect */}
              <rect
                x={cx - 26}
                y="620"
                width="52"
                height="95"
                fill="#EDE5D0"
                opacity="0.9"
              />
              {/* Arch top */}
              <ellipse
                cx={cx}
                cy="620"
                rx="26"
                ry="22"
                fill="#EDE5D0"
                opacity="0.9"
              />
              {/* Glass body */}
              <rect
                x={cx - 21}
                y="624"
                width="42"
                height="88"
                fill="#8EA8C0"
                opacity="0.42"
              />
              {/* Glass arch */}
              <ellipse
                cx={cx}
                cy="624"
                rx="21"
                ry="18"
                fill="#8EA8C0"
                opacity="0.42"
              />
              {/* Window muntins */}
              <line
                x1={cx}
                y1="620"
                x2={cx}
                y2="715"
                stroke="#D8CDB5"
                strokeWidth="1.2"
                opacity="0.65"
              />
              <line
                x1={cx - 21}
                y1="668"
                x2={cx + 21}
                y2="668"
                stroke="#D8CDB5"
                strokeWidth="1.2"
                opacity="0.65"
              />
              {/* Frame border */}
              <rect
                x={cx - 26}
                y="620"
                width="52"
                height="95"
                fill="none"
                stroke="#B8A07A"
                strokeWidth="1.5"
                opacity="0.55"
              />
              <ellipse
                cx={cx}
                cy="620"
                rx="26"
                ry="22"
                fill="none"
                stroke="#B8A07A"
                strokeWidth="1.5"
                opacity="0.55"
              />
              {/* Sill */}
              <rect
                x={cx - 29}
                y="712"
                width="58"
                height="6"
                fill="#C4AE8A"
                opacity="0.55"
              />
            </g>
          ))}

          {/* 9. Central entrance */}
          {/* Grand arch + door */}
          {/* Arch surround */}
          <rect
            x="335"
            y="622"
            width="90"
            height="218"
            fill="#EDE5D0"
            opacity="0.95"
          />
          <ellipse
            cx="380"
            cy="622"
            rx="45"
            ry="38"
            fill="#EDE5D0"
            opacity="0.95"
          />
          {/* Door opening */}
          <rect
            x="350"
            y="692"
            width="60"
            height="148"
            fill="#8EA8C0"
            opacity="0.35"
          />
          {/* Upper arch glass */}
          <rect
            x="350"
            y="638"
            width="60"
            height="58"
            fill="#8EA8C0"
            opacity="0.38"
          />
          <ellipse
            cx="380"
            cy="638"
            rx="30"
            ry="25"
            fill="#8EA8C0"
            opacity="0.38"
          />
          {/* Door panels */}
          <rect
            x="350"
            y="692"
            width="28"
            height="148"
            fill="#C4AE8A"
            opacity="0.5"
          />
          <rect
            x="382"
            y="692"
            width="28"
            height="148"
            fill="#C4AE8A"
            opacity="0.5"
          />
          {/* Door panel details */}
          <rect x="353" y="698" width="22" height="30" fill="#B8A07A" opacity="0.3" />
          <rect x="353" y="734" width="22" height="30" fill="#B8A07A" opacity="0.3" />
          <rect x="353" y="770" width="22" height="30" fill="#B8A07A" opacity="0.3" />
          <rect x="385" y="698" width="22" height="30" fill="#B8A07A" opacity="0.3" />
          <rect x="385" y="734" width="22" height="30" fill="#B8A07A" opacity="0.3" />
          <rect x="385" y="770" width="22" height="30" fill="#B8A07A" opacity="0.3" />
          {/* Door knobs */}
          <circle cx="376" cy="768" r="3" fill="#C4AE8A" opacity="0.7" />
          <circle cx="384" cy="768" r="3" fill="#C4AE8A" opacity="0.7" />
          {/* Entrance arch frame */}
          <ellipse
            cx="380"
            cy="622"
            rx="45"
            ry="38"
            fill="none"
            stroke="#B8A07A"
            strokeWidth="2"
            opacity="0.55"
          />
          <rect
            x="335"
            y="622"
            width="90"
            height="218"
            fill="none"
            stroke="#B8A07A"
            strokeWidth="2"
            opacity="0.55"
          />
          {/* Entrance keystone */}
          <rect x="373" y="584" width="14" height="22" fill="#D8CDB5" opacity="0.7" />

          {/* 10. Steps */}
          <rect x="255" y="840" width="250" height="7" fill="#D8CDB5" opacity="0.85" />
          <rect x="265" y="847" width="230" height="7" fill="#C4AE8A" opacity="0.75" />
          <rect x="275" y="854" width="210" height="7" fill="#B8A07A" opacity="0.65" />
          {/* Step highlights */}
          <rect x="255" y="840" width="250" height="2" fill="#EDE5D0" opacity="0.5" />
          <rect x="265" y="847" width="230" height="2" fill="#E3D9C2" opacity="0.4" />
          <rect x="275" y="854" width="210" height="2" fill="#D8CDB5" opacity="0.35" />

          {/* 11. Corner quoins — left side */}
          {[490, 535, 580, 625, 670, 715, 760, 805].map((y, i) => (
            <g key={`lq-${i}`}>
              {i % 2 === 0 ? (
                <rect x="100" y={y - 840 + 475} width="18" height="12" fill="#D8CDB5" opacity="0.55" />
              ) : (
                <rect x="100" y={y - 840 + 475} width="12" height="12" fill="#C4AE8A" opacity="0.45" />
              )}
            </g>
          ))}
          {/* Corner quoins — right side */}
          {[490, 535, 580, 625, 670, 715, 760, 805].map((y, i) => (
            <g key={`rq-${i}`}>
              {i % 2 === 0 ? (
                <rect x="642" y={y - 840 + 475} width="18" height="12" fill="#D8CDB5" opacity="0.55" />
              ) : (
                <rect x="648" y={y - 840 + 475} width="12" height="12" fill="#C4AE8A" opacity="0.45" />
              )}
            </g>
          ))}

          {/* 12. Tower base */}
          <rect
            x="312"
            y="310"
            width="136"
            height="80"
            fill="url(#tg)"
            opacity="0.95"
            filter="url(#wc)"
          />
          {/* Tower base side shadows */}
          <rect x="312" y="310" width="10" height="80" fill="#B09878" opacity="0.2" />
          <rect x="438" y="310" width="10" height="80" fill="#9E8878" opacity="0.15" />
          {/* Tower base cornice */}
          <rect x="305" y="306" width="150" height="10" fill="#C4AE8A" opacity="0.85" />
          <rect x="305" y="306" width="150" height="3" fill="#EDE5D0" opacity="0.6" />

          {/* 13. Tower shaft */}
          <rect
            x="320"
            y="190"
            width="120"
            height="125"
            fill="url(#tg)"
            opacity="0.95"
            filter="url(#wc)"
          />
          {/* Tower shaft side shadows */}
          <rect x="320" y="190" width="10" height="125" fill="#B09878" opacity="0.22" />
          <rect x="430" y="190" width="10" height="125" fill="#9E8878" opacity="0.16" />

          {/* Tower shaft small windows (two sides) */}
          {/* Left tower window */}
          <rect x="330" y="250" width="22" height="32" fill="#EDE5D0" opacity="0.9" />
          <ellipse cx="341" cy="250" rx="11" ry="9" fill="#EDE5D0" opacity="0.9" />
          <rect x="334" y="253" width="14" height="26" fill="#7A9BAF" opacity="0.4" />
          <ellipse cx="341" cy="253" rx="7" ry="6" fill="#7A9BAF" opacity="0.4" />

          {/* Right tower window */}
          <rect x="398" y="250" width="22" height="32" fill="#EDE5D0" opacity="0.9" />
          <ellipse cx="409" cy="250" rx="11" ry="9" fill="#EDE5D0" opacity="0.9" />
          <rect x="402" y="253" width="14" height="26" fill="#7A9BAF" opacity="0.4" />
          <ellipse cx="409" cy="253" rx="7" ry="6" fill="#7A9BAF" opacity="0.4" />

          {/* Tower shaft cornice (below clock) */}
          <rect x="313" y="186" width="134" height="9" fill="#C4AE8A" opacity="0.85" />
          <rect x="313" y="186" width="134" height="2.5" fill="#EDE5D0" opacity="0.6" />

          {/* 14. Clock face */}
          {/* Clock housing */}
          <circle cx="380" cy="225" r="54" fill="#D8CDB5" opacity="0.75" />
          {/* Clock face dial */}
          <circle cx="380" cy="225" r="48" fill="#F2E8D0" opacity="0.92" />
          {/* Brand green ring */}
          <circle
            cx="380"
            cy="225"
            r="46"
            fill="none"
            stroke="#2D8659"
            strokeWidth="3"
            opacity="0.85"
          />
          {/* Inner ring detail */}
          <circle cx="380" cy="225" r="42" fill="none" stroke="#C4AE8A" strokeWidth="1" opacity="0.5" />
          {/* Tick marks */}
          {tickMarks.map((tick, i) => (
            <line
              key={`tick-${i}`}
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
              stroke="#7A6750"
              strokeWidth={tick.isMajor ? 2.5 : 1.5}
              opacity={tick.isMajor ? 0.85 : 0.6}
            />
          ))}
          {/* Hour hand */}
          <line
            x1={clockCenter.x}
            y1={clockCenter.y}
            x2={clockCenter.x + hourLen * Math.cos(hourAngle)}
            y2={clockCenter.y + hourLen * Math.sin(hourAngle)}
            stroke="#5A4832"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Minute hand */}
          <line
            x1={clockCenter.x}
            y1={clockCenter.y}
            x2={clockCenter.x + minLen * Math.cos(minAngle)}
            y2={clockCenter.y + minLen * Math.sin(minAngle)}
            stroke="#5A4832"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Center pin */}
          <circle cx="380" cy="225" r="4" fill="#5A4832" opacity="0.9" />

          {/* 15. Cupola */}
          <rect
            x="335"
            y="108"
            width="90"
            height="84"
            fill="url(#tg)"
            opacity="0.9"
            filter="url(#sk)"
          />
          {/* Cupola side shadows */}
          <rect x="335" y="108" width="8" height="84" fill="#B09878" opacity="0.2" />
          <rect x="417" y="108" width="8" height="84" fill="#9E8878" opacity="0.15" />
          {/* Cupola arched openings — 3 across */}
          {[355, 380, 405].map((cx) => (
            <g key={`cupola-${cx}`}>
              <rect x={cx - 11} y="122" width="22" height="42" fill="#C4B08A" opacity="0.3" />
              <ellipse cx={cx} cy="122" rx="11" ry="10" fill="#C4B08A" opacity="0.3" />
              {/* Opening frame */}
              <rect
                x={cx - 11}
                y="122"
                width="22"
                height="42"
                fill="none"
                stroke="#B8A07A"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <ellipse
                cx={cx}
                cy="122"
                rx="11"
                ry="10"
                fill="none"
                stroke="#B8A07A"
                strokeWidth="1.2"
                opacity="0.5"
              />
            </g>
          ))}
          {/* Cupola columns (pilasters) */}
          <rect x="335" y="110" width="5" height="78" fill="#D8CDB5" opacity="0.45" />
          <rect x="343" y="110" width="4" height="78" fill="#D8CDB5" opacity="0.3" />
          <rect x="418" y="110" width="4" height="78" fill="#D8CDB5" opacity="0.3" />
          <rect x="420" y="110" width="5" height="78" fill="#C4AE8A" opacity="0.35" />

          {/* 16. Cupola cornice */}
          <rect x="328" y="100" width="104" height="12" fill="#C4AE8A" opacity="0.9" />
          <rect x="328" y="100" width="104" height="3" fill="#EDE5D0" opacity="0.7" />
          <rect x="328" y="109" width="104" height="3" fill="#9E8878" opacity="0.3" />

          {/* 17. Spire */}
          {/* Main spire triangle */}
          <path
            d="M380,18 L330,104 L430,104 Z"
            fill="#8E7A62"
            opacity="0.88"
            filter="url(#sk)"
          />
          {/* Spire left shadow */}
          <path
            d="M380,18 L330,104 L365,104 Z"
            fill="#6A5840"
            opacity="0.35"
          />
          {/* Spire right highlight */}
          <path
            d="M380,18 L405,104 L430,104 Z"
            fill="#C4AE8A"
            opacity="0.2"
          />
          {/* Spire center ridge line */}
          <line x1="380" y1="18" x2="380" y2="104" stroke="#D8CDB5" strokeWidth="1" opacity="0.3" />

          {/* 18. Spire finial */}
          {/* Vertical finial line */}
          <line x1="380" y1="8" x2="380" y2="20" stroke="#2D8659" strokeWidth="2" opacity="0.9" />
          {/* Finial ball */}
          <circle cx="380" cy="14" r="6" fill="#2D8659" opacity="0.9" />
          <circle cx="377" cy="11" r="2" fill="#4A9E79" opacity="0.6" />

          {/* 19. Subtle watercolor wash overlay on whole building */}
          <rect
            x="100"
            y="388"
            width="560"
            height="452"
            fill="#F2E8D0"
            opacity="0.06"
          />

        </g>
      </svg>
    </motion.div>
  );
}
