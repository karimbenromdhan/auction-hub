# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies + TypeORM CLI for migrations
RUN npm ci --only=production && \
    npm install -g typeorm ts-node

# Copy built application from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/uploads ./uploads

# Copy source files for TypeORM migration CLI (required for ts-node)
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./

# Copy seed script and entrypoint
COPY seed-docker.js ./
COPY docker-entrypoint.sh ./

# Create uploads directory
RUN mkdir -p uploads

# Make entrypoint executable
RUN chmod +x docker-entrypoint.sh

# Expose port
EXPOSE 3001

# Use entrypoint script
ENTRYPOINT ["./docker-entrypoint.sh"]
