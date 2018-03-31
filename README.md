# NodePluralSight project

This is a personal project to get introduced into development with Node and Express framework.

The commits in this project will be added depending on the advance on the tutorial.

Not all of the videos have an equivalent commit because some of them require of unavailable resources (like an SQL Server instance) or they just doesn't make changes into the source code (like introduction or summary videos).

Some changes might have be done on the code in order to make some dependencies to work with the latest versions of the tools used during the course.

# How to run this project

Right now this project only depends on node and npm and that's all we need to make this project work on any computer.

There are two ways to run this application:

  1. Run it directly on your computer by running `npm start`.
  2. Run this application with docker-compose by running `docker-compose up`.

If want to work directly on your computer you must run `npm install && bower install` in order to install all of the dependences.

When you get to the part where you need to use a database, you won't have to worry with docker-compose, but if you are working with on your computer you must provide the required configuration to the project for the DB functions.


**IMPORTANT**

By the moment I was doing this tutorial bower was on way to get deprecated, maybe by the time you see this bower is not maintained anymore. If you consider to use or test this project try to migrate the bower dependencies  to Yarn or Webpack. 