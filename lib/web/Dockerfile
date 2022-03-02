FROM node:lts-alpine3.15

ENV PORT 3000

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn --network-timeout 1000000

COPY . .

EXPOSE ${PORT}

CMD ["yarn", "run", "dev"]