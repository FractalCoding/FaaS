# Installs gcloud sdk
FROM google/cloud-sdk:latest
# Installs node dependencies
WORKDIR /app
RUN apt -y install nodejs
RUN apt -y install npm
COPY packages.json /app
RUN npm install
# Copies working files
COPY . /app
# Exposes network port IO
EXPOSE 5555
# Kills process after 1m of inactivity to preserve compute
RUN npm install ejs
RUN npm install express
CMD timeout 1m node server.js
CMD [ "node", "server.js" ]
