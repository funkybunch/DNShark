#!/usr/bin/env node
const args = require('yargs')
    .usage('Usage: dnssl <command> [options]')
    .command('create', 'Create a new DNS record for a domain with DNS managed by DigitalOcean.')
    .example('dnssl create -d "full.sub-domain.name" -ssl y -type dns', 'Creates a new A record for that domain and issues an SSL Certificate via a DNS challenge type through Lets Encrypt.')
    .alias('d', 'domain')
    .nargs('f', 1)
    .describe('d', 'The subdomain you wish to create a new A record for.')
    // .demandOption(['d'])
    .help('h')
    .alias('h', 'help')
    .epilog('Copyright (c) 2019')
    .argv;

// Helper Counter
function objectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
}

// Check if program was run via CLI
function runFromCLI() {
    return (args && objectLength(args) > 2);
}

// Assign CLI check to `const`
const wasRunFromCLI = runFromCLI();

// CLI Logic
if(wasRunFromCLI) {
    var domain = args.domain;
    console.log("You entered " + domain);
    process.exit();
}

// Expose CLI Functions to Main process
exports.args = function () {
    return args;
};

// Allow Main process to verify if program was run via CLI
exports.runFromCLI = wasRunFromCLI;