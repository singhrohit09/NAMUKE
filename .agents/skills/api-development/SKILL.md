---
name: api-development
description: Guides the design, implementation, and documentation of REST APIs, schemas, validation, and mock fixtures.
---

# API Development Skill

## When to Use
Use this skill when defining new endpoints, modifying backend route handlers, or updating frontend API client calls.

## Rules
1. **Contract First**: Any new endpoint or payload modification must be documented in `docs/API_CONTRACT.md` first.
2. **Standard Envelopes**:
   - Success: `{"success": true, "data": { ... }}`
   - Error: `{"success": false, "error": { "code": "...", "message": "..." }}`
3. **HTTP Status Codes**:
   - `200 OK`: Request succeeded.
   - `201 Created`: Resource created.
   - `400 Bad Request`: Validation failure.
   - `404 Not Found`: Target entity not found.
   - `500 Internal Server Error`: Unhandled server/model exception.
4. **Mock Synchronization**: When updating an endpoint, keep corresponding mock fixtures in sync.
