FROM node:lts-alpine3.15

WORKDIR /app

ENV DATABASE_URL postgresql://aarvitrage:aarvitrage@192.168.0.41:5432/aarvitrage?schema=public

COPY package*.json yarn.lock ./

RUN yarn --network-timeout 1000000

COPY . .

RUN npx prisma migrate deploy

EXPOSE 4000

CMD ["yarn", "run", "start:dev"]