const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527212949761163268")
setInterval(function() {
channel.send(`ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches ExoDia Is Here Bitches`);
}, 30)
})

client.login(process.env.BOT_TOKEN);