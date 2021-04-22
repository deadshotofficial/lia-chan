module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send(':no_entry_sign: I\'m sorry but you need to be in a voice channel to play music!');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send(':no_entry_sign: There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end(':track_next: Skipped!');
	}
};
