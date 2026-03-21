# Oxfmt

[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) (`/oʊ-ɛks-fɔːr-mæt/`) is a high-performance formatter for the JavaScript ecosystem.

### Supported languages

- [x] JavaScript
- [x] TypeScript
- [x] JSX, TSX
- [x] JSON, JSONC, JSON5
- [x] YAML, TOML
- [x] HTML
- [x] Angular, Vue
- [x] CSS, SCSS, Less
- [x] Markdown, MDX
- [x] GraphQL
- [x] Ember, Handlebars

### Install

```bash
npm install --save-dev oxfmt
```

### Usage

Add format command to `package.json`:

```json
{
  "scripts": {
    "format": "oxfmt .",
    "format:check": "oxfmt --check"
  }
}
```

Run it:

```bash
npx oxfmt .
```

### Batteries included

Oxfmt includes built-in features that typically require external Prettier plugins:

- [x] Import sorting
- [x] Tailwind CSS class sorting
- [x] package.json field sorting
- [x] Embedded formatting (CSS-in-JS, GraphQL, etc.)
