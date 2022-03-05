/*
  Warnings:

  - You are about to drop the `TradePair` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TradePair";

-- CreateTable
CREATE TABLE "TradePairs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TradePairs_pkey" PRIMARY KEY ("id")
);
