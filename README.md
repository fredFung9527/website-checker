# website-checker

A Node.js/TypeScript tool that periodically checks the availability of a list of websites using Puppeteer. If any site is unreachable or returns an error, it sends a notification via Pushover. The URLs to check and Pushover credentials are provided via environment variables.

## Features
- Scheduled website checks (hourly by default, using Cron)
- Uses Puppeteer for robust website loading and validation
- Sends alerts via Pushover if any site is down or returns an error
- Easy configuration via environment variables

## Setup

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   yarn install
   ```
3. **Configure environment variables:**
   Create a `.env` file in the root directory with the following:
   ```env
   WEBSITE_URLS=https://example.com,https://another.com
   PUSHOVER_TOKEN=your_pushover_token
   PUSHOVER_USER=your_pushover_user
   ```
4. **Build the project:**
   ```bash
   yarn build
   ```
5. **Run the project:**
   ```bash
   yarn start
   ```
   Or for development:
   ```bash
   yarn dev
   ```

## Deployment
- Use the included `pm2.sh` script to build and restart the service with PM2.

## Scripts
- `yarn dev` — Run in development mode (with ts-node)
- `yarn build` — Compile TypeScript to JavaScript
- `yarn start` — Run the compiled app

## Dependencies
- puppeteer
- croner
- pushover
- dotenv
- axios

## License
ISC 