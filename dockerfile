FROM node:alpine

WORKDIR /opt/serversql/

COPY ./src /opt/serversql/src

COPY ./*.json /opt/serversql/

ENV PORT=''
ENV JWT_SECRET=''
ENV SENHA=''
ENV URLBANCO=''

EXPOSE 3000

RUN npm i

CMD [ "npm", "start" ]
