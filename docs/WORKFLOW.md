# Team Workflow

## Before Coding
1. Check `TASK_BOARD.md`.
2. Claim a task and assign an owner.
3. Read the relevant architecture and API contracts.
4. Pull the latest main branch:
   ```bash
   git pull --no-rebase origin main
   ```

## During Coding
1. Work in your assigned module (`frontend/`, `backend/`, or `ai/`).
2. Keep commits small and descriptive:
   ```bash
   git add . && git commit -m "Your changes"
   ```
3. Do not edit another owner's files without coordination.
4. Never commit secrets or generated junk.

## Before Pushing
1. Save and commit your own work.
2. Run:
   ```bash
   git pull --no-rebase origin main
   ```
3. Resolve conflicts without discarding valid changes.
4. Run relevant tests.
5. Push with:
   ```bash
   git push origin main
   ```

## After Pushing
1. Verify the push succeeded.
2. Update `TASK_BOARD.md`.
3. Tell the team what changed and what remains.
