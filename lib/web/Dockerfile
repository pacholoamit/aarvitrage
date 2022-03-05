FROM node:lts-alpine3.15

ENV VITE_API_URL='https://aarvitrage-api.arch-server.com'
ENV DOMAIN_URL='aarvitrage.arch-server.com'

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn --network-timeout 1000000

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "dev"]