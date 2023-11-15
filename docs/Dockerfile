FROM node:20-alpine as build

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn run build

FROM gcr.io/distroless/nodejs20 as prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000/tcp

CMD ["/app/.output/server/index.mjs"]
