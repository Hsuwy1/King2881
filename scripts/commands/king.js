const fs = require("fs");
module.exports.config = {
  name: "siyamSEYAMSIYAM",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: " ●══❥𝄞⋆⃝💝👀😺সিয়াম বস এখন তার হবু বউকে নিয়ে কল্পনায় ঘুমায়__😑😒 যা বলার আমাকে বল ●༆🌺●─༆༊🦋:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
