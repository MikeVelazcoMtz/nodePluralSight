FROM node:latest

RUN mkdir -p /home/library
WORKDIR /home/library

RUN echo '{ "allow_root": true }' > /root/.bowerrc
COPY ./library/package.json /home/library/
COPY ./library/bower.json /home/library/
COPY ./library/.bowerrc /home/library/

RUN npm install \
    && npm install -g bower\
    && npm install -g gulp\
    && bower install

COPY ./library /home/library/

EXPOSE 5000