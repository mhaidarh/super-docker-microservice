# Node.js Docker Microservice

Learn Docker by building a Microservice!

This is a companion project to '[Learn Docker by building a Microservice](http://www.dwmkerr.com/learn-docker-by-building-a-microservice/)' demonstrating key concepts of Docker using a Node.js microservice as an example.

# Prerequisites

You must have Docker installed for this code to work! Check the [Installation Guide](https://docs.docker.com/engine/installation) if you haven't got it installed.

# Coding

To start or stop the test database, build the users-database image and run it:

```bash
cd ./users-database
docker build -t users-database .
docker run -it -p 3306:3306 users-database
```

Some commands for working with the test server:

```bash
cd ./users-service
npm install   # setup everything
npm test      # unit test - no need for a test database running
npm start     # run the server - you must have a test database running
npm run debug # run the server in debug mode, opens a browser with the inspector
npm run lint  # check to see if the code is beautiful
```

You can also run the test server in its own container:

```bash
docker build -t users-service .
docker run -it -p 4000:4000 --link mysqldb:mysqldb -e DATABASE_HOST=DB users-service
```

# Integration Testing

To test the entire stack, run:

```bash
docker-compose build
docker-compose -d up
sleep 10 # give the database server enough time to start!
cd integration-test && npm start && cd ..
docker-compose -d down
```
