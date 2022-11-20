const meow = require("meow");
const { yellow, green, dim, cyan } = require("kleur");

const helpText = `
  Usage
    ${green(`npx abnersajr`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

	Options
    ${yellow(`bio`)}            Print the bio info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-bio`)}       Don't print the bio info
    ${yellow(`social`)}         Print the social info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-social`)}    Don't print the social info
    ${yellow(`ad`)}             Print the ad info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-ad`)}        Don't print the ad info
    ${yellow(`-d, --debug`)}    Print the debug info
    ${yellow(`-v, --version`)}  Print the version
    ${yellow(`-m, --minimal`)}  Print a minimal version

	Commands
    ${cyan(`help`)}           Print CLI help information

  Examples
    ${green(`npx abnersajr`)} ${yellow(`--no-social`)}
    ${green(`npx abnersajr`)} ${yellow(`--no-ad`)}
    ${green(`npx abnersajr`)} ${cyan(`help`)}

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
