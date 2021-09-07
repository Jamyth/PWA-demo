if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', {})
        .then((reg) => console.info('SW Registered !', reg))
        .catch((err) => console.info('BOO !!', err));
}

setTimeout(() => {
    const image = new Image();
    image.src = '/doge.jpeg';
    document.body.appendChild(image);
}, 3000);
