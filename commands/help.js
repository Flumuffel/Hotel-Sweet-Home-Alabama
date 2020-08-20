const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "help",
    aliases: ["h"],
    categories: "Info",
    description: "Returns all commands, or one specific command info",
    usage: "[categorie | command]",
    run: (client, message, args) => {

        let commands = client.commands
        let groupFound = '';

        const onlyHelp = new MessageEmbed()
            .setColor(0x1D82B6)

        let commandsFound = 0;

        if (args.length == 0) {

            commands.forEach(cmd => {

                if (cmd.categories != "BOTOWNER") {

                    commandsFound++

                    onlyHelp.addField(`**${cmd.name}**`, `**Description:** ${cmd.description}\n**Usage:** ${client.prefix + cmd.name + " " + cmd.usage}\n   ‍   `)

                }
            })

            groupFound = 'ALL'

        } else if (args[0].toUpperCase() === 'CATEGORIES') {

            let groups = '';

            commands.forEach(cmd => {

                if (cmd.categories != "BOTOWNER") {
                    if (!groups.includes(cmd.categories)) {
                        groups += `${cmd.categories}\n`
                    }
                }

            })

            return message.channel.send({
                embed: {
                    title: "Categories",
                    color: 0x1D82B6,
                    description: `**${groups}**`,
                }
            })


        } else {

            commands.forEach(cmd => {

                if (groupFound == '') {
                    if (cmd.categories.toUpperCase() === args[0].toUpperCase()) {

                        groupFound = cmd.categories.toUpperCase()

                    }
                }

            })

            if (groupFound != '') {

                commands.forEach(cmd => {

                    if (cmd.categories.toUpperCase() === groupFound) {

                        commandsFound++

                        onlyHelp.addField(`**${cmd.name}**`, `**Description:** ${cmd.description}\n**Usage:** ${client.prefix + cmd.name + " " + cmd.usage}\n   ‍   `)

                    }
                })

            } else {

                let commandFound = '';
                let commandDesc = '';
                let commandUsage = '';
                let commandGroup = '';

                commands.forEach(cmd => {

                    if (commandsFound == '') {
                        if (cmd.name.toUpperCase() === args[0].toUpperCase()) {

                            commandFound = cmd.name;
                            commandDesc = cmd.description;
                            commandUsage = client.prefix + cmd.name + " " + cmd.usage;
                            commandGroup = cmd.categories.toUpperCase();

                        }
                    }
                })

                if (commandFound === '') {

                    return message.channel.send({
                        embed: {
                            color: 0x1D82B6,
                            description: `**No group or command found titled \`${args[0]}\`**`,
                        }
                    })

                } else {

                    return message.channel.send({
                        embed: {
                            title: '<> means required, [] means optional',
                            color: 0x1D82B6,
                            fields: [{
                                name: `**${commandFound}**`,
                                value: `**Description:** ${commandDesc}\n**Usage:** ${commandUsage}\n**Group:** ${commandGroup}`
                            }]
                        }
                    })

                }
            }

        }

        onlyHelp.setFooter(`Currently showing ${groupFound} commands. To view another group do ${client.prefix}help [categorie / command]`)
        onlyHelp.setDescription(`**${commandsFound} commands found** - <> means required, [] means optional`)

        return message.channel.send(onlyHelp)

    }
}