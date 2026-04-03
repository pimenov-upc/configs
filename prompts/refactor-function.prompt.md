---
name: Refactor Function for Readability
description: Refactor a function to improve readability and reduce complexity while preserving behavior.
argument-hint: Optional file path and function name (defaults to selected function in active file)
agent: agent
---

Refactor the target function to improve readability and reduce complexity without changing behavior.

Inputs:

- Preferred target: function name and file path provided by the user.
- Fallback target: selected function in the active editor file.
- If no function is selected, infer the most relevant function from nearby cursor context and state assumptions.

Refactoring goals:

- Preserve exact external behavior, return values, and side effects.
- Reduce cognitive load with clearer control flow and naming.
- Reduce branching and nested conditionals where practical.
- Extract small helper functions only when they improve clarity.
- Remove duplication and simplify boolean logic.
- Keep changes minimal and avoid unrelated rewrites.

Constraints:

- Do not change public API contracts unless explicitly requested.
- Keep TypeScript and JavaScript style consistent with the repository.
- Maintain existing error-handling semantics.
- Run relevant lint/test checks by default when project commands are available.

Validation before finishing:

- Verify edge-case handling remains intact (null, undefined, empty inputs, boundary values when applicable).
- Ensure resulting code is easier to read and reason about than the original.
- If tests exist for the target function, update them only when needed for non-behavioral changes.
- Execute available validation commands and report pass/fail status with key failures.

Output format:

- Apply edits directly to source files.
- Provide a short summary including:
  - What complexity/readability issues were addressed.
  - Why the new structure is simpler.
  - Any assumptions made about intended behavior.
  - Which checks were run and their outcomes.
