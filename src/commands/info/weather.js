const weather = require('weather-js');
const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weather <area>",
  run: (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    
    if(!args.length) {
      return message.channel.send(`<:redCross:796258564640866374> | Usage - **${prefix}weather <area>**`)
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setDescription("Temperature units can may be differ some time")
.addField("Temperature", `${result[0].current.temperature} Celcius`, true)
.addField("Sky Text", result[0].current.skytext, true)
.addField("Humidity", result[0].current.humidity, true)
.addField("Wind Speed", result[0].current.windspeed, true)//What about image
.addField("Observation Time", result[0].current.observationtime, true)
.addField("Wind Display", result[0].current.winddisplay, true)
.setFooter('Thanks for Choosing MayBot')
.setTimestamp()
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("**Unable To Get the data of Given location**")
}
});   
    
    
  }
}
