module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐌𝐃. 𝐒𝐀𝐊𝐈𝐁 𝐇𝐎𝐒𝐄𝐍
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ᏕᏗᏦᎥᏰ ᏰᏂᏗᎥ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐒𝐋𝐀𝐌
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐋𝐋𝐀𝐏𝐀𝐑𝐀, 𝐒𝐈𝐑𝐀𝐉𝐆𝐀𝐍𝐉, 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇.
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐋𝐋𝐀𝐏𝐀𝐑𝐀, 𝐒𝐈𝐑𝐀𝐉𝐆𝐀𝐍𝐉, 𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇.
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐀𝐋𝐄
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐈𝐍𝐆𝐋𝐄
𝐖𝐨𝐫𝐤        : 𝐒𝐓𝐔𝐃𝐄𝐍𝐓
𝐆𝐦𝐚𝐢𝐥       : 𝐭𝐨𝐫𝐛𝐚𝐩𝐬𝐚𝐤𝐢𝐛@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: 𝟎𝟏𝟕𝟔𝟓𝟎𝟓𝟏𝟐𝟏𝟗
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : 𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐒𝐚𝐤𝐢𝐛.𝐁𝐡𝐚𝐢.𝟒𝐱"`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/472796285_122118705218674221_5876343853182013289_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=f7w_6cpYvVkQ7kNvgFg1rI8&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=AFX7E422HlBZQWDTILGiLpV&oh=00_AYAsrNFul7j8bCLm7vAk4x_nmIrR76CUqWQadsPhqGC4JA&oe=67A8F218`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
