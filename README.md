# GitHub Profile Analyzer

Follow the deployment instructions or just go to this link to check the assignment
https://briahsoft-assignment.vercel.app/

A React app that analyzes a GitHub user's public activity, showing their repositories and daily commit chart.

## Tech Stack
- React
- ShadCN (UI components)
- TypeScript
- Fetch API (native, no external HTTP libraries)

## Prerequisites
- Node.js (v16+ recommended)
- npm

## Deployment Instructions
1. Clone the repo: `git clone <your-repo-url>`
2. Navigate to the folder: `cd github-profile-analyzer`
3. Install dependencies: `npm install`
4. Start the app: `npm start`
5. Open `http://localhost:3000` in your browser.

## Usage
- Enter a GitHub username (e.g., "octocat").
- Click "Analyze" to see repos and a daily commits chart.

## Notes
- Uses GitHub API with native Fetch (public data only, no auth).
- Commit chart aggregates commits across all repos by date.
