# MEDUSA CTFd theme

This repository is the MEDUSA custom theme layer for CTFd. It is intentionally separate from the upstream CTFd core and is aligned to the current supported CTFd release.

## Pinned CTFd version

- CTFd: 3.8.8
- Source: https://github.com/CTFd/CTFd/tree/3.8.8

## Design objective

The theme is not a recolor of the default CTFd UI. It implements a cyber operations dashboard aesthetic with:

- tactical dark surfaces
- focused typography and density
- status-aware challenge cards
- professional navigation and board patterns
- a stronger focus on competition operations

## Expected CTFd integration model

The theme is placed in the CTFd theme layer and uses Vite asset bundling, as in the upstream CTFd theme structure. MEDUSA-specific logic belongs in plugins and services, not inside the theme itself.

## Local development

```bash
npm install
npm run build
```

## Repository layout

```text
medusa-ctfd-theme/
├── assets/
│   ├── js/
│   └── scss/
├── templates/
├── static/
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```
