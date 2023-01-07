# local dev server
basic server for testing orbit-iOS during development. 
## usage
run `npm i` to install necessary npm dependencies  
to start dev server, run `node server.js`  

### https hosting (for non-local testing)

to start dev server in https mode, run `node server.js --https`

when running in https mode, the app expects a private key (named `private.key`) and certificate file (named `certificate.crt`) in directory `./ssl/`. **never commit the `ssl` directory.**