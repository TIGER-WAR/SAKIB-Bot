module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61570226640452") {
    var aid = ["61570226640452"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["সাকিব ভাই মেয়ে পটাতে ব্যাস্ত, কি বলবা আমাকে বলো🤖"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
