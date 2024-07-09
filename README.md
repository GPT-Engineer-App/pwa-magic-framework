# PWA App

This is a Progressive Web App (PWA) example project.

## Testing PWA Functionality

### Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Open Chrome and navigate to `http://localhost:5173` (or the port specified by Vite).

4. Open Chrome DevTools (F12) and go to the "Application" tab.

5. In the left sidebar, under "Application", you should see:
   - A "Manifest" section with details from your `manifest.json`.
   - A "Service Workers" section showing your registered service worker.

6. You can test offline functionality by:
   - Checking the "Offline" box in the "Service Workers" section.
   - Refreshing the page to see if it loads without network connection.

### Production

1. Build the project:
   ```
   npm run build
   ```

2. Serve the built files using a static server (e.g., `serve`):
   ```
   npx serve -s dist
   ```

3. Open Chrome and navigate to the served address (usually `http://localhost:3000`).

4. Follow steps 4-6 from the Local Development section to test PWA features.

5. You should also see an install prompt or install icon in the address bar, allowing you to install the PWA on your device.

Note: For the best PWA experience, including the install prompt, make sure you're serving the app over HTTPS in a production environment.