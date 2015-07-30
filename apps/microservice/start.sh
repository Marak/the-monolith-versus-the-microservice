node server.js &

# a better approach is to use the resource-http module
# instead of express, so that you can auto-port instead of passing in port
node worker.js -p 10000 &
node worker.js -p 10001 &
node worker.js -p 10002 &
node worker.js -p 10003 &
node worker.js -p 10004