# Changelog

All notable changes to **react-page-loading-v2** will be documented here.  
This project adheres to [Semantic Versioning](https://semver.org/).

---

## [2.0.0] – 2025-10-03

### Added

- Complete rewrite in **TypeScript** with full type definitions (`.d.ts`).
- Support for **React 19**, while maintaining compatibility with React 16.14, 17, and 18.
- Sourcemaps for easier debugging.
- New props:
  - `duration` (time in ms to show loader).
  - `children` (rendered after loading finishes).

### Changed

- Build system migrated from **webpack + babel** → **tsup + TypeScript** (faster, smaller bundles).
- Distributed as **ESM + CJS** with modern `exports` field in `package.json`.
- Default styling improved for accessibility (`role="status"`, hidden label text).

### Removed

- **prop-types** (replaced by TypeScript interfaces).
- Webpack UMD bundle (consumers’ bundlers handle builds now).

---

## [1.0.16] – 2022-01-xx

- Last release of the original JavaScript implementation.
- Provided spinner with `prop-types` validation.
- Used webpack build pipeline with Babel transpilation.
