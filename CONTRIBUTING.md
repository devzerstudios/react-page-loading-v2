# Contributing to react-page-loading-v2

First off, thanks for your interest in contributing! ❤️

We want this library to be useful and reliable for the React community.  
Here’s how you can help:

---

## Getting Started

1. **Fork and clone the repo**
   ```bash
   git clone https://github.com/devzerstudios/react-page-loading-v2.git
   cd react-page-loading-v2
   pnpm install
   ```

2. **Build the package**
   ```bash
   pnpm build
   ```

3. **Run tests**
   ```bash
   pnpm test
   ```

4. **Link locally for testing in another app**
   ```bash
   pnpm build
   pnpm link --global
   # then in your test project
   pnpm link --global react-page-loading-v2
   ```

---

## Development Guidelines

- Code is written in **TypeScript**.
- Components live in `src/`.
- Keep imports type-safe (use `import type` when necessary).
- Follow the ESLint + Prettier config for formatting.

---

## Pull Requests

- Create a new branch for your change (`feature/*` or `fix/*`).
- Add/update tests if applicable.
- Update the **CHANGELOG.md** under the “Unreleased” section.
- Make sure `pnpm build && pnpm test` passes.
- Submit your PR with a clear description of the change.

---

## Reporting Issues

- Use the [GitHub Issues](https://github.com/devzerstudios/react-page-loading-v2/issues).
- Include reproduction steps, expected vs actual behavior, and your environment (React version, Node version).

---

## Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/).  
Be respectful, inclusive, and constructive in all interactions.

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
