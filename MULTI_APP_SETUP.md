# CommutAI Unified Mobile App - Multi-App Architecture

## Overview

This project uses Capacitor's multi-app architecture to deliver multiple role-based applications within a single APK. Each role (Driver, Conductor, Operator, Customer Service, Admin) has its own dedicated login flow and dashboard while sharing common infrastructure.

## Architecture

### Role-Based Multi-App Structure

```
unified-mobile-app/
├── src/
│   ├── apps/
│   │   ├── driver/         # Driver-specific app
│   │   ├── conductor/      # Conductor-specific app
│   │   ├── operator/       # Operator-specific app
│   │   ├── customer-service/ # Customer Service app
│   │   └── admin/          # Admin-specific app
│   ├── pages/              # Shared pages and components
│   ├── layouts/            # Shared layouts
│   └── Landing.tsx        # Role selection landing page
```

### Flow

1. **Landing Page** (`/`) - Users select their role
2. **Role-Specific Login** - Each app has its own login page
3. **Authenticated Dashboard** - Users access role-specific features
4. **Single APK** - All apps bundled together using Capacitor

## Build Scripts

### Development
```bash
npm run dev
```

### Build for Production
```bash
# Build all apps
npm run build

# Build specific app (for targeted deployment)
npm run build:driver
npm run build:conductor
npm run build:operator
npm run build:customer-service
npm run build:admin
```

### Capacitor Commands
```bash
# Sync Capacitor with web build
npm run cap:sync

# Open Android Studio
npm run cap:open:android

# Build Android APK
npm run cap:build:android
```

## Role-Based Routing

### Landing Page Routes
- `/` - Role selection landing page
- `/driver` - Driver app login
- `/conductor` - Conductor app login
- `/operator` - Operator app login
- `/customer-service` - Customer Service app login
- `/admin` - Admin app login

### Protected Routes
- `/driver/dashboard` - Driver dashboard
- `/conductor/dashboard` - Conductor dashboard
- `/operator/*` - Operator routes
- `/customer-service/*` - Customer Service routes
- `/admin/*` - Admin routes

## Authentication

Each app uses the shared `@commutai/auth` package but with role-specific login flows:

- **Driver**: Route management, GPS tracking, passenger occupancy
- **Conductor**: Ticketing, passenger management, QR scanning
- **Operator**: Fleet monitoring, dispatch, live operations
- **Customer Service**: Card management, passenger inquiries
- **Admin**: System configuration, user management, reports

## Capacitor Configuration

The `capacitor.config.ts` is configured for multi-app support:

- **App ID**: `com.commutai.unified`
- **App Name**: `CommutAI Unified`
- **Navigation**: Allows navigation between all app routes
- **Deep Linking**: Supports `commutai://` URL scheme for role-based deep links

## Deployment

### Single APK Deployment

All role-based apps are built into a single APK. Users select their role upon first launch, and the app remembers their preference for subsequent launches.

### Role-Based Features

Each role has access to specific features and UI elements:

- **Driver**: Navigation, GPS, occupancy tracking
- **Conductor**: QR scanning, ticketing, passenger lists
- **Operator**: Fleet dashboard, live monitoring, dispatch
- **Customer Service**: Card management, reload, passenger lookup
- **Admin**: System settings, user management, reports

## Development

### Adding a New Role

1. Create new app directory: `src/apps/new-role/`
2. Create `App.tsx` with role-specific login
3. Add route in `src/App.tsx`
4. Add role card to `src/pages/Landing.tsx`
5. Update Capacitor config if needed

### Shared Components

Common UI components, layouts, and utilities are shared across all apps:

- `src/layouts/` - Role-specific layouts
- `src/pages/` - Shared pages and components
- `src/ui/` - Reusable UI components
- `src/services/` - Shared API services

## Benefits

1. **Single APK**: One app to distribute and maintain
2. **Role-Based UX**: Tailored experience for each user type
3. **Shared Infrastructure**: Reduced code duplication
4. **Easy Updates**: Single update for all roles
5. **Flexible Architecture**: Easy to add new roles or features