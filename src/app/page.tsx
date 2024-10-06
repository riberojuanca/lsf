import { ModeToggle } from "@/components/mode-toggle";
import PositionsTable from "@/components/positions-table";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <div className=" absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex items-center justify-center gap-2 mx-auto">
        <Image
          className="rounded-md w-20 h-20 object-cover"
          src="/lsflogo.jpg"
          alt="Logo Liga Salteña de Fútbol"
          width={400}
          height={400}
        />
      </div>
      <PositionsTable />
    </div>
  );
}
