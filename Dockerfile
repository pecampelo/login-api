FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8005

RUN npm run build
RUN npx prisma generate

CMD [ "node", "dist/src/app.js"]
