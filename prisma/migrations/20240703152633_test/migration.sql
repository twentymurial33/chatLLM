-- CreateTable
CREATE TABLE "User" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "email" STRING NOT NULL,
    "name" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons" (
    "personid" INT8,
    "lastname" STRING,
    "firstname" STRING,
    "address" STRING,
    "city" STRING
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
