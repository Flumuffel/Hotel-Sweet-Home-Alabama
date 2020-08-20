const { readdirSync } = require("fs");

const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("Commands-Handler");
table.setHeading("Command", "Loads?");

console.log("");

module.exports = (client) => {
    // Read every commands subfolder
    const commands = readdirSync(`./commands/`).filter(file => file.endsWith(".js"));

    // Loop over the commands, and add all of them to a collection
    // If there's no name found, prevent it from returning an error,
    // By using a cross in the table we made.
    for (let file of commands) {
        let pull = require(`../commands/${file}`);

        if (pull.name) {
            client.commands.set(pull.name, pull);
            table.addRow(file, "✔ / Yes");
        } else {
            table.addRow(file, "✗ / No");
            continue;
        }

        // If there's an aliases key, read the aliases.
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
    // Log the table
    console.log(table.toString());
}