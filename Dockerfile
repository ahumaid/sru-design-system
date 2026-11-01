FROM node:22-bookworm-slim

RUN mkdir -p /app/node_modules && chown node:node /app /app/node_modules

WORKDIR /app
USER node

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

COPY --chown=node:node . .

CMD ["npm", "run", "build"]
