const { DataSource } = require('typeorm');
const bcrypt = require('bcrypt');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'postgres',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'auction_db',
  synchronize: false,
  logging: true,
});

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log('✅ Database connected');

    // Hash password
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Create users with generated UUIDs
    const users = await AppDataSource.query(`
      INSERT INTO "user" (email, password, created_at, updated_at)
      VALUES 
        ('john@example.com', $1, NOW(), NOW()),
        ('jane@example.com', $1, NOW(), NOW()),
        ('bob@example.com', $1, NOW(), NOW())
      ON CONFLICT (email) DO NOTHING
      RETURNING id, email
    `, [hashedPassword]);
    console.log('✅ Users created:', users.length);

    // Get user IDs
    const [john, jane, bob] = users.length > 0 ? users : await AppDataSource.query(`
      SELECT id, email FROM "user" WHERE email IN ('john@example.com', 'jane@example.com', 'bob@example.com')
      ORDER BY email
    `);

    // Create auctions
    const auctions = await AppDataSource.query(`
      INSERT INTO "auction" (title, description, image_url, starting_price, current_price, end_time, owner_id, created_at, updated_at)
      VALUES 
        ('Vintage Camera', 'Classic 35mm film camera in excellent condition', null, 150, 150, NOW() + INTERVAL '2 days', $1, NOW(), NOW()),
        ('Gaming Laptop', 'High-performance gaming laptop with RTX 3070', null, 1200, 1200, NOW() + INTERVAL '3 days', $1, NOW(), NOW()),
        ('Antique Watch', 'Rare vintage pocket watch from 1920s', null, 500, 500, NOW() + INTERVAL '1 day', $2, NOW(), NOW()),
        ('Mountain Bike', 'Professional mountain bike, barely used', null, 800, 800, NOW() + INTERVAL '4 days', $2, NOW(), NOW()),
        ('Art Print', 'Limited edition art print, signed by artist', null, 200, 200, NOW() + INTERVAL '5 days', $3, NOW(), NOW())
      RETURNING id, title
    `, [john.id, jane.id, bob.id]);
    console.log('✅ Auctions created:', auctions.length);

    // Create some bids
    await AppDataSource.query(`
      INSERT INTO "bid" (amount, auction_id, user_id, created_at)
      VALUES 
        (160, $1, $2, NOW() - INTERVAL '1 hour'),
        (170, $1, $3, NOW() - INTERVAL '30 minutes'),
        (1250, $4, $3, NOW() - INTERVAL '2 hours'),
        (520, $5, $2, NOW() - INTERVAL '45 minutes')
    `, [auctions[0].id, jane.id, bob.id, auctions[1].id, auctions[2].id]);
    console.log('✅ Bids created');

    // Update auction current prices
    await AppDataSource.query(`
      UPDATE "auction" SET current_price = 170 WHERE id = $1
    `, [auctions[0].id]);
    await AppDataSource.query(`
      UPDATE "auction" SET current_price = 1250 WHERE id = $1
    `, [auctions[1].id]);
    await AppDataSource.query(`
      UPDATE "auction" SET current_price = 520 WHERE id = $1
    `, [auctions[2].id]);
    console.log('✅ Auction prices updated');

    console.log('🎉 Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

seed();
