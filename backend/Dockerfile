FROM node:16

WORKDIR /app/backend

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["npm","run", "dev"]