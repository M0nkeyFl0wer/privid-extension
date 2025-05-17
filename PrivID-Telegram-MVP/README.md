# PrivID Telegram MVP

This project is a lightweight identity verification bot using Telegram and Holonym. It enables privacy-preserving verification of Telegram users without requiring surveillance-based login systems like LinkedIn.

## Features

- Telegram bot for user verification
- Holonym integration for ZK-proof-based identity validation
- Minimal backend logic
- Designed for future integration with Bluesky and the PrivID browser extension

## Stack

- Telegram Bot API (via Python/Node.js or your preferred framework)
- Holonym API
- Optional: Supabase (for logging/metrics)
- Lightweight deployment (can run on a free tier server or container)

## MVP Goals

- Verify a Telegram user using Holonym credentials
- Display a “verified” badge or message in response
- No user accounts, no data storage (beyond ephemeral verification sessions)
- Prepare hooks for future cross-platform identity attestation

## Usage

1. Set up a Telegram bot via @BotFather.
2. Deploy the bot locally or to a cloud service (Replit, Render, Railway, etc.).
3. Add your Holonym credentials to `.env`.

