#!/bin/bash
# Boot up the Node.js server into test mode
if [ "$1" = "dev" ]; then
	echo Starting up in development mode
	forever -w src/core/server.js
else
	echo Starting up in production mode
	forever start src/core/server.js
fi
