FROM node:lts-alpine3.15

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn --network-timeout 1000000

COPY . .

EXPOSE 4000

CMD ["yarn", "run", "start:dev"]