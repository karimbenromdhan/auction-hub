import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1730641200000 implements MigrationInterface {
  name = 'InitialSchema1730641200000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create users table
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "email" character varying(255) NOT NULL,
        "password" character varying(255) NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_users_email" UNIQUE ("email"),
        CONSTRAINT "PK_users_id" PRIMARY KEY ("id")
      )
    `);

    // Create auctions table
    await queryRunner.query(`
      CREATE TABLE "auctions" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "title" character varying(255) NOT NULL,
        "description" text,
        "image_url" character varying(500),
        "starting_price" numeric(10,2) NOT NULL,
        "current_price" numeric(10,2) NOT NULL,
        "end_time" TIMESTAMP NOT NULL,
        "owner_id" uuid NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_auctions_id" PRIMARY KEY ("id")
      )
    `);

    // Create bids table
    await queryRunner.query(`
      CREATE TABLE "bids" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "amount" numeric(10,2) NOT NULL,
        "auction_id" uuid NOT NULL,
        "user_id" uuid NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_bids_id" PRIMARY KEY ("id")
      )
    `);

    // Create indexes
    await queryRunner.query(`
      CREATE INDEX "IDX_auctions_end_time" ON "auctions" ("end_time")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_auctions_owner_id" ON "auctions" ("owner_id")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_bids_auction_id" ON "bids" ("auction_id")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_bids_user_id" ON "bids" ("user_id")
    `);

    await queryRunner.query(`
      CREATE INDEX "IDX_bids_created_at" ON "bids" ("created_at")
    `);

    // Add foreign keys
    await queryRunner.query(`
      ALTER TABLE "auctions" 
      ADD CONSTRAINT "FK_auctions_owner" 
      FOREIGN KEY ("owner_id") 
      REFERENCES "users"("id") 
      ON DELETE CASCADE 
      ON UPDATE NO ACTION
    `);

    await queryRunner.query(`
      ALTER TABLE "bids" 
      ADD CONSTRAINT "FK_bids_auction" 
      FOREIGN KEY ("auction_id") 
      REFERENCES "auctions"("id") 
      ON DELETE CASCADE 
      ON UPDATE NO ACTION
    `);

    await queryRunner.query(`
      ALTER TABLE "bids" 
      ADD CONSTRAINT "FK_bids_user" 
      FOREIGN KEY ("user_id") 
      REFERENCES "users"("id") 
      ON DELETE CASCADE 
      ON UPDATE NO ACTION
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign keys
    await queryRunner.query(`ALTER TABLE "bids" DROP CONSTRAINT "FK_bids_user"`);
    await queryRunner.query(`ALTER TABLE "bids" DROP CONSTRAINT "FK_bids_auction"`);
    await queryRunner.query(`ALTER TABLE "auctions" DROP CONSTRAINT "FK_auctions_owner"`);

    // Drop indexes
    await queryRunner.query(`DROP INDEX "IDX_bids_created_at"`);
    await queryRunner.query(`DROP INDEX "IDX_bids_user_id"`);
    await queryRunner.query(`DROP INDEX "IDX_bids_auction_id"`);
    await queryRunner.query(`DROP INDEX "IDX_auctions_owner_id"`);
    await queryRunner.query(`DROP INDEX "IDX_auctions_end_time"`);

    // Drop tables
    await queryRunner.query(`DROP TABLE "bids"`);
    await queryRunner.query(`DROP TABLE "auctions"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
