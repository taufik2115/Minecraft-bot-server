const { Client } = require("discord.js");
const mc = require("bedrock-protocol");

// Discord bot setup
const client = new Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] });

client.on("ready", () => {
  console.log(`✅ Discord bot login sebagai ${client.user.tag}`);
});

// Minecraft bot setup pakai akun Xbox (Microsoft)
const mcBot = mc.createClient({
  host: "Indomietelor.enderman.cloud",   // alamat server
  port: 34357,                           // port server
  username: process.env.MC_EMAIL,        // ambil dari GitHub Secrets
  password: process.env.MC_PASSWORD,     // ambil dari GitHub Secrets
  version: "1.21.100",
  authTitle: "00000000402b5328",         // Xbox Live App ID
  flow: "msal"                           // WAJIB untuk Microsoft login
});

mcBot.on("join", () => {
  console.log("✅ Bot berhasil login ke server Minecraft via Xbox!");
});

mcBot.on("disconnect", (packet) => {
  console.log("❌ Disconnect:", packet);
});

// Login Discord
client.login(process.env.DISCORD_TOKEN);
