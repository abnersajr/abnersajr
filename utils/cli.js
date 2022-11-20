const meow = require("meow");
const c = require("ansi-colors");

const helpText = `
  Usage
    ${c.green(`npx abnersajr`)} ${c.yellow(`[--option]`)} ${c.cyan(`<command>`)}

	Options
    ${c.yellow(`bio`)}            Print the bio info ${c.dim(`(DEFAULT: true)`)}
    ${c.yellow(`--no-bio`)}       Don't print the bio info
    ${c.yellow(`social`)}         Print the social info ${c.dim(`(DEFAULT: true)`)}
    ${c.yellow(`--no-social`)}    Don't print the social info
    ${c.yellow(`ad`)}             Print the ad info ${c.dim(`(DEFAULT: true)`)}
    ${c.yellow(`--no-ad`)}        Don't print the ad info
    ${c.yellow(`-d, --debug`)}    Print the debug info
    ${c.yellow(`-v, --version`)}  Print the version
    ${c.yellow(`-m, --minimal`)}  Print a minimal version

	Commands
    ${c.cyan(`help`)}           Print CLI help information

  Examples
    ${c.green(`npx abnersajr`)} ${c.yellow(`--no-social`)}
    ${c.green(`npx abnersajr`)} ${c.yellow(`--no-ad`)}
    ${c.green(`npx abnersajr`)} ${c.cyan(`help`)}

`;

const defaultOptions = {
	inferType: true,
	flags: {
		minimal: {
			type: "boolean",
			default: false,
			alias: "m",
		},
		bio: {
			type: "boolean",
			default: true,
		},
		social: {
			type: "boolean",
			default: true,
		},
		ad: {
			type: "boolean",
			default: true,
		},
		debug: {
			type: "boolean",
			default: false,
			alias: "d",
		},
		version: {
			alias: "v",
			type: "boolean",
			default: false,
		},
	},
};

const cli = meow(helpText, defaultOptions);

module.exports = cli;
