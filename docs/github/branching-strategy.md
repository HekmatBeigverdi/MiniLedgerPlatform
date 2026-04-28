# Branching Strategy

## Main Branches

- `main`: stable branch
- `develop`: integration branch

## Supporting Branches

- `feature/*`
- `docs/*`
- `chore/*`
- `refactor/*`

## Rules

1. Never commit unfinished experimental code directly to `main`.
2. Use one focused branch per phase or subtask.
3. Keep commit messages clear and consistent.
4. Open pull requests into `develop`.
5. Merge `develop` into `main` only when a phase is completed and reviewed.