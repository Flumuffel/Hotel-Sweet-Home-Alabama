module.exports = {
    name: "bug",
    aliases: ["support"],
    categories: "Info",
    description: "Report a bug or other problems with the bot.",
    usage: "",
    run: (client, message, args) => {

        return message.channel.send({
            "embeds": [
              {
                "title": "**Bug Report**",
                "description": "If you found out a bug and want to report it you can do that on the following page. Please create an issue with the label **\"bug\"**! \nThat would help us.\n\n**[Report here](https://github.com/Flumuffel/Hotel-Sweet-Home-Alabama/issues)**",
                "url": "https://github.com/Flumuffel/Hotel-Sweet-Home-Alabama/issues",
                "color": 1934006
              }
            ]
        })

    }
}
