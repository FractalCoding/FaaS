FROM gcr.io/google.com/cloudsdktool/google-cloud-cli:alpine
RUN apt-get install npm
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN chown -R node:node /app
EXPOSE 8080
USER node
CMD timeout 1m node server.js
CMD [ "npm", "start" ]
