const c = require("ansi-colors");
const alert = require("cli-alerts");

const bbColor = c.bold.bgYellow;
const nameColor = c.bold.bgYellow;
const githubColor = c.bold.bgGreen;

const name = `${nameColor.bold(`Abner Soares Alves Junior`)}`;

const bio = `${`Software Engineer from 🇧🇷
Currently living in Montreal 🇨🇦`}`;

const work = `Working at 🚌 ${bbColor(` Busbud `)}: https://busbud.com`;

const gh = `😸 ${githubColor(` Github `)}: ${`https://github.com/abnersajr`}`;

const ad = () =>
	alert({
		msg: c.dim(`Use this CLI as an inspiration for your own`),
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
