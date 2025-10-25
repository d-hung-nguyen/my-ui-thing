# Build stage
FROM node:22-alpine AS builder

# Install system dependencies
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install latest npm and dependencies
RUN npm install -g npm@latest && \
    npm ci

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Playwright installation stage (if needed for production)
FROM node:22-alpine AS playwright-installer

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install -g npm@latest && \
    npm ci && \
    npx playwright install-deps && \
    npx playwright install

# Production stage
FROM node:22-alpine AS runner

# Install curl for health checks
RUN apk add --no-cache curl

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/package.json

# Copy Playwright if needed
COPY --from=playwright-installer /root/.cache/ms-playwright /root/.cache/ms-playwright
COPY --from=playwright-installer /app/node_modules /app/node_modules

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV PUBLIC_URL=https://uithing.com

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["node", ".output/server/index.mjs"]
