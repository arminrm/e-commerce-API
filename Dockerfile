FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE $PORT

CMD [ "npm", "start" ]