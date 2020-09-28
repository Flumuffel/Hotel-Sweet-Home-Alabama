//Auto Updater
 var AutoUpdater = require('auto-updater');

    var autoupdater = new AutoUpdater({
     pathToJson: '',
     autoupdate: false,
     checkgit: true,
     jsonhost: 'raw.githubusercontent.com',
     contenthost: 'codeload.github.com',
     progressDebounce: 0,
     devmode: false
    });

    // State the events
    autoupdater.on('git-clone', function() {
      console.log("You have a clone of the repository. Use 'git pull' to be up-to-date");
    });
    autoupdater.on('check.up-to-date', function(v) {
      console.info("You have the latest version: " + v);
    });
    autoupdater.on('check.out-dated', function(v_old, v) {
      console.warn("Your version is outdated. " + v_old + " of " + v);
      autoupdater.fire('download-update'); // If autoupdate: false, you'll have to do this manually.
      // Maybe ask if the'd like to download the update.
    });
    autoupdater.on('update.downloaded', function() {
      console.log("Update downloaded and ready for install");
      autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually.
    });
    autoupdater.on('update.not-installed', function() {
      console.log("The Update was already in your folder! It's read for install");
      autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually.
    });
    autoupdater.on('update.extracted', function() {
      console.log("Update extracted successfully!");
      console.warn("RESTART THE APP!");
    });
    autoupdater.on('download.start', function(name) {
      console.log("Starting downloading: " + name);
    });
    autoupdater.on('download.progress', function(name, perc) {
      process.stdout.write("Downloading " + perc + "% \033[0G");
    });
    autoupdater.on('download.end', function(name) {
      console.log("Downloaded " + name);
    });
    autoupdater.on('download.error', function(err) {
      console.error("Error when downloading: " + err);
    });
    autoupdater.on('end', function() {
      console.log("The app is ready to function");
    });
    autoupdater.on('error', function(name, e) {
      console.error(name, e);
    });

    // Start checking
    autoupdater.fire('check');

//SCRIPT
const { Client, User, MessageEmbed, Collection } = require("discord.js");
const client = new Client();
const fs = require("fs");
const logger = require("discordjs-logger");
// logger.all(client);
require('dotenv').config();

// Constand Variables
const prefix = "h!";
const ownerID = '274209471968837634';
client.ver = "1.0.0"

//SPEED DATING
client.sdplayer1 = []
client.sdplayer2 = []

// Collections
client.prefix = prefix;
client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

// Load commands
["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// Listener Events
client.on('message', async message => {

    /* SEND PREFIX ON METION
        if (message.content = "<@&708816611716366357>") {
            return message.channel.send({
                embed: {
                    color: 0x1D82B6,
                    description: `**The prefix of this server is \`${client.prefix}\`**`,
                }
            })
        }
     */



    if (message.author.bot) return;
    if (!message.content.startsWith(client.prefix)) return;

    if (message.channel.type !== 'text') {
        // Now we can do stuff in dm's

        // First we get the activity info

    }

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let fullCmd = message.content.slice(prefix.length + cmd.length).trim()

    // Command Handler
    try {

        // Options
        let ops = {
            ownerID: ownerID
        }

        let command = client.commands.get(cmd);

        if (!command) command = client.commands.get(client.aliases.get(cmd));
        
        if (command) {
            command.run(client, message, args, ops, fullCmd);
        }

    } catch (e) { // Error handler
        console.log(e.stack);
    }
});

//LOGGING

// client.on("guildUpdate", function (oldGuild, newGuild) {
//     console.log(`Guild: ${oldGuild} changed to ${newGuild}!`);
// });

// client.on("roleCreate", function (role) {
//     console.log(role);
// });
// client.on("roleDelete", function (role) {
//     console.log(role);
// });
// client.on("roleUpdate", function (oldRole, newRole) {
//     console.log(`[UPDATE] ${oldRole} to ${newRole}`);
// });

// client.on("guildMemberUpdate", function (oldMember, newMember) {
//     console.error(`[ROLE] ${newMember.user.tag}`);
// });

// client.on("debug", function (info) {
//     console.log(`debug -> ${info}`);
// });

// client.on("guildMemberAdd", function (member) {
//     console.log(`a user joins a guild: ${member.tag}`);
// });

// client.on("message", function(message) {
//     console.log(`${message.author.tag} | ${message.channel.name}`);
//   });

// Discord Login
client.login(process.env.TOKEN);
