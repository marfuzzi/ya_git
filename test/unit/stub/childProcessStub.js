class ChildProcess {

    getBranch() {
        return new Promise((resolve, reject) => {
            resolve('  first b0e055a First\n' +
            '* master cdd5269 Master\n' +
            '  second f5be848 Second');
        });
    }

    getCommit(branch) {
        return new Promise((resolve, reject) => {
            resolve('452e653\n01c4c16\nb473392\nb0e055a\na4fcf52');

        });
    }

    showDataCommit(hash) {
        return new Promise((resolve, reject) => {
            resolve(['452e653\nmarfuzzi\nTue Mar 27 10:50:52 2018 +0300\nизменены названия функций\n',
                'd6714b4\nmarfuzzi\nWed Mar 21 14:50:04 2018 +0300\nДобавлен роутинг\n',
                '05e027b\nmarfuzzi\nTue Mar 20 22:14:19 2018 +0300\nInitial commit\n',
            ]);
        });
    }


    getDirTree(hash) {
        return new Promise((resolve, reject) => {
            resolve('100644 blob bad48e32476cd2466edebbfc9601b1bb5c5eaef\t.eslintrc\n' +
                '100644 blob 2f1a046bec4f3e3bc9fe40f023d3f0fd4d16e9b5\t.gitignore\n' +
                '100644 blob 090bdfaad0ccb60d7aa2dd672c15c74901b58cc5\tDockerfile\n'
            );
        });
    }

    getDataFile(file) {
        return new Promise((resolve, reject) => {
            resolve('Hello world!');
        });
    }
}

const childProcess = new ChildProcess();

module.exports = childProcess;
