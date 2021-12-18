/*
  Warnings:

  - You are about to drop the column `insult` on the `Insult` table. All the data in the column will be lost.
  - Added the required column `insultText` to the `Insult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Insult" DROP COLUMN "insult",
ADD COLUMN     "insultText" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_InsultToWord" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InsultToWord_AB_unique" ON "_InsultToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_InsultToWord_B_index" ON "_InsultToWord"("B");

-- AddForeignKey
ALTER TABLE "_InsultToWord" ADD FOREIGN KEY ("A") REFERENCES "Insult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsultToWord" ADD FOREIGN KEY ("B") REFERENCES "Word"("id") ON DELETE CASCADE ON UPDATE CASCADE;
