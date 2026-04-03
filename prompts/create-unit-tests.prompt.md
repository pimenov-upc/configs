---
name: Vitest Unit Tests (Current File)
description: Generate or update Vitest unit tests for the current file, including null and empty input edge cases.
argument-hint: Optional source file path (defaults to active file)
agent: agent
---

Generate unit tests for the target source file using Vitest.

Inputs:

- Preferred target: the file path provided by the user as an argument.
- Fallback target: the currently active editor file if no argument is provided.

Requirements:

- Create or update a corresponding test file using project conventions.
- Use Vitest APIs (`describe`, `it`/`test`, `expect`, `vi`) and keep tests deterministic.
- Cover the primary behavior of each exported function/value in the target file.
- Include non-exported/internal helpers when they are directly testable through existing project conventions.
- Include edge-case tests for null, undefined, empty strings, empty arrays, and empty objects when applicable.
- Add negative-path tests for invalid inputs and expected failures when applicable.
- Prefer small, focused unit tests over broad integration behavior.
- Preserve production code behavior unless a minimal testability refactor is clearly needed.
- If a refactor is required for testability, keep it minimal and explain it in the summary.

Quality checks before finishing:

- Ensure tests compile and run under Vitest conventions used in this repository.
- Ensure test names clearly describe behavior and edge cases.
- Ensure mocks/stubs are reset between tests when used.
- Avoid redundant tests that assert the same behavior.

Output format:

- Apply edits directly to test files.
- Provide a short summary of covered behaviors and edge cases.
- Explicitly list any behaviors that were ambiguous and how assumptions were made.
