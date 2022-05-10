const { Channel } = require("discord.js");

module.exports = {
	name: 'greetings',
	aliases: ['greet'],
	description: 'Hello my dear',
	cooldown: 5,
	guildOnly: true,
	args: false,
	usage: false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
  
        
        msg.channel.send(`Hello ${msg.author},`);
        
	},
};