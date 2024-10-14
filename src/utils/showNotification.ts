/* eslint-disable @typescript-eslint/no-unused-vars */
export default function showNotification(
  title: string,
  options: NotificationOptions
): void {
  if (!('Notification' in window)) {
    return;
  }

  if (Notification.permission === 'granted') {
    const notification = new Notification(title, options);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification(title, options);
      }
    });
  }
}
