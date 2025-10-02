const { Client } = require("discord.js");
const mc = require("bedrock-protocol");

const client = new Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] });

// Login Discord Bot
client.on("ready", () => {
  console.log(`✅ Discord bot login sebagai ${client.user.tag}`);
});

// Contoh bot Minecraft auto-join
const mcBot = mc.createClient({
  host: "your-server-ip", // ganti ip server kamu
  port: 19132,            // port default Bedrock
  username: "BotName",    // nama bot Minecraft
  offline: true
});

mcBot.on("join", () => {
  console.log("✅ Bot Minecraft berhasil join ke server!");
});

client.login(process.env.DISCORD_TOKEN); // token disimpan di GitHub Secrets
