const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const insertResult = await prisma.user.createMany({
    data: [
      { id: 10, email: "toast", name: "bellablue" },
      { id: 22, email: "sausage", name: "pinkpurple" },
    ],
  });
  console.info(
    `The prisma database was seeded with ${insertResult.count} items.`
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
