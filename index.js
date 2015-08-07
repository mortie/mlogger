var colors = require("colors");

var theme = {
	timestamp: "blue",
	level_0: "grey",
	level_1: "yellow",
	level_2: "red",
	level_3: ["bold", "red"]
}

colors.setTheme(theme);

var strs = [
	"INFO:",
	"NOTICE:",
	"WARNING:",
	"ERROR:"
]

function pad(str, length, padChar) {
	if (typeof str === "number")
		str = str.toString();

	var missing = (length - str.length) + 1;

	if (missing <= 0)
		return str;

	return new Array(missing).join(padChar) + str;
}

function prefix(level) {
	var date = new Date();

	var yyyy = pad(date.getFullYear(), 4, "0");
	var mm = pad(date.getMonth() + 1, 2, "0");
	var dd = pad(date.getDate(), 2, "0");

	var HH = pad(date.getHours(), 2, "0");
	var MM = pad(date.getMinutes(), 2, "0");
	var SS = pad(date.getSeconds(), 2, "0");

	var dateStr = (yyyy+"/"+mm+"/"+dd+" "+HH+":"+MM+":"+SS).timestamp;
	var levelStr = strs[level]["level_"+level];

	return dateStr+" "+levelStr+" ";
}

function log(level, msg) {
	if (typeof msg === "string") {
		console.log(
			prefix(level)+
			msg["level_"+level]
		);
	} else {
		console.log(
			prefix(level)+
			(msg.toString()+" - stack trace:")["level_"+level]
		);
		console.trace(msg);
	}
}

exports.info = function(msg) { log(0, msg) };
exports.notice = function(msg) { log(1, msg) };
exports.warn = function(msg) { log(2, msg) };
exports.die = function(err, exitCode) {
	log(3, err);
	process.exit(exitCode || 1);
}

exports.setTheme = function(obj) {
	for (var i in obj) {
		theme[i] = obj[i];
	}
	colors.setTheme(theme);
}
