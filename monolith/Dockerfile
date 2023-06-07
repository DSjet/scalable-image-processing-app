FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY public/ ./
COPY uploads/ ./

EXPOSE 3000

CMD [ "npm", "run", "start" ]