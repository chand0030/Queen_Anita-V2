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
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUkzVUtnMGluMU90emQvYW9ZOXFKM3pvSGp3S2RWSmlsVmtJbm1WeUVtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXo4VW5WQVVDc2MyQzYwVE5NS05qbDRuOVJUQm82VFBnNUdqNm5DOUxodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QTVkaVhLUWVOZXZaZWNHQUdRUEMyeUN3T08zeVg0WmloNE5ydldnVFY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UUJIQVZmVUNNa1B6UEY0eHAzSHVRaWtvU2NmSWk5dkowTk84RlZNOEVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEbDV2Sy83WDZyK3g1ZEc1bnNwUVJnOGVIYUluZVlkTDJiR2E3dmh2R3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ1d0N2NG5yWWZXVEtuZ280VzY5RXlaUTlrcXQ5NDFEbFVENy9MczRhVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5IaVdZYW94NGcySmcyWTJCcXFZUzJaREh4N3JlNXN1RFZYK0c0QzZtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWZCWHRvZmZzSkdteEFBaVF4MkFoUXc0azFOOGl4MlF1RFZzU1V1QVZEND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlphVm0zdVRFTndtcTJhSVJVM1F5Sm5Ob05EUFp2TEwybXZ3Yitxbk1MRFJ3WDZMb2lPTitkVU1mVmkwN0FxSlZnSDZ2WFJjS1Yza3ZmTmJVUm1CNmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6ImdQQ3lyOG45Q3lTNnFpUFRvaUJ2NUZhcVJ2UndCRVdTUG9rbk9wM2NxREE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVmOHlhbHBvUnVtTHlOd0YwYnh3YUEiLCJwaG9uZUlkIjoiZTc3MDkwMjgtYzZjOS00MmFjLTgwOTMtODllZmQyYjFlZWQ5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlwSm55eEsyQkJoU3BQMHRseThRVGRzNlppMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5S0I4ZXFPMS83YWV0Q2lVNXdqaVVGRXo4L0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkNMWThCQ0UiLCJtZSI6eyJpZCI6IjkyMzIwNzA2Njg2NToxNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLYgdiM25TZhNmO24zZjNis2Y7bjNmM2YbaiNmMICDYs9mO2b7ZkNin2LnZkNqI2Y7YsdmM25QgINuU2aPZpdmiXG7Ynlxu2J5cbtieXG7Ynlxu2J5cbtieXG7Ynlxu2J5cbtieXG7Ynlxu2J5cbtieXG7Ynlxu2J4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yUDlxMENFTytvajdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFtSXQxcE11UEhiM0s3aGhscFdXTVdFV1M0Y0RkWUQ4enIySlZ3VXVtQ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhTWWIzSjBGcGR5NDcwa2xRcDFQdXFTd05rZVoxT29oRGk1OWFaQ1E4MGxkbGxOM0w5eDJ3ekMxWElWTG1CNlhEZ0RPQW8ydm50K1JTeEJXM2pabER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3ZnVuaEo1ZzZpZnU0M0ZDaHF1VG8vWUplSUFqaWF1c21abWd5K0w1RDJJMXliVXhiTVd4Y2doTjhRS3hIdFdhOW9uM1F1LzR2cFdlT3NmYTlUV1RnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIwNzA2Njg2NToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSmlMZGFUTGp4Mjl5dTRZWmFWbGpGaEZrdUhBM1dBL002OWlWY0ZMcGdzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDEyNzk1fQ=="
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
