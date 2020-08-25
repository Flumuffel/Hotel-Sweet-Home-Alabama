var request = require('request');
var version;

var options = {
    url: 'https://api.github.com/repos/Flumuffel/Hotel-Sweet-Home-Alabama/releases',
    headers: {
        'User-Agent': 'request'
    }
}
request(options, function (error, response, body) {
    let config = JSON.parse(body)
    version = config[0].tag_name;
});

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "idle",  //You can show online, idle....
        game: {
            name: `${version}`,  //The message shown 
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
}