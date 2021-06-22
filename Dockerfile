
FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
# RUN user add app
COPY package.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]