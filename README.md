# AIAGENT Playwright Framework

This folder contains a Playwright test framework scaffold.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Run in headed mode:
   ```bash
   npm run test:headed
   ```

4. Open the HTML report:
   ```bash
   npm run test:report
   ```

## Docker

Run the full Playwright suite in a container with one command and no Node.js installation on your machine:

```bash
docker compose up --build --exit-code-from playwright
```

If your Docker setup uses the legacy Compose binary, the equivalent command is:

```bash
docker-compose up --build --exit-code-from playwright
```

## Files

- `package.json` - project scripts and Playwright dependency
- `playwright.config.ts` - Playwright configuration
- `tsconfig.json` - TypeScript configuration for tests
- `tests/example.spec.ts` - sample browser test
- `.gitignore` - ignores `node_modules` and reports
