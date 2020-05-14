FROM node:10
WORKDIR /app/calipsabe
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
EXPOSE 3000
CMD [ "node", "app.js" ]