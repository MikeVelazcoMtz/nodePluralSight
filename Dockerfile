FROM node:latest

RUN mkdir -p /home/library
WORKDIR /home/library

COPY ./library/package.json /home/library/

RUN npm install

COPY ./library /home/library/

EXPOSE 5000