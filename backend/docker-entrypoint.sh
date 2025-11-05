#!/bin/sh
set -e

# Set production environment
export NODE_ENV=production

echo "🔌 Waiting for database to be ready..."
sleep 5

echo "📊 Running database migrations..."
npm run migration:run

echo "🌱 Seeding database..."
node seed-docker.js || echo "⚠️  Seed already exists or failed"

echo "🚀 Starting application..."
exec node dist/main
