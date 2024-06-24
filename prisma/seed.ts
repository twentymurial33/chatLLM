
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
  data: {
    id:1,
    name: 'Alice',
    student: 'pinkpurple',
    email: 'alice@prisma.io',
  },
})

  console.info(
    `The prisma database was seeded with ${newUser.count} items.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });