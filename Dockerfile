FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app/
COPY package.json /src/app/package.json
RUN npm install
COPY . /src/app/
RUN npm run build 
RUN npm run build-server
EXPOSE 5000
CMD ["npm", "run", "start-server"]