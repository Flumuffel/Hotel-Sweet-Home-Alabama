module.exports = {
    name: "removerole",
    aliases: [],
    categories: "BOTOWNER",
    description: "Un-Role a user.",
    usage: "",
    run: (client, message, args, ops) => {

        if (!message.author.id === ops.ownerID) return message.channel.send("Only the Bot Owner can use that command!");

        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!rMember) return message.author.send("Couldn't find that user.");
        let role = args.join(" ").slice(22);
        if(!role) return message.author.send("Specify a role!");
        let gRole = message.guild.roles.find(`name`, role);
        if(!gRole) return message.author.send("Couldn't find that role.");

        if(rMember.roles.has(gRole.id));
        await(rMember.removeRole(gRole.id));


    }
}
