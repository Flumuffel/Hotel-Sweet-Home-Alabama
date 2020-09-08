module.exports = {
    name: "sdreset",
    aliases: [""],
    categories: "Speed dating",
    description: "Speed dating command",
    usage: "",
    run: (client, message, args) => {

        if(client.sdplayer1.length != 0 || client.sdplayer2.length != 0) {
            var role= message.guild.roles.cache.find(role => role.name === "Date in game");

            client.sdplayer1.forEach(user => {
                user.roles.remove(role);
            })
            client.sdplayer2.forEach(user => {
                user.roles.remove(role);
            })

            client.sdplayer1 = []
            client.sdplayer2 = []

        } else {


        }

    }
}