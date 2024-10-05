import { PositionsTable } from "@/types/table";

const api = {
  positions: {
    list: async (): Promise<PositionsTable[]> => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1MzD5sJODRVxV9ibxUXNvLWll7tEACnocb1QBMIJTmci2YFg8GIoeAhEevCgW6Pp4TMeGR2_0Nkeb/pub?output=tsv",
        { next: { tags: ["positions"] } }
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [equipo, pj, pg, pe, pp, gf, gc, dg, puntos] =
                row.split("\t");
              return {
                equipo,
                pj: parseInt(pj, 10),
                pg: parseInt(pg, 10),
                pe: parseInt(pe, 10),
                pp: parseInt(pp, 10),
                gf: parseInt(gf, 10),
                gc: parseInt(gc, 10),
                dg: parseInt(dg, 10),
                puntos: parseInt(puntos, 10),
              };
            });
        });
    },
  },
};

export default api;
