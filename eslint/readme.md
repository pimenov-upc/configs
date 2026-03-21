# eslint

ESLint is a configurable linter for JavaScript and TypeScript. This folder contains a ready-to-use corporate setup aligned with the TypeScript style guide in this repository.

### What is included

- [x] `eslint.config.ts` (Flat Config, modern ESLint config format)
- [x] `.eslintrc.json` (Legacy config format for older tooling)
- [x] TypeScript-focused rules matching project conventions

### Rule coverage highlights

- [x] Enforces `const`/`let` usage and forbids `var`
- [x] Enforces semicolons and single quotes
- [x] Enforces strict equality (`===`/`!==`) with `null` exception
- [x] Forbids `namespace`, `@ts-ignore`, `@ts-expect-error`, `@ts-nocheck`
- [x] Forbids default exports (`export default`)

### Install

```bash
npm install --save-dev eslint @eslint/js typescript typescript-eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin jiti
```

### Usage

Run with Flat Config (`eslint.config.ts`):

```bash
npx eslint --config eslint/eslint.config.ts .
```

Run with Legacy JSON config (`.eslintrc.json`):

```bash
npx eslint --config eslint/.eslintrc.json .
```

### Recommended scripts

Add lint commands to `package.json`:

```json
{
	"scripts": {
		"lint:eslint": "eslint --config eslint/eslint.config.ts .",
		"lint:eslint:fix": "eslint --config eslint/eslint.config.ts . --fix"
	}
}
```

Run it:

```bash
npm run lint:eslint
```

### Notes

- Use Flat Config as the default option for new projects.
- Keep `.eslintrc.json` only for compatibility with legacy integrations.
