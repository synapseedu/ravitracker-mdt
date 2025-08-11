# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - runs Next.js development server on localhost:3000
- **Build**: `npm run build` - creates production build
- **Start**: `npm run start` - starts production server
- **Lint**: `npm run lint` - runs ESLint checks
- **Test**: `npm run test` - runs linting and PDF validation checks
- **PDF validation**: `npm run check-pdfs` - validates all referenced PDFs exist

## Architecture Overview

This is a Next.js application for managing MDT (Multidisciplinary Team) patient data with PDF document management.

### Core Structure

- **Patient Data Model**: Centralized in `data/patients/types.ts` with comprehensive medical information including demographics, test results, and document references
- **Patient Files**: Individual patient files in `data/patients/` export Patient objects with medical history, test results, and PDF references
- **PDF Management**: PDFs stored in `public/pdfs/` with validation script ensuring all referenced files exist
- **Routing**: Dynamic patient pages via `pages/patients/[id].tsx` using Next.js Pages Router

### Key Components

- **PatientPage**: Main patient display component with comprehensive medical data visualization
- **Patient Layout**: Shared layout and navigation for patient views
- **PDF Validation**: Custom script (`scripts/check-pdfs.js`) ensures data integrity between patient files and PDF storage

### Data Flow

1. Patient data defined in individual TypeScript files (`data/patients/*.ts`)
2. Aggregated in `data/patients/index.ts` as `allPatients` array and `patientMap` lookup
3. Dynamic routing loads patient data via ID parameter
4. PDF references validated against actual files in public directory

### Medical Data Structure

Each patient includes comprehensive medical information: demographics, test results (TTE, TOE, angiography, ECG), medication history, consultation notes, and categorized PDF documents. Patient status can be 'public' (MDT list) or 'private' (NSP list) with optional badges for special cohorts.

## Docker Support

Build: `docker build -t ravitracker-frontend .`
Run: `docker run -p 3000:3000 ravitracker-frontend`