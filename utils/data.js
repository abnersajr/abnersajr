const chalk = require("chalk");
const alert = require("cli-alerts");

const bbColor = chalk.bgHex(`#FFAB00`).hex(`#000`);
const nameColor = chalk.bgHex(`#F4772A`).hex("#000");
const githubColor = chalk.bgHex(`#6cc644`).hex("#000");

const name = `${nameColor.bold(`Abner Soares Alves Junior`)}`;

const bio = `${chalk(`Software Engineer from 🇧🇷
Currently living in Montreal 🇨🇦`)}`;

const work = `Working at 🚌 ${bbColor.bold(` Busbud `)}: https://busbud.com`;

const gh = `😸 ${githubColor.bold(` Github `)}: ${chalk(`https://github.com/abnersajr`)}`;

const ad = () =>
	alert({
		msg: chalk.dim(`Use this CLI as an inspiration for your own`),
		type: "success",
		name: "DONE",
	});

module.exports = {
	name,
	bio,
	work,
	gh,
	ad,
};
