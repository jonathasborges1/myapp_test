# Estágio de construção
FROM node:18.16 AS build

## Defina o diretório de trabalho para a aplicação
WORKDIR /usr/src/app

## Copie o arquivo package.json e package-lock.json primeiro, para aproveitar o cache do Docker
COPY package*.json ./

## Instale as dependências do projeto
RUN npm install

## Copie todos os arquivos do código-fonte da aplicação
COPY . .

## Execute o comando para construir o aplicativo React (por exemplo, usando 'npm run build')
RUN npm run build

# Estágio de execução
FROM nginx:alpine

## Copie os arquivos construídos no estágio anterior (estágio de construção) para o diretório de trabalho do Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

## Exponha a porta 80 do contêiner
EXPOSE 80
