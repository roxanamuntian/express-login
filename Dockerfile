FROM node:10.16-jessie

WORKDIR /app

COPY package.json package-lock.json ./

COPY src src

RUN apt-get update || : && apt-get install python -y

RUN npm install

CMD [ "npm", "run", "dev" ]