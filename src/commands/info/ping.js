module.exports = {
    name: "ping",
    category: "info",
    description: "get bot ping :/",
    usage: "As!ping",
    run: (client, message) => {
        message.channel.send(`🏓 | Pong! **${client.ws.ping}**`);
    }

}
