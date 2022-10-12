/*
  Warnings:

  - A unique constraint covering the columns `[eventoId,usuarioId,clubeId]` on the table `presenca` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "presenca_eventoId_usuarioId_clubeId_key" ON "presenca"("eventoId", "usuarioId", "clubeId");
