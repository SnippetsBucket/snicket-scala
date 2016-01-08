# Contributing to Snicket
Snicket is OSS product of provide free.

Please consider the contribution by all means.

## About Issue/PullRequest
Please you search for existing, related Issues/pullrequests.

## How to build development enviroment of Snicket

### Building

The following middleware is necessary for build application.

- node >= 5.3.0
- scala

#### Build frontend
To install each module of node.

Module required for the processing written in the `package.json`.
```
$ npm install
```

Run a gulp tasks.

As soon as reflect the change code Because we use a browserSync.

Automatically build javaScript files will be in the `public/js/bundle/` folder.
```
$ npm start
```

#### Development of API

To run the current application in development mode, use the run command.
```
$ ./activator run
```

You can then connect using Java debugger. Use the activator `-jvm-debug <port>` command to do that
```
$ ./activator run -Dhttp.port=9000 -jvm-debug 9999
```
