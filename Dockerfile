FROM node:carbon
RUN mkdir /motobike
WORKDIR /motobike
COPY package.json /motobike/package.json
COPY package-lock.json /motobike/package-lock.json
RUN npm install
CMD npm start
