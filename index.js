#!/usr/bin/env node
const meow = require("meow");
const init = require("./utils/init");
const data = require("./utils/data");
const cli = require("./utils/cli");
const debug = require("./utils/debug");

(async () => {
	const { input, flags } = cli;
	init(flags.minimal);

	input.includes("help") && cli.showHelp(0);

	console.log(data.name + `\n`);
	flags.bio && console.log(data.bio + `\n`);
	console.log(data.work + `\n`);

	if (flags.social) {
		console.log(data.gh);
	}

	if (flags.ad) {
		data.ad();
	}

	debug(flags.debug, cli);
})();
