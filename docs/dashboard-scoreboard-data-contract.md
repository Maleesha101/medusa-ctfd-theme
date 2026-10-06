# Dashboard and Scoreboard Data Contract

Issue #6 intentionally keeps ranking and team state server-owned by CTFd.

## Dashboard

The template accepts optional context values:
- `team`: team name, affiliation/university, members and score
- `score`: current team score
- `rank`: current rank
- `solves`: recent solve records
- `solved_count`: precomputed solve count
- `total_challenges`: event challenge count
- `notifications`: announcement records

Missing optional values degrade to safe empty states rather than requiring a second client API.

## Scoreboard

The scoreboard consumes the server-rendered `teams` collection. Optional fields include:
- `name`
- `href`
- `university` / `affiliation`
- `solves` / `solved_count`
- `first_bloods`
- `score`

## Live update strategy

This theme does not invent a browser-side scoring API. CTFd remains the source of truth. Until the MEDUSA plugin exposes an authenticated realtime/event endpoint, the scoreboard uses a normal server-rendered refresh model.

A future WebSocket or SSE implementation must:
1. authenticate against the existing CTFd/MEDUSA session;
2. expose only authorized competition data;
3. never accept client-provided score/rank mutations;
4. update the presentation without becoming a second scoring engine.
