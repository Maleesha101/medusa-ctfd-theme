# MEDUSA Brand & Design System

## Source of truth
This document formalizes the visual language extracted from `KODEGAS/Medusa-2.0`. The original interface uses a cyber-dark visual system centered on neon green, neon blue and cyber purple.

## Brand character
MEDUSA should feel like a controlled cyber-operations environment: high-pressure but professional, technical without becoming noisy, dark-first, information-dense and competition-focused. Avoid generic hacker-movie styling, excessive glitch effects and decoration that competes with challenge data.

## Color tokens
The original application defines its primary palette in HSL. The CTFd theme exposes equivalent semantic CSS tokens.

| Token | HSL source | Intended use |
|---|---|---|
| `--medusa-bg` | 220 100% 3% | page background |
| `--medusa-surface` | 220 90% 5% | primary panels |
| `--medusa-surface-elevated` | 220 90% 7% | cards/elevated surfaces |
| `--medusa-primary` | 120 100% 55% | primary neon green |
| `--medusa-secondary` | 185 100% 50% | neon blue |
| `--medusa-accent` | 270 70% 40% | cyber purple |
| `--medusa-success` | 120 100% 55% | solved/success |
| `--medusa-warning` | 45 100% 53% | warnings |
| `--medusa-danger` | 0 84% 60% | destructive/error |
| `--medusa-text` | 180 100% 95% | primary text |
| `--medusa-text-muted` | 180 30% 65% | secondary text |
| `--medusa-border` | 220 50% 20% | borders/dividers |

### Color rules
Green communicates primary action, solved state and MEDUSA identity. Blue communicates secondary action and information. Purple is an accent. Red is reserved for errors/security alerts. Amber is reserved for warnings. Never use neon colors for long paragraphs and never rely on glow for readability.

## Typography
The source brand uses technical monospace treatment with strong display typography. Theme defaults: **Inter** for body, **Space Grotesk** for headings, and **JetBrains Mono** for flags, tokens, endpoints, hostnames, challenge identifiers and telemetry.

## Surfaces
Hierarchy: page background -> primary surface -> elevated card -> highlighted/active surface. Use subtle borders and restrained shadows. Cyber glows remain accents so challenge content stays dominant.

## Borders and radii
Panels: 16px. Cards: 14px. Compact controls: 10px. Status badges: fully rounded. Borders communicate grouping and state rather than decorating every element.

## Buttons
Primary actions use the MEDUSA green/blue identity with strong contrast and visible focus. Secondary actions use outlined/subdued surfaces. Danger styling is reserved for destructive or security-sensitive operations.

## Status indicators
Status must not rely on color alone. Combine color with text and, where useful, an icon. Examples: LIVE, PAUSED, SOLVED, LOCKED, OFFLINE, WARNING, ERROR.

## Cards
Challenge/dashboard cards use an elevated dark surface, subtle border, concise metadata, clear title hierarchy, visible state and predictable action target. Avoid decorative graphics that push challenge information below the fold.

## Motion
The source uses pulse, float, particle and reveal animations. In CTFd, motion communicates state changes only, should remain short, must respect `prefers-reduced-motion`, and must never obscure critical information. Recommended transitions are approximately 150–300ms.

## Glow and gradients
Use neon glows and cyber gradients for active navigation, primary actions, selected challenges, live status and landing sections. Do not apply glow to every component.

## Iconography
Use a consistent technical icon family. Icon-only actions require accessible labels.

## Layout and density
MEDUSA is an operations-oriented competition platform. Desktop should be information-dense; tablet should preserve hierarchy with stacked cards; mobile should prioritize navigation, challenge status, submission and scoreboard information.

## Accessibility
Keyboard-accessible controls, visible focus, semantic HTML, sufficient contrast, no color-only status communication, reduced-motion support, readable font sizes, usable touch targets and accessible form errors are mandatory.

## Component rules
Navigation uses a dark surface and restrained border. Challenge cards expose state/category/points/solve status. Scoreboards optimize for rank/team/score scanning. Forms require labels, focus and explicit errors. Alerts communicate severity through semantics plus visual treatment.

## CTFd adaptation decisions
These are intentional adaptations, not claims that the original React application implemented them exactly: React components become Jinja templates; source typography is retained; HSL colors become semantic tokens; motion is reduced for competition usability; challenge information outranks decorative effects; semantic status tokens are explicit; theme code consumes CTFd/plugin data rather than hard-coded competition state.

## Token governance
Reusable visual values belong in `assets/scss/_tokens.scss` or component token files. Avoid one-off colors where semantic tokens exist. Brand-token changes must update this document and receive visual review in the PR.

## Reference
Original visual source: `KODEGAS/Medusa-2.0`. Issue: #8.