-- Create User table
CREATE TABLE IF NOT EXISTS "user" (
    "id" VARCHAR PRIMARY KEY,
    "email" VARCHAR UNIQUE NOT NULL,
    "password" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Create Auction table
CREATE TABLE IF NOT EXISTS "auction" (
    "id" VARCHAR PRIMARY KEY,
    "title" VARCHAR NOT NULL,
    "description" TEXT,
    "imageUrl" VARCHAR,
    "startingPrice" DECIMAL NOT NULL,
    "currentPrice" DECIMAL NOT NULL,
    "endTime" TIMESTAMP NOT NULL,
    "ownerId" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT "FK_auction_owner" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE CASCADE
);

-- Create Bid table
CREATE TABLE IF NOT EXISTS "bid" (
    "id" VARCHAR PRIMARY KEY,
    "amount" DECIMAL NOT NULL,
    "auctionId" VARCHAR NOT NULL,
    "userId" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT "FK_bid_auction" FOREIGN KEY ("auctionId") REFERENCES "auction"("id") ON DELETE CASCADE,
    CONSTRAINT "FK_bid_user" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE
);

-- Create indexes
CREATE INDEX IF NOT EXISTS "IDX_auction_ownerId" ON "auction"("ownerId");
CREATE INDEX IF NOT EXISTS "IDX_auction_endTime" ON "auction"("endTime");
CREATE INDEX IF NOT EXISTS "IDX_bid_auctionId" ON "bid"("auctionId");
CREATE INDEX IF NOT EXISTS "IDX_bid_userId" ON "bid"("userId");
