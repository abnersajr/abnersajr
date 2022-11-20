const fetch = require("node-fetch");

const apiURL = `https://api.github.com/users/abnersajr`;
module.exports = async () => {
	const res = await fetch(apiURL);
	const data = await res.json();
	const ghFollowers = data.followers;

	console.log(`
  Github Followers: ${ghFollowers}
  `);
};
