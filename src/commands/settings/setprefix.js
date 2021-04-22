const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setprefix",
  category: "info",
  usage: "setprefix <prefix>",
  description: "Set the Prefix",
  run: (client, message, args) => {
    let prefix = args[0]
    if(!prefix) return message.channel.send('To Change the Prefix: `<prefix>setprefix <new-prefix>`')
    
    db.set(`prefix_${message.guild.id}`, prefix)
    message.channel.send(`<:tickYes:796258492096708609> | Prefix Set to **${prefix}**`);

  }
}
