self.addEventListener('install', () => {
    self.skipWaiting(); // 阻止等待，让新 SW 安装成功后立即激活
});
self.addEventListener('activate', event => {
    event.waitUntil(
        Promise.all([
            self.clients.claim(), // 立即控制所有客户端
        ])
    );
});
let timer = null;
self.addEventListener('message', (event) => {
    console.log(event.data);
    if (event.data === 'stop') {
        if (timer) {
            console.log('clearInterval')
            clearInterval(timer)
        }
    } else {
        const dateStr = (new Date()).getTime();
        timer = setInterval(() => {
            console.log('demo demo demo demo', ` ${dateStr}`)
        }, 3000);
    }
});

