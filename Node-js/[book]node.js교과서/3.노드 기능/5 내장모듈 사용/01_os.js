const os = require('os');

// 운영체제 정보 ----------------------------------
// console.log('os.arch()',os.arch());
// console.log('os.platform()',os.platform());
// console.log('os.type()',os.type());
// console.log('os.uptime()',os.uptime());
// console.log('os.hostname()',os.hostname());
// console.log('os.release()',os.release());


// 경로 -------------------------------------------
// console.log('os.homedir()',os.homedir());
// console.log('os.tmpdir()',os.tmpdir());

// cpu 정보 ---------------------------------------
// console.log('os.cpus()',os.cpus());
// console.log('os.cpus().length',os.cpus().length);

// 메모리 정보 ------------------------------------
console.log('os.freemem()',os.freemem());
console.log('os.totalmem()',os.totalmem());