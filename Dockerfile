FROM node:9.10-alpine

WORKDIR /app/

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app/

CMD ["node", "server"]