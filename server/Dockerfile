FROM node:alpine

EXPOSE 3001

WORKDIR /opt/server

COPY ./src /opt/server/src
COPY *.json /opt/server/

RUN npm i

CMD [ "npm", "start" ]