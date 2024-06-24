-- DropEnum
DROP TYPE "crdb_internal_region";

-- CreateTable
CREATE TABLE "User" (
    "id" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);


-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
