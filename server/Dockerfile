FROM node:alpine

EXPOSE 3001

WORKDIR /opt/server

COPY ./src /opt/server/src
COPY *.json /opt/server/

ENV DB=mongodb://localhost:27017
ENV PORT=3001
ENV JWT_SECRET=@tokenJWT

RUN npm i

CMD [ "npm", "start" ]