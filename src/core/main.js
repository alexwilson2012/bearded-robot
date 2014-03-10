var handlebars = require("handlebars"),
	fs = require("fs");

var main_init = function(){
	var template = fs.readFileSync("src/core/index.html", "utf8"),
		tpl_object = handlebars.compile(template),
		vars = {
			title: 'Alex Wilson on Node.js!'
		};
	return tpl_object(vars);
};

exports.init = main_init;