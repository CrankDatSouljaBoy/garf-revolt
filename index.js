let Client = require("revolt.js").Client;
let bot = new Client();
let token = "if we got rid of england, would anyone _really_ notice?";

// i wrote this i am fully righteous in my skidding of it fuck you
function garfieldComic(latest = false) {
	const days = 24 * 60 * 60 * 1000;
	const today = new Date();
	const start = new Date("1978/06/19");
	let date;
	if (latest) date = new Date();
	else date = new Date(start.getTime() + Math.random() * (today.getTime() - start.getTime()));

	// Gets total amount of comics
	const total = Math.round(Math.abs((start.getTime() - today.getTime()) / days));
	function pad(n) {
		return n < 10 ? `0${n}` : n;
	}

	// Archive URL
	const archive = "http://images.ucomics.com/comics/ga/";
	const url = `${archive + date.getUTCFullYear()}/ga${date.getUTCFullYear().toString().slice(-2)}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}.gif`;

	// Gets the image
	return [url, date.getUTCFullYear(), pad(date.getUTCMonth() + 1), pad(date.getUTCDate()), total];
}

bot.on("ready", () => console.info("I AM GARF"));

bot.on("message", message => {
	switch (message.content) {
		case "garf": message.channel.sendMessage(garfieldComic()[0]);
		case "last garf": message.channel.sendMessage(garfieldComic(true)[0]);
	}
});

bot.loginBot(token);
 
