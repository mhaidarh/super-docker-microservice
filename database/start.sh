#!/bin/sh

# Run the MySQL container, with a database named 'users' and credentials
# for a users-service user which can access it.
echo "Starting MySQL database..."
docker run --name mysqldb -d \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=users -e MYSQL_USER=users_service -e MYSQL_PASSWORD=123 \
  -p 3306:3306 \
  mysql:latest

# Wait for the database service to start up.
echo "Waiting for MySQL database to start up..."
docker exec mysqldb mysqladmin --silent --wait=3 -uusers_service -p123 ping || exit 1

# Run the setup script.
echo "Setting up initial data in MySQL database..."
docker exec -i mysqldb mysql -uusers_service -p123 users < setup.sql
