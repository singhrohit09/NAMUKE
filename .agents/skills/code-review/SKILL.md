---
name: code-review
description: Inspects code changes for architectural integrity, error handling, security vulnerabilities, regression risks, and compliance with docs/RULES.md.
---

# Code Review Skill

## When to Use
Use this skill before merging, committing, or pushing significant code changes, or when validating changes against team guidelines.

## Review Checklist
1. **Ownership**: Does this change touch files owned by another teammate? If so, was it coordinated?
2. **Secrets & Credentials**: Are any API keys, database credentials, or secret tokens hardcoded? (Must use `.env`)
3. **API Compliance**: Do route handlers and client requests strictly match `docs/API_CONTRACT.md`?
4. **Error Handling**: Are asynchronous calls wrapped in try/catch or checked for error responses?
5. **UI Resilience**: Does the frontend handle loading states, empty states, and API error states gracefully?
6. **No Regressions**: Did this change break any previously working endpoints or scripts?

## Resolution
If issues are found, note the exact file and line number and propose the direct fix before committing.
