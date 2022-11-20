const welcome = require("cli-welcome");
const pkgJSON = require("../package.json");

module.exports = minimal => {
	!minimal &&
		welcome({
			title: pkgJSON.name,
			tagLine: `Hey, nice to meet you!`,
			description: pkgJSON.description,
			version: pkgJSON.version,
			bgColor: `#F4772A`,
			color: `#000000`,
			bold: true,
			clear: false,
		});
};
