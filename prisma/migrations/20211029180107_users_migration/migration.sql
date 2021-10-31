-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT,
    "fullname" TEXT,
    "age" INTEGER,
    "address" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
