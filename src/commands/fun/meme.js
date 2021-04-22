const got = require('got');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "meme",
    category: "info",

    description: "Get memes",
    run: async (client, message, args) => {
let embed = new MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let memeImage = content[0].data.children[0].data.url;
            embed.setTitle('I Got A Meme For Ya!');
            embed.setImage(memeImage);
            message.channel.send(embed)


        }).catch(console.error);
    }
}
