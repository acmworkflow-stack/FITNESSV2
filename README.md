# Fitness Tracker

A training log I built for my own workouts: log sessions, save templates, and track personal records, with sign-in so my data follows me between devices.

**Stack:** Next.js 16 · React 19 · Tailwind CSS · Supabase (auth) · Vercel

## Features

- **Home dashboard:** what's on deck and recent sessions
- **Workouts:** log exercises, sets, reps and weight
- **Templates:** save a session once and reuse it
- **PRs:** personal records per lift
- **Accounts:** email sign-up and sign-in through Supabase Auth

## Versions

This repo holds the whole history of the project. The older builds were separate repos and now live here as tags and archive branches.

| Version | What changed | Where |
|---|---|---|
| **v2.0** | Rebuilt on Next.js + Supabase, deployed on Vercel | `main` |
| v1.0 | React + Vite app, data in localStorage, first tests | tag `v1.0` · branch `archive/v1-vite` |
| v0.1 | First prototype (React + Vite) | tag `v0.1` · branch `archive/v0-copilot` |

## Run it locally

```bash
npm install
cp .env.example .env.local   # then add your Supabase URL and anon key
npm run dev                  # http://localhost:3000
```

## Deploy

Push to `main` and Vercel builds it (`vercel.json`). Set the three variables from `.env.example` in the Vercel project settings.
