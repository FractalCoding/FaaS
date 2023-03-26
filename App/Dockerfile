FROM node:alpine
WORKDIR /app
COPY packages.json /app
RUN npm install express
COPY . /app
EXPOSE 8080
CMD timeout 1m node server.js
CMD [ "node", "server.js" ]
