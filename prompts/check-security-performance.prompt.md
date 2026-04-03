---
name: Security and Performance Review (Code Block)
description: Identify potential security vulnerabilities and performance bottlenecks in a provided code block.
argument-hint: Optional code block or file path context
agent: agent
---

Review the provided code block and identify potential security vulnerabilities and performance bottlenecks.

Inputs:

- Primary input: code block pasted in chat.
- Optional context: user-provided file path or active editor file for surrounding context.

Scope:

- Analyze only the provided code and directly relevant nearby context.
- Do not modify files unless the user explicitly asks for fixes.
- Include suggested patch snippets by default for findings where a safe fix can be shown.

Security review checklist:

- Input validation and sanitization gaps.
- Injection risks (SQL, command, template, path traversal, header injection).
- Authentication or authorization weaknesses.
- Sensitive data exposure (tokens, secrets, PII, verbose error leaks).
- Unsafe cryptography, weak randomness, or insecure transport assumptions.
- Deserialization, SSRF, open redirect, or unsafe external calls when relevant.

Performance review checklist:

- Hot-path inefficiencies (nested loops, repeated parsing, avoidable allocations).
- Expensive synchronous/blocking operations.
- Unbounded data growth, memory pressure, and potential leaks.
- Redundant I/O, network, or database calls.
- Missing caching, batching, pagination, or debounce/throttle opportunities.
- Algorithmic complexity concerns and scalability risks.

Output format:

- Findings grouped by severity: Critical, High, Medium, Low.
- For each finding include:
  - Title
  - Why it is a risk
  - Evidence in the code (symbol/line snippet references where possible)
  - Practical mitigation guidance
  - Suggested patch snippet (when feasible)
- Include a final section:
  - Quick wins (fast, low-risk improvements)
  - Deeper refactors (higher effort, larger impact)
  - Assumptions and unknowns

Quality bar:

- Avoid speculative findings without evidence.
- Prefer actionable, concrete recommendations over generic advice.
- If no significant issues are found, state that explicitly and list residual risks or testing gaps.
