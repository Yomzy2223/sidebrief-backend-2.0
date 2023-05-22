FROM  node:slim

EXPOSE 8000

WORKDIR /src 

RUN npm install

COPY package*.json ./

RUN npm install

COPY . .

CMD nodemon server.js