const Discord = require('discord.js');
const bot = new Discord.Client({});
const auth=require("./auth.json");
const prefix = "$";

bot.on("ready", ()=>{
	//bot.user.setGame('with buckets');
	bot.user.setPresence({game:{name:"clinking coin sounds", type:"LISTENING"}});
});

bot.on("message", async message => {
	if(message.content.startsWith(prefix) !== true) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	const arg = message.content.substring(prefix.length+command.length).trim();

 	// if(command=="test"){
 	// 	message.channel.send("Test successful. Congratulations, you done did a thing.");
 	// }
 	if(command=="ducat"){
 		message.channel.send("$148.67");
 	}
 	if(command=="bucket"){
 		message.channel.send("$21,781.42");
	}
	if(command=="ducatsinabucket"){
		message.channel.send("There are 146.51 ducats in a bucket.");
	}
 	if(command=="todollars"){
 		let value = parseFloat(arg)*148.67;
 		message.channel.send("$" + value);
 	}
 	if(command=="shutup" || command=="shutupplease"){
 		message.member.voiceChannel.join().then(connection => {
			const dispatcher = connection.playFile('hammidshutup.mp3');
		 });
 		
	 }
	// if(command=="orca"){
	// }
	if(command=="leave"){
		message.member.voiceChannel.leave();
	}
	if(command=="say"){
		message.channel.send(arg);
	}


})

bot.login(auth.token);
