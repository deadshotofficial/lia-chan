const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();
const db = require('quick.db');

module.exports = {
  name: "corona",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;  

    if(!args.length) {
      return message.channel.send(`<:redCross:796258564640866374> | Please give the name of country or try using - **${prefix}corona all**`)
    }

    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases

      let embed = new discord.MessageEmbed()
      .setTitle("Global Cases")
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);

      return message.channel.send(embed)



    } else {
      let corona = await track.countries(args.join(" ")) //change it to countries

      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);

      return message.channel.send(embed)


    }


  }
}
