import { ModeToggle } from "@/components/mode-toggle";
import PositionsTable from "@/components/positions-table";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 p-8">
      <section className=" absolute top-4 right-4">
        <ModeToggle />
      </section>
      <section className="flex flex-col items-start justify-center gap-8">
        <Image
          className="rounded-md w-20 h-20 object-cover"
          src="/lsflogo.jpg"
          alt="Logo Liga Salteña de Fútbol"
          width={400}
          height={400}
        />
        <PositionsTable />
      </section>
    </main>
  );
}
