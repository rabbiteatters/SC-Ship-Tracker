# Star Citizen Ship Intelligence

GitHub Pages-ready frontend using Vite, React and TypeScript. Includes ship search/filtering, stage distribution, evidence modal, milestone history, JSON import/export and a daily GitHub Actions workflow.

## Honest automation status
The collector is a safe baseline: it validates the evidence-tagged curated JSON and updates its generation timestamp. It does **not yet automatically parse fresh RSI monthly reports**. Source adapters need to be developed and verified before claiming live production updates. The workflow schedule is prepared.

## Local development
```sh
npm install
npm run dev
npm run build
```

## Deploy
1. Create a GitHub repository and push this project.
2. Repository Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Settings → Actions → General → Workflow permissions: enable **Read and write permissions**.
4. Run Actions → Update ship database → Run workflow (or wait for daily schedule).

For a future API integration, add `SC_API_KEY` in Settings → Secrets and variables → Actions. Do not embed secrets in frontend files, Vite variables or public JSON.

## Evidence rules
- Stages are not release dates; do not forecast ETAs from them.
- Assign a stage only from dated, attributable evidence.
- Keep source URL/title/excerpt and preserve milestone history.
- Anonymous tracks must not be assigned ship identities without evidence.

## Sources
- RSI Comm-Link: https://robertsspaceindustries.com/comm-link/transmission/
- RSI Progress Tracker: https://robertsspaceindustries.com/roadmap/board/1-Star-Citizen%3D
- Star Citizen API: https://api.starcitizen-api.com
- Citizen Starter Guide: https://citizen-starter-guide.com/ship-development-pipeline/

Unofficial community project, not affiliated with Cloud Imperium Games.
