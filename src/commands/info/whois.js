const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "whois",
    category: "info",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online7:740870851431235584> online";
                break;
            case "dnd":
                status = "<:dnd7:740870877582983269> dnd";
                break;
            case "idle":
                status = "<:idle7:740870819378364569> idle";
                break;
            case "offline":
                status = "<:offline7:740870912844365926> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle('__User Information__')
            .setFooter('Thanks for Choosing MayBot')
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: "Current Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Join Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" , "),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}
