import { db } from './drizzle';
import { modules } from './schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function main() {
  console.log('Seeding...');
  
  try {
      await db.insert(modules).values({
        title: "Founder Case Study: Airbnb",
        slug: "airbnb-design-thinking",
        content: {
          sections: [
            {
              id: "1",
              title: "Empathize",
              text: "How Brian Chesky used design to save the company...",
              type: "text"
            },
            {
              id: "2",
              title: "Define",
              text: "Defining the problem of trust...",
              type: "reflection",
              prompt: "How would you define trust in 3 words?"
            }
          ]
        },
        published: true
      });
      console.log('Seeding complete.');
  } catch (e) {
      console.error('Seeding failed (might be dupes):', e);
  }
  
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
