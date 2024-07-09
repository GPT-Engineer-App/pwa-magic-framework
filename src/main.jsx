import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from "./App.jsx";
import "./index.css";
import { setOnlineStatus } from './store/slices/networkSlice';
import { initializePushNotifications } from './utils/pushNotifications';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
        
        // Initialize push notifications
        initializePushNotifications(registration);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, show a notification or prompt for refresh
              if (confirm('New version available! Click OK to refresh.')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });

  // Handle updates for the current page
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}

// Add offline/online event listeners
window.addEventListener('online', () => {
  console.log('App is online');
  store.dispatch(setOnlineStatus(true));
});

window.addEventListener('offline', () => {
  console.log('App is offline');
  store.dispatch(setOnlineStatus(false));
});