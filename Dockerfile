# Build stage
FROM node:lts-alpine AS builder

USER node
WORKDIR /home/node

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

# RUN npm ci
RUN pnpm install --frozen-lockfile

COPY --chown=node:node . .
RUN pnpm run build && pnpm prune --omit=dev


# Final run stage
FROM node:lts-alpine

ENV NODE_ENV production
USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json .
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules
COPY --from=builder --chown=node:node /home/node/dist/ ./dist

ARG PORT
EXPOSE ${PORT:-3000}

CMD ["node", "dist/main.js"]
