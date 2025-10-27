FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable
# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++
COPY package.json package-lock.json .npmrc ./
RUN npm ci
RUN npm rebuild
COPY . .
RUN npm run postinstall
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
# Install runtime dependencies for better-sqlite3 and curl for health checks
RUN apk add --no-cache sqlite curl
# Install playwright dependencies
RUN npx -y playwright install-deps
RUN npx -y playwright install
COPY --from=builder /app/.output ./
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]