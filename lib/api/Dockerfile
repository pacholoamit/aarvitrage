FROM node:14-alpine

ENV PORT 4000
EXPOSE 4000

WORKDIR /usr/src/app
COPY package*.json yarn.lock ./

RUN yarn --network-timeout 1000000
COPY . .

RUN yarn build


CMD yarn start:prod
