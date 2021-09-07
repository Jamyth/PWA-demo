const list = document.getElementById('list');
fetch('http://localhost:3000/people')
    .then((res) => res.json())
    .then((json) => {
        if (list) {
            list.innerHTML = json.map((_: any) => `<li>${_.name}</li>`).join('');
        }
    });

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.info('SW Registered !', reg))
        .catch((err) => console.error('BOO !', err));
}
