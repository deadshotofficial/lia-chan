const discord = require("discord.js");

module.exports = {
name: "about",
  description: "Get the information about the bot",
  category: "info",
  usage: "about",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("About Me")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(`Made with :heart: by DeadShot`, client.user.displayAvatarURL())
    .setDescription('<:bot:780263750351585281> A Bit of Info About the Bot:')
    .addField('Client Name:', [
        `${client.user.tag}`
    ])
    .addField('Client ID:', [
        `${client.user.id}`
    ])
    .addField('Developers:', [
        'DeadShot (Main Dev) | Serena (Support Dev)'
    ])
    .addField('Internal Info:', [
        'System: DiscordJS',
        'Database: Ytdl-Core | FFMPEG | Quick.db',
        'Version: 1.0.0'
    ])
    .addField('<a:Right_arrow:806860260237246465> __Quick Links__:', [
        `[GitHub](https://github.com/deadshotofficial) • [Support](https://discord.gg/yZKzUxu)`
    ])
    message.channel.send(embed)
    
    
    
  }

}
