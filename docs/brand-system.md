# MEDUSA Brand System

## Purpose

The MEDUSA CTF theme uses a dark, technical competition interface with high-contrast cyan primary actions, violet secondary accents, monospace technical metadata, compact status indicators, and restrained motion.

The existing theme tokens are the implementation source of truth. Components should consume these tokens instead of introducing page-specific colors.

## Color roles

| Role | Token | Usage |
|---|---|---|
| Primary | `--medusa-primary` | primary actions, active navigation, score emphasis |
| Secondary | `--medusa-secondary` | links, secondary actions, category accents |
| Success | `--medusa-success` | solved/healthy/live states |
| Warning | `--medusa-warning` | caution and first-blood indicators |
| Danger | `--medusa-danger` | destructive/error states |
| Text | `--medusa-text` | primary readable content |
| Muted text | `--medusa-text-muted` | supporting metadata |
| Surface | `--medusa-surface` | cards and panels |
| Elevated surface | `--medusa-surface-elevated` | controls and raised elements |
| Border | `--medusa-border` | structural separation |

## Typography

- Use the normal UI font for headings and readable content.
- Use the MEDUSA monospace token for scores, ranks, status labels, technical metadata and other competition telemetry.
- Do not use monospace for long-form prose.

## Components

### Cards and panels

Cards are dark, bordered surfaces with consistent radius and spacing. Avoid excessive nested containers.

### Buttons

Primary actions use the primary token and must retain visible focus states. Destructive actions must not rely on color alone.

### Status indicators

Status should communicate both visually and textually where practical. A colored dot is supplementary, not the only state representation.

### Challenge cards

Challenge cards prioritize category, title, points and solve state. Search/filter controls remain compact and keyboard accessible.

### Scoreboard

Ranking is a data presentation surface. Scores and rank use monospace emphasis, while team names remain normal UI text.

## Accessibility

- Maintain readable contrast for text and controls.
- Every interactive control must have an accessible name.
- Never communicate critical state through color alone.
- Preserve visible keyboard focus.
- Respect reduced-motion preferences for non-essential animation.

## Motion

Motion is restrained. Use transitions for state changes rather than continuous decorative animation. Competition data updates must not create distracting movement.

## Usage rule

If a component needs a new visual value, first determine whether an existing token expresses the same semantic role. Add a new token only when the role is genuinely distinct and document it here.

## Current implementation tokens

See `assets/scss/_tokens.scss` for the authoritative values.
