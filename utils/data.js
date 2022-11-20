const { bgYellow, bgGreen, bold, dim } = require("kleur");
const alert = require("cli-alerts");

const bbColor = bold().bgYellow;
const nameColor = bold().bgYellow;
const githubColor = bold().bgGreen;

const name = `${nameColor(`Abner Soares Alves Junior`)}`;

const bio = `${`Software Engineer from 🇧🇷
Currently living in Montreal 🇨🇦`}`;

const work = `Working at 🚌 ${bbColor(` Busbud `)}: https://busbud.com`;

const gh = `😸 ${githubColor(` Github `)}: ${`https://github.com/abnersajr`}`;

const ad = () =>
	alert({
		msg: dim(`Use this CLI as an inspiration for your own`),
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
