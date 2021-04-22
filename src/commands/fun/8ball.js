const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "There is a big chance I insult you!",
  category: "info",
  run: async (bot, message, args) => {
    let question = args[0];
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
        "Bet it is true",
        "Never and Never"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball`)
        .setDescription(`Your Question: ${question}\nMy Reply: ${response}`)
        .setFooter(`Requested By: ${message.author.tag} | Thanks for Choosing MayBot`);
      message.channel.send(Embed);
    }
  },
};
