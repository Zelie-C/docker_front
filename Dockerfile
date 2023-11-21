FROM node:20-alpine
WORKDIR /client
RUN npm i -g serve
COPY package.json .
RUN npm install
EXPOSE 1993
COPY . .
RUN npm run build
CMD serve dist -p 1993