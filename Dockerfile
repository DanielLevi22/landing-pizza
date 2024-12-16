# Imagem base do Node.js
FROM node:23-alpine

# Diretório de trabalho no container
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--poll=2000"]
