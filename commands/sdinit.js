module.exports = {
    name: "sdinit",
    aliases: [""],
    categories: "Speed dating",
    description: "Speed dating command",
    usage: "",
    run: (client, message, args) => {

        client.sdplayer1 = []
        client.sdplayer2 = []

        let players = []
        let desc = ""
        let count = 0;
        let vc;
        vc = message.member.voice.channel;
        let membersOfVC = vc.members;

        membersOfVC.forEach(user => {
            if (!user.roles.cache.some(role => role.name === 'Dating Master')) {
                players[count] = user
                count = count + 1
            }
        });

        message.channel.send({
            embed: {
                title: "Speed Dating | Initzialisieren",
                color: 0x1D82B6,
                description: `Es wurden **${count} Spieler** auf die Liste gesetzt!`,
            }
        })

        for (let index = 0; index < count; index++) {
            if(index<(count/2)){
                client.sdplayer1[index] = players[index]
            } else {
                client.sdplayer2[index] = players[index]
            }
        }

    }
}