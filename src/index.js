const app = require('./app');


async function init() {
    await app.listen(5000, console.log('Server listening on port 5000⚡'));
}

init();