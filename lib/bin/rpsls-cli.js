#!/usr/bin/env node

import minimist from 'minimist';
import {rpsls} from "../lib/rpsls.js";

const argv = minimist(process.argv.slice(2));

const help = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`;

const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`;
	
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

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
		console.log(rpsls(choice));
	} else {
		console.error(`[${choice}] is out of range.`);
		console.log(rules);
		process.exit(0);
	}
	
} else {
	console.log(rpsls());
}