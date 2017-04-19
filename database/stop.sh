#!/bin/sh

# Stop the db and remove the container.
docker stop mysqldb && docker rm mysqldb
