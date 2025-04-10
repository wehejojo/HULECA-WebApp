const buttons = [
  // { id: "detect", url: "./pages/detect/detect.html" },
  { id: "past", url: "./pages/past/past.html" },
  { id: "reports", url: "./pages/reports/reports.html" }
];

buttons.forEach(button => {
  document.getElementById(button.id).addEventListener("click", () => {
      window.location.href = button.url;
  });
});

// async function registerServiceWorker() {
//   if ('serviceWorker' in navigator && 'PushManager' in window) {
//     try {
//       // Register the service worker
//       const registration = await navigator.serviceWorker.register('/sw.js');
//       console.log('Service Worker registered successfully:', registration);

//       // Now that the service worker is registered, subscribe to push notifications
//       await registerPush(registration);
//     } catch (error) {
//       console.error('Service Worker registration failed:', error);
//     }
//   } else {
//     console.error('Service Worker or PushManager is not supported in this browser.');
//   }
// }

// registerServiceWorker();

// async function registerPush(registration) {
//   const response = await fetch('https://192.168.100.6:3001/api/vapid-public-key');
//   const { publicKey } = await response.json();

//   const subscription = await registration.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlBase64ToUint8Array(publicKey)
//   });

//   // Send the subscription object to your server
//   await fetch('https://192.168.100.6:3001/api/save-subscription', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(subscription)
//   });

//   console.log('Push subscription successful!');
// }

// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
//   const rawData = window.atob(base64);
//   return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
// }