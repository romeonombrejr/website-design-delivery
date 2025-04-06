-- DropForeignKey
ALTER TABLE "pages" DROP CONSTRAINT "pages_websiteId_fkey";

-- DropForeignKey
ALTER TABLE "sections" DROP CONSTRAINT "sections_pageId_fkey";

-- AlterTable
ALTER TABLE "pages" ALTER COLUMN "websiteId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "sections" ALTER COLUMN "pageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "pages" ADD CONSTRAINT "pages_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "websites"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "pages"("id") ON DELETE SET NULL ON UPDATE CASCADE;
