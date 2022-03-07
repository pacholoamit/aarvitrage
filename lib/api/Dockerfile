FROM node:lts-alpine3.15

ENV DATABASE_URL=postgresql://aarvitrage:aarvitrage@192.168.0.41:5432/aarvitrage?schema=public

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn --network-timeout 1000000

COPY . .

RUN npx prisma migrate deploy

# RUN for i in 1 2 3 4 5; do npx prisma migrate deploy && break || sleep 15; done

EXPOSE 4000

CMD ["yarn", "run", "start:dev"]