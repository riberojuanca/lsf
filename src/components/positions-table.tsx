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
      <div></div>
      <Table>
        <TableCaption>
          Posiciones Primera División Liga Salteña de Fútbol
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead className="min-w-fit">Equipo</TableHead>
            <TableHead>PJ</TableHead>
            <TableHead>PG</TableHead>
            <TableHead>PE</TableHead>
            <TableHead>PP</TableHead>
            <TableHead>GF</TableHead>
            <TableHead>GC</TableHead>
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
              <TableCell>{position.pg}</TableCell>
              <TableCell>{position.pe}</TableCell>
              <TableCell>{position.pp}</TableCell>
              <TableCell>{position.gf}</TableCell>
              <TableCell>{position.gc}</TableCell>
              <TableCell>{position.dg}</TableCell>
              <TableCell className="bg-red-600 text-white font-bold">
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
