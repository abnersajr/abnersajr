const alert = require("cli-alerts");

module.exports = (isDebug, cli) => {
	if (!isDebug) return;

	alert({type: "info", msg: "DEBUGGING INFO ↓"});
	console.log(`INPUT: ${cli.input}`);
	console.log(`FLAGS: ${cli.flags}`);
};
