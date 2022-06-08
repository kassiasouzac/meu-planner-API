-- CreateTable
CREATE TABLE "habitsList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "habitsList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "habitsList" ADD CONSTRAINT "habitsList_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categorys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
