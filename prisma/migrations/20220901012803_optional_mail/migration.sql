-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "funcao" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "aniversario" DATETIME NOT NULL,
    "foto" TEXT,
    "clubeId" INTEGER NOT NULL,
    CONSTRAINT "Usuario_clubeId_fkey" FOREIGN KEY ("clubeId") REFERENCES "Clube" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("aniversario", "ativo", "clubeId", "email", "foto", "funcao", "id", "nome", "password") SELECT "aniversario", "ativo", "clubeId", "email", "foto", "funcao", "id", "nome", "password" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
