// サービスワーカー：通知を受け取るための裏方さん
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'icon.png', // さっき決めたアイコン
        badge: 'icon.png'
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});