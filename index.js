#!/usr/bin/env node
const meow = require("meow");
const init = require("./utils/init");
const data = require("./utils/data");

const helpText = `RUN: npx abnersajr`;
const defaultOptions = {
	flags: {
		social: {
			type: "boolean",
			default: true,
		},
		ad: {
			type: "boolean",
			default: true,
		},
	},
};

const cli = meow(helpText, defaultOptions);

(async () => {
	init();
	console.log(data.name);
	console.log(data.bio);
	console.log(data.work + `\n`);

	if (cli.flags.social) {
		console.log(data.gh + `\n`);
	}

	if (cli.flags.ad) {
		console.log(data.ad + `\n`);
	}
})();
