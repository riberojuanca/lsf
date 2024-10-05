import { ModeToggle } from "@/components/mode-toggle";
import PositionsTable from "@/components/positions-table";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className=" absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Liga Salteña de Fútbol</h1>
        <PositionsTable />
      </div>
    </div>
  );
}
