const fs = require('fs');
const portscanner = require('portscanner');

const port = process.argv[2];

fs.readFile('ip.txt', 'utf8', (err, ip) => {
    if (err) throw err;

    const ip_newlineReplace = ip.replace(/\r?\n|\r/g, " ");
    const ips = ip_newlineReplace.split(" ")

    console.log(ips);

    for (let i = 0; i < ips.length; i++) {

        portscanner.checkPortStatus(port, ips[i], function (error, status) {

            console.log(`This port of ${ips[i]} is ${status}`);
        });

    };

});
