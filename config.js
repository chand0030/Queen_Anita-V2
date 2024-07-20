//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BpM3hCOTY0cTJtc05LbUM0VVlVVnFMb3JDL3FpKzJHOXkrWEFSRDFuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkpOTjE5M1M2YzFnMUY3dXZrQ0Z6dHpkSW5yWVZwOXB4SGpBalgwaDhXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T1J5MmRGSFAxckUzYmMxYk5OazZYbWxKbjdwL082Q0d3Y3hGTjE4Z0c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWeUJOWXd3SnhDYWhEWkEraUxwK0dyTUN5L1IxRU9rcGEyazczSmJOQ3hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KdXZKMDNsM2ZMUG1IZlRhd0JBMmlFNktxci9KTnhIc3laYTFaRUZWWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxmUUxFNTFYNXZ4bFdxbVg1TS9meWYyWFZzZWpHampKeU5SYXBPaTFYQTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia08zbmVtK1dGMStrakM5a0tSb2krYVY5b20xeXRLaWxIS3dDalBpaU8yST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibldLcTZkcWY5UlEreXkwK1A5Z3NhNElCNkJXaGVsV1FQMzRLYTk4RlVsRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVLTE1tSWMrMVBWUGhEQXYrUS9DLzQwTEplVEdXRG81Nmc4bHhzRWt3RXE0QVk3WmgzT1VDUnRsMTI5VFBZeWIrY0dGQjY0NjZFSHY1bGR1Wmg2N0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiI0TW9CUFFlZXpkRHcrb2tDL2UvMXhFOGFMZGJCVytzRlV5Zmc0VjR4aldrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3MTIwOTIwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NjMwRDhENkNERjVGOUYwOUZFNzVGRDRGRjRFNzA4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDk2MDg5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkcC1WOUtPS1FNbV9kY3ZaMFAydnpRIiwicGhvbmVJZCI6IjhhNmU5ODY3LTVmMjgtNGI2Yi1iNTdhLTg0MDliNDI3NDFiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1YU9icVordGZwREVyNnNVSVVjS2hoZ3ZjL3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0xnc0djb0llMGF0bDJHV3RKZWNRM1I3aW9NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVYN1RGQ0dNIiwibWUiOnsiaWQiOiI5MjMyNzEyMDkyMDc6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCVIPCThqkg8J2Qk/CdkIcn2Lkg8J2Qg/CdkITwnZCC8J2QhPCdkI3wnZCTIPCdkIHwnZCO8J2QiPCdkIgg8JOGqiDLkM2iwrtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG7wk4apIPCdkIjKiPCdkJcg8J2QgPCdkIfwnZCM8J2QhPCdkIMg8JOGqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1IaTRnRUVJams3N1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMTh4TjVvYzRESTBnV3pWQmlVZTIzb0FUdDN4cEtYODRsUjQxUE9PMVBTRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidzRkaHB5V0FaeVU3WHZWZEdBWVEzVW8xY3Q5d3hHOGpEbHlMZzQyZHNobURrZyt0VTFSbHIvRFUwY0drbXVjNm5ZcTVKN0JwOUlDSnFGV3NmbDE2QlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImdNR0ZacHpGdE9GRm5sYXpqc3pFQlVXSTJtd0d6TDB4dEhTbUh5empYRENSMyszelhNYVdtWnlsa1lJUHkxZ0dqOGY1OGkzYjRDdHpRNGw5Y05GbURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjcxMjA5MjA3OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRmTVRlYUhPQXlOSUZzMVFZbEh0dDZBRTdkOGFTbC9PSlVlTlR6anRUMGgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0OTYwODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ01UIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
