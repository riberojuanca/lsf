import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import api from "@/api/api";

function liguilla(index: number): string {
  // Devuelve una clase basada en la posición
  return index <= 6 ? "bg-green-500 text-white font-bold" : "";
}

async function PositionsTable() {
  const positions = await api.positions.list();
  const sortedPositions = positions.sort((a, b) => {
    if (a.puntos !== b.puntos) {
      return b.puntos - a.puntos;
    }
    return b.dg - a.dg;
  });

  return (
    <div className="md:grid flex flex-col gap-4 md:grid-cols-3 items-center justify-between  md:gap-8 mx-auto">
      <div className="p-4 md:p-10 border border-black/5 dark:border dark:border-white/5 dark:bg-white/5 rounded-lg col-span-2">
        <Table className="p-1 mx-auto">
          <TableCaption>Liga Salteña de Fútbol 2024</TableCaption>
          <TableCaption>
            <span className="flex justify-center items-center gap-2">
              <MdOutlineCheckBoxOutlineBlank className="mb-1 text-lg bg-green-500 rounded-sm text-green-500 inline-block" />{" "}
              Clasificados a la Liguilla
            </span>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead className="min-w-fit">Equipo</TableHead>
              <TableHead>PJ</TableHead>
              <TableHead className="hidden sm:table-cell">PG</TableHead>
              <TableHead className="hidden sm:table-cell">PE</TableHead>
              <TableHead className="hidden sm:table-cell">PP</TableHead>
              <TableHead className="hidden sm:table-cell">GF</TableHead>
              <TableHead className="hidden sm:table-cell">GC</TableHead>
              <TableHead>DG</TableHead>
              <TableHead>Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedPositions.map((position, index) => (
              <TableRow className="text-center" key={index}>
                <TableCell className={`w-fit ${liguilla(index + 1)}`}>
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium text-left">
                  {position.equipo}
                </TableCell>
                <TableCell>{position.pj}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  {position.pg}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {position.pe}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {position.pp}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {position.gf}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {position.gc}
                </TableCell>
                <TableCell>{position.dg}</TableCell>
                <TableCell className="bg-black text-white dark:bg-white dark:text-black font-bold">
                  {position.puntos}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-4 border border-black/5 dark:border dark:border-white/5 dark:bg-white/5 rounded-lg">
          <Table className="p-1 mx-auto w-full ">
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-fit">IMPARES</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {/* Tabla para posiciones con índice par */}
              {sortedPositions
                .filter((_, index) => index % 2 === 0) // Filtra los índices pares
                .map((position, index) => (
                  <TableRow className="text-center" key={index}>
                    <TableCell className="font-medium text-left  grid grid-cols-2">
                      {position.equipo}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border border-black/5 dark:border dark:border-white/5 dark:bg-white/5 rounded-lg">
          <Table className="p-1 mx-auto w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-fit font-bold">PARES</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {/* Tabla para posiciones con índice impar */}
              {sortedPositions
                .filter((_, index) => index % 2 !== 0) // Filtra los índices impares
                .map((position, index) => (
                  <TableRow className="text-center" key={index}>
                    <TableCell className="font-medium text-left grid grid-cols-2 ">
                      {position.equipo}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default PositionsTable;
