module.exports = {
	name: 'volume',
	description: 'Volume command.',
	cooldown: 5,
	execute(message, args) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send(':no_entry_sign: I\'m sorry but you need to be in a voice channel to play music!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send(':no_entry_sign: There is nothing playing.');
		if (!args[0]) return message.channel.send(`✅ The current volume is: **${serverQueue.volume}**`);
		[serverQueue.volume] = args;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
		return message.channel.send(`✅ I set the volume to: **${args[0]}**`);
	}
};
