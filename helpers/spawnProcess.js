const spawn = require('child_process').spawn;

const spawnProcess = (command, args, options) => new Promise((resolve, reject) => {
    let process = spawn(command, args, options);
    process.stdout.on('data', (stdout) => resolve(stdout));
    process.stderr.on('data', (stderr) => reject(stderr));
});

module.exports = spawnProcess;
