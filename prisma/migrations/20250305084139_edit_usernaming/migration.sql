/*
  Warnings:

  - You are about to drop the column `userUsername` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userUsername` on the `Post` table. All the data in the column will be lost.
  - Added the required column `writerUsername` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorUsername` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userUsername_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userUsername_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "userUsername",
ADD COLUMN     "writerUsername" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "userUsername",
ADD COLUMN     "authorUsername" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorUsername_fkey" FOREIGN KEY ("authorUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_writerUsername_fkey" FOREIGN KEY ("writerUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
