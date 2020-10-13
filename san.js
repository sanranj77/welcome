const Discord = require("discord.js");
const san = new Discord.Client();
const invites = {};
const wait = require("util").promisify(setTimeout);
const moment = require("moment");
const fs = require("fs");
var prefix = "N/";

san.on("ready", () => {
  san.user.setActivity("BY SAN ", { type: "Playing" });
  san.user.setStatus("idle");
});

san.on("ready", () => {
  console.log(`Logged in as ${san.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${san.user.username} " ]`);
  console.log("");
  console.log("information:");
  console.log("");
  console.log(`servers! [ " ${san.guilds.size} " ]`);
  console.log(`Users! [ " ${san.users.size} " ]`);
  console.log(`channels! [ " ${san.channels.size} " ]`);
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(" Bot Is Online");
  console.log("╚[════════════]╝");
  console.log("");
  console.log("");
});

san.on("guildMemberAdd", member => {
  let memberavatar = member.user.avatarURL;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":bust_in_silhouette: | name : ", `${member}`)
    .addField(":microphone2: | Welcome!", `Welcome To The Server, ${member}`)
    .addField(":id: | User :", "**[" + `${member.id}` + "]**")
    .addField(
      ":family_mwgb: | Members Count Now",
      `${member.guild.memberCount}`
    )
    .addField("Name", `<@` + `${member.id}` + `>`, true)
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`${member.guild.name}`)
    .setTimestamp();
  member.send(embed);
});
///////////////لە وێلکۆم بەخێرهاتن دەکاتن

san.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "【✨】𝗪𝗘𝗟𝗖𝗢𝗠𝗘");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(" > :bust_in_silhouette: | Member Name : ", `${member}`)
    .addField(" > :hibiscus:| Welcome 😍", `, `)
    .addField(" > :id:| Member ID :", "**[" + `${member.id}` + "]**")
    .addField(" > :family_mwgb:⎮ You Are Number", `${member.guild.memberCount}`)
    .addField(" > ⎮Server Name", `${member.guild.name}`, true)
    .setFooter(`${member.guild.name}`)
    .setImage(
      "https://cdn.discordapp.com/attachments/728333268918861845/732901673550479410/image0-5.gif"
    )
    .setTimestamp();

  channel.sendEmbed(embed);
});
//////////// ئەوەش بۆ لێفت کردنە
san.on("guildMemberRemove", member => {
  let channel = member.guild.channels.find("name", "【👋】𝗟𝗘𝗙𝗧");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField("Member Name:", `${member}`)
    .addField("Left The Server")
    .addField("Members Count Now", `${member.guild.memberCount}` + "Member")
    .setFooter(`${member.guild.name}`)
    .setImage(
      "https://cdn.discordapp.com/attachments/703243461079597138/757963712337412106/9P910Qmy7TSbKu6dH1.gif"
    )
    .setTimestamp();

  channel.sendEmbed(embed);
  
san.on("ready", () => {
  san.user.setActivity("BY SAN", { type: "Playing" });
  san.user.setStatus("idle");
});
  channel.sendEmbed(embed);
})
