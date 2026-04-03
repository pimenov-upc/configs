---
name: JSDoc Functions
description: Add or improve JSDoc comments for all functions in a file, including @param and @returns.
argument-hint: Optional file path (defaults to the active file)
agent: agent
---

Write JSDoc comments for all functions in the target file.

Inputs:

- Preferred target: the file path provided by the user as an argument.
- Fallback target: the currently active editor file if no argument is provided.

Requirements:

- Add JSDoc to all functions (named exports, default-exported functions, and exported const function expressions/arrow functions).
- For each function, document:
  - Purpose in 1 concise sentence.
  - Every parameter with `@param` and an accurate description.
  - Return value with `@returns` (or omit only when return type is `void` and no meaningful return semantics exist).
- Always normalize existing JSDoc for functions to a consistent style and wording quality.
- Preserve runtime behavior and existing signatures.
- Do not rewrite unrelated code.
- Match the project's style and TypeScript/JavaScript conventions.

Quality checks before finishing:

- Ensure every function in the target file has exactly one clear JSDoc block.
- Ensure parameter names in `@param` tags exactly match the function signature.
- Ensure `@returns` descriptions match actual return behavior.
- Ensure existing JSDoc for functions is rewritten into the same consistent format, even when technically complete.

Output format:

- Apply edits directly to the file.
- Provide a short summary listing which functions were documented.
- Mention any ambiguities discovered (for example, unclear return semantics).
