---
name: git-collaboration
description: Guides Git branching, pull, commit, conflict resolution, and synchronization workflows for multi-person hackathon teams.
---

# Git Collaboration Skill

## When to Use
Use this skill whenever pulling code, creating commits, preparing to push, or resolving merge conflicts on shared branches.

## Core Rules
1. **Never Force Push**: Never run `git push --force` or `git push -f` on `main`.
2. **Pull Before Pushing**: Always synchronize with `git pull --no-rebase origin main` before pushing.
3. **Keep Commits Clean**: Stage only relevant source files. Do not commit `.env`, build directories, or node_modules.

## Step-by-Step Workflow

### 1. Before Coding
```bash
git status
git pull --no-rebase origin main
```

### 2. Committing Changes
```bash
git add <files>
git commit -m "feat(module): clear description of change"
```

### 3. Resolving Conflicts
- Inspect conflicting files: `git status`
- Edit conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- Ensure teammates' valid logic is retained
- Test code to ensure it runs
- Stage and complete the merge:
  ```bash
  git add <resolved-files>
  git commit -m "merge: resolve conflicts with origin/main"
  ```

### 4. Pushing Changes
```bash
git push origin main
```
