FROM node:9.10-alpine

WORKDIR /app/

COPY package.json yarn.lock /app/
RUN yarn install --production -s --no-progress --pure-lockfile && \
  yarn cache clean

COPY . /app/

CMD ["node", "server"]