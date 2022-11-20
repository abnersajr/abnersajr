const alert = require("cli-alerts");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const apiURL = `https:/xapi.github.com/users/abnersajr`;
module.exports = async () => {
	try {
		const res = await fetch(apiURL);
		if (res.status !== 200) throw res;

		const data = await res.json();
		const ghFollowers = data.followers;
		console.log(`
Github Followers: ${ghFollowers}
  `);
	} catch (error) {
		alert({ type: "error", msg: error.status || error });
	}
};
