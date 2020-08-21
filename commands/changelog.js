var request = require('request');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    aliases: [],
    categories: "Info",
    description: "Send you the changelog of the bot",
    usage: "",
    run: (client, message, args) => {

        request('https://api.github.com/repos/Flumuffel/Hotel-Sweet-Home-Alabama/releases', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);// Print the HTML for the Google homepage.
        });

    }
}
