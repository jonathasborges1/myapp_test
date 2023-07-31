# Estágio de construção
FROM node:16

# Defina o diretório de trabalho para a aplicação
WORKDIR /usr/src/app

# Instale o pacote nodemon globalmente no contêiner
RUN npm install -g nodemon ts-node

# Copie o arquivo package.json e package-lock.json primeiro, para aproveitar o cache do Docker
COPY package.json .
COPY package-lock.json .

# Instale as dependências do projeto
RUN npm install --save-dev

# Copie todo o código fonte da aplicação para o diretório de trabalho
COPY src/ ./

# Exponha a porta da aplicação
EXPOSE 3333

# Comando para iniciar a aplicação Node.js
CMD ["nodemon", "-e", "js,json,ts,yaml", "src/index.ts"]

