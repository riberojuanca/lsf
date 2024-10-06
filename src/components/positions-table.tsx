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
    <div>
      <Table className="p-1 mx-auto">
        <TableCaption>Liga Salteña de Fútbol 2024</TableCaption>
        <TableCaption>
          <div className="flex justify-center items-center gap-2">
            <MdOutlineCheckBoxOutlineBlank className="mb-1 text-lg bg-green-500 rounded-sm text-green-500 inline-block" />{" "}
            Clasificados a la Liguilla
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead className="min-w-fit">Equipo</TableHead>
            <TableHead>PJ</TableHead>
            <TableHead className="hidden md:table-cell">PG</TableHead>
            <TableHead className="hidden md:table-cell">PE</TableHead>
            <TableHead className="hidden md:table-cell">PP</TableHead>
            <TableHead className="hidden md:table-cell">GF</TableHead>
            <TableHead className="hidden md:table-cell">GC</TableHead>
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
              <TableCell className="hidden md:table-cell">
                {position.pg}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {position.pe}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {position.pp}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {position.gf}
              </TableCell>
              <TableCell className="hidden md:table-cell">
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
  );
}

export default PositionsTable;
