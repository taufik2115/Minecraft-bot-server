const { Client } = require("discord.js");
const mc = require("bedrock-protocol");
const fetch = require("node-fetch"); // untuk ping server

// Discord bot setup
const client = new Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] });

client.on("ready", () => {
  console.log(`✅ Discord bot login sebagai ${client.user.tag}`);
});

// Minecraft bot setup
const mcBot = mc.createClient({
  host: "Indomietelor.enderman.cloud", // ganti dengan alamat server
  port: 34357,                          // default Bedrock
  username: "Abdull Cilok",          // ganti sesuai nama bot
  offline: true
});

mcBot.on("join", () => {
  console.log("✅ Bot Minecraft berhasil join ke server!");
});

// Ping server supaya tetap hidup (opsional tapi direkomendasikan)
setInterval(() => {
  fetch('https://alamat-server-free-mc-server-anda.com') // ganti sesuai URL server
    .then(() => console.log('Server pinged'))
    .catch(err => console.log('Ping error:', err));
}, 5 * 60 * 1000); // tiap 5 menit

// Login Discord
client.login(process.env.DISCORD_TOKEN);
