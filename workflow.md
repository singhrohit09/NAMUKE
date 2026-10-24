# Best Workflow for Your Team

### 1. Before Coding
Get the latest shared code before starting any work.

```bash
git pull --no-rebase origin main
```

---

### 2. While Coding72 is going out
Work in your assigned folder and commit regularly.

```bash
git add . && git commit -m "Your changes"
```

---

### 3. Before Pushing
Integrate teammates' latest changes before pushing.

```bash
git pull --no-rebase origin main
```

---

### 4. Push
Resolve any conflicts first.

```bash
git push origin main
```

---

> [!IMPORTANT]
> ### ⚠️ Team Rule
> If someone is editing `backend/server.js`, avoid editing that same file simultaneously unless necessary. Separate ownership of files prevents most conflicts, which is considerably less painful than debugging Git at 2 AM during a hackathon.
