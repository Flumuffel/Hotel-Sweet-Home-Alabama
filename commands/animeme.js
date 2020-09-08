const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
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

        message.channel.startTyping();

        const img = randomPuppy(random).then(url => {
            snekfetch.get(url).then(async res => {
                const embed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setImage(res.body)
                    .setTitle(`From /r/${random}`)
                    .setURL(`http://reddit.com/r/${random}`)
                await message.channel.send(embed).then(() => message.channel.stopTyping());
            })
        })

    }
}
