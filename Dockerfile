FROM node:16

WORKDIR /home/bluis/Documentos/nodejs-nubes/

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]
