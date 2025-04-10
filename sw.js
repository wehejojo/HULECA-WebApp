// sw.js
self.addEventListener('push', function(event) {
  const payload = event.data.json();
  const title = payload.title || 'Notification';
  const options = {
    body: payload.body || 'No message',  // Adjust the icon path as needed
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Optionally, handle notification click (to open a URL when the notification is clicked)
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('http://192.168.100.6:5500')  // Replace with your app URL
  );
});
