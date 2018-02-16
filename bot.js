const Discord = require('discord.js');
//var auth = require('./auth.json');
const bot = new Discord.Client({});
const auth=require("./auth.json");
const prefix = "!";
const yt = require('ytdl-core');
const streamOptions = { seek : 0, volume : 1};

bot.on("ready", ()=>{
	bot.user.setGame('with buckets');
});

bot.on("message", async message => {
	if(message.content.startsWith(prefix) !== true) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const arg = message.content.substring().trim();
 	const command = args.shift().toLowerCase();

 	if(command=="test"){
 		message.channel.send("Test successful. Csdbongratulations, you done did a thing.");
 	}
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
 	if(command=="shutup"){
 		message.member.voiceChannel.join().then(connection => {});
 		//const dispatcher = connection.play(yt("https://www.youtube.com/watch?v=PuhOtBcw5_E", { audioonly: true }));
 		//connection.play(ytdl("https://www.youtube.com/watch?v=PuhOtBcw5_E",{ filter: "audioonly" }));
 		
		//const stream = yt('https://www.youtube.com/watch?v=PuhOtBcw5_E', {filter : 'audioonly'});
        //const dispatcher = connection.playStream(stream, streamOptions);
		const dispatcher = connection.playFile('hammidshutup.mp3');
		//bot.voiceConnection.playSound(stream);

 	}


})

bot.login(auth.token);