FROM oven/bun:alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock
COPY ./tsconfig.json ./tsconfig.json

RUN bun install

COPY . .

CMD [ "bun", "run", "bin.ts" ]