const fs = require("fs");
const ascii     = require("ascii-table");
let asciitable2 = new ascii("Event-Handler");
asciitable2.setHeading("Event", "Loads?");

console.log("");

module.exports = (client) => {
    const load = dir => {
        const events = fs.readdirSync(`./events/${dir}/`).filter(x => x.endsWith(".js"));
        for(let file of events) {
            const evt = require(`../events/${dir}/${file}`);
            const eName = file.split(".")[0];
            asciitable2.addRow(dir+"/"+eName+".js", "✔ / Yes")
            client.on(eName, evt.bind(null, client));
        }
    }
    ["client", "guild"].forEach(x => load(x));
    console.log(asciitable2.toString());
}