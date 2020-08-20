const randomPuppy = require('random-puppy');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "animeme",
    aliases: ["anime"],
    categories: "Fun",
    description: "Returns a epic meme",
    usage: "",
    run: (client, message, args) => {

        const subReddits = ['DnDAnimemes', 'animememes', 'Animemes', 'animemebank', 'animememes', "wholesomeanimemes", "MemesOfAnime"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = randomPuppy(random)
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`http://reddit.com/r/${random}`)

        message.channel.send(embed)

    }
}
