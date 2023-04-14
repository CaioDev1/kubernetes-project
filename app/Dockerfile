FROM --platform=linux/amd64 ubuntu:latest
FROM node:19-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/ /app/src
COPY prisma/ /app/prisma
COPY tsconfig.json /app/

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]