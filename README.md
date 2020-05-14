# Calipsa

Calipsa Dev Assignment

## Getting Started

To run the project type
```
docker-compose up
```

## Running the tests

```
npm test

```

### Run linter

```
./node_modules/.bin/eslint .
```


## What is used

- Node JS
- Vue JS
- Socket.io
- Webpack
- ExpressJS
- lowdb


### Some Details.

Application has two seperate servers and one front end application. first one is Socket server that will be listening on 127.0.0.1:3000 and the other one is application server where our rest api's are hosted . and the front end application is listening on 127.0.0.1:9000

### Authentication Methods.

Auth methods are defined in const files located in Calipsa/src/utils/constants and every source has an auth method attached to it. that can be changed in the constants if needed.



