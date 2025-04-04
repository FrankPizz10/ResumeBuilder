# backend/Dockerfile

FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env.example .env

EXPOSE 5000
CMD ["node", "index.js"]
