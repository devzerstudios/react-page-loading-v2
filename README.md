![react-page-loading](https://raw.githubusercontent.com/devzerstudios/react-page-loading/refs/heads/main/images/react-page-loading.png)

# react-page-loading

[![version](https://img.shields.io/npm/v/react-page-loading-v2.svg?style=flat-square)](https://www.npmjs.com/package/react-page-loading-v2)
[![downloads](https://img.shields.io/npm/dm/react-page-loading-v2.svg?style=flat-square)](https://www.npmjs.com/package/react-page-loading-v2)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT)

React component that shows a loading spinner for a set duration, then reveals your content.  
Rewritten in **TypeScript** with support for **React 16.14 → 19**.

<img src="https://raw.githubusercontent.com/devzerstudios/react-page-loading/refs/heads/main/images/react-page-loading-features.gif" width="67%" alt="react-page-loading features">

---

## ✨ Features

- Simple API with functional components + hooks.
- Written in **TypeScript** – ships `.d.ts` for autocompletion.
- Supports **React 19** and still works with React 16, 17, 18.
- Compatible with any router / app structure.
- Lightweight: no webpack/UMD bundle, just ESM + CJS.

---

## 📦 Installation

```bash
# npm
npm install react-page-loading

# yarn
yarn add react-page-loading

# pnpm
pnpm add react-page-loading
```

---

## 🚀 Usage

```tsx
import React from "react";
import PageLoading from "react-page-loading";

export default function App() {
  return (
    <PageLoading duration={2000} type="bars" color="#A9A9A9">
      <h1>Welcome!</h1>
      <p>Your content is ready.</p>
    </PageLoading>
  );
}
```

- The spinner shows for 2 seconds, then the children are rendered.

---

## ⚙️ Props

| Name       | Type                       | Default   | Description                                               |
| ---------- | -------------------------- | --------- | --------------------------------------------------------- |
| `duration` | `number`                   | `1300`    | Time in **ms** to show the loader before showing children |
| `color`    | `string`                   | `#A9A9A9` | Spinner color                                             |
| `height`   | `number \| string`         | `40`      | Spinner height                                            |
| `width`    | `number \| string`         | `40`      | Spinner width                                             |
| `type`     | one of react-loading types | `"bars"`  | Spinner animation style                                   |
| `children` | `React.ReactNode`          | —         | Content to render after loading finishes                  |

### Supported `type` values

`blank`, `balls`, `bars`, `bubbles`, `cubes`, `cylon`, `spin`, `spinningBubbles`, `spokes`

---

## 🧑‍💻 Contributing

Contributions are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## 📜 License

MIT License © 2022–2025 [Devzer Studios](https://github.com/devzerstudios) and contributors.
