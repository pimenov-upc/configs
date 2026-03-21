# oxlint

[Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`/oʊ-ɛks-lɪnt/`) is a high-performance linter for JavaScript and TypeScript built on the Oxc compiler stack.

### A large and growing rule set

Oxlint includes more than `690 rules`, with coverage across the plugins most teams already use, including:

- [x] ESLint core rules
- [x] TypeScript rules
- [x] Popular plugins such as React, Jest, Unicorn, and jsx-a11y
- [x] Custom JS plugins compatible with the ESLint plugin ecosystem
- [x] This breadth makes migration straightforward without sacrificing rule coverage.


### What Oxlint supports

Oxlint supports:

- [x] JavaScript and TypeScript (.js, .mjs, .cjs, .ts, .mts, .cts)
- [x] JSX and TSX (.jsx, .tsx)
- [x] Framework files (.vue, .svelte, .astro) by linting only their `<script>` blocks

### Install

```bash
npm install --save-dev oxlint oxlint-tsgolint
``` 

### Usage

Add lint commands to `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix"
  }
}
```

Run it:

```bash
npm run lint
```

## Type-Aware Linting

### Install

```bash
npm i -D oxlint-tsgolint@latest
```

### Usage

Add the following to your `oxlint configuration file`:

```json
{
  "extends": ["tsgolint"]
}
```

### Running type-aware linting

To run type-aware linting, use the following command:

```bash
npx oxlint --type-aware
```

### Type Checking Diagnostics

```bash
npx oxlint --type-aware --type-check
```