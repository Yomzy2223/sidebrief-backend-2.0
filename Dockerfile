FROM  node:alpine

EXPOSE 8000

WORKDIR /src 

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

CMD ["node", "index.js"]

