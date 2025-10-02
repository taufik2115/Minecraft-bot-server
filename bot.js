const { Client, GatewayIntentBits } = require("discord.js");
const mc = require("bedrock-protocol");

// Discord bot setup
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ] 
});

client.on("ready", () => {
  console.log(`✅ Discord bot login sebagai ${client.user.tag}`);
});

// Minecraft bot setup
const mcBot = mc.createClient({
  host: "Indomietelor.enderman.cloud", // ganti dengan alamat server
  port: 34357,                         // port Bedrock server
  username: "Abdull Bridge",            // nama bot Minecraft
  offline: true
});

mcBot.on("join", () => {
  console.log("✅ Bot Minecraft berhasil join ke server!");
});

// Login Discord pakai token dari Secrets
client.login(process.env.DISCORD_TOKEN);
