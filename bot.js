const Discord = require('discord.js');
const bot = new Discord.Client({});
const auth=require("./auth.json");
const prefix = "!";

bot.on("ready", ()=>{
	bot.user.setGame('with buckets');
});

bot.on("message", async message => {
	if(message.content.startsWith(prefix) !== true) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const arg = message.content.substring().trim();
 	const command = args.shift().toLowerCase();

 	// if(command=="test"){
 	// 	message.channel.send("Test successful. Congratulations, you done did a thing.");
 	// }
 	if(command=="ducat"){
 		message.channel.send("$148.67");
 	}
 	if(command=="bucket"){
 		message.channel.send("$21,781.42");
 	}
 	if(command=="toDollars"){
 		let value = arg*148.67;
 		message.channel.send("$" + value);
 	}
 	if(command=="shutup" || command=="shutUpPlease"){
 		message.member.voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('hammidshutup.mp3');
		 });
 		
	 }
	//  if(command=="leave"){
	// 	bot.voiceChannel.leave();
	//  }


})

bot.login(auth.token);