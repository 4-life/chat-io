const displayConfirmNotification = () => {
  if ('serviceWorker' in navigator) {
    const options = {
      body: 'You successfully subscribed to our Notification service!',
      icon: 'apple-touch-icon.png',
      lang: 'en-US',
      badge: 'apple-touch-icon.png',
      tag: 'confirm-notification',
      actions: [
        {
          action: 'confirm',
          title: 'Okay',
          icon: 'apple-touch-icon.png',
        },
      ],
    };
    navigator.serviceWorker.ready.then((sw) =>
      sw.showNotification('Successfully subscribed!', options)
    );
  }
};

export default displayConfirmNotification;
