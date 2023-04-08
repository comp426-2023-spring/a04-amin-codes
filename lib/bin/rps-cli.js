#!/usr/bin/env node

import minimist from 'minimist';
import {rps} from "../lib/rpsls.js";

const argv = minimist(process.argv.slice(2));

const help = `Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`;

const rules = `Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`;
	
const choices = ["rock", "paper", "scissors"];

if (argv.h || argv.help) {
	console.log(help);
	process.exit(0);
}
if (argv.r || argv.rules) {
	console.log(rules);
	process.exit(0);
}

if (argv._.length != 0) {
	const choice = argv._[0].toLowerCase();
	
	if (choices.includes(choice)) {
		console.log(rps(choice));
	} else {
		console.error(`[${choice}] is out of range.`);
		console.log(rules);
		process.exit(0);
	}
	
} else {
	console.log(rps());
}