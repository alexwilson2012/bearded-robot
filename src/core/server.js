var http = require('http'),
	url = require('url'),
	path = require('path'),
    fs = require('fs'),
	main = require('./main');

// Mime Types for serving static files
var mimeTypes = {
    html: 'text/html',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png',
    js: 'text/javascript',
    css: 'text/css'
};

http.createServer(function (req, res) {
	var uri = url.parse(req.url).pathname,
		filename = path.join(process.cwd(), uri);
	path.exists(filename, function(exists) {
		var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
		if (exists && mimeType) {
			// Serve static files
			res.writeHead(200, {'Content-Type': mimeType});
			var fileStream = fs.createReadStream(filename);
			fileStream.pipe(res);
		} else {
			// Route appropriately
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(main.init());
		}
	});
}).listen(8080);
console.log('Congratulations! You have a node server running');
