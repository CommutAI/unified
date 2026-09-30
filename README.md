# unified

CommutAI Unified Mobile Application — Single APK, Multi-Role Transit Operations Platform.

## Overview

The CommutAI Unified Mobile App is an enterprise cross-platform mobile solution powered by **Capacitor**, **React 19**, **TypeScript**, and **Tailwind CSS**. It consolidates all CommutAI transit operational roles into a single application:

- **Driver**: Real-time GPS tracking, turn-by-turn route navigation, occupancy monitoring, and emergency SOS alerts.
- **Conductor**: Passenger ticketing, fare calculation, smart card RFID/QR scanning, and passenger manifest management.
- **Operator**: Live fleet monitoring, bus dispatching, route status, and real-time operations overview.
- **Customer Service**: Commuter assistance, transit card reloading, trip lookup, and incident reporting.
- **System Admin**: Fleet configuration, user access management, device telemetry, and audit reporting.

---

## Pre-Built Artifacts & Builds

This repository includes compiled production builds:
- **Android APK**: [`builds/app-debug.apk`](builds/app-debug.apk) (Ready for direct installation on Android devices)
- **Production Web Assets**: [`dist/`](dist/) (Optimized web bundle for Capacitor and web views)

---

## Tech Stack

- **Framework**: React 19, Vite, TypeScript
- **Mobile Engine**: Capacitor 8 (Android)
- **Styling**: Tailwind CSS, Modern Transport Glassmorphism Theme
- **Backend / Realtime**: Supabase (Authentication, PostgreSQL Database, Realtime Subscriptions)
- **Maps & Geolocation**: Leaflet, OpenStreetMap, Native Geolocation API

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm
- Android Studio & Android SDK (for native Android compilation)

### Installation
```bash
# Clone the repository
git clone https://github.com/CommutAI/unified.git
cd unified

# Install dependencies
npm install
```

### Environment Configuration
Copy the example environment configuration:
```bash
cp .env.example .env
```
Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are configured.

### Development Server
```bash
npm run dev
```

### Production Build
```bash
# Build the production web bundle
npm run build

# Sync web assets to Capacitor Android project
npm run cap:sync

# Open project in Android Studio
npm run cap:open:android
```

---

## Architecture

For in-depth details on the multi-role routing and Capacitor configuration, see [MULTI_APP_SETUP.md](MULTI_APP_SETUP.md).
