FROM node:22-alpine

WORKDIR /app

COPY . /app

CMD ["node", "index.js"]