const exec = require('child_process').exec;

const execProcess = (command, options) => new Promise((resolve, reject) => {
    exec(command, options,  (err, stdout, stderr) => {
        if (err) return reject(err);
        resolve(stdout);
    })
});

module.exports = execProcess;
