# syntax=docker/dockerfile:1

FROM node:14.17.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "./dist/src/app.js"]
