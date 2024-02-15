FROM node:20.11.0-alpine

WORKDIR /urs/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src .src

CMD npm start